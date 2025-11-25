import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const serviceItems = [
  // Engineering Services
  {
    category: "Engineering Services",
    title: "Product Cost Estimation",
    description: "Data-driven cost models helping OEMs forecast and optimize product costs with precision.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    link: "/blog"
  },
  {
    category: "Engineering Services",
    title: "VAVE - Teardown & Benchmarking",
    description: "Comprehensive analysis identifying cost reduction opportunities through detailed teardown and benchmarking studies.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&q=80",
    link: "/blog"
  },
  {
    category: "Engineering Services",
    title: "Strategic Sourcing Support",
    description: "End-to-end sourcing solutions connecting OEMs with reliable, cost-effective quality suppliers.",
    image: "https://images.unsplash.com/photo-1566207474742-de921626ad0c?w=400&q=80",
    link: "/blog"
  },
  {
    category: "Engineering Services",
    title: "Expert Engineer Support",
    description: "Experienced Should-Costing and VAVE Engineers integrated seamlessly into your project teams.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
    link: "/blog"
  },
  // Manufacturing Services
  {
    category: "Manufacturing Services",
    title: "Rapid Prototyping",
    description: "Fast-turn prototypes bringing concepts to life with advanced NPD Center capabilities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    link: "/blog"
  },
  {
    category: "Manufacturing Services",
    title: "On-demand Manufacturing",
    description: "Flexible production solutions adapting to evolving OEM requirements with precision and speed.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    link: "/blog"
  },
  // Next-Gen AI Services
  {
    category: "Next-Gen AI",
    title: "Mithran AI Platform",
    description: "AI-powered platform delivering 30% faster sourcing cycles and 15% cost savings for OEMs.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
    link: "/blog"
  },
];

const quickLineupServices = [
  {
    title: "Product Cost Estimation",
    category: "Engineering Services",
    link: "/blog"
  },
  {
    title: "VAVE - Teardown & Benchmarking", 
    category: "Engineering Services",
    link: "/blog"
  },
  {
    title: "Strategic Sourcing Support",
    category: "Engineering Services", 
    link: "/blog"
  },
  {
    title: "Expert Engineer Support",
    category: "Engineering Services",
    link: "/blog"
  },
  {
    title: "Rapid Prototyping",
    category: "Manufacturing Services",
    link: "/blog"
  },
  {
    title: "On-demand Manufacturing",
    category: "Manufacturing Services", 
    link: "/blog"
  },
  {
    title: "Mithran AI Platform",
    category: "Next-Gen AI",
    link: "/blog"
  }
];

export const DataCenterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQuickLineup, setShowQuickLineup] = useState(false);
  const itemsPerView = window.innerWidth < 1024 ? 1 : 3;
  const maxIndex = Math.max(0, serviceItems.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const toggleQuickLineup = () => {
    setShowQuickLineup(prev => !prev);
  };

  return (
    <>
      <div className="h-16" />

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Left Side - Title and Description */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Our Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive engineering and manufacturing solutions designed to drive product value, cost optimization, and supply chain excellence through deep expertise and advanced technology.
              </p>
              
              {/* Quick Lineup */}
              <button
                onClick={toggleQuickLineup}
                className="mt-4 text-emuski-teal hover:text-emuski-teal-dark font-medium flex items-center transition-colors"
              >
                Quick Lineup
                <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform ${showQuickLineup ? 'rotate-180' : ''}`} />
              </button>
              
              {showQuickLineup && (
                <div className="mt-3 space-y-1">
                  {quickLineupServices.map((service, index) => (
                    <a 
                      key={index}
                      href={service.link} 
                      className="group flex items-center py-1 px-2 -mx-2 rounded text-sm text-gray-600 hover:text-emuski-teal hover:bg-emuski-teal/5 transition-all duration-200"
                    >
                      <span className="w-1 h-1 bg-gray-400 group-hover:bg-emuski-teal rounded-full mr-3 transition-colors"></span>
                      <span className="flex-1 flex items-center">
                        {service.title}
                        {service.title === "Mithran AI Platform" && (
                          <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-600 rounded border border-blue-200">
                            BETA
                          </span>
                        )}
                      </span>
                      <svg className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Carousel and Navigation */}
            <div className="lg:col-span-2">
              {/* Navigation Arrows */}
              <div className="hidden lg:flex justify-end mb-4">
                <div className="flex space-x-2">
                  <Button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 bg-emuski-teal hover:bg-emuski-teal/90 text-white border-emuski-teal disabled:opacity-50"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={nextSlide}
                    disabled={currentIndex === maxIndex}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 bg-emuski-teal hover:bg-emuski-teal/90 text-white border-emuski-teal disabled:opacity-50"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                >
                  {serviceItems.map((item, index) => (
                    <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-2">
                      <Card className="group overflow-hidden bg-white border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 h-full">
                        <a href={item.link} className="block h-full hover:no-underline">
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
                              <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">Service</span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                              {item.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              {/* Mobile Navigation */}
              <div className="lg:hidden flex justify-center mt-4">
                <div className="flex space-x-2">
                    <Button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 bg-emuski-teal hover:bg-emuski-teal/90 text-white border-emuski-teal disabled:opacity-50"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        onClick={nextSlide}
                        disabled={currentIndex === maxIndex}
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 bg-emuski-teal hover:bg-emuski-teal/90 text-white border-emuski-teal disabled:opacity-50"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
              </div>
            </div>
          </div>
           {/* Mobile Services */}
           <div className="lg:hidden mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceItems.map((item, index) => (
                      <a key={index} href={item.link} className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-md font-bold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                      </a>
                  ))}
              </div>
            </div>
        </div>
      </section>
    </>
  );
};
