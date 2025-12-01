import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

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
        link: "/manufacturing-services#oem"
      },
      {
        category: "Custom Manufacturing",
        title: "Tailored Manufacturing Services",
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
        description: "From initial design and cost estimation to strategic sourcing and expert deployment, we provide integrated engineering services that drive efficiency, reduce costs, and accelerate your time-to-market.",
        image: "/assets/engineering/car.png",
        link: "/precision-engineering#cost-estimation"
      },
      {
        category: "VAVE & Benchmarking",
        title: "Teardown & Value Engineering",
        description: "Comprehensive teardown analysis and value engineering services to optimize product costs while maintaining quality standards and performance requirements.",
        image: "/assets/engineering/breadown.png",
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
        image: "/assets/mitran/dashboard.jpeg",
        link: "/solutions/ai#mithran-overview"
      },
      {
        category: "Smart Sourcing",
        title: "Intelligent Supplier Management",
        description: "AI-driven supplier identification, RFQ management, and quotation validation. Accelerate sourcing cycles by 30% with intelligent automation.",
        image: "/assets/mitran/sourcing.jpeg",
        link: "/solutions/ai#mithran-overview"
      }
    ]
  }
];

export const FeaturedTabs = () => {
  const [activeTab, setActiveTab] = useState("manufacturing");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex-wrap sm:flex-nowrap justify-center sm:justify-start bg-secondary border-b border-border rounded-none h-auto p-0 mb-8">
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
              <div className="grid md:grid-cols-2 gap-8">
                {tab.items.map((item, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full ${tab.id === 'manufacturing' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
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
                      <Link to={item.link || (tab.id === 'engineering' ? '/precision-engineering' : tab.id === 'manufacturing' ? '/manufacturing-services' : '/solutions/ai')}>
                        <Button variant="link" className="text-emuski-teal-darker hover:text-emuski-teal-dark p-0 h-auto font-semibold">
                          Read More →
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
