import { Link } from "react-router-dom";
import { Layers, Search, FileText, TrendingDown, ArrowRight, CheckCircle } from "lucide-react";

export const VAVESection = () => {
  return (
    <section id="vave-details" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emuski-teal/10 rounded-2xl mb-4">
              <Layers className="w-8 h-8 text-emuski-teal-darker" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              VAVE - Teardown & Benchmarking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive teardown benchmarking and cost optimization through Value Analysis & Value Engineering
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-emuski-teal-darker to-emuski-teal-dark rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What is VAVE?</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Value Analysis and Value Engineering (VAVE) is a systematic approach to improving the value of products by examining their function. Through detailed teardowns and competitive benchmarking, we identify opportunities to reduce costs while maintaining or improving quality.
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Physical Teardown</h5>
                  <p className="text-sm text-white/90">Complete disassembly and analysis of products</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Competitive Benchmarking</h5>
                  <p className="text-sm text-white/90">Compare against competitor products</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Cost-Function Analysis</h5>
                  <p className="text-sm text-white/90">Evaluate cost vs. functionality trade-offs</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Unlock Hidden Value
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our VAVE service provides deep insights into product design, material choices, and manufacturing processes. By systematically analyzing every component, we help you identify cost reduction opportunities while enhancing product value and competitiveness.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Detailed Analysis</h4>
                    <p className="text-sm text-gray-600">Component-level examination of materials, processes, and design</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Complete BOM Documentation</h4>
                    <p className="text-sm text-gray-600">Accurate bill of materials with sourcing information</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cost Reduction Roadmap</h4>
                    <p className="text-sm text-gray-600">Prioritized list of savings opportunities with implementation steps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VAVE Deliverables */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              VAVE Deliverables
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Teardown Report</h4>
                    <p className="text-sm text-gray-600">Detailed documentation with photos, measurements, and component analysis</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Complete BOM with Costs</h4>
                    <p className="text-sm text-gray-600">Line-by-line breakdown of all components with estimated costs</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Should-Cost Analysis</h4>
                    <p className="text-sm text-gray-600">Independent cost modeling to validate pricing and identify opportunities</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Cost Reduction Recommendations</h4>
                    <p className="text-sm text-gray-600">Actionable suggestions for design, material, and process improvements</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Competitive Benchmark</h4>
                    <p className="text-sm text-gray-600">Comparison with similar products in the market</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Implementation Roadmap</h4>
                    <p className="text-sm text-gray-600">Prioritized action plan with timelines and expected savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-emuski-teal-darker to-emuski-teal-dark rounded-2xl p-8 md:p-12 text-white mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Why Choose VAVE?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20-30%</div>
                <p className="text-white/90">Average cost reduction achieved</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <p className="text-white/90">Components analyzed per teardown</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2-3wks</div>
                <p className="text-white/90">Typical project duration</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Start Your VAVE Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
