import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const successStories = [
  {
    category: "Healthcare",
    title: "FDA Approval Accelerated",
    subtitle: "Leading Medical Device Manufacturer", 
    description: "EMUSKI's precision manufacturing helped accelerate FDA approval by delivering medical device components that exceeded quality standards and regulatory requirements.",
    pdfPath: "/casestudy/CASE STUDY - ASSY CHASSIS LADDER FRAME, HGV, 4x2x 4M..pdf"
  },
  {
    category: "Space Technology", 
    title: "Zero-Defect Mission Success",
    subtitle: "Space Technology Pioneer",
    description: "Critical aerospace components manufactured by EMUSKI achieved 100% mission success rate in demanding space environments with zero component failures.",
    pdfPath: "/casestudy/CASE STUDY - EXHAUST SYSTEM..pdf"
  },
  {
    category: "Defense",
    title: "$12M Annual Partnership", 
    subtitle: "Defense Supplier",
    description: "EMUSKI earned a 5-year defense partnership valued at $12M annually by exceeding military specifications and stringent security requirements.",
    pdfPath: "/casestudy/SC-Report-270825-Pilot-R01.pdf"
  },
  {
    category: "Power Electronics",
    title: "DC-DC Converter Innovation",
    subtitle: "Power Systems Engineering",
    description: "EMUSKI developed advanced DC-DC converter solutions delivering superior efficiency and reliability for critical power conversion applications.",
    pdfPath: "/casestudy/DC DC Convertor Final Report.pdf"
  },
  {
    category: "Aerospace",
    title: "30% Weight Reduction",
    subtitle: "Aerospace OEM", 
    description: "Advanced engineering solutions reduced component weight by 30% while improving structural integrity for next-generation aircraft applications.",
    pdfPath: "/casestudy/CASE STUDY - ASSY CHASSIS LADDER FRAME, HGV, 4x2x 4M..pdf"
  }
];

export const SuccessStoriesSection = () => {
  const openPDF = (pdfPath: string, title: string) => {
    window.open(pdfPath, '_blank');
  };


  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
          Success Stories
        </h2>
        
        <div className="grid grid-cols-1 gap-8">
          {successStories.map((story, index) => (
            <div 
              key={index}
              className="rounded-lg border text-card-foreground shadow-sm bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Header Section */}
              <div className="p-6 border-b border-border">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary rounded-sm mb-3">
                    <span className="text-emuski-teal-darker text-sm font-medium">
                      {story.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                    {story.title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {story.subtitle}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>

              {/* PDF Embed Section */}
              <div className="p-2 sm:p-4">
                <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <iframe
                    src={story.pdfPath}
                    className="w-full h-full border-0"
                    title={`${story.title} - Case Study PDF`}
                    loading="lazy"
                  >
                  </iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};