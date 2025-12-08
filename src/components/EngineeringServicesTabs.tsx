import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const servicesData = {
  "cost-estimation": {
    title: "Product Cost Estimation",
    tagline: "Turning data into competitive advantage",
    description: "Real-time cost intelligence for smarter decisions throughout your product lifecycle with comprehensive analysis and optimization.",
    image: "/assets/engineering/automotive-engineering-cost-estimation.png",
    pdfUrl: "/assets/documents/CostBreakDownReport.pdf",
    features: [
      { 
        title: "Design Optimization", 
        desc: "Engineer cost-effective products from concept",
        image: "/assets/engineering/designdecisions.svg"
      },
      { 
        title: "Cost Transparency", 
        desc: "Reveal cost drivers and savings opportunities",
        image: "/assets/engineering/costtransparency.svg"
      },
      { 
        title: "Supplier Evaluation", 
        desc: "Assess competitive pricing and value",
        image: "/assets/engineering/supplierevaluation.svg"
      },
      { 
        title: "Negotiation Power", 
        desc: "Data-driven insights for better deals",
        image: "/assets/engineering/negotion.svg"
      }
    ]
  },
  "vave": {
    title: "VAVE - Teardown & Benchmarking",
    tagline: "Comprehensive teardown benchmarking and cost optimization",
    description: "Value Analysis and Value Engineering through detailed product analysis and competitive benchmarking to enhance product value.",
    image: "/assets/engineering/product-teardown-analysis.png",
    features: [
      { 
        title: "Teardown Benchmarking", 
        desc: "Detailed product analysis comparing design, materials, and manufacturing processes"
      },
      { 
        title: "BOM Data Capture", 
        desc: "Complete bill of materials documentation with accurate cost breakdowns"
      },
      { 
        title: "Should-Cost Analysis", 
        desc: "Independent cost modeling to validate supplier pricing and identify opportunities"
      },
      { 
        title: "Cost Reduction", 
        desc: "Systematic approach to reduce manufacturing costs while maintaining quality"
      }
    ]
  },
  "sourcing": {
    title: "Strategic Sourcing Support",
    tagline: "End-to-end sourcing solutions",
    description: "Comprehensive sourcing strategy including supplier scouting, negotiation support, quality audits, and supply chain optimization.",
    image: "/assets/engineering/strategic-sourcing-solutions.svg",
    features: [
      { 
        title: "Global Supplier Network", 
        desc: "Access to qualified suppliers worldwide that meet quality and cost requirements"
      },
      { 
        title: "Negotiation Support", 
        desc: "Expert guidance in supplier negotiations and contracting processes"
      },
      { 
        title: "Quality Audits", 
        desc: "Comprehensive supplier quality assessments and compliance verification"
      },
      { 
        title: "Supply Chain Optimization", 
        desc: "Risk management and supply chain efficiency improvements"
      }
    ]
  },
  "expert-support": {
    title: "Expert Engineer Support",
    tagline: "Specialized engineering resources for your team",
    description: "Deploy specialized engineering resources directly into your team for focused, results-driven project execution and technical expertise.",
    image: "/assets/engineering/supplier-management-system.avif",
    features: [
      { 
        title: "On-site Deployment", 
        desc: "Technical resource deployment directly into your team environment"
      },
      { 
        title: "Should-cost Specialists", 
        desc: "Expert should-cost analysts and VAVE engineering specialists"
      },
      { 
        title: "Flexible Engagement", 
        desc: "Project-based or long-term engagement models to fit your needs"
      },
      { 
        title: "Seamless Integration", 
        desc: "Smooth integration with your existing team and workflows"
      }
    ]
  }
};

function ServiceTabContent({ service, serviceKey }: {
  service: {
    title: string;
    tagline: string;
    description: string;
    image?: string;
    pdfUrl?: string;
    features: { title: string; desc: string; image?: string }[]
  };
  serviceKey: string;
}) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {service.title}
        </h2>
        <p className="text-lg text-emuski-teal-darker font-semibold mb-4">
          {service.tagline}
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {service.description}
        </p>
      </div>

      {service.image && (
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {service.features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-100 hover:border-emuski-teal-dark transition-all duration-300"
          >
            <h3 className="font-bold text-base text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EngineeringServicesTabs() {
  return (
    <section id="engineering-services" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <Tabs defaultValue="cost-estimation" className="w-full">
          <div className="relative max-w-4xl mx-auto mb-12">
            {/* Liquid Glass Background with Flow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emuski-teal-darker/30 via-emuski-teal-dark/20 to-emuski-teal-darker/30 rounded-lg blur-xl animate-pulse"></div>
            <TabsList className="relative grid w-full grid-cols-2 md:grid-cols-4 bg-gradient-to-br from-emuski-teal-darker/15 via-emuski-teal-dark/10 to-emuski-teal-darker/15 backdrop-blur-xl border border-emuski-teal-dark/40 shadow-[0_8px_32px_0_rgba(79,211,212,0.2)] rounded-lg overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-200%] before:animate-[shimmer_3s_infinite]">
              <TabsTrigger value="cost-estimation" className="relative z-10 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Cost Estimation</TabsTrigger>
              <TabsTrigger value="vave" className="relative z-10 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">VAVE - T & B</TabsTrigger>
              <TabsTrigger value="sourcing" className="relative z-10 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Sourcing</TabsTrigger>
              <TabsTrigger value="expert-support" className="relative z-10 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Expert Support</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(servicesData).map(([key, service]) => (
            <TabsContent key={key} value={key} className="mt-8 fade-in">
              <ServiceTabContent service={service} serviceKey={key} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-200%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  );
}