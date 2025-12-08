'use client'

import { useState, useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const featuredContent = [
  {
    id: "manufacturing",
    label: "Manufacturing",
    items: [
      {
        category: "OEM Manufacturing",
        title: "Complete Manufacturing Solutions",
        description: "Your One-Stop Strategic Companion for AI-Driven Manufacturing Excellence. At EMUSKI, where cost and quality meets profitability - delivering straight to your door.",
        image: "/assets/manufacturing/services.svg",
        link: "/assets/manufacturing/ManufacturingServices.pdf"
      },
      {
        category: "Custom Manufacturing",
        title: "Tailored Manufacturing Excellences",
        description: "Customized manufacturing solutions meeting your specific requirements with precision engineering and quality assurance at every step.",
        image: "/assets/manufacturing/solution.svg",
        link: "/manufacturing-services#custom"
      }
    ]
  },
  {
    id: "engineering",
    label: "Engineering",
    items: [
      {
        category: "Product Cost Estimation",
        title: "End-to-End Engineering & Costing Solutions",
        description: "From initial design and cost estimation to strategic sourcing and expert deployment, we provide integrated Engineering Innovations that drive efficiency, reduce costs, and accelerate your time-to-market",
        image: "/assets/engineering/automotive-engineering-cost-estimation.png",
        link: "/precision-engineering#cost-estimation"
      },
      {
        category: "VAVE & Benchmarking",
        title: "Teardown & Value Engineering",
        description: "Comprehensive teardown analysis and value Engineering Innovations to optimize product costs while maintaining quality standards and performance requirements.",
        image: "/assets/engineering/product-teardown-analysis.png",
        link: "/precision-engineering#vave"
      }
    ]
  },
  {
    id: "ai-mithran",
    label: "AI Mithran",
    items: [
      {
        category: "AI-Driven Platform",
        title: "Next-GenAI - Mithran",
        description: "AI-powered intelligence for smarter product development, supply chain, and cost optimization. Transform traditional workflows into a smart, data-driven ecosystem.",
        image: "/assets/mitran/ai-mithran-platform-dashboard.svg",
        link: "/solutions/ai#mithran-overview"
      },
      {
        category: "Smart Sourcing",
        title: "Intelligent Supplier Management",
        description: "AI-driven supplier identification, RFQ management, and quotation validation. Accelerate sourcing cycles by 30% with intelligent automation.",
        image: "/assets/mitran/ai-intelligent-sourcing-system.jpeg",
        link: "/solutions/ai#mithran-overview"
      }
    ]
  }
];

export const FeaturedTabs = () => {
  const [activeTab, setActiveTab] = useState("manufacturing");
  const [manufacturingSlide, setManufacturingSlide] = useState(0);
  const [engineeringSlide, setEngineeringSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Manufacturing services carousel images with SEO-optimized names
  const manufacturingSlides = [
    '/assets/manufacturingservices/custom-manufacturing-solutions.svg',
    '/assets/manufacturingservices/prototype-manufacturing-services.svg',
    '/assets/manufacturingservices/production-scaling-capabilities.svg',
    '/assets/manufacturingservices/on-demand-manufacturing.svg',
    '/assets/manufacturingservices/cnc-machining-services.svg',
    '/assets/manufacturingservices/sheet-metal-fabrication.svg',
    '/assets/manufacturingservices/injection-molding-services.svg',
    '/assets/manufacturingservices/quality-control-manufacturing.svg',
    '/assets/manufacturingservices/assembly-services-manufacturing.svg',
    '/assets/manufacturingservices/finishing-services-manufacturing.svg'
  ];

  // Engineering services carousel images with SEO-optimized names
  const engineeringSlides = [
    '/assets/engineeringservices/engineering-service-cost-estimation.svg',
    '/assets/engineeringservices/engineering-service-value-analysis.svg',
    '/assets/engineeringservices/engineering-service-design-optimization.svg',
    '/assets/engineeringservices/engineering-service-supplier-sourcing.svg',
    '/assets/engineeringservices/engineering-service-quality-assurance.svg',
    '/assets/engineeringservices/engineering-service-process-improvement.svg',
    '/assets/engineeringservices/engineering-service-technical-support.svg',
    '/assets/engineeringservices/engineering-service-project-management.svg',
    '/assets/engineeringservices/engineering-service-manufacturing-consulting.svg',
    '/assets/engineeringservices/engineering-service-product-development.svg',
    '/assets/engineeringservices/engineering-service-benchmarking-analysis.svg',
    '/assets/engineeringservices/engineering-service-cost-modeling.svg',
    '/assets/engineeringservices/engineering-service-supply-chain-optimization.svg'
  ];

  const nextSlide = () => {
    if (activeTab === "manufacturing") {
      setManufacturingSlide((prev) => (prev + 1) % manufacturingSlides.length);
    } else if (activeTab === "engineering") {
      setEngineeringSlide((prev) => (prev + 1) % engineeringSlides.length);
    }
  };

  const prevSlide = () => {
    if (activeTab === "manufacturing") {
      setManufacturingSlide((prev) => (prev - 1 + manufacturingSlides.length) % manufacturingSlides.length);
    } else if (activeTab === "engineering") {
      setEngineeringSlide((prev) => (prev - 1 + engineeringSlides.length) % engineeringSlides.length);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (activeTab === "manufacturing" || activeTab === "engineering") {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    }
  };

  // Touch swipe support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      // Swiped right
      prevSlide();
    }
  };

  // Render carousel for a given set of slides
  const renderCarousel = (slides: string[], currentSlide: number, setSlide: (index: number) => void) => (
    <div
      className="w-full relative"
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      {/* Carousel Container */}
      <div className="relative bg-white rounded-lg border border-border overflow-hidden">
        {/* Image Display */}
        <div
          ref={carouselRef}
          className="w-full flex items-center justify-center bg-white relative"
        >
          <div className="relative w-full h-[40vh] sm:h-[50vh]">
            <Image
              key={currentSlide}
              src={slides[currentSlide]}
              alt={`${activeTab === 'manufacturing' ? 'Manufacturing' : 'Engineering'} Service ${currentSlide + 1} - Precision Manufacturing Solutions`}
              fill
              className="object-contain"
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          onTouchEnd={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-emuski-teal-darker hover:bg-emuski-teal-darker/80 active:bg-emuski-teal-darker/90 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all z-10 touch-manipulation"
          aria-label="Previous slide"
          type="button"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={nextSlide}
          onTouchEnd={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-emuski-teal-darker hover:bg-emuski-teal-darker/80 active:bg-emuski-teal-darker/90 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all z-10 touch-manipulation"
          aria-label="Next slide"
          type="button"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={`min-h-[20px] w-2.5 h-2.5 rounded-full transition-all touch-manipulation ${
                index === currentSlide
                  ? 'bg-emuski-teal-darker w-8'
                  : 'bg-gray-400 hover:bg-gray-600 active:bg-gray-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-0 bg-background">
      <div className="w-full px-4 sm:px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex-wrap sm:flex-nowrap justify-center bg-secondary border-b border-border rounded-none h-auto p-0 mb-0">
            {featuredContent.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:bg-emuski-teal-darker/10 data-[state=active]:border-b-2 data-[state=active]:border-emuski-teal-darker data-[state=active]:text-emuski-teal-darker rounded-none px-4 sm:px-6 py-4 text-sm sm:text-base font-medium backdrop-blur-sm transition-all"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {featuredContent.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              {tab.id === "manufacturing" ? (
                renderCarousel(manufacturingSlides, manufacturingSlide, setManufacturingSlide)
              ) : tab.id === "engineering" ? (
                renderCarousel(engineeringSlides, engineeringSlide, setEngineeringSlide)
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {tab.items.map((item, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={`${item.title} - ${item.category}`}
                          fill
                          className={`${
                            tab.id === "manufacturing"
                              ? "object-contain"
                              : "object-cover"
                          } group-hover:scale-105 transition-transform duration-500`}
                          loading="lazy"
                          quality={80}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-emuski-teal-darker text-white text-xs font-semibold rounded-sm">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-emuski-teal-darker transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <Link
                          href={
                            item.link ||
                            (tab.id === "engineering"
                              ? "/precision-engineering"
                              : "/solutions/ai")
                          }
                        >
                          <Button
                            variant="link"
                            className="text-emuski-teal-darker hover:text-emuski-teal-dark p-0 h-auto font-semibold"
                          >
                            Read More →
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
