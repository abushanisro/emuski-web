import dynamicImport from 'next/dynamic'
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { Footer } from "@/components/Footer"
import { LazyRender } from "@/components/LazyRender"
import { Metadata } from 'next'

// Lazy load below-the-fold components - use LazyRender for deferred client-side rendering
const ServicesShowcase = dynamicImport(() => import("@/components/ServicesShowcase").then(mod => ({ default: mod.ServicesShowcase })))
const NewsCarousel = dynamicImport(() => import("@/components/NewsCarousel").then(mod => ({ default: mod.NewsCarousel })))
const AboutSection = dynamicImport(() => import("@/components/AboutSection").then(mod => ({ default: mod.AboutSection })))
const TechnicalSpecsSection = dynamicImport(() => import("@/components/TechnicalSpecsSection").then(mod => ({ default: mod.TechnicalSpecsSection })))
const FeaturedTabs = dynamicImport(() => import("@/components/FeaturedTabs").then(mod => ({ default: mod.FeaturedTabs })))
const FAQSection = dynamicImport(() => import("@/components/FAQSection").then(mod => ({ default: mod.FAQSection })))

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

        <LazyRender minHeight="500px">
          <ServicesShowcase />
        </LazyRender>

        <LazyRender minHeight="300px">
          <NewsCarousel />
        </LazyRender>

        <LazyRender minHeight="400px">
          <AboutSection />
        </LazyRender>

        <LazyRender minHeight="300px">
          <TechnicalSpecsSection focus="metrics" compact={true} />
        </LazyRender>

        <LazyRender minHeight="400px">
          <FeaturedTabs />
        </LazyRender>

        <LazyRender minHeight="300px">
          <FAQSection compact={true} maxItems={6} usePageSpecific={true} />
        </LazyRender>
      </main>
      <Footer />
    </div>
  )
}
