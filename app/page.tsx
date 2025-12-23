import dynamicImport from 'next/dynamic'
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesShowcase } from "@/components/ServicesShowcase"
import { Footer } from "@/components/Footer"
import { Metadata } from 'next'

// Lazy load below-the-fold components
const NewsCarousel = dynamicImport(() => import("@/components/NewsCarousel").then(mod => ({ default: mod.NewsCarousel })), { ssr: true })
const AboutSection = dynamicImport(() => import("@/components/AboutSection").then(mod => ({ default: mod.AboutSection })), { ssr: true })
const TechnicalSpecsSection = dynamicImport(() => import("@/components/TechnicalSpecsSection").then(mod => ({ default: mod.TechnicalSpecsSection })), { ssr: true })
const FeaturedTabs = dynamicImport(() => import("@/components/FeaturedTabs").then(mod => ({ default: mod.FeaturedTabs })), { ssr: true })
const FAQSection = dynamicImport(() => import("@/components/FAQSection").then(mod => ({ default: mod.FAQSection })), { ssr: true })

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Home | EMUSKI - Your One-Stop Solution for OEM',
  description: 'EMUSKI delivers world-class OEM manufacturing solutions, precision engineering, and AI-powered production systems in Bangalore, India.',
  alternates: {
    canonical: 'https://www.emuski.com/',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <h1 className="sr-only">
          EMUSKI – OEM Manufacturing, Precision Engineering & AI Solutions in Bangalore, India
        </h1>
        <HeroSection />
        <ServicesShowcase />
        <NewsCarousel />
        <AboutSection />
        <TechnicalSpecsSection focus="metrics" compact={true} />
        <FeaturedTabs />
        <FAQSection compact={true} maxItems={6} usePageSpecific={true} />
      </main>
      <Footer />
    </div>
  )
}
