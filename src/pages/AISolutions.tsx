import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
const aiSolutionsHero = "/ai-solutions-hero.jpg";
import { Brain, Sparkles, Database, Network, Code, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AISolutions = () => {
  const [activeTab, setActiveTab] = useState("overview");

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/assets/hero/genai.svg" // Using the general AI hero image
              alt="AI Solutions"
              className="hidden md:block w-full h-full object-cover opacity-60"
            />
            <img
              src="/assets/hero-mobile/genai.svg"
              alt="AI Solutions"
              className="block md:hidden w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 py-24 md:py-32">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Next-GenAI - Mithran
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                AI-powered intelligence for smarter product development, supply chain, and cost optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-4">
                <a href="#mithran-overview" className="bg-emuski-teal-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-emuski-teal-darker transition-colors text-center">
                  Learn More
                </a>
                <Link to="/contact" className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mithran Overview Section */}
        <section id="mithran-overview" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  What is Mithran?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  EMUSKI is building Mithran, a next-generation AI-driven engineering and manufacturing platform that acts as a digital backbone for OEMs. It is designed to simplify the entire product lifecycle—from design and costing to supplier management and project execution.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By combining automation, artificial intelligence, supplier networking, and real-time monitoring, Mithran will transform traditional workflows into a smart, data-driven ecosystem.
                </p>
              </div>
              </div>
            
            {/* How Mithran Will Work Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">How Mithran Will Work</h2>
              <p className="text-xl text-muted-foreground mb-8 text-center">Mithran enables OEMs to:</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Upload CAD drawings and automatically generate structured BOMs
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Streamlined design-to-BOM conversion process
                  </p>
                </Card>
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Get AI-driven process planning and accurate cost estimation
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Smart cost optimization and planning automation
                  </p>
                </Card>
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Identify capable suppliers, manage RFQs, and validate quotations
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Intelligent supplier network management
                  </p>
                </Card>
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Collaborate on design-for-manufacturing reviews and finalize production-ready drawings
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Enhanced DFM collaboration workflows
                  </p>
                </Card>
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Monitor projects and logistics in real time for faster, risk-free execution
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Real-time project visibility and control
                  </p>
                </Card>
              </div>
            </div>

            {/* Why It Matters Section */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why It Matters</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Mithran is being built to:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-muted-foreground">
                  <li>Accelerate design-to-production cycles</li>
                  <li>Reduce manual effort and errors</li>
                  <li>Optimize sourcing and cost validation</li>
                  <li>Provide end-to-end visibility and smarter decision-making</li>
                </ul>
                <div className="mt-8 space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-foreground">30% faster sourcing cycles</h4>
                    <p className="text-muted-foreground text-sm">Accelerated procurement and supplier validation</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-foreground">15% cost savings through accurate cost validation</h4>
                    <p className="text-muted-foreground text-sm">AI-powered cost optimization and validation</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <img src="/assets/mitran/rawmaterial.jpeg" alt="Mithran Raw Material Analysis" className="rounded-lg shadow-lg" />
                <img src="/assets/mitran/sourcing.jpeg" alt="Mithran Sourcing" className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Looking Ahead Section */}
            <div className="mt-16 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Looking Ahead</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                EMUSKI is building Mithran to help OEMs gain AI-powered intelligence, stronger control, and global competitiveness. Once launched, Mithran will be the platform that connects engineering precision with data-driven decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/10 border-t border-b border-primary/20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Manufacturing with AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how Mithran can revolutionize your product development, supply chain, and cost optimization.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
                Request a Demo
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AISolutions;