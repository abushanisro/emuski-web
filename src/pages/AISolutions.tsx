import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIServicesContent } from "@/components/AIServicesContent";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AISolutions = () => {
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
              src="/assets/hero-mobile/genaimobile.svg"
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

        {/* AI Services Content */}
        <AIServicesContent />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Transform Your Manufacturing with AI?
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Discover how Mithran can revolutionize your product development, supply chain, and cost optimization.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="inline-block bg-white text-emuski-teal-darker px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AISolutions;