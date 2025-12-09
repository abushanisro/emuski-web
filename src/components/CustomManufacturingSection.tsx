'use client'

import Link from "next/link";
import { Settings, Ruler, Cpu, Award, ArrowRight, Target } from "lucide-react";

export const CustomManufacturingSection = () => {
  return (
    <section id="custom-details" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emuski-teal/10 rounded-2xl mb-4">
              <Settings className="w-8 h-8 text-emuski-teal-darker" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Manufacturing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for unique requirements and specialized components
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Precision-Engineered Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every project is unique. Our custom manufacturing service specializes in producing complex, high-precision components that meet your exact specifications. From aerospace-grade tolerances to medical device compliance, we deliver quality that exceeds industry standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Ruler className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tight Tolerances</h4>
                    <p className="text-sm text-gray-600">±0.005mm precision capabilities with 5-axis CNC</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Complex Geometries</h4>
                    <p className="text-sm text-gray-600">Advanced machining for intricate designs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Material Expertise</h4>
                    <p className="text-sm text-gray-600">Metals, plastics, composites, and exotic alloys</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Our Capabilities:</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-emuski-teal-dark pl-4">
                  <h5 className="font-semibold text-gray-900 mb-1">5-Axis CNC Machining</h5>
                  <p className="text-sm text-gray-600">Complex parts with multiple features in a single setup</p>
                </div>
                <div className="border-l-4 border-emuski-teal-dark pl-4">
                  <h5 className="font-semibold text-gray-900 mb-1">Wire EDM & Sinker EDM</h5>
                  <p className="text-sm text-gray-600">Precision cutting for hardened materials</p>
                </div>
                <div className="border-l-4 border-emuski-teal-dark pl-4">
                  <h5 className="font-semibold text-gray-900 mb-1">Custom Fixtures & Jigs</h5>
                  <p className="text-sm text-gray-600">Specialized tooling for unique manufacturing needs</p>
                </div>
                <div className="border-l-4 border-emuski-teal-dark pl-4">
                  <h5 className="font-semibold text-gray-900 mb-1">Surface Treatments</h5>
                  <p className="text-sm text-gray-600">Anodizing, plating, coating, and finishing services</p>
                </div>
                <div className="border-l-4 border-emuski-teal-dark pl-4">
                  <h5 className="font-semibold text-gray-900 mb-1">Assembly Services</h5>
                  <p className="text-sm text-gray-600">Complete sub-assembly and final assembly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="bg-gradient-to-br from-emuski-teal-darker to-emuski-teal-dark rounded-2xl p-8 md:p-12 text-white mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Industries We Serve
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Aerospace & Defense</h4>
                <p className="text-sm text-white/90">Critical components with aerospace-grade standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Medical Devices</h4>
                <p className="text-sm text-white/90">FDA-compliant manufacturing for medical equipment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Automotive</h4>
                <p className="text-sm text-white/90">High-volume precision parts for automotive sector</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Industrial Equipment</h4>
                <p className="text-sm text-white/90">Heavy-duty components for industrial machinery</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Electronics</h4>
                <p className="text-sm text-white/90">Precision enclosures and electronic components</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Robotics</h4>
                <p className="text-sm text-white/90">Custom parts for robotics and automation systems</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">±0.005mm</div>
              <div className="text-sm text-gray-600">Precision Level</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">5-Axis</div>
              <div className="text-sm text-gray-600">CNC Capabilities</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">100+</div>
              <div className="text-sm text-gray-600">Materials Available</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">ISO</div>
              <div className="text-sm text-gray-600">Certified Quality</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Discuss Your Custom Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
