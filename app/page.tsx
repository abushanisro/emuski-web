import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesShowcase } from "@/components/ServicesShowcase"
import { NewsCarousel } from "@/components/NewsCarousel"
import { AboutSection } from "@/components/AboutSection"
import { FeaturedTabs } from "@/components/FeaturedTabs"
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection"
import { Footer } from "@/components/Footer"
import { FAQSection } from "@/components/FAQSection"
import MethodologySection from "@/components/MethodologySection"
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Home | EMUSKI - Your One-Stop Solution for OEM',
  description: 'EMUSKI delivers world-class OEM manufacturing solutions, precision engineering, and AI-powered production systems in Bangalore, India.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
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
