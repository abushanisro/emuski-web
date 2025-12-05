import React from 'react';

interface ManufacturingSlideProps {
  slideNumber: number;
  title?: string;
  description?: string;
}

const ManufacturingSlide: React.FC<ManufacturingSlideProps> = ({ 
  slideNumber, 
  title = "Manufacturing Excellence", 
  description = "Advanced manufacturing solutions powered by precision engineering" 
}) => {
  return (
    <section className="relative w-full min-h-[60vh] bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(79,211,212,0.1)_35%,rgba(79,211,212,0.1)_65%,transparent_65%)] bg-[length:20px_20px]" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
          <div className="relative group">
            {/* Decorative Border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emuski-teal/20 to-emuski-teal-dark/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            {/* Image Wrapper */}
            <div className="relative bg-white rounded-xl shadow-2xl p-6 border border-emuski-teal/10 group-hover:shadow-3xl transition-all duration-500">
              <img 
                alt={`Manufacturing Process ${slideNumber}`}
                className="w-full h-auto object-contain max-h-[50vh] lg:max-h-[60vh] animate-fade-in group-hover:scale-[1.02] transition-transform duration-700"
                src={`/assets/manufacturingservices/${slideNumber}.svg`}
              />
              
              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-6 bg-gradient-to-t from-white/5 to-transparent rounded-lg pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div className="flex-1 max-w-lg lg:max-w-xl p-4 lg:p-8">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-emuski-teal/10 text-emuski-teal-darker rounded-full text-sm font-medium border border-emuski-teal/20">
              <div className="w-2 h-2 bg-emuski-teal rounded-full mr-2 animate-pulse" />
              Manufacturing Process {slideNumber}
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <div className="w-1.5 h-1.5 bg-emuski-teal rounded-full mr-3" />
                <span className="text-sm font-medium">Precision Engineering</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-1.5 h-1.5 bg-emuski-teal rounded-full mr-3" />
                <span className="text-sm font-medium">Quality Assurance</span>
              </div>
              <div className="flex items-center text-gray-700">
                <div className="w-1.5 h-1.5 bg-emuski-teal rounded-full mr-3" />
                <span className="text-sm font-medium">Advanced Technology</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="inline-flex items-center px-6 py-3 bg-emuski-teal hover:bg-emuski-teal-dark text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emuski-teal/25 group">
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emuski-teal to-transparent" />
    </section>
  );
};

export { ManufacturingSlide };