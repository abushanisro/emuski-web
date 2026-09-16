import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const PROJECT_DIR = process.cwd()
const PUBLIC_DIR = path.join(PROJECT_DIR, 'public')
const BACKUP_DIR = path.join(PROJECT_DIR, 'public_backup_20260916')
const LOG_PATH = path.join(PROJECT_DIR, 'image-optimization-log.json')
const MIN_SIZE_BYTES = 50 * 1024
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp'])
const QUALITY_BY_EXTENSION = {
  '.jpg': 85,
  '.jpeg': 85,
  '.png': 90,
  '.webp': 85,
}

function collectImages(directory, files = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      collectImages(entryPath, files)
      continue
    }

    const extension = path.extname(entry.name).toLowerCase()
    if (!SUPPORTED_EXTENSIONS.has(extension)) continue

    const size = fs.statSync(entryPath).size
    files.push({ path: entryPath, relativePath: path.relative(PROJECT_DIR, entryPath), size })
  }

  return files
}

function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

async function optimizeImage(imageFile) {
  const extension = path.extname(imageFile.path).toLowerCase()
  const quality = QUALITY_BY_EXTENSION[extension]
  const temporaryPath = `${imageFile.path}.optimization-${process.pid}.tmp${extension}`
  const result = {
    file: imageFile.relativePath,
    format: extension.slice(1),
    quality,
    beforeBytes: imageFile.size,
    afterBytes: imageFile.size,
    savedBytes: 0,
    savedPercent: 0,
    status: 'unchanged',
  }

  try {
    let pipeline = sharp(imageFile.path, { animated: true })

    if (extension === '.jpg' || extension === '.jpeg') {
      pipeline = pipeline.jpeg({ quality, mozjpeg: true })
    } else if (extension === '.png') {
      pipeline = pipeline.png({ quality, compressionLevel: 9, palette: true })
    } else {
      pipeline = pipeline.webp({ quality })
    }

    await pipeline.toFile(temporaryPath)
    const optimizedSize = fs.statSync(temporaryPath).size

    if (optimizedSize < imageFile.size) {
      fs.renameSync(temporaryPath, imageFile.path)
      result.afterBytes = optimizedSize
      result.savedBytes = imageFile.size - optimizedSize
      result.savedPercent = Number(((result.savedBytes / imageFile.size) * 100).toFixed(2))
      result.status = 'optimized'
    } else {
      fs.rmSync(temporaryPath, { force: true })
      result.status = 'unchanged_not_smaller'
    }
  } catch (error) {
    fs.rmSync(temporaryPath, { force: true })
    result.status = 'error'
    result.error = error instanceof Error ? error.message : String(error)
  }

  return result
}

async function main() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    throw new Error(`Missing public directory: ${PUBLIC_DIR}`)
  }
  if (fs.existsSync(BACKUP_DIR)) {
    throw new Error(`Backup already exists: ${BACKUP_DIR}. Remove it only if you have verified it is safe to do so.`)
  }

  console.log(`Creating backup: ${BACKUP_DIR}`)
  fs.cpSync(PUBLIC_DIR, BACKUP_DIR, { recursive: true })

  const allImages = collectImages(PUBLIC_DIR).sort((left, right) => right.size - left.size)
  const eligibleImages = allImages.filter((image) => image.size >= MIN_SIZE_BYTES)
  const skippedImages = allImages
    .filter((image) => image.size < MIN_SIZE_BYTES)
    .map((image) => ({ file: image.relativePath, bytes: image.size, status: 'skipped_under_50KB' }))

  console.log(`Found ${allImages.length} supported images.`)
  console.log(`Optimizing ${eligibleImages.length} images at or above 50 KB, largest first.`)
  console.log(`Skipping ${skippedImages.length} images under 50 KB.`)

  const results = []
  for (const image of eligibleImages) {
    const result = await optimizeImage(image)
    results.push(result)
    console.log(`${result.status}: ${result.file} (${formatBytes(result.beforeBytes)} -> ${formatBytes(result.afterBytes)})`)
  }

  const beforeBytes = allImages.reduce((total, image) => total + image.size, 0)
  const afterBytes = results.reduce((total, result) => total + result.afterBytes, 0) + skippedImages.reduce((total, image) => total + image.bytes, 0)
  const optimizedCount = results.filter((result) => result.status === 'optimized').length
  const errorCount = results.filter((result) => result.status === 'error').length
  const report = {
    generatedAt: new Date().toISOString(),
    publicDirectory: 'public',
    backupDirectory: path.basename(BACKUP_DIR),
    settings: {
      minimumBytes: MIN_SIZE_BYTES,
      jpegQuality: 85,
      pngQuality: 90,
      webpQuality: 85,
      processOrder: 'largest first',
      preserveOriginalWhenOutputIsNotSmaller: true,
    },
    summary: {
      totalImages: allImages.length,
      eligibleImages: eligibleImages.length,
      optimizedImages: optimizedCount,
      skippedImages: skippedImages.length,
      errors: errorCount,
      beforeBytes,
      afterBytes,
      savedBytes: beforeBytes - afterBytes,
      savedPercent: Number((((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(2)),
      beforeMB: Number((beforeBytes / 1024 / 1024).toFixed(2)),
      afterMB: Number((afterBytes / 1024 / 1024).toFixed(2)),
    },
    results,
    skipped: skippedImages,
  }

  fs.writeFileSync(LOG_PATH, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`\nReport written to ${LOG_PATH}`)
  console.log(`Total: ${formatBytes(beforeBytes)} -> ${formatBytes(afterBytes)} (${formatBytes(beforeBytes - afterBytes)} saved, ${report.summary.savedPercent}%)`)

  if (errorCount > 0) {
    throw new Error(`${errorCount} image(s) could not be optimized. The backup is available at ${BACKUP_DIR}.`)
  }
}

main().catch((error) => {
  console.error(`\nOptimization failed: ${error instanceof Error ? error.message : String(error)}`)
  process.exitCode = 1
})
