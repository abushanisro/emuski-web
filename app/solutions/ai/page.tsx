'use client'

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AIServicesContent } from "@/components/AIServicesContent"
import { useEffect } from "react"
import Link from "next/link"

export default function AISolutions() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 border-b border-border/30 overflow-hidden" style={{backgroundColor: 'rgb(18, 26, 33)'}}>
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center">
                    <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-emuski-teal/20 border border-emuski-teal rounded text-emuski-teal text-xs sm:text-sm font-semibold tracking-wider uppercase">
                      Next-GenAI
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                    AI-Powered Intelligence for the Future of Manufacturing
                  </h1>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                    Revolutionary AI solutions transforming product development, cost engineering and supply chain optimization - where artificial intelligence meets manufacturing excellence.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                    <a
                      href="#mithran-overview"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-emuski-teal hover:bg-emuski-teal-dark text-white font-bold text-sm sm:text-base rounded transition-all duration-300"
                    >
                      Learn More
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent border-2 border-emuski-teal text-emuski-teal font-bold text-sm sm:text-base rounded hover:bg-emuski-teal hover:text-white transition-all duration-300"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AIServicesContent />

        <section className="py-16 md:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Transform Your Manufacturing with AI?
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Discover how Mithran can revolutionize your product development, supply chain, and cost optimization.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="inline-block bg-white text-emuski-teal-darker px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
