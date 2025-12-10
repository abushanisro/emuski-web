'use client'

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FAQSection } from "@/components/FAQSection"
import ProductDeliverablesSection from "@/components/ProductDeliverablesSection"
import { ManufacturingServicesContent } from "@/components/ManufacturingServicesContent"
import { ManufacturingNPDSection } from "@/components/ManufacturingNPDSection"
import { ManufacturingServicesTabs } from "@/components/ManufacturingServicesTabs"
import Link from "next/link"

export default function ManufacturingServices() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

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
                    Manufacturing Excellence
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  You Design It, We Build It
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Your one-stop strategic companion for AI-driven manufacturing excellence. Where cost and quality meet profitability—delivering straight to your door.
                </p>

                {/* CTA Button */}
                <div className="pt-2 sm:pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-emuski-teal hover:bg-emuski-teal-dark text-white font-bold text-sm sm:text-base rounded transition-all duration-300"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ManufacturingServicesTabs />
      <ManufacturingServicesContent />

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Methodology
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A structured, transparent process ensuring quality outcomes at every stage.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] lg:aspect-[28/9] relative">
            <img
              src="/assets/manufacturingservices/manufacturing_services_methodology.svg"
              alt="Manufacturing Methodology"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <ManufacturingNPDSection />
      <ProductDeliverablesSection />

      <section className="py-16 md:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Start Your Manufacturing Project?
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Get in touch with our manufacturing experts to discuss your requirements and receive a customized quote.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-block bg-white text-emuski-teal-darker px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        compact={true}
        maxItems={8}
        showCategories={false}
        usePageSpecific={true}
      />

      <Footer />
    </div>
  )
}
