import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const servicesData = {
  "prototyping": {
    title: "Rapid Prototyping",
    tagline: "From concept to reality in record time",
    description: "Accelerate your product development with advanced prototyping. Using CNC machining, 3D printing, and custom tooling, we help you test, validate, and refine designs faster.",
    image: "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-2.jpeg",
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
    image: "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-6.jpeg",
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
    image: "/assets/industry-components/defense-technology-manufacturing/defense-component-18.jpeg",
    features: [
      { title: "Capacity Planning", desc: "Strategic scaling without quality compromise" },
      { title: "Process Optimization", desc: "Lean manufacturing principles" },
      { title: "Supply Chain", desc: "Integrated sourcing and logistics" },
      { title: "Quality Systems", desc: "ISO-certified production standards" }
    ]
  },
  "quality": {
    title: "Quality Assurance",
    tagline: "Excellence in every detail",
    description: "Comprehensive quality control and assurance processes ensuring your products meet the highest standards. From incoming inspection to final verification, we guarantee excellence.",
    image: "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-1.jpeg",
    features: [
      { title: "Advanced Inspection", desc: "CMM, optical measurement, and testing" },
      { title: "Process Control", desc: "Statistical process control (SPC)" },
      { title: "Documentation", desc: "Complete traceability and reports" },
      { title: "Compliance", desc: "Industry standards and certifications" }
    ]
  }
};

function ServiceTabContent({ service }: { service: typeof servicesData["prototyping"] }) {
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

export function ManufacturingServicesTabs() {
  return (
    <section id="manufacturing-tabs" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <Tabs defaultValue="prototyping" className="w-full">
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-emuski-teal-darker/30 via-emuski-teal-dark/20 to-emuski-teal-darker/30 rounded-lg blur-xl animate-pulse"></div>
            <TabsList className="relative grid w-full grid-cols-2 md:grid-cols-4 bg-gradient-to-br from-emuski-teal-darker/15 via-emuski-teal-dark/10 to-emuski-teal-darker/15 backdrop-blur-xl border border-emuski-teal-dark/40 shadow-[0_8px_32px_0_rgba(79,211,212,0.2)] rounded-lg overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-200%] before:animate-[shimmer_3s_infinite]">
              <TabsTrigger value="prototyping" className="relative z-10 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Prototyping</TabsTrigger>
              <TabsTrigger value="custom" className="relative z-10 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Custom</TabsTrigger>
              <TabsTrigger value="scaling" className="relative z-10 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Scaling</TabsTrigger>
              <TabsTrigger value="quality" className="relative z-10 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emuski-teal-dark data-[state=active]:to-emuski-teal-darker data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-white/10">Quality</TabsTrigger>
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
