'use client'

import { useEffect } from "react"
import { ErrorPage } from "@/components/ErrorPage"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | EMUSKI"
  }, [])

  return (
    <div className="min-h-screen" style={{backgroundColor: 'rgb(18, 26, 33)'}}>
      <Navbar />
      <ErrorPage
        errorType="404"
        title="Page Not Found"
        description="The page you're looking for doesn't exist or may have been moved. Let us help you find what you need."
      />
      <Footer />
    </div>
  )
}
