'use client'

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";

const recommendations = [
  {
    title: "500K Parts. Zero Defects. 18 Months.",
    description: "Tier-1 automotive supplier partnership delivering precision brake components with flawless quality.",
    image: "/assets/industry-components/automotive-component-manufacturing/automotive-component-1.jpeg"
  },
  {
    title: "Electric Powertrain Revolution.",
    description: "Next-gen EV components engineered for performance, efficiency, and sustainability in automotive evolution.",
    image: "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-5.jpeg"
  },
  {
    title: "35% Lighter. Stronger Structure.",
    description: "4-axis CNC precision reducing aircraft component weight while boosting structural integrity.",
    image: "/assets/industry-components/aerospace-engineering-manufacturing/aerospace-component-1.jpeg"
  },
  {
    title: "Mission-Critical Aerospace Parts.",
    description: "Zero-tolerance manufacturing for satellite and launch vehicle systems meeting stringent space standards.",
    image: "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-2.jpeg"
  },
  {
    title: "FDA Approved 4 Months Early.",
    description: "Cleanroom assembly accelerating life-saving medical devices to market faster.",
    image: "/assets/industry-components/medical-device-manufacturing/medical-device-component-18.jpeg"
  },
  {
    title: "Surgical Precision. Patient Safety.",
    description: "Biocompatible implants and instruments manufactured to exacting medical standards for critical applications.",
    image: "/assets/industry-components/medical-device-manufacturing/medical-device-component-6.jpeg"
  },
  {
    title: "$12M Defense Contract. 5 Years.",
    description: "Military-spec quality systems securing critical defense component partnership.",
    image: "/assets/industry-components/space-satellite-manufacturing/space-satellite-component-6.jpeg"
  },
  {
    title: "Battle-Ready. Field-Tested.",
    description: "Ruggedized components engineered for extreme conditions in defense and tactical applications.",
    image: "/assets/industry-components/defense-technology-manufacturing/defense-component-21.jpeg"
  }
];

export const RecommendedSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -containerRef.current.offsetWidth : containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#111827'}}>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="w-full px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Recommended For You</h2>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="bg-emuski-teal-darker hover:bg-emuski-teal-darker/80 text-white border-emuski-teal-darker"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="bg-emuski-teal-darker hover:bg-emuski-teal-darker/80 text-white border-emuski-teal-darker"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-4 scrollbar-hide"
        >
          {recommendations.map((item, index) => (
            <Link key={index} href="/gallery">
              <Card
                className="flex-shrink-0 w-72 sm:w-80 h-[400px] group overflow-hidden bg-card border-border hover:border-emuski-teal-darker transition-all duration-300 cursor-pointer"
              >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col h-[208px]">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-emuski-teal-darker transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
