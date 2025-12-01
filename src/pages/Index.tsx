import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { NewsCarousel } from "@/components/NewsCarousel";
import { DataCenterSection } from "@/components/DataCenterSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedTabs } from "@/components/FeaturedTabs";
import { RecommendedSection } from "@/components/RecommendedSection";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { MethodologySection } from "@/components/MethodologySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <DataCenterSection />
        <NewsCarousel />
        <AboutSection />
        <MethodologySection />
        <TechnicalSpecsSection focus="metrics" compact={true} />
        <FeaturedTabs />
        <RecommendedSection />
        <FAQSection compact={true} maxItems={6} usePageSpecific={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
