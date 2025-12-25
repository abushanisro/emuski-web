'use client'

import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Loader2, FileText, AlertCircle } from 'lucide-react'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface ProductionPDFViewerProps {
  url: string
  title: string
  className?: string
}

/**
 * ProductionPDFViewer - Mobile-optimized, production-ready PDF viewer
 *
 * Features:
 * - Works on all devices (mobile, tablet, desktop)
 * - View-only mode (no download prompt)
 * - Touch-friendly controls
 * - Responsive scaling
 * - Page navigation
 * - Zoom controls
 * - Prevents right-click and keyboard shortcuts
 */
export function ProductionPDFViewer({ url, title, className = '' }: ProductionPDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [scale, setScale] = useState<number>(1.0)
  const [pdfBlob, setPdfBlob] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string>('')
  const [isMobile, setIsMobile] = useState(false)
  const [containerWidth, setContainerWidth] = useState<number>(0)

  // Detect mobile device and container width
  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setScale(mobile ? 0.8 : 1.0)

      // Calculate container width for responsive PDF
      const width = Math.min(window.innerWidth - 32, 1200) // 32px padding, max 1200px
      setContainerWidth(width)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Fetch PDF through proxy
  useEffect(() => {
    const loadPDF = async () => {
      try {
        setError('')
        setIsLoading(true)

        const response = await fetch('/api/pdf/proxy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: url,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.error || `Failed to load PDF (${response.status})`)
        }

        // Get PDF as blob
        const blob = await response.blob()

        // Verify it's a PDF
        if (!blob.type.includes('pdf')) {
          throw new Error('Invalid file type. Expected PDF.')
        }

        // Create blob URL
        const blobUrl = URL.createObjectURL(blob)
        setPdfBlob(blobUrl)
        setIsLoading(false)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unable to load PDF'
        console.error('[ProductionPDFViewer] Error:', errorMessage)
        setError(errorMessage)
        setIsLoading(false)
      }
    }

    loadPDF()

    // Cleanup blob URL on unmount
    return () => {
      if (pdfBlob) {
        URL.revokeObjectURL(pdfBlob)
      }
    }
  }, [url])

  // PDF loaded successfully
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  // PDF load error
  function onDocumentLoadError(error: Error) {
    console.error('[ProductionPDFViewer] PDF load error:', error)
    setError('Failed to load PDF document')
  }

  // Navigation
  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1))
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages))
  const canGoPrev = pageNumber > 1
  const canGoNext = pageNumber < numPages

  // Zoom
  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2.0))
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.6))

  // Prevent right-click
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    return false
  }

  // Prevent download keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p')) {
      e.preventDefault()
      return false
    }
  }

  // Loading state
  if (isLoading) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gray-50 rounded-xl border border-gray-200 p-8 ${className}`}>
        <Loader2 className="w-12 h-12 md:w-16 md:h-16 text-blue-600 mb-4 animate-spin" />
        <p className="text-gray-700 font-semibold text-sm md:text-base">Loading PDF...</p>
        <p className="text-gray-500 text-xs md:text-sm mt-2 px-4 text-center">{title}</p>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-red-50 rounded-xl border border-red-200 p-8 ${className}`}>
        <AlertCircle className="w-12 h-12 md:w-16 md:h-16 text-red-600 mb-4" />
        <p className="text-red-700 font-semibold text-sm md:text-base px-4 text-center">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Reload Page
        </button>
      </div>
    )
  }

  return (
    <div
      onContextMenu={handleContextMenu}
      onKeyDown={handleKeyDown}
      className={`select-none ${className}`}
      tabIndex={0}
      role="document"
      aria-label={title}
    >
      {/* Controls */}
      <div className="bg-gray-900 text-white rounded-t-xl p-3 md:p-4 flex items-center justify-between gap-2 flex-wrap">
        {/* Page Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrevPage}
            disabled={!canGoPrev}
            className="p-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg text-sm">
            <span className="font-medium">{pageNumber}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400">{numPages}</span>
          </div>

          <button
            onClick={goToNextPage}
            disabled={!canGoNext}
            className="p-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Title (hidden on small mobile) */}
        <div className="hidden sm:flex items-center gap-2 text-sm md:text-base font-medium truncate">
          <FileText className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{title}</span>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={zoomOut}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>

          <div className="px-3 py-1.5 bg-gray-800 rounded-lg text-sm font-medium min-w-[60px] text-center">
            {Math.round(scale * 100)}%
          </div>

          <button
            onClick={zoomIn}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* PDF Document */}
      <div className="bg-gray-100 rounded-b-xl border-2 border-gray-300 overflow-auto">
        <div className="flex justify-center p-4 md:p-6">
          <Document
            file={pdfBlob}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex items-center justify-center p-12">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              </div>
            }
            error={
              <div className="flex flex-col items-center justify-center p-12 text-red-600">
                <AlertCircle className="w-12 h-12 mb-3" />
                <p className="font-semibold">Failed to load PDF</p>
              </div>
            }
            className="shadow-lg"
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              width={isMobile ? containerWidth : undefined}
              renderTextLayer={true}
              renderAnnotationLayer={false}
              loading={
                <div className="flex items-center justify-center bg-white" style={{ minHeight: '600px' }}>
                  <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                </div>
              }
            />
          </Document>
        </div>
      </div>

      {/* View-only notice */}
      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
        <FileText className="w-4 h-4" />
        <span>View-only document • Download disabled</span>
      </div>
    </div>
  )
}
