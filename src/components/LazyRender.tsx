'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

interface LazyRenderProps {
  children: ReactNode
  rootMargin?: string
  /** Tailwind min-height class, e.g. "min-h-[400px]" */
  minHeightClass?: string
}

/**
 * LazyRender defers visual reveal (a fade-in) until the component is near the
 * viewport, using CSS rather than conditional mounting so content — including
 * text needed by crawlers and non-JS clients — is always present in the
 * server-rendered HTML.
 */
export function LazyRender({
  children,
  rootMargin = '200px',
  minHeightClass = 'min-h-[400px]'
}: LazyRenderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin,
        threshold: 0.01
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [rootMargin])

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${minHeightClass} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  )
}
