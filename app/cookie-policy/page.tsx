'use client'

import { useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function CookiePolicy() {
  useEffect(() => {
    document.title = "Cookie Policy | EMUSKI"
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="text-gray-900 bg-white font-sans leading-normal tracking-normal pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-8">
            Cookie Policy
          </h2>
          <p className="text-gray-700">Cookie policy content goes here...</p>
        </div>
      </div>
      <div className="pb-20">
        <Footer />
      </div>
    </div>
  )
}
