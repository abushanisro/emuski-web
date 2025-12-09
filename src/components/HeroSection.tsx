'use client'

import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  mobileImage: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: "/assets/hero/manufacturing-services-hero-banner.svg",
    mobileImage: "/assets/hero-mobile/manufacturing-services-mobile-banner.svg",
    category: "Manufacturing Excellence",
    title: "You Design It, We Build It: Justified Cost, Peerless Quality",
    shortTitle: "Manufacturing Excellence",
    description: "Your one-stop strategic partner for AI-driven manufacturing excellence. We turn product ideas into profitable realities, delivering from our NPD Innovation Center straight to your door.",
    link: "/manufacturing-services",
  },
  {
    image: "/assets/hero/precision-engineering-hero-banner.svg",
    mobileImage: "/assets/hero-mobile/precision-engineering-mobile-banner.svg",
    category: "Engineering Innovation",
    title: "Mastering Costs Engineering Success!",
    shortTitle: "Engineering Innovations",
    description: "We drive value engineering through teardown analysis, design benchmarking and advanced cost modelling — helping you manufacture smarter and more profitable",
    link: "/precision-engineering",
  },
  {
    image: "/assets/hero/ai-mithran-hero-banner.svg",
    mobileImage: "/assets/hero-mobile/ai-mithran-mobile-banner.svg",
    category: "Next-GenAI",
    title: "AI-Powered Intelligence for the Future of Manufacturing",
    shortTitle: "Mithran",
    description: "Revolutionary AI solutions transforming product development, cost engineering and supply chain optimization - where artificial intelligence meets manufacturing excellence",
    link: "/solutions/ai",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const SLIDE_DURATION = 5000;

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(newProgress);

      if (elapsed < SLIDE_DURATION) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        handleNext();
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentSlide]);

  const handleTabClick = (index: number) => {
    if (index !== currentSlide) {
      setCurrentSlide(index);
      setProgress(0);
      startTimeRef.current = undefined;
    }
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
    startTimeRef.current = undefined;
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    startTimeRef.current = undefined;
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Desktop Layout - Full Width with Left Text */}
          <div className="hidden lg:block h-full">
            <div className="relative h-full">
              {/* Full Width Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={`${slide.category} - EMUSKI Manufacturing Solutions`}
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient overlay on left for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
              </div>

              {/* Content positioned on left */}
              <div className="relative z-20 h-full flex items-center pb-32">
                <div className="w-full max-w-2xl pl-8 xl:pl-16 pr-8">
                  <div className="space-y-4">
                    {/* Category Badge */}
                    <div className="inline-flex items-center">
                      <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded text-cyan-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                        {slide.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white leading-tight">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="text-base xl:text-lg text-gray-300 leading-relaxed max-w-xl">
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <a 
                        href={slide.link}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-base rounded transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
                      >
                        Learn More
                        <ChevronRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet Layout (md to lg) */}
          <div className="hidden md:block lg:hidden h-full">
            <div className="relative h-full">
              {/* Background */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={`${slide.category}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30" />
              </div>

              {/* Content */}
              <div className="relative z-20 h-full flex items-center px-10">
                <div className="max-w-2xl space-y-5">
                  <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded text-cyan-400 text-sm font-semibold tracking-wider uppercase">
                    {slide.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {slide.description}
                  </p>
                  <a 
                    href={slide.link}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-base rounded transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden h-full">
            <div className="relative h-full">
              {/* Background Image - Full Screen */}
              <div className="absolute inset-0">
                <img
                  src={slide.mobileImage}
                  alt={`${slide.category}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Gradient Overlays - Top dark, bottom visible */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent" />
              
              {/* Content - Overlay on Top */}
              <div className="relative z-20 h-full flex flex-col pt-20 px-6 pb-32">
                <div className="space-y-3 pb-8">
                  <span className="inline-block px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/50 rounded text-cyan-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                    {slide.category}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-sm text-gray-200 leading-relaxed drop-shadow-md">
                    {slide.description}
                  </p>
                  <div className="pt-2">
                    <a 
                      href={slide.link}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm rounded transition-all duration-300 transform active:scale-95 shadow-lg"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                {/* Spacer to push content to top and leave space for image visibility */}
                <div className="flex-1" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-t border-white/10">
        {/* Progress Bar */}
        <div className="relative h-1 bg-white/20 overflow-hidden">
          <div className="absolute inset-0 flex">
            {slides.map((_, i) => (
              <div key={i} className="flex-1 h-full bg-white/10" style={{ borderRight: i < slides.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }} />
            ))}
          </div>
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 to-cyan-400 shadow-lg shadow-cyan-500/50"
            style={{ 
              width: `${(currentSlide / slides.length * 100) + (progress / slides.length)}%`,
              transition: 'none'
            }}
          />
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-3 gap-0">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`relative py-5 px-4 text-left transition-all duration-300 group ${
                index === currentSlide ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <div className="space-y-1">
                <div className={`text-xs uppercase tracking-wider transition-colors ${
                  index === currentSlide ? "text-cyan-400" : "text-gray-400 group-hover:text-gray-300"
                }`}>
                  {slide.category}
                </div>
                <div className={`text-sm font-semibold transition-colors hidden sm:block ${
                  index === currentSlide ? "text-white" : "text-gray-300 group-hover:text-white"
                }`}>
                  {slide.shortTitle}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};