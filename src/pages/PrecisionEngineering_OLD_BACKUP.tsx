import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FAQSection } from "../components/FAQSection";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { TeardownBenchmarkingSection } from "../components/TeardownBenchmarkingSection";
import { BomDataCaptureSection } from "../components/BomDataCaptureSection";
import { ShouldCostingSection } from "../components/ShouldCostingSection";
import { CostReductionSection } from "../components/CostReductionSection";
import { SupplierIdentificationSection } from "../components/SupplierIdentificationSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { ToolsAndTechniquesSection } from "../components/ToolsAndTechniquesSection";
import SectorsServedSection from "../components/SectorsServedSection";
import { StrategicSourcingSection } from "../components/StrategicSourcingSection";
import { ExpertEngineerSupportSection } from "../components/ExpertEngineerSupportSection";
import { TechnicalResourceDeploymentSection } from "../components/TechnicalResourceDeploymentSection";

const engineeringServices = [
  {
    title: "Precision CNC Machining",
    description: "State-of-the-art CNC machining capabilities delivering high-precision components for automotive and aerospace applications with tight tolerances.",
    image: "/assets/componets/Part-Photos/IMG-20250310-WA0011.jpg",
    features: [
      "4-axis CNC machining for complex geometries",
      "Tight tolerance manufacturing (±0.01mm)",
      "Surface finish optimization",
      "Material expertise across metals and polymers"
    ]
  },
  {
    title: "Component Design & Validation",
    description: "Complete product development lifecycle from concept to production, including rapid prototyping and engineering validation services.",
    image: "/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
    features: [
      "CAD design and 3D modeling",
      "Rapid prototyping and testing",
      "Design validation and verification",
      "Engineering consultation and optimization"
    ]
  },
  {
    title: "Custom Fixture & Tooling Design",
    description: "Custom-designed fixtures and tooling solutions to optimize manufacturing processes and ensure consistent component quality for enhanced production efficiency.",
    image: "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg",
    features: [
      "Custom fixture design and manufacturing",
      "Specialized tooling development",
      "Assembly automation solutions",
      "Production efficiency optimization"
    ]
  },
  {
    title: "Quality Control Excellence",
    description: "Advanced quality inspection and testing protocols ensuring every component meets exact specifications and industry standards for automotive and aerospace applications.",
    image: "/assets/componets/Part-Photos/IMG-20250519-WA0016.jpg",
    features: [
      "Dimensional inspection and verification",
      "Material testing and certification",
      "Statistical process control (SPC)",
      "ISO 9001:2015 compliance assurance"
    ]
  }
];

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
          <img src="/assets/hero/engineering.svg" alt="Engineering background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-32">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              End-to-End Engineering & Costing Solutions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From initial design and cost estimation to strategic sourcing and expert deployment, we provide integrated Engineering Innovations that drive efficiency, reduce costs, and accelerate your time-to-market.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-4">
              <a href="#services-section" className="bg-emuski-teal-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-emuski-teal-darker transition-colors text-center">
                Our Services
              </a>
              <Link to="/contact" className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* Engineering Innovations Grid */}
      <section id="services-section" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Precision Engineering Capabilities
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Advanced engineering solutions with documented tolerances ±0.0025mm, certified processes, and measurable Six Sigma quality performance (Cpk ≥ 1.67).
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringServices.map((service, index) => {
              const sectionIds = ['cnc', 'design', 'consultation', 'quality'];
              return (
              <div key={index} id={sectionIds[index]} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-emuski-teal-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-emuski-teal-dark rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="text-emuski-teal-darker hover:text-emuski-teal-dark font-semibold transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Product Cost Estimation Section */}
      <section id="cost-estimation" className="py-20" style={{backgroundColor: '#121A21'}}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Product Cost Estimation
            </h2>
            <p className="text-xl text-gray-300 mt-4">
              Turning Data into Competitive Advantage
            </p>
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
              At EMUSKI, cost isn’t just a figure—it’s the foundation of smarter design, stronger negotiations, and competitive products. With our Product Cost Estimation expertise, OEMs across industries gain the clarity to make informed decisions throughout design, prototyping, and production—ensuring efficiency, profitability, and faster time-to-market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center hover:bg-gray-800/60 hover:border-emuski-teal-dark transition-all duration-300">
              <img src="/assets/engineering/costtransparency.svg" alt="Cost transparency" className="w-32 h-32 mx-auto mb-4"/>
              <h4 className="font-bold text-lg text-white">Cost Transparency</h4>
              <p className="text-gray-400 text-sm mt-2">Reveals cost drivers and potential savings.</p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center hover:bg-gray-800/60 hover:border-emuski-teal-dark transition-all duration-300">
              <img src="/assets/engineering/designdecisions.svg" alt="Design decisions" className="w-32 h-32 mx-auto mb-4"/>
              <h4 className="font-bold text-lg text-white">Design Decisions</h4>
              <p className="text-gray-400 text-sm mt-2">Supports engineers and product teams in designing cost-effective products.</p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center hover:bg-gray-800/60 hover:border-emuski-teal-dark transition-all duration-300">
              <img src="/assets/engineering/supplierevaluation.svg" alt="Supplier evaluation" className="w-32 h-32 mx-auto mb-4"/>
              <h4 className="font-bold text-lg text-white">Supplier Evaluation</h4>
              <p className="text-gray-400 text-sm mt-2">Assesses whether suppliers are pricing competitively.</p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center hover:bg-gray-800/60 hover:border-emuski-teal-dark transition-all duration-300">
              <img src="/assets/engineering/negotion.svg" alt="Negotiation leverage" className="w-32 h-32 mx-auto mb-4"/>
              <h4 className="font-bold text-lg text-white">Negotiation Leverage</h4>
              <p className="text-gray-400 text-sm mt-2">Helps buyers understand if a supplier’s price is fair, and gives them solid data to negotiate better prices.</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-left text-gray-400 space-y-8 mt-20">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3 text-center">A Lifecycle Approach to Costing</h3>
              <p>
                From the earliest design sketches to full-scale production, EMUSKI supports OEMs with accurate, real-time cost insights. During concept design, we help teams evaluate material and process options before locking in decisions. In prototyping, our cost intelligence ensures every iteration balances innovation with affordability. As products move to production, we deliver detailed cost models that guide sourcing strategies and optimize manufacturing efficiency.
              </p>
              <p className="mt-4">
                By embedding cost thinking into each stage, OEMs avoid surprises, reduce risks, and bring better products to market with confidence.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3 text-center">Global Cost Intelligence</h3>
              <p>
                EMUSKI maintains its own real-time cost database spanning Western Europe, Eastern Europe, North America, Asia, and India. This global perspective allows us to evaluate manufacturing costs accurately across different geographies, empowering OEMs to optimize sourcing and production strategies.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3 text-center">The EMUSKI Advantage</h3>
              <p>
                What sets EMUSKI apart is our blend of engineering expertise, manufacturing knowledge, and a globally benchmarked cost database. Our team of experienced should-cost and VAVE engineers act as an extension of OEM teams, delivering insights that go beyond spreadsheets. We don’t just provide numbers—we deliver intelligence that drives profitability, efficiency, and competitiveness.
              </p>
              <p className="mt-4">
                At EMUSKI, we believe every great product deserves a cost structure that makes it truly competitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Methodology</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We follow a structured and transparent process to ensure the highest quality outcomes for our clients.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/assets/infograpic/methodology.svg" alt="Our Methodology" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      <div id="vave">
        <TeardownBenchmarkingSection />
      </div>

      <BomDataCaptureSection />

      <ShouldCostingSection />

      <CostReductionSection />

      <SupplierIdentificationSection />

      <div id="sourcing">
        <StrategicSourcingSection />
      </div>

      <div id="expert-support">
        <ExpertEngineerSupportSection />
      </div>

      <TechnicalResourceDeploymentSection />

      <ToolsAndTechniquesSection />

      <SectorsServedSection />

      <BenefitsSection />

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Optimize Your Manufacturing Costs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
              Let our precision engineering team analyze your project and identify cost optimization opportunities.
            </p>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-white rounded-full mx-auto"></div>
            <Link to="/contact" className="bg-white text-emuski-teal-darker px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Get Engineering Consultation
            </Link>
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