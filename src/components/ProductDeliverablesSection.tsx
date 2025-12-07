import React from 'react';
import { FileText, Download, Check } from 'lucide-react';
import { LazyPDFViewer } from './LazyPDFViewer';

const deliverables = [
  "Project Details",
  "Part Details",
  "MFG process Plan",
  "Mill TC",
  "Balloon Drawing",
  "Final Inspection Report",
  "Dock Audit Check List",
  "Product Image",
  "Key Learnings"
];

const ProductDeliverablesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">OUR PRODUCT DELIVERABLES INCLUDE</h2>
            <h3 className="text-xl font-semibold text-gray-600 mb-8 text-left">PROJECT DELIVERY REPORT</h3>

            <div className="space-y-4">
              {deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 opacity-0"
                  style={{
                    animation: `fadeIn 0.5s ease-in-out forwards`,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-emuski-teal/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emuski-teal-darker" />
                    </div>
                  </div>
                  <span className="text-base font-medium text-gray-700 whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {/* Project Delivery Report PDF Viewer */}
            <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-emuski-teal-dark to-emuski-teal-darker p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Case Study</h4>
                    <p className="text-white/80 text-xs">Exhaust System Manufacturing</p>
                  </div>
                </div>
                <a
                  href="/assets/documents/Project_Delivery_Report.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-white text-emuski-teal-darker px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
              </div>
              <LazyPDFViewer
                src="/assets/documents/Project_Delivery_Report.pdf"
                title="Case Study - Exhaust System Manufacturing"
                ariaLabel="Interactive PDF viewer displaying comprehensive project delivery report with manufacturing deliverables and quality assurance documentation"
                minHeight="500px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDeliverablesSection;