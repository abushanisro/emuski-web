import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";

export const metadata = {
  title: "Success Stories | EMUSKI Manufacturing Excellence",
  description: "Discover how EMUSKI has helped companies achieve breakthrough results in precision manufacturing, rapid prototyping, and engineering solutions.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 border-b border-border/30 overflow-hidden" style={{backgroundColor: 'rgb(18, 26, 33)'}}>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-4 sm:pt-5 md:pt-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Category Badge */}
                <div className="flex justify-center">
                  <span className="text-emuski-teal text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    Case Studies
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2">
                  Our Success Stories
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
                  Real results from real partnerships. Discover how EMUSKI has helped companies achieve breakthrough results in precision manufacturing, rapid prototyping, and engineering solutions.
                </p>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  From concept to delivery, we accelerate innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <SuccessStoriesSection />
    </div>
  );
}
