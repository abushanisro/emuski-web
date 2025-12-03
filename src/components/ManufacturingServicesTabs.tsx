import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const servicesData = {
  "on-demand": {
    title: "On-Demand Manufacturing",
    tagline: "Flexible production that adapts to your needs",
    description: "Agile manufacturing solutions designed for fluctuating demand and rapid market changes. From pilot runs to niche markets, we deliver precision without compromising flexibility.",
    features: [
      { title: "Low-Volume Builds", desc: "Perfect for pilot runs and new product introductions" },
      { title: "Scalable Capacity", desc: "Seamless transition from small to large volumes" },
      { title: "Quality Control", desc: "Continuous monitoring for consistency" },
      { title: "Quick Response", desc: "Fast adaptation to design changes" }
    ]
  },
  "prototyping": {
    title: "Rapid Prototyping",
    tagline: "From concept to reality in record time",
    description: "Accelerate your product development with advanced prototyping. Using CNC machining, 3D printing, and custom tooling, we help you test, validate, and refine designs faster.",
    features: [
      { title: "Multi-Technology", desc: "CNC, 3D printing (SLA/SLS), vacuum casting" },
      { title: "Fast Turnaround", desc: "Rapid iterations to speed up development" },
      { title: "Design Validation", desc: "Functional testing before production" },
      { title: "Cost Optimization", desc: "Value engineering from the start" }
    ]
  },
  "custom": {
    title: "Custom Manufacturing",
    tagline: "Tailored solutions for unique requirements",
    description: "High-precision custom manufacturing for specialized components. From complex geometries to strict tolerances, we deliver quality that meets your exact specifications.",
    features: [
      { title: "Precision Machining", desc: "5-axis CNC for complex parts" },
      { title: "Material Expertise", desc: "Metals, plastics, and composites" },
      { title: "Tight Tolerances", desc: "±0.01mm precision capabilities" },
      { title: "Custom Fixtures", desc: "Specialized tooling and jigs" }
    ]
  },
  "scaling": {
    title: "Production Scaling",
    tagline: "Seamless transition from prototype to production",
    description: "Scale your production confidently with our proven process. We handle the complexity of ramping up volumes while maintaining quality and optimizing costs.",
    features: [
      { title: "Capacity Planning", desc: "Strategic scaling without quality compromise" },
      { title: "Process Optimization", desc: "Lean manufacturing principles" },
      { title: "Supply Chain", desc: "Integrated sourcing and logistics" },
      { title: "Quality Systems", desc: "ISO-certified production standards" }
    ]
  }
};

function ServiceTabContent({ service }: { service: typeof servicesData["on-demand"] }) {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.features.map((feature, idx) => (
          <div
            key={idx}
            className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-emuski-teal-darker/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emuski-teal-dark group-hover:scale-110 transition-all duration-300">
                <Check className="w-5 h-5 text-emuski-teal-darker group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emuski-teal-darker transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ManufacturingServicesTabs() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <Tabs defaultValue="on-demand" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto mb-12">
            <TabsTrigger value="on-demand">On-Demand</TabsTrigger>
            <TabsTrigger value="prototyping">Prototyping</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
            <TabsTrigger value="scaling">Scaling</TabsTrigger>
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
