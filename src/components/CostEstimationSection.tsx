'use client'

import Link from "next/link";
import { Calculator, TrendingDown, Target, BarChart3, ArrowRight, CheckCircle } from "lucide-react";

export const CostEstimationSection = () => {
  return (
    <section id="cost-estimation-details" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emuski-teal/10 rounded-2xl mb-4">
              <Calculator className="w-8 h-8 text-emuski-teal-darker" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Cost Estimation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turning data into competitive advantage with real-time cost intelligence
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Data-Driven Cost Intelligence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Understanding your true product costs is critical for making strategic decisions. Our comprehensive cost estimation service provides accurate, detailed breakdowns of manufacturing costs, helping you optimize designs, negotiate with suppliers, and maintain healthy margins.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Bottom-Up Costing</h4>
                    <p className="text-sm text-gray-600">Detailed analysis of materials, labor, and overhead costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Benchmarking Analysis</h4>
                    <p className="text-sm text-gray-600">Compare against industry standards and best practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cost Reduction Opportunities</h4>
                    <p className="text-sm text-gray-600">Identify areas for optimization and savings</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emuski-teal-darker to-emuski-teal-dark rounded-2xl shadow-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">What You Get:</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Detailed Cost Breakdown</p>
                    <p className="text-sm text-white/90">Line-by-line analysis of all cost components</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Material & Process Analysis</p>
                    <p className="text-sm text-white/90">Identify optimal materials and manufacturing methods</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Supplier Quote Validation</p>
                    <p className="text-sm text-white/90">Verify pricing accuracy and reasonableness</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Design Optimization Recommendations</p>
                    <p className="text-sm text-white/90">Suggestions to reduce manufacturing costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Negotiation Support</p>
                    <p className="text-sm text-white/90">Data-backed insights for supplier negotiations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              When to Use Cost Estimation
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emuski-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-emuski-teal-darker" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Design Phase</h4>
                <p className="text-sm text-gray-600">Evaluate manufacturing costs early to guide design decisions and material selection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emuski-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-emuski-teal-darker" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Supplier Evaluation</h4>
                <p className="text-sm text-gray-600">Validate supplier quotes and identify overpricing before awarding contracts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emuski-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-emuski-teal-darker" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Cost Reduction Projects</h4>
                <p className="text-sm text-gray-600">Identify specific cost drivers and opportunities for savings in existing products</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Estimation Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">CAD Review</h4>
                <p className="text-sm text-gray-600">Analyze design files and specifications</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Process Planning</h4>
                <p className="text-sm text-gray-600">Define optimal manufacturing processes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Cost Calculation</h4>
                <p className="text-sm text-gray-600">Build detailed cost models</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Report & Recommendations</h4>
                <p className="text-sm text-gray-600">Deliver insights and optimization strategies</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">±5%</div>
              <div className="text-sm text-gray-600">Accuracy Level</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">3-5</div>
              <div className="text-sm text-gray-600">Days Turnaround</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">15-25%</div>
              <div className="text-sm text-gray-600">Avg. Savings Identified</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">500+</div>
              <div className="text-sm text-gray-600">Products Analyzed</div>
            </div>
          </div>

          {/* Our Methodology */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Methodology</h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                A structured, transparent process ensuring quality outcomes at every stage.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/assets/infographic/manufacturing-methodology-infographic.svg" alt="Manufacturing Methodology Process" className="max-w-full h-auto rounded-lg" />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Your Cost Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
