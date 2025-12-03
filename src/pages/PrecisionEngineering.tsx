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

import { EngineeringServiceCard } from "../components/EngineeringServiceCard";
import { EngineeringServicesSection } from "../components/EngineeringServicesSection";
import SectorsServedSection from "../components/SectorsServedSection";

export default function PrecisionEngineering() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
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
              From cost estimation to strategic sourcing and expert deployment, we deliver integrated engineering services that drive efficiency and accelerate time-to-market.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-4">
              <a href="#cost-estimation" className="bg-emuski-teal-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-emuski-teal-darker transition-colors text-center">
                Our Services
              </a>
              <Link to="/contact" className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cost Estimation */}
      <section id="cost-estimation" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Cost Estimation
            </h2>
            <p className="text-lg text-gray-600">
              Turning data into competitive advantage with real-time cost intelligence for smarter decisions throughout your product lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-100 hover:border-emuski-teal-dark transition-all duration-300">
              <img src="/assets/engineering/designdecisions.svg" alt="Design decisions" className="w-24 h-24 mx-auto mb-4"/>
              <h4 className="font-bold text-base text-gray-900 mb-2">Design Optimization</h4>
              <p className="text-gray-600 text-sm">Engineer cost-effective products from concept</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-100 hover:border-emuski-teal-dark transition-all duration-300">
              <img src="/assets/engineering/costtransparency.svg" alt="Cost transparency" className="w-24 h-24 mx-auto mb-4"/>
              <h4 className="font-bold text-base text-gray-900 mb-2">Cost Transparency</h4>
              <p className="text-gray-600 text-sm">Reveal cost drivers and savings opportunities</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-100 hover:border-emuski-teal-dark transition-all duration-300">
              <img src="/assets/engineering/supplierevaluation.svg" alt="Supplier evaluation" className="w-24 h-24 mx-auto mb-4"/>
              <h4 className="font-bold text-base text-gray-900 mb-2">Supplier Evaluation</h4>
              <p className="text-gray-600 text-sm">Assess competitive pricing and value</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-100 hover:border-emuski-teal-dark transition-all duration-300">
              <img src="/assets/engineering/negotion.svg" alt="Negotiation leverage" className="w-24 h-24 mx-auto mb-4"/>
              <h4 className="font-bold text-base text-gray-900 mb-2">Negotiation Power</h4>
              <p className="text-gray-600 text-sm">Data-driven insights for better deals</p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-12 p-8 bg-gray-50 border border-gray-200 rounded-xl">
            <p className="text-gray-700 text-center leading-relaxed">
              Our global cost database spans Western Europe, Eastern Europe, North America, Asia, and India—providing real-time insights that empower OEMs to optimize sourcing and production strategies with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 md:py-20 bg-white">
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

      {/* Core Engineering Services */}
      <EngineeringServicesSection
        id="vave"
        title="Value Analysis & Value Engineering (VAVE)"
        description="Comprehensive teardown benchmarking and cost optimization services to enhance product value."
        variant="gradient"
        columns={3}
      >
        <EngineeringServiceCard
          icon={Layers}
          title="Teardown Benchmarking"
          description="Detailed product analysis comparing design, materials, and manufacturing processes against competitors."
          variant="compact"
        />
        <EngineeringServiceCard
          icon={Package}
          title="BOM Data Capture"
          description="Complete bill of materials documentation with accurate cost breakdowns and component analysis."
          variant="compact"
        />
        <EngineeringServiceCard
          icon={Calculator}
          title="Should-Cost Analysis"
          description="Independent cost modeling to validate supplier pricing and identify optimization opportunities."
          variant="compact"
        />
        <EngineeringServiceCard
          icon={TrendingDown}
          title="Cost Reduction"
          description="Systematic approach to reduce manufacturing costs while maintaining or improving quality."
          variant="compact"
        />
        <EngineeringServiceCard
          icon={Users}
          title="Supplier Identification"
          description="Global network access to find qualified suppliers that meet your quality and cost requirements."
          variant="compact"
        />
        <EngineeringServiceCard
          icon={Wrench}
          title="Technical Tools"
          description="3D scanning, CT analysis, material testing, and Costing 360 software for accurate assessments."
          variant="compact"
        />
      </EngineeringServicesSection>

      {/* Strategic Services */}
      <EngineeringServicesSection
        id="sourcing"
        title="Strategic Sourcing & Expert Support"
        description="End-to-end sourcing solutions and technical expertise to accelerate your projects."
        variant="light"
        columns={2}
      >
        <EngineeringServiceCard
          icon={ShoppingCart}
          title="Strategic Sourcing"
          description="Comprehensive sourcing strategy including supplier scouting, negotiation support, quality audits, and supply chain optimization for cost-effective procurement."
          features={[
            "Global supplier network access",
            "Negotiation and contracting support",
            "Quality audits and compliance",
            "Supply chain risk management"
          ]}
        />
        <EngineeringServiceCard
          icon={Award}
          title="Expert Engineer Support"
          description="Deploy specialized engineering resources—from should-cost analysts to VAVE engineers—directly into your team for focused, results-driven project execution."
          features={[
            "On-site technical resource deployment",
            "Should-cost and VAVE specialists",
            "Project-based or long-term engagement",
            "Seamless team integration"
          ]}
        />
      </EngineeringServicesSection>

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
