'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

interface LazyRenderProps {
  children: ReactNode
  rootMargin?: string
  placeholder?: ReactNode
  minHeight?: string
}

/**
 * LazyRender component that uses Intersection Observer to defer rendering
 * until the component is near the viewport. Reduces initial main-thread work.
 */
export function LazyRender({
  children,
  rootMargin = '200px',
  placeholder = null,
  minHeight = '400px'
}: LazyRenderProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true)
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
    <div ref={ref} style={{ minHeight: shouldRender ? 'auto' : minHeight }}>
      {shouldRender ? children : placeholder}
    </div>
  )
}
