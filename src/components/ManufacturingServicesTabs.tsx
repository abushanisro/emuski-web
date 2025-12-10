import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const servicesData = {
  "on-demand": {
    title: "On-Demand Manufacturing",
    tagline: "Flexible production when you need it",
    image: "/assets/industry-components/defense-technology-manufacturing/defense-component-16.svg",
    features: [
      { title: "No Minimum Orders", desc: "From single units to full production runs" },
      { title: "Quick Response", desc: "Fast quotes and rapid turnaround times" },
      { title: "Inventory Freedom", desc: "Reduce warehousing costs and risks" },
      { title: "Scalable Capacity", desc: "Ramp up or down based on demand" }
    ]
  },
  "prototyping": {
    title: "Rapid Prototyping",
    tagline: "From concept to reality in record time",
    image: "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-10.svg",
    features: [
      { title: "Multi-Technology", desc: "CNC, 3D printing (SLA, SLS, FDM, MIF - metal), vacuum casting" },
      { title: "Fast Turnaround", desc: "Rapid iterations to speed up development" },
      { title: "Design Validation", desc: "Functional testing before production" },
      { title: "Cost Optimization", desc: "Value engineering from the start" }
    ]
  },
  "custom": {
    title: "Custom Manufacturing",
    tagline: "Tailored solutions for unique requirements",
    image: "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-6.svg",
    features: [
      { title: "Precision Machining", desc: "VMC for complex parts" },
      { title: "Material Expertise", desc: "Metals, plastics, and composites" },
      { title: "Tight Tolerances", desc: "±0.005mm precision capabilities" },
      { title: "Custom Fixtures", desc: "Specialized tooling and jigs" }
    ]
  },
  "scaling": {
    title: "Production Scaling",
    tagline: "Seamless transition from prototype to production",
    image: "/assets/industry-components/defense-technology-manufacturing/defense-component-22.svg",
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
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {service.title}
        </h2>
        <p className="text-base sm:text-lg text-emuski-teal-darker font-semibold">
          {service.tagline}
        </p>
      </div>

      {service.image && (
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="aspect-[16/9] sm:aspect-[21/9] relative">
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {service.features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-5 text-center hover:bg-gray-100 hover:border-emuski-teal-dark hover:shadow-md transition-all duration-300"
          >
            <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1.5 sm:mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ManufacturingServicesTabs() {
  return (
    <section id="manufacturing-tabs" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <Tabs defaultValue="on-demand" className="w-full">
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-emuski-teal-darker/30 via-emuski-teal-dark/20 to-emuski-teal-darker/30 rounded-md blur-lg animate-pulse"></div>
            <TabsList className="relative grid w-full grid-cols-2 md:grid-cols-4 bg-gradient-to-br from-emuski-teal-darker/15 via-emuski-teal-dark/10 to-emuski-teal-darker/15 backdrop-blur-xl border border-emuski-teal-dark/40 shadow-[0_8px_32px_0_rgba(79,211,212,0.2)] rounded-md overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-200%] before:animate-[shimmer_3s_infinite]">
              <TabsTrigger value="on-demand" className="relative z-10 text-xs sm:text-sm px-2 sm:px-3 py-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">On-Demand</TabsTrigger>
              <TabsTrigger value="prototyping" className="relative z-10 text-xs sm:text-sm px-2 sm:px-3 py-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Prototyping</TabsTrigger>
              <TabsTrigger value="custom" className="relative z-10 text-xs sm:text-sm px-2 sm:px-3 py-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Custom</TabsTrigger>
              <TabsTrigger value="scaling" className="relative z-10 text-xs sm:text-sm px-2 sm:px-3 py-2 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Scaling</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(servicesData).map(([key, service]) => (
            <TabsContent key={key} value={key} className="mt-6 fade-in">
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
