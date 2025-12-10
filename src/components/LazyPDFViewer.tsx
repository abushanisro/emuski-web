'use client'

import { useEffect, useRef, useState } from 'react'
import { FileText, Download } from 'lucide-react'

interface LazyPDFViewerProps {
  src: string
  title: string
  ariaLabel: string
  minHeight?: string
  showDownload?: boolean
  downloadUrl?: string
}

export const LazyPDFViewer = ({
  src,
  title,
  ariaLabel,
  minHeight = '500px',
  showDownload = false,
  downloadUrl
}: LazyPDFViewerProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasIntersected])

  const mobileHeight = isMobile ? '400px' : minHeight

  return (
    <div ref={containerRef} className="relative">
      {!hasIntersected ? (
        // Loading skeleton
        <div
          className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-gray-200"
          style={{ minHeight: mobileHeight }}
        >
          <FileText className="w-16 h-16 text-emuski-teal-darker mb-4 animate-pulse" />
          <p className="text-gray-600 font-medium">Loading PDF...</p>
          <p className="text-gray-500 text-sm mt-2">{title}</p>
        </div>
      ) : (
        <div className="relative">
          {/* Mobile Download Button */}
          {isMobile && (
            <div className="mb-4 p-4 bg-emuski-teal-darker/10 border border-emuski-teal rounded-lg">
              <p className="text-sm text-gray-700 mb-2">
                For better viewing experience on mobile, download the PDF:
              </p>
              <a
                href={downloadUrl || src}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-emuski-teal-darker hover:bg-emuski-teal-dark text-white font-semibold text-sm rounded-lg transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          )}

          {/* PDF Viewer Container */}
          <div
            className="relative overflow-auto rounded-2xl border border-gray-200 bg-gray-50"
            style={{
              height: mobileHeight,
              WebkitOverflowScrolling: 'touch',
              touchAction: 'auto'
            }}
          >
            <iframe
              src={`${src}#view=FitH&scrollbar=1&toolbar=1&navpanes=1&zoom=page-fit`}
              className="w-full h-full border-0"
              style={{
                minHeight: mobileHeight,
                touchAction: 'auto',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch'
              }}
              title={title}
              aria-label={ariaLabel}
              loading="lazy"
              scrolling="yes"
              onLoad={() => setIsLoaded(true)}
              allow="fullscreen"
            />
          </div>
        </div>
      )}
    </div>
  )
}
