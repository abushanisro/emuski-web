import { Link } from "react-router-dom";
import { ShoppingCart, Globe, Shield, Users, ArrowRight, CheckCircle } from "lucide-react";

export const SourcingDetailsSection = () => {
  return (
    <section id="sourcing-details" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emuski-teal/10 rounded-2xl mb-4">
              <ShoppingCart className="w-8 h-8 text-emuski-teal-darker" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Sourcing Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end sourcing solutions from supplier scouting to quality audits
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Navigate Global Supply Chains with Confidence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Finding the right suppliers is challenging. Our strategic sourcing service leverages our extensive global network and deep industry expertise to connect you with qualified suppliers that meet your quality, cost, and delivery requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global Network</h4>
                    <p className="text-sm text-gray-600">Access to pre-vetted suppliers across Asia, Europe, and Americas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quality Assurance</h4>
                    <p className="text-sm text-gray-600">Comprehensive supplier audits and capability assessments</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Negotiation Expertise</h4>
                    <p className="text-sm text-gray-600">Professional support for contracts and pricing negotiations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Our Sourcing Process:</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Requirements Analysis</h5>
                    <p className="text-sm text-gray-600">Understand your technical, quality, and commercial requirements</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Supplier Identification</h5>
                    <p className="text-sm text-gray-600">Scout and shortlist capable suppliers from our network</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">RFQ Management</h5>
                    <p className="text-sm text-gray-600">Manage quote requests and evaluate responses</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Supplier Audit</h5>
                    <p className="text-sm text-gray-600">Conduct on-site quality and capability assessments</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emuski-teal-dark text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Negotiation & Contracting</h5>
                    <p className="text-sm text-gray-600">Support pricing negotiations and contract finalization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Breakdown */}
          <div className="bg-gradient-to-br from-emuski-teal-darker to-emuski-teal-dark rounded-2xl p-8 md:p-12 text-white mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Comprehensive Sourcing Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-2">Supplier Scouting</h4>
                <p className="text-sm text-white/90">Identify and qualify new suppliers globally</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-2">Quality Audits</h4>
                <p className="text-sm text-white/90">On-site assessments of capabilities and systems</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-2">Negotiation Support</h4>
                <p className="text-sm text-white/90">Expert guidance for pricing and terms</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-2">Risk Management</h4>
                <p className="text-sm text-white/90">Supply chain risk assessment and mitigation</p>
              </div>
            </div>
          </div>

          {/* Supplier Audit Checklist */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What We Evaluate in Supplier Audits
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emuski-teal-darker" />
                  Quality Systems
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• ISO certifications</li>
                  <li>• Quality management processes</li>
                  <li>• Inspection and testing capabilities</li>
                  <li>• Non-conformance handling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emuski-teal-darker" />
                  Manufacturing Capability
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Equipment and technology</li>
                  <li>• Production capacity</li>
                  <li>• Process controls</li>
                  <li>• Facility conditions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emuski-teal-darker" />
                  Business Stability
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Financial health</li>
                  <li>• Management structure</li>
                  <li>• Client portfolio</li>
                  <li>• Supply chain resilience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">500+</div>
              <div className="text-sm text-gray-600">Verified Suppliers</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">15-20%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">30+</div>
              <div className="text-sm text-gray-600">Countries Covered</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Find Your Ideal Suppliers
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
