import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FAQSection } from "../components/FAQSection";
import { ManufacturingServicesTabs } from "../components/ManufacturingServicesTabs";
import ProductDeliverablesSection from "../components/ProductDeliverablesSection";
import { ManufacturingServicesContent } from "../components/ManufacturingServicesContent";
import { Link } from "react-router-dom";

export default function ManufacturingServices() {
  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
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
            // Try multiple selectors to find the tab button
            let tabButton = document.querySelector(`button[value="${tabMap[hash]}"]`) as HTMLButtonElement;

            if (!tabButton) {
              tabButton = document.querySelector(`button[role="tab"][id*="${tabMap[hash]}"]`) as HTMLButtonElement;
            }

            if (!tabButton) {
              tabButton = document.querySelector(`[data-state][id*="${tabMap[hash]}"]`) as HTMLButtonElement;
            }

            if (tabButton) {
              tabButton.click();

              // Scroll to the detailed section after clicking
              setTimeout(() => {
                const detailElement = document.querySelector(`#${hash}-details`);
                if (detailElement) {
                  const offset = 80;
                  const elementPosition = detailElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                } else {
                  // Fallback to tabs section if detailed section not found
                  const element = document.querySelector('#manufacturing-tabs');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }
              }, 100);
            }
          }, 300);
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // SEO Meta Tags
  useEffect(() => {
    document.title = "OEM Manufacturing Excellences in Bangalore | Precision Engineering | EMUSKI";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Leading OEM Manufacturing Excellences in Bangalore, India. Expert precision engineering, rapid prototyping, custom manufacturing, and AI-powered production solutions.');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero/manufaturing.svg" alt="Manufacturing background" className="hidden md:block w-full h-full object-cover opacity-60" />
          <img src="/assets/hero-mobile/manufaturingmobile.svg" alt="Manufacturing background" className="block md:hidden w-full h-full object-cover opacity-60" />
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

      {/* Manufacturing Services Tabs */}
      <div id="manufacturing-tabs">
        <ManufacturingServicesTabs />
      </div>

      {/* Detailed Service Content */}
      <ManufacturingServicesContent />

      {/* Product Deliverables */}
      <ProductDeliverablesSection />

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
