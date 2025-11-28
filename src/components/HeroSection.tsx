import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Slide {
  image: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: "/assets/hero/manufaturing.svg",
    category: "Manufacturing",
    title: "Manufacturing Excellence", 
    shortTitle: "Manufacturing",
    description: "Accelerating innovation and scaling production with flexible, technology-enabled capabilities.",
    link: "/manufacturing-services",
  },
  {
    image: "/assets/hero/engineering.svg",
    category: "Engineering",
    title: "Engineering Excellence",
    shortTitle: "Engineering",
    description: "Driving product value, cost optimization, and supply chain strength through deep expertise and technology.",
    link: "/precision-engineering",
  },
  {
    image: "/assets/hero/genai.svg",
    category: "Next-Gen AI",
    title: "Next-Gen AI - Mithran",
    shortTitle: "NextGen AI",
    description: "AI-powered intelligence for smarter product development, supply chain, and cost optimization.",
    link: "/solutions/ai",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const SLIDE_DURATION = 5000; // 5 seconds

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
        // Auto-advance to next slide
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
    <div className="relative w-full overflow-hidden"
         style={{ 
           minHeight: '100svh',
           height: '100svh'
         }}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Background Image/SVG */}
          <div className="absolute inset-0">
            <div 
              className="w-full h-full bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'center center',
                backgroundAttachment: 'scroll',
                backgroundSize: 'cover',
                minHeight: '100svh',
                height: '100svh'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-24 lg:py-0">
            <div className="w-full max-w-7xl mx-auto">
              <div className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in">
                <span className="inline-block text-emuski-teal text-xs sm:text-sm lg:text-base font-semibold tracking-wider uppercase">
                  {slide.category}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-5xl mx-auto lg:mx-0">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-4xl mx-auto lg:mx-0">
                  {slide.description}
                </p>
                <div className="pt-4 sm:pt-6">
                  <Link 
                    to={slide.link}
                    className="inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white font-semibold text-base sm:text-lg lg:text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Mobile Navigation */}
          <div className="sm:hidden">
            <div className="flex items-center justify-between py-4">
              <button onClick={handlePrev} className="text-white p-3 hover:bg-white/10 rounded-full transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex-1 text-center px-4">
                <div className="text-xs uppercase tracking-wider text-emuski-teal mb-1">{slides[currentSlide].category}</div>
                <div className="text-sm font-semibold text-white">{slides[currentSlide].shortTitle}</div>
                <div className="flex justify-center mt-2 space-x-1">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleTabClick(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-emuski-teal' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <button onClick={handleNext} className="text-white p-3 hover:bg-white/10 rounded-full transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden sm:grid grid-cols-3 gap-0">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`relative py-6 px-4 text-left transition-all duration-300 group ${index === currentSlide
                  ? "bg-white/10"
                  : "hover:bg-white/5"
                  }`}
              >
                {/* Progress Bar */}
                {index === currentSlide && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
                    <div
                      className="h-full bg-emuski-teal transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                {/* Tab Content */}
                <div className="space-y-1">
                  <div
                    className={`text-xs uppercase tracking-wider transition-colors ${index === currentSlide
                      ? "text-emuski-teal"
                      : "text-white group-hover:text-gray-300"
                      }`}
                  >
                    {slide.category}
                  </div>
                  <div
                    className={`text-sm font-semibold transition-colors ${index === currentSlide
                      ? "text-white"
                      : "text-white group-hover:text-gray-200"
                      }`}
                  >
                    {slide.shortTitle}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
