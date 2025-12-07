'use client'

import Image from "next/image";

const solutions = [
  {
    title: "On-Demand Manufacturing",
    description: "Flexible manufacturing solutions as you need them with high-precision components manufactured to demanding specifications.",
    image: "/assets/industry-components/defense-technology-manufacturing/defense-component-16.jpeg"
  },
  {
    title: "Rapid Prototyping",
    description: "Fast and efficient prototyping services from concept to completion with precision and cost optimization.",
    image: "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-2.jpeg"
  },
  {
    title: "Custom Manufacturing",
    description: "Tailored manufacturing solutions meeting specific requirements with high-precision CNC machining capabilities.",
    image: "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-6.jpeg"
  },
  {
    title: "Production Scaling",
    description: "Seamless scaling from prototype to full production with advanced assembly stations and workflow optimization.",
    image: "/assets/industry-components/defense-technology-manufacturing/defense-component-18.jpeg"
  }
];

export const ManufacturingNPDSection = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-emuski-teal-darker uppercase tracking-wider">NPD Centre</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            EMUSKI NPD Centre
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We support OEMs in <span className="font-semibold text-gray-900">Medical Devices, Defence, Space Tech, Aerospace, and EV & Automotive</span> through our NPD Center, equipped with in-house <span className="font-semibold text-emuski-teal-darker">VMCs, Turning Centers, Wire EDM, and Centerless Grinders</span>. We also offer <span className="font-semibold text-emuski-teal-darker">3D Printing, Injection Molding, Vacuum Casting, Gravity Die Casting, and Forging</span> — enabling <span className="font-bold text-emuski-teal-darker">complete product development under one roof.</span>
          </p>
        </div>

        {/* Solutions We Offer */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Solutions We Offer
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive manufacturing solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={`${solution.title} - Manufacturing Solution`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {solution.title}
                    </h4>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {solution.description}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-emuski-teal-darker transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
