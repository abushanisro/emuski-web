'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollRestoration() {
  const pathname = usePathname()

  useEffect(() => {
    // Prevent scroll glitching by temporarily disabling smooth scroll during navigation
    document.documentElement.style.scrollBehavior = 'auto'

    // Scroll to top on route change
    window.scrollTo(0, 0)

    // Re-enable smooth scroll after navigation completes
    const timer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth'
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
