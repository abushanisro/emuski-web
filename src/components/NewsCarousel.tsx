'use client'

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";

const clientLogos = Array.from({ length: 16 }, (_, i) => ({
  name: `Partner ${i + 1}`,
  logo: `/assets/partners/manufacturing-partner-logo-${i + 1}.svg`
}));



const successStories = [
  {
    category: "Automotive Excellence",
    title: "Tier-1 Supplier. Consistent Quality. On-Time Delivery.",
    description: "From prototype to trusted supplier—delivering precision brake components to automotive leaders. Meeting production deadlines while maintaining rigorous quality standards.",
    image: "/assets/industry-components/automotive-component-manufacturing/automotive-component-1.jpeg",
    link: "/gallery"
  },
  {
    category: "Precision Engineering",
    title: "Where Precision Meets Efficiency.",
    description: "Critical transmission components delivered with exceptional quality standards while optimizing production workflows. Your competitive edge, engineered to perfection.",
    image: "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-1.jpeg",
    link: "/precision-engineering"
  },
  {
    category: "Smart Manufacturing",
    title: "Optimized Assembly. Maintained Quality. Better Results.",
    description: "Custom fixture design that transformed manufacturing workflows from bottleneck to streamlined efficiency. Meet demand surges without compromising standards.",
    image: "/assets/industry-components/defense-technology-manufacturing/defense-component-7.jpeg",
    link: "/manufacturing-services#custom"
  },
  {
    category: "Production Systems",
    title: "Scalable Production. Unwavering Quality.",
    description: "Successfully scaling production from low-volume to high-volume manufacturing while maintaining consistent quality metrics. Your growth, our expertise.",
    image: "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-3.jpeg",
    link: "/manufacturing-services#scaling"
  },
  {
    category: "CNC Machining",
    title: "Complex Geometries. Tight Tolerances. Flawless Finishes.",
    description: "Advanced 5-axis CNC machining delivering aerospace-grade precision for automotive OEMs. When failure isn't an option, choose manufacturing that delivers.",
    image: "/assets/industry-components/medical-device-manufacturing/medical-device-component-20.jpeg",
    link: "/precision-engineering"
  },
  {
    category: "Client Partnership",
    title: "Accelerated Time-to-Market. Strategic Advantage.",
    description: "Rapid prototyping and engineering validation that accelerated product development timelines. Your innovation, our expertise—delivering results together.",
    image: "/assets/industry-components/medical-device-manufacturing/medical-device-component-12.jpeg",
    link: "/gallery"
  }
];

export const NewsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -containerRef.current.offsetWidth : containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>

      {/* Trusted by Clients Section */}
      <section className="py-8 border-b border-border/30 relative overflow-hidden" style={{backgroundColor: '#121A21'}}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold text-white/80 mb-4">Trusted by Industry Leaders</h2>
          </div>
          
          <div className="relative overflow-hidden w-full">
            <div className="flex animate-scroll space-x-12 items-center">
              {clientLogos.concat(clientLogos).map((client, index) => (
                <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 sm:h-16 w-auto object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          `
        }} />
      </section>

      <section className="py-12 border-b border-border relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="w-full px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Success Story</h2>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="border-emuski-teal-darker bg-emuski-teal-darker text-white hover:bg-emuski-teal-darker/80"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="border-emuski-teal-darker bg-emuski-teal-darker text-white hover:bg-emuski-teal-darker/80"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-4 scrollbar-hide"
        >
          {successStories.map((item, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-80 sm:w-96 group bg-white border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <Link href={item.link} className="block h-full hover:no-underline">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">{item.category}</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">Success Story</span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};
