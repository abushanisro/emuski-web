import { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    category: "Engineering Service",
    items: [
      { name: "Product Cost Estimation", link: "/precision-engineering#cost-estimation" },
      { name: "VAVE - Teardown & Benchmarking", link: "/precision-engineering#vave" },
      { name: "Strategic Sourcing Support", link: "/precision-engineering#sourcing" },
      { name: "Expert Engineer Support", link: "/precision-engineering#expert-support" },
    ]
  },
  {
    category: "Manufacturing Service",
    items: [
      { name: "Rapid Prototyping", link: "/manufacturing-services#prototyping" },
      { name: "On-demand Manufacturing", link: "/manufacturing-services#oem" },
    ]
  },
  {
    category: "Next-Gen AI - Mithran",
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
  const [activeCard, setActiveCard] = useState(0);
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % showcaseItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            OUR SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:border-emuski-teal-dark transition-colors duration-300 group transform hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-emuski-dark-blue mb-6 border-b pb-4">
                {service.category}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.link}
                      className="flex items-center justify-between group/item text-lg text-gray-700 hover:text-emuski-teal-darker transition-colors duration-200"
                    >
                      <span className="flex items-center">
                        {item.name}
                        {item.beta && (
                          <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-orange-100 text-orange-600 rounded-full border border-orange-200">
                            BETA
                          </span>
                        )}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover/item:text-emuski-teal-darker transition-colors duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Panel */}
          <div className="lg:col-span-1 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive engineering and manufacturing solutions designed to drive product value, cost optimization, and supply chain excellence through deep expertise and advanced technology.
            </p>
            
            <button
              onClick={() => setShowQuickMenu(!showQuickMenu)}
              className="mt-4 text-emuski-teal-darker hover:text-emuski-teal-dark font-medium flex items-center transition-colors"
            >
              Quick Lineup
              <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform ${showQuickMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {showQuickMenu && (
              <div className="mt-3 space-y-1 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                {showcaseItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="group flex flex-col py-2 px-3 -mx-2 rounded text-sm text-gray-600 hover:text-emuski-teal-darker hover:bg-emuski-teal/5 transition-all duration-200"
                  >
                    <div className="flex items-center">
                      <span className="w-1 h-1 bg-gray-400 group-hover:bg-emuski-teal-darker rounded-full mr-3 transition-colors"></span>
                      <span className="flex-1 flex items-center font-medium">
                        {item.title}
                        {item.title === "Mithran AI Platform" && (
                          <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-600 rounded border border-blue-200">
                            BETA
                          </span>
                        )}
                      </span>
                      <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Right Panel - Showcase Carousel */}
          <div className="lg:col-span-2">
            <div className="flex justify-end mb-4">
              <div className="flex space-x-2">
                <button
                  onClick={() => scroll('left')}
                  className="h-10 w-10 bg-emuski-teal-darker hover:bg-emuski-teal-darker/80 text-white border-emuski-teal-darker inline-flex items-center justify-center rounded-md border transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="h-10 w-10 bg-emuski-teal-darker hover:bg-emuski-teal-darker/80 text-white border-emuski-teal-darker inline-flex items-center justify-center rounded-md border transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Showcase Cards */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
            >
              {showcaseItems.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-80 sm:w-96 group bg-white border-gray-200 hover:border-emuski-teal-darker/50 transition-all duration-300 cursor-pointer overflow-hidden rounded-lg shadow-sm">
                  <Link to={item.link} className="block h-full hover:no-underline">
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
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};