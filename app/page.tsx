import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesShowcase } from "@/components/ServicesShowcase"
import { NewsCarousel } from "@/components/NewsCarousel"
import { AboutSection } from "@/components/AboutSection"
import { FeaturedTabs } from "@/components/FeaturedTabs"
import { RecommendedSection } from "@/components/RecommendedSection"
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection"
import { Footer } from "@/components/Footer"
import { FAQSection } from "@/components/FAQSection"
import MethodologySection from "@/components/MethodologySection"

export const dynamic = 'force-dynamic'

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
        <RecommendedSection />
        <FAQSection compact={true} maxItems={6} usePageSpecific={true} />
      </main>
      <Footer />
    </div>
  )
}
