import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FAQSection } from "../components/FAQSection";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Calculator,
  Layers,
  TrendingDown,
  Users,
  Package,
  ShoppingCart,
  Wrench,
  Award
} from "lucide-react";

import { EngineeringServicesTabs } from "../components/EngineeringServicesTabs";
import SectorsServedSection from "../components/SectorsServedSection";

export default function PrecisionEngineering() {
  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const tabMap: { [key: string]: string } = {
        'cost-estimation': 'cost-estimation',
        'vave': 'vave',
        'sourcing': 'sourcing',
        'expert-support': 'expert-support'
      };

      if (tabMap[hash]) {
        setTimeout(() => {
          const tabButton = document.querySelector(`[data-state][id*="${tabMap[hash]}"]`) as HTMLButtonElement;
          if (tabButton) {
            tabButton.click();
          }

          const element = document.querySelector('#engineering-services');
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 200);
      } else {
        // Handle other hash links
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero/engineering.svg" alt="Engineering background" className="hidden md:block w-full h-full object-cover opacity-60" />
          <img src="/assets/hero-mobile/engineering.svg" alt="Engineering background" className="block md:hidden w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-24 md:py-32">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              End-to-End Engineering & Costing Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              From cost estimation to strategic sourcing and expert deployment, we deliver integrated Engineering Innovations that drive efficiency and accelerate time-to-market.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-4">
              <a href="#engineering-services" className="bg-emuski-teal-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-emuski-teal-darker transition-colors text-center">
                Our Services
              </a>
              <Link to="/contact" className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Services Overview */}
      <section id="engineering-services" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Engineering Innovations
            </h2>
            <p className="text-lg text-gray-600">
              Leverage deep engineering expertise to optimize costs, validate designs, and strategically source components with precision and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <a className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-emuski-teal-darker/40 hover:shadow-lg transition-all duration-300" href="/precision-engineering#cost-estimation">
              <div className="w-12 h-12 bg-emuski-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emuski-teal/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emuski-teal-darker">
                  <rect width="16" height="10" x="2" y="3" rx="2" ry="2"/>
                  <path d="m2 12 1.02 3.05a2 2 0 0 0 1.94 1.45h9.08a2 2 0 0 0 1.94-1.45L17 12"/>
                  <path d="M9 5v2.5"/>
                  <path d="M15 5v2.5"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emuski-teal-darker transition-colors">Product Cost Estimation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Accurate cost analysis and estimation services to optimize your product development budget and maximize profitability.</p>
            </a>
            <a className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-emuski-teal-darker/40 hover:shadow-lg transition-all duration-300" href="/precision-engineering#vave">
              <div className="w-12 h-12 bg-emuski-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emuski-teal/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emuski-teal-darker">
                  <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                  <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
                  <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emuski-teal-darker transition-colors">VAVE - Teardown & Benchmarking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Value Analysis and Value Engineering through comprehensive teardown studies and competitive benchmarking for cost optimization.</p>
            </a>
            <a className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-emuski-teal-darker/40 hover:shadow-lg transition-all duration-300" href="/precision-engineering#sourcing">
              <div className="w-12 h-12 bg-emuski-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emuski-teal/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emuski-teal-darker">
                  <circle cx="8" cy="21" r="1"/>
                  <circle cx="19" cy="21" r="1"/>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emuski-teal-darker transition-colors">Strategic Sourcing Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Expert guidance in supplier selection and procurement strategy to ensure quality components at competitive prices.</p>
            </a>
            <a className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-emuski-teal-darker/40 hover:shadow-lg transition-all duration-300" href="/precision-engineering#expert-support">
              <div className="w-12 h-12 bg-emuski-teal/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emuski-teal/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emuski-teal-darker">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
                  <circle cx="12" cy="8" r="6"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emuski-teal-darker transition-colors">Expert Engineer Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Dedicated engineering expertise to solve complex technical challenges and accelerate your product development lifecycle.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Engineering Services Tabs */}
      <div>
        <EngineeringServicesTabs />
      </div>

      {/* Methodology Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Methodology</h2>
            <p className="text-gray-600 text-lg">
              A structured, transparent process ensuring quality outcomes at every stage.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/assets/infograpic/methodology.svg" alt="Our Methodology" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Global Cost Database */}
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

      {/* Costing 360 Software */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Content Left */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Cost 360
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Advanced cost intelligence platform for accurate product cost estimation and analysis
                </p>
              </div>

              {/* Features */}
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

            {/* Images Right */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                <img
                  src="/assets/engineering/cost360.png"
                  alt="Costing 360 Platform"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                <img
                  src="/assets/engineering/cost360crm.png"
                  alt="Costing 360 CRM"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <SectorsServedSection />

      {/* CTA Section */}
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
              <Link to="/contact" className="inline-block bg-white text-emuski-teal-darker px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Engineering Consultation
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
