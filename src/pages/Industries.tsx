import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Rocket, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Industries = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
  const industries = [
    {
      icon: <Activity className="h-12 w-12 text-primary" />,
      title: "Healthcare & Medical Devices",
      description: "Precision-manufactured medical components and devices meeting stringent FDA requirements, supporting life-saving technologies with exceptional quality standards.",
      image: "/assets/componets/Part-Photos/IMG-20250519-WA0016.jpg"
    },
    {
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "Space Technology & Aerospace",
      description: "High-precision components for aerospace and space applications, delivering critical parts that withstand extreme environments with zero-defect manufacturing.",
      image: "/assets/componets/Part-Photos/IMG-20250310-WA0011.jpg"
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Defense & Critical Systems",
      description: "Mission-critical components for defense applications, meeting military specifications with advanced quality systems and stringent security protocols.",
      image: "/assets/componets/3-Oct-25/cent_fixture/WhatsApp Image 2025-10-27 at 3.21.23 PM.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-emuski-teal-darker text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{color: 'rgb(18, 26, 33)'}}>
                Precision Manufacturing for Critical Industries
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                EMUSKI delivers precision-engineered components for healthcare, space technology, and defense applications where quality, reliability, and performance are mission-critical.
              </p>
              
              <div className="h-1 w-24 bg-white rounded-full mx-auto"></div>
              
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-background">
          <div id="automotive"></div>
          <div id="electronics"></div>
          <div id="medical"></div>
          <div id="aerospace"></div>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Critical Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized manufacturing solutions for mission-critical applications where precision and reliability are paramount
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-emuski-teal-dark transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {industry.description}
                    </p>
                    <Link to="/contact">
                      <Button variant="link" className="text-emuski-teal-darker hover:text-emuski-teal-dark p-0 h-auto font-semibold">
                        Learn More →
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <SuccessStoriesSection />

        {/* CTA Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-emuski-teal-darker text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="text-white/80 text-sm font-semibold tracking-wider uppercase">
                Precision Manufacturing
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Partner with EMUSKI for Mission-Critical Components
              </h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Connect with our engineering experts to explore precision manufacturing solutions for healthcare, space technology, and defense applications.
              </p>
              <div className="h-1 w-16 sm:w-20 md:w-24 bg-white rounded-full mx-auto"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact">
                  <Button className="bg-white text-emuski-teal-darker hover:bg-gray-100 font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg">
                    Contact Sales
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="border border-white bg-transparent text-white hover:bg-white hover:text-emuski-teal-darker font-semibold px-4 py-2 text-base">
                    Download Whitepaper
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <FAQSection 
          compact={true} 
          maxItems={6} 
          showCategories={false}
          usePageSpecific={true}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
