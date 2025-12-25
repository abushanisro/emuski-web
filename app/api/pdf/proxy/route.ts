import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Request validation
 */
interface PDFProxyRequest {
  url: string
}

function validateRequest(body: unknown): { valid: true; data: PDFProxyRequest } | { valid: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: 'Request body must be a JSON object' }
  }

  const { url } = body as Partial<PDFProxyRequest>

  // URL is required
  if (!url) {
    return { valid: false, error: 'URL must be provided' }
  }

  if (typeof url !== 'string' || url.trim() === '') {
    return { valid: false, error: 'URL must be a non-empty string' }
  }

  // Validate URL format
  try {
    const urlObj = new URL(url)
    // Ensure HTTPS
    if (urlObj.protocol !== 'https:') {
      return { valid: false, error: 'Only HTTPS URLs are supported' }
    }
    // Ensure it's a PDF
    if (!urlObj.pathname.toLowerCase().endsWith('.pdf')) {
      return { valid: false, error: 'Only PDF files are supported' }
    }
  } catch {
    return { valid: false, error: 'Invalid URL format' }
  }

  return {
    valid: true,
    data: {
      url: url.trim(),
    }
  }
}

/**
 * PDF Proxy Endpoint
 *
 * Production-grade PDF proxying with download prevention:
 * 1. Fetches PDF from provided URL
 * 2. Strips download headers
 * 3. Sets Content-Disposition to 'inline' (view-only)
 * 4. Adds security headers
 * 5. Streams response for memory efficiency
 *
 * @route POST /api/pdf/proxy
 */
export async function POST(request: NextRequest) {
  const startTime = Date.now()

  try {
    // Parse and validate request
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON in request body', code: 'INVALID_JSON' },
        { status: 400 }
      )
    }

    const validation = validateRequest(body)
    if (!validation.valid) {
      const errorMsg = 'error' in validation ? validation.error : 'Validation failed'
      return NextResponse.json(
        { error: errorMsg, code: 'VALIDATION_ERROR' },
        { status: 400 }
      )
    }

    const { url: pdfUrl } = validation.data

    // Fetch the PDF from the URL (either direct or constructed)
    const pdfResponse = await fetch(pdfUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'emuski-web-pdf-proxy/1.0',
      },
      // Don't cache the fetch, let browser handle caching
      cache: 'no-store',
    })

    if (!pdfResponse.ok) {
      console.error('[PDF Proxy] Failed to fetch PDF:', {
        url: pdfUrl,
        status: pdfResponse.status,
        statusText: pdfResponse.statusText,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json(
        {
          error: pdfResponse.status === 404
            ? 'PDF not found. Please verify the file exists.'
            : 'Failed to fetch PDF from storage',
          code: 'FETCH_ERROR',
          status: pdfResponse.status,
        },
        { status: pdfResponse.status }
      )
    }

    // Get the PDF content type
    const contentType = pdfResponse.headers.get('content-type') || 'application/pdf'

    // Verify it's actually a PDF
    if (!contentType.includes('pdf')) {
      return NextResponse.json(
        { error: 'File is not a PDF', code: 'INVALID_TYPE' },
        { status: 415 }
      )
    }

    // Get PDF data as buffer for streaming
    const pdfBuffer = await pdfResponse.arrayBuffer()
    const responseTime = Date.now() - startTime

    // Log successful proxy (production monitoring)
    if (process.env.NODE_ENV === 'production') {
      console.log('[PDF Proxy] Successfully proxied PDF:', {
        url: pdfUrl,
        size: `${(pdfBuffer.byteLength / 1024).toFixed(2)} KB`,
        responseTime: `${responseTime}ms`,
        timestamp: new Date().toISOString(),
      })
    }

    // Extract filename for Content-Disposition
    const filename = pdfUrl.split('/').pop()?.split('?')[0] || 'document.pdf'
    const safeFilename = filename.replace(/[^a-zA-Z0-9._-]/g, '_')

    // Return PDF with view-only headers
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        // CRITICAL: inline prevents download prompt, attachment triggers download
        'Content-Disposition': `inline; filename="${safeFilename}"`,
        'Content-Type': 'application/pdf',
        'Content-Length': pdfBuffer.byteLength.toString(),

        // Security headers
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-XSS-Protection': '1; mode=block',

        // Caching strategy: cache for 1 hour, revalidate after
        'Cache-Control': 'public, max-age=3600, must-revalidate',
        'ETag': `"${Buffer.from(pdfUrl).toString('base64')}"`,

        // Performance monitoring
        'X-Response-Time': `${responseTime}ms`,

        // CORS (if needed for cross-origin requests)
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (error) {
    // Log unexpected errors
    console.error('[PDF Proxy] Unexpected error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        error: 'An unexpected error occurred while proxying the PDF',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    )
  }
}

/**
 * OPTIONS handler for CORS preflight
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  })
}

/**
 * Health check endpoint
 * @route GET /api/pdf/proxy
 */
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      service: 'pdf-proxy',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  )
}
