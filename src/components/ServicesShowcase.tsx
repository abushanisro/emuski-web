import { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    category: "Manufacturing Service",
    iconSvg: "/assets/Manufacturing.svg",
    gradient: "from-emuski-teal to-emuski-teal-dark",
    items: [
      { name: "Rapid Prototyping", link: "/manufacturing-services#prototyping" },
      { name: "On-demand Manufacturing", link: "/manufacturing-services#oem" },
    ]
  },
  {
    category: "Engineering Service",
    iconSvg: "/assets/engineering.svg",
    gradient: "from-blue-500 to-cyan-500",
    items: [
      { name: "Product Cost Estimation", link: "/precision-engineering#cost-estimation" },
      { name: "VAVE - Teardown & Benchmarking", link: "/precision-engineering#vave" },
      { name: "Strategic Sourcing Support", link: "/precision-engineering#sourcing" },
      { name: "Expert Engineer Support", link: "/precision-engineering#expert-support" },
    ]
  },
  {
    category: "Next-Gen AI - Mithran",
    iconSvg: "/assets/AI-mitran.svg",
    gradient: "from-purple-500 to-pink-500",
    items: [
      { name: "Mithran AI Platform", link: "/solutions/ai#mithran-overview", beta: true },
    ]
  }
];

const showcaseItems = [
  {
    title: "CNC Machining Excellence",
    category: "Precision Engineering",
    description: "High-precision CNC machining capabilities delivering complex geometries with tight tolerances for automotive and aerospace applications.",
    image: "/assets/componets/Part-Photos/IMG-20250310-WA0011.jpg",
    link: "/precision-engineering#cnc"
  },
  {
    title: "Component Design & Validation",
    category: "Engineering Services",
    description: "Complete product development lifecycle from concept to production, including rapid prototyping and validation services.",
    image: "/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
    link: "/precision-engineering#design"
  },
  {
    title: "Quality Control Systems",
    category: "Quality Assurance",
    description: "Advanced quality inspection and testing protocols ensuring every component meets exact specifications and industry standards.",
    image: "/assets/componets/Part-Photos/IMG-20250519-WA0016.jpg",
    link: "/precision-engineering#quality"
  },
  {
    title: "Production Line Excellence",
    category: "Manufacturing Services",
    description: "Professional production line setup and manufacturing excellence with advanced assembly stations and workflow optimization.",
    image: "/assets/componets/Matica-Photos2/DSC_1008.JPG",
    link: "/manufacturing-services#scaling"
  },
  {
    title: "Mithran AI Platform",
    category: "Next-GenAI",
    description: "AI-powered intelligence for smarter product development, supply chain, and cost optimization delivering measurable results for OEMs.",
    image: "/assets/componets/3-Oct-25/WhatsApp Image 2025-08-28 at 10.34.17 AM.jpeg",
    link: "/solutions/ai#mithran-overview"
  }
];

export const ServicesShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emuski-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Engineering & Manufacturing Excellence
          </h2>

          <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Complete solutions from precision engineering to AI-powered manufacturing, designed to transform your production capabilities
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 hover:border-emuski-teal-darker/30 transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Title Card Image */}
              <div className="relative h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
                {/* SVG Image - Full Size */}
                <div className="relative w-full h-full p-8 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={service.iconSvg}
                    alt={service.category}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Animated Indicator */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} transition-all duration-300 ${hoveredCard === index ? 'scale-150 animate-pulse' : 'scale-100'}`}></div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8">
                <h3 className="relative text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100 group-hover:border-emuski-teal-darker/30 transition-colors">
                  {service.category}
                </h3>

              <ul className="relative space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.link}
                      className="flex items-center justify-between group/item p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    >
                      <span className="flex items-center gap-3 text-gray-700 group-hover/item:text-emuski-teal-darker transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-emuski-teal-darker transition-colors"></span>
                        <span className="font-medium">{item.name}</span>
                        {item.beta && (
                          <span className="px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full shadow-sm animate-pulse">
                            BETA
                          </span>
                        )}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover/item:text-emuski-teal-darker group-hover/item:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emuski-teal-darker to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Interactive Showcase */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Industry-Leading Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Comprehensive engineering and manufacturing solutions designed to drive product value, cost optimization, and supply chain excellence through deep expertise and advanced technology.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emuski-teal-darker to-emuski-teal-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Panel - Showcase Carousel */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Featured Projects</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="group flex items-center justify-center w-10 h-10 rounded-lg bg-white border-2 border-gray-200 hover:border-emuski-teal-darker hover:bg-emuski-teal-darker text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="group flex items-center justify-center w-10 h-10 rounded-lg bg-white border-2 border-gray-200 hover:border-emuski-teal-darker hover:bg-emuski-teal-darker text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Showcase Cards */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {showcaseItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="flex-shrink-0 w-[320px] sm:w-[360px] group snap-start"
                >
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 hover:border-emuski-teal-darker/30 transition-all duration-500 transform hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-bold text-gray-900 rounded-full shadow-lg border border-gray-200">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emuski-teal-darker transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-2 text-emuski-teal-darker font-semibold group-hover:gap-3 transition-all duration-300">
                        <span className="text-sm">Learn More</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emuski-teal via-emuski-teal-dark to-emuski-teal-darker transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
