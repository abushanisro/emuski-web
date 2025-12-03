import { useState, useRef, useEffect } from "react";
import { ChevronRight, ArrowRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: "manufacturing",
    category: "Manufacturing Service",
    tagline: "Precision at Scale",
    description: "Transform your ideas into reality with rapid prototyping and on-demand manufacturing solutions that deliver quality, speed, and innovation across automotive, aerospace, and industrial sectors.",
    gradient: "from-emuski-teal via-emuski-teal-dark to-emuski-teal-darker",
    accentColor: "bg-emuski-teal-darker",
    items: [
      {
        name: "On-Demand Manufacturing",
        link: "/manufacturing-services#on-demand",
      },
      {
        name: "Rapid Prototyping",
        link: "/manufacturing-services#prototyping",
      },
      {
        name: "Custom Manufacturing",
        link: "/manufacturing-services#custom",
      },
      {
        name: "Production Scaling",
        link: "/manufacturing-services#scaling",
      },
      {
        name: "Mithran AI Platform",
        link: "/solutions/ai#mithran-overview",
        beta: true,
      },
    ],
    relatedCategories: ["Manufacturing Services", "Next-GenAI"]
  },
  {
    id: "engineering",
    category: "Engineering Service",
    tagline: "Engineering Excellence",
    description: "Leverage deep engineering expertise to optimize costs, validate designs, and strategically source components with precision and efficiency. Our expert team delivers data-driven insights for competitive advantage.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    accentColor: "bg-emuski-teal-darker",
    items: [
      {
        name: "Product Cost Estimation",
        link: "/precision-engineering#cost-estimation",
      },
      {
        name: "VAVE - Teardown & Benchmarking",
        link: "/precision-engineering#vave",
      },
      {
        name: "Strategic Sourcing Support",
        link: "/precision-engineering#sourcing",
      },
      {
        name: "Expert Engineer Support",
        link: "/precision-engineering#expert-support",
      },
    ],
    relatedCategories: ["Precision Engineering", "Engineering Services", "Quality Assurance"]
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
    title: "On-Demand Manufacturing",
    category: "Manufacturing Services",
    description: "Flexible manufacturing solutions as you need them with high-precision components manufactured to demanding specifications.",
    image: "/assets/componets/Part-Photos/IMG-20250519-WA0016.jpg",
    link: "/manufacturing-services#on-demand"
  },
  {
    title: "Rapid Prototyping",
    category: "Manufacturing Services",
    description: "Fast and efficient prototyping services from concept to completion with precision and cost optimization.",
    image: "/assets/componets/forus/WhatsApp Image 2025-08-23 at 10.06.37 PM.jpeg",
    link: "/manufacturing-services#prototyping"
  },
  {
    title: "Custom Manufacturing",
    category: "Manufacturing Services",
    description: "Tailored manufacturing services meeting specific requirements with high-precision CNC machining capabilities.",
    image: "/assets/componets/Part-Photos/IMG-20250310-WA0011.jpg",
    link: "/manufacturing-services#custom"
  },
  {
    title: "Production Scaling",
    category: "Manufacturing Services",
    description: "Seamless scaling from prototype to full production with advanced assembly stations and workflow optimization.",
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
  const [showLeftGradient, setShowLeftGradient] = useState<{ [key: string]: boolean }>({});
  const [showRightGradient, setShowRightGradient] = useState<{ [key: string]: boolean }>({});
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const sectionScrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
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

  const handleScroll = (serviceId: string) => {
    const container = sectionScrollRefs.current[serviceId];
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftGradient(prev => ({ ...prev, [serviceId]: scrollLeft > 10 }));
      setShowRightGradient(prev => ({ ...prev, [serviceId]: scrollLeft < scrollWidth - clientWidth - 10 }));
    }
  };

  useEffect(() => {
    // Initialize gradient states
    servicesData.forEach(service => {
      const container = sectionScrollRefs.current[service.id];
      if (container) {
        setShowRightGradient(prev => ({ ...prev, [service.id]: true }));
        setShowLeftGradient(prev => ({ ...prev, [service.id]: false }));
      }
    });
  }, []);

  const scrollSection = (direction: 'left' | 'right', serviceId: string) => {
    const scrollContainer = sectionScrollRefs.current[serviceId];
    if (scrollContainer) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scroll = (direction: 'left' | 'right', serviceId: string) => {
    const scrollContainer = scrollRefs.current[serviceId];
    if (scrollContainer) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getFilteredShowcaseItems = (relatedCategories: string[]) => {
    return showcaseItems.filter(item =>
      relatedCategories.includes(item.category)
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-8 sm:py-10 bg-gradient-to-br from-slate-50 via-white to-slate-50"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-emuski-teal/10 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full px-4 sm:px-6 relative z-10">
        {/* Component Title */}
        <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emuski-teal-darker to-blue-600 rounded-full"></div>
        </div>

        {/* Services Sections */}
        <div className="space-y-10">
        {servicesData.map((service, serviceIndex) => {
          const filteredProjects = getFilteredShowcaseItems(service.relatedCategories);

          return (
            <div
              key={service.id}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${serviceIndex * 200}ms` }}
            >
              {/* Section Navigation */}
              <div className="flex items-center justify-end gap-2 mb-4">
                <button
                  onClick={() => scrollSection('left', service.id)}
                  className="p-2.5 rounded-lg bg-emuski-teal-darker text-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  aria-label="Scroll section left"
                >
                  <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
                </button>
                <button
                  onClick={() => scrollSection('right', service.id)}
                  className="p-2.5 rounded-lg bg-emuski-teal-darker text-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  aria-label="Scroll section right"
                >
                  <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>

              {/* Scrollable Section Wrapper */}
              <div className="relative">
                {/* Left Gradient Overlay */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emuski-teal via-emuski-teal-dark to-transparent pointer-events-none z-10 transition-opacity duration-500 ${showLeftGradient[service.id] ? 'opacity-30' : 'opacity-0'}`}
                  style={{
                    maskImage: 'linear-gradient(to right, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, black, transparent)'
                  }}
                ></div>

                {/* Right Gradient Overlay */}
                <div
                  className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-emuski-teal via-emuski-teal-dark to-transparent pointer-events-none z-10 transition-opacity duration-500 ${showRightGradient[service.id] ? 'opacity-30' : 'opacity-0'}`}
                  style={{
                    maskImage: 'linear-gradient(to left, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
                  }}
                ></div>

                {/* Horizontal Scroll Container */}
                <div
                  ref={(el) => (sectionScrollRefs.current[service.id] = el)}
                  onScroll={() => handleScroll(service.id)}
                  className="overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                  style={{ scrollbarWidth: 'none' }}
                >
                  {/* Service Section */}
                  <div className="flex gap-8 items-start min-w-full">

                    {/* Left Column - Service Info */}
                    <div className="flex-shrink-0 w-full lg:w-[400px]">
                  <div className="space-y-4">
                    {/* Category Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                      {service.category}
                    </h2>

                    {/* Description */}
                    <p className="text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Quick Links */}
                    <div className="pt-2">
                      <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-emuski-teal-darker" />
                        Quick Links
                      </h3>
                      <ul className="space-y-2">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              to={item.link}
                              className="group flex items-center gap-2 text-gray-700 hover:text-emuski-teal-darker transition-colors duration-200"
                            >
                              <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-emuski-teal-darker transition-colors"></span>
                              <span className="text-sm font-medium">{item.name}</span>
                              {item.beta && (
                                <span className="px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full">
                                  BETA
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column - Featured Projects */}
                <div className="flex-shrink-0 w-full lg:w-auto">
                  {filteredProjects.length > 0 && (
                    <div className="space-y-4">
                      {/* Projects Carousel */}
                      <div className="flex gap-6">
                        {filteredProjects.map((project, projectIndex) => (
                          <Link
                            key={projectIndex}
                            to={project.link}
                            className="flex-shrink-0 w-[340px] group"
                          >
                            <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emuski-teal-darker/40 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                              {/* Project Image */}
                              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                  <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md text-xs font-bold text-gray-900 rounded-full shadow-xl">
                                    {project.category}
                                  </span>
                                </div>
                              </div>

                              {/* Project Content */}
                              <div className="p-6">
                                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emuski-teal-darker transition-colors line-clamp-2">
                                  {project.title}
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                                  {project.description}
                                </p>

                                <div className="flex items-center gap-2 text-emuski-teal-darker font-semibold group-hover:gap-3 transition-all duration-300">
                                  <span className="text-sm">Learn More</span>
                                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                              </div>

                              {/* Bottom Accent */}
                              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emuski-teal via-emuski-teal-dark to-emuski-teal-darker transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                  </div>
                </div>
              </div>

              {/* Section Divider */}
              {serviceIndex < servicesData.length - 1 && (
                <div className="mt-10">
                  <div className="h-px bg-gradient-to-r from-emuski-teal via-emuski-teal-dark to-emuski-teal-darker opacity-20"></div>
                </div>
              )}
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};
