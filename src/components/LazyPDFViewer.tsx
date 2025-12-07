'use client'

import { useEffect, useRef, useState } from 'react'
import { FileText } from 'lucide-react'

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
  const containerRef = useRef<HTMLDivElement>(null)

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

  return (
    <div ref={containerRef} className="relative">
      {!hasIntersected ? (
        // Loading skeleton
        <div
          className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-gray-200"
          style={{ minHeight }}
        >
          <FileText className="w-16 h-16 text-emuski-teal-darker mb-4 animate-pulse" />
          <p className="text-gray-600 font-medium">Loading PDF...</p>
          <p className="text-gray-500 text-sm mt-2">{title}</p>
        </div>
      ) : (
        <iframe
          src={src}
          className="w-full border-0"
          style={{ minHeight }}
          title={title}
          aria-label={ariaLabel}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  )
}
