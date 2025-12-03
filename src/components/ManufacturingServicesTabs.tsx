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
    <section id="manufacturing-tabs" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <Tabs defaultValue="on-demand" className="w-full">
          <div className="relative max-w-4xl mx-auto mb-12">
            {/* Liquid Glass Background with Flow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emuski-teal-darker/30 via-emuski-teal-dark/20 to-emuski-teal-darker/30 rounded-lg blur-xl animate-pulse"></div>
            <TabsList className="relative grid w-full grid-cols-2 md:grid-cols-4 bg-gradient-to-br from-emuski-teal-darker/15 via-emuski-teal-dark/10 to-emuski-teal-darker/15 backdrop-blur-xl border border-emuski-teal-dark/40 shadow-[0_8px_32px_0_rgba(79,211,212,0.2)] rounded-lg overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-200%] before:animate-[shimmer_3s_infinite]">
              <TabsTrigger value="on-demand" className="relative z-10 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">On-Demand</TabsTrigger>
              <TabsTrigger value="prototyping" className="relative z-10 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Prototyping</TabsTrigger>
              <TabsTrigger value="custom" className="relative z-10 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Custom</TabsTrigger>
              <TabsTrigger value="scaling" className="relative z-10 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Scaling</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(servicesData).map(([key, service]) => (
            <TabsContent key={key} value={key} className="mt-8 fade-in">
              <ServiceTabContent service={service} />
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
