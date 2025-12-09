'use client'

import Link from "next/link";
import { Lightbulb, Layers, RefreshCw, CheckCircle, ArrowRight } from "lucide-react";

export const RapidPrototypingSection = () => {
  return (
    <section id="prototyping-details" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emuski-teal/10 rounded-2xl mb-4">
              <Lightbulb className="w-8 h-8 text-emuski-teal-darker" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rapid Prototyping
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to reality in record time with advanced prototyping technologies
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-emuski-teal-darker to-emuski-teal-dark rounded-2xl shadow-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Multi-Technology Approach</h4>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="font-semibold mb-2">CNC Machining</h5>
                  <p className="text-sm text-white/90">3-axis to 5-axis precision for metal and plastic prototypes</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="font-semibold mb-2">3D Printing (SLA/SLS)</h5>
                  <p className="text-sm text-white/90">Complex geometries and rapid iterations</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Vacuum Casting</h5>
                  <p className="text-sm text-white/90">Production-quality parts in silicone molds</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Sheet Metal Prototypes</h5>
                  <p className="text-sm text-white/90">Fast turnaround for enclosures and brackets</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Accelerate Your Development Cycle
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Speed is critical in product development. Our rapid prototyping services combine multiple manufacturing technologies to deliver functional prototypes in days, not weeks. Test, validate, and refine your designs quickly to reduce time-to-market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Rapid Iterations</h4>
                    <p className="text-sm text-gray-600">Quick design modifications and re-runs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Multi-Material Options</h4>
                    <p className="text-sm text-gray-600">Metals, plastics, resins, and composites</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Functional Testing</h4>
                    <p className="text-sm text-gray-600">Working prototypes for real-world validation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Prototyping Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Design Review</h4>
                <p className="text-sm text-gray-600">Analyze CAD files and suggest optimizations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Technology Selection</h4>
                <p className="text-sm text-gray-600">Choose the best method for your requirements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Rapid Manufacturing</h4>
                <p className="text-sm text-gray-600">Produce prototypes with quick turnaround</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Iterate & Refine</h4>
                <p className="text-sm text-gray-600">Test, feedback, and design improvements</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">3-5</div>
              <div className="text-sm text-gray-600">Days Turnaround</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">±0.005mm</div>
              <div className="text-sm text-gray-600">Tolerance</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">50+</div>
              <div className="text-sm text-gray-600">Materials</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">1000+</div>
              <div className="text-sm text-gray-600">Prototypes/Year</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Start Your Prototyping Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
