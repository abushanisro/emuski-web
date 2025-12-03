import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const servicesData = {
  "cost-estimation": {
    title: "Product Cost Estimation",
    tagline: "Turning data into competitive advantage",
    description: "Real-time cost intelligence for smarter decisions throughout your product lifecycle with comprehensive analysis and optimization.",
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

function ServiceTabContent({ service }: { service: typeof servicesData["cost-estimation"] }) {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {service.features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:bg-gray-100 hover:border-emuski-teal-dark transition-all duration-300"
          >
            {feature.image && (
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-24 h-24 mx-auto mb-4"
              />
            )}
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
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <Tabs defaultValue="cost-estimation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto mb-12">
            <TabsTrigger value="cost-estimation">Cost Estimation</TabsTrigger>
            <TabsTrigger value="vave">VAVE</TabsTrigger>
            <TabsTrigger value="sourcing">Sourcing</TabsTrigger>
            <TabsTrigger value="expert-support">Expert Support</TabsTrigger>
          </TabsList>

          {Object.entries(servicesData).map(([key, service]) => (
            <TabsContent key={key} value={key} className="mt-8 fade-in">
              <ServiceTabContent service={service} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}