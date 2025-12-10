'use client'

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FAQSection } from "@/components/FAQSection"
import Link from "next/link"
import { useEffect } from "react"

import { EngineeringServicesTabs } from "@/components/EngineeringServicesTabs"
import SectorsServedSection from "@/components/SectorsServedSection"
import { EngineeringServicesContent } from "@/components/EngineeringServicesContent"

export default function PrecisionEngineering() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        const tabMap: { [key: string]: string } = {
          'cost-estimation': 'cost-estimation',
          'vave': 'vave',
          'sourcing': 'sourcing',
          'expert-support': 'expert-support'
        }

        if (tabMap[hash]) {
          setTimeout(() => {
            let tabButton = document.querySelector(`button[value="${tabMap[hash]}"]`) as HTMLButtonElement

            if (!tabButton) {
              tabButton = document.querySelector(`button[role="tab"][id*="${tabMap[hash]}"]`) as HTMLButtonElement
            }

            if (!tabButton) {
              tabButton = document.querySelector(`[data-state][id*="${tabMap[hash]}"]`) as HTMLButtonElement
            }

            if (tabButton) {
              tabButton.click()

              setTimeout(() => {
                const detailElement = document.querySelector(`#${hash}-details`)
                if (detailElement) {
                  const offset = 80
                  const elementPosition = detailElement.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - offset
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                } else {
                  const element = document.querySelector('#engineering-services')
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                  }
                }
              }, 100)
            }
          }, 300)
        } else {
          setTimeout(() => {
            const element = document.querySelector(`#${hash}`)
            if (element) {
              const offset = 80
              const elementPosition = element.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.pageYOffset - offset
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
            }
          }, 100)
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

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
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-10 md:pt-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Category Badge */}
                <div className="flex justify-center">
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-emuski-teal/20 border border-emuski-teal rounded text-emuski-teal text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    Engineering Innovation
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2">
                  Mastering Costs Engineering Success
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
                  From cost estimation to strategic sourcing and expert deployment, we deliver integrated Engineering Innovations that drive efficiency and accelerate time-to-market.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center">
                  <a
                    href="#engineering-services"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-emuski-teal-darker hover:bg-emuski-teal-dark text-white font-bold text-sm sm:text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Our Services
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent border-2 border-emuski-teal-darker text-emuski-teal hover:bg-emuski-teal-darker hover:text-white font-bold text-sm sm:text-base rounded-lg transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <EngineeringServicesTabs />
      </div>

      <EngineeringServicesContent />

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto p-8 bg-gray-50 border border-gray-200 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Cost Intelligence</h3>
            <p className="text-gray-700 leading-relaxed">
              Our global cost database spans Western Europe, Eastern Europe, North America, Asia, and India—providing real-time insights that empower OEMs to optimize sourcing and production strategies with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Cost 360
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Advanced cost intelligence platform for accurate product cost estimation and analysis
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-emuski-teal-dark pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Cost Estimation Platform
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive cost modeling and analysis tool for precise product costing, BOM breakdowns, and manufacturing process optimization.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Feature mapping and detailed BOM analysis",
                      "Multi-process cost calculation",
                      "Real-time cost database integration",
                      "Scenario comparison and what-if analysis"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-emuski-teal-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-emuski-teal pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Integrated CRM System
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Seamless project management and client collaboration tools integrated with cost estimation workflows.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Project tracking and milestone management",
                      "Client portal for real-time updates",
                      "Automated reporting and documentation",
                      "Cross-functional team collaboration"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-emuski-teal-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                <img
                  src="/assets/engineering/cost360-platform-dashboard.png"
                  alt="Costing 360 Platform"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                <img
                  src="/assets/engineering/cost360-crm-system.png"
                  alt="Costing 360 CRM"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectorsServedSection />

      <section className="py-16 md:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Optimize Your Manufacturing Costs
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Let our engineering team analyze your project and identify cost optimization opportunities.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-emuski-teal-darker font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
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
