import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FAQSection } from "../components/FAQSection";
import { ManufacturingServicesTabs } from "../components/ManufacturingServicesTabs";
import ProductDeliverablesSection from "../components/ProductDeliverablesSection";
import SectorsServedSection from "../components/SectorsServedSection";
import { ManufacturingServiceCard } from "../components/ManufacturingServiceCard";
import { Link } from "react-router-dom";
import { Package, Zap, Cog, TrendingUp } from "lucide-react";

export default function ManufacturingServices() {
  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const tabMap: { [key: string]: string } = {
        'custom': 'custom',
        'prototyping': 'prototyping',
        'scaling': 'scaling',
        'on-demand': 'on-demand'
      };

      if (tabMap[hash]) {
        setTimeout(() => {
          const tabButton = document.querySelector(`[data-state][id*="${tabMap[hash]}"]`) as HTMLButtonElement;
          if (tabButton) {
            tabButton.click();
          }

          const element = document.querySelector('#manufacturing-tabs');
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 200);
      }
    }
  }, []);

  // SEO Meta Tags
  useEffect(() => {
    document.title = "OEM Manufacturing Services in Bangalore | Precision Engineering | EMUSKI";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Leading OEM manufacturing services in Bangalore, India. Expert precision engineering, rapid prototyping, custom manufacturing, and AI-powered production solutions.');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero/manufaturing.svg" alt="Manufacturing background" className="hidden md:block w-full h-full object-cover opacity-60" />
          <img src="/assets/hero-mobile/manufaturing.svg" alt="Manufacturing background" className="block md:hidden w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block text-emuski-teal text-sm font-bold tracking-wider uppercase">Manufacturing Excellence</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              You Design It, We Build It
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Your one-stop strategic companion for AI-driven manufacturing excellence. Where cost and quality meet profitability—delivering straight to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#manufacturing-tabs" className="bg-emuski-teal-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-emuski-teal-darker transition-colors text-center">
                Explore Services
              </a>
              <Link to="/contact" className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Services Overview */}
      <section id="on-demand" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Services
            </h2>
            <p className="text-lg text-gray-600">
              Transform your ideas into reality with rapid prototyping and on-demand manufacturing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <ManufacturingServiceCard
              icon={Zap}
              title="On-Demand Manufacturing"
              description="Flexible manufacturing solutions with high-precision components manufactured to demanding specifications."
              link="/manufacturing-services#on-demand"
              variant="compact"
            />
            <ManufacturingServiceCard
              icon={Package}
              title="Rapid Prototyping"
              description="Fast and efficient prototyping from concept to completion with precision and cost optimization."
              link="/manufacturing-services#prototyping"
              variant="compact"
            />
            <ManufacturingServiceCard
              icon={Cog}
              title="Custom Manufacturing"
              description="Tailored manufacturing services meeting specific requirements with high-precision CNC machining."
              link="/manufacturing-services#custom"
              variant="compact"
            />
            <ManufacturingServiceCard
              icon={TrendingUp}
              title="Production Scaling"
              description="Seamless scaling from prototype to full production with advanced workflow optimization."
              link="/manufacturing-services#scaling"
              variant="compact"
            />
          </div>
        </div>
      </section>

      {/* Manufacturing Services Tabs */}
      <div id="manufacturing-tabs">
        <ManufacturingServicesTabs />
      </div>

      {/* Product Deliverables */}
      <ProductDeliverablesSection />

      {/* Sectors Served */}
      <div id="scaling">
        <SectorsServedSection />
      </div>

      {/* CTA Section */}
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
              <Link to="/contact" className="inline-block bg-white text-emuski-teal-darker px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        compact={true}
        maxItems={8}
        showCategories={false}
        usePageSpecific={true}
      />

      <Footer />
    </div>
  );
}
