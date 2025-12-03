import { Link } from "react-router-dom";
import { Users, Briefcase, Award, Clock, ArrowRight, CheckCircle } from "lucide-react";

export const ExpertSupportSection = () => {
  return (
    <section id="expert-support-details" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emuski-teal/10 rounded-2xl mb-4">
              <Users className="w-8 h-8 text-emuski-teal-darker" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expert Engineer Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy specialized engineering resources directly into your team
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-emuski-teal-darker to-emuski-teal-dark rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">On-Demand Expertise</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Sometimes you need specialized engineering skills for specific projects or durations. Our expert engineer support service provides you with highly skilled professionals who integrate seamlessly with your team to deliver results.
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Cost Engineering Specialists
                  </h5>
                  <p className="text-sm text-white/90">Experts in should-cost analysis and product costing</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    VAVE Engineers
                  </h5>
                  <p className="text-sm text-white/90">Specialists in value analysis and design optimization</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Sourcing Specialists
                  </h5>
                  <p className="text-sm text-white/90">Supply chain and supplier management experts</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Manufacturing Engineers
                  </h5>
                  <p className="text-sm text-white/90">Process planning and DFM experts</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Flexible Resource Deployment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you need short-term support for a critical project or long-term augmentation of your engineering team, we provide the right expertise at the right time. Our engineers bring industry best practices and proven methodologies to accelerate your projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Project-Based Engagement</h4>
                    <p className="text-sm text-gray-600">Dedicated resources for specific initiatives with defined deliverables</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Long-Term Partnership</h4>
                    <p className="text-sm text-gray-600">Extended engagements for ongoing support and team augmentation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emuski-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-emuski-teal-darker" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Proven Track Record</h4>
                    <p className="text-sm text-gray-600">Experienced engineers with successful project histories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Engineering Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Cost Engineering</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Should-cost modeling</li>
                  <li>• Cost breakdowns & analysis</li>
                  <li>• Supplier quote validation</li>
                  <li>• Cost reduction initiatives</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Value Engineering</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• VAVE workshops</li>
                  <li>• Product teardowns</li>
                  <li>• Competitive benchmarking</li>
                  <li>• Design optimization</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Sourcing & Supply Chain</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Supplier identification</li>
                  <li>• RFQ management</li>
                  <li>• Supplier audits</li>
                  <li>• Contract negotiation</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Manufacturing Engineering</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• DFM reviews</li>
                  <li>• Process planning</li>
                  <li>• Tooling design</li>
                  <li>• Production ramp-up support</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Quality Engineering</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• PPAP/APQP support</li>
                  <li>• Quality system setup</li>
                  <li>• Inspection planning</li>
                  <li>• Root cause analysis</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Project Management</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Program management</li>
                  <li>• Timeline coordination</li>
                  <li>• Stakeholder management</li>
                  <li>• Risk mitigation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-emuski-teal-darker to-emuski-teal-dark rounded-2xl p-8 md:p-12 text-white mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Why Choose Expert Engineer Support?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">No Recruitment Overhead</h4>
                  <p className="text-sm text-white/90">Skip the lengthy hiring process and onboard experienced engineers immediately</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Cost-Effective Solution</h4>
                  <p className="text-sm text-white/90">Pay only for the expertise you need, when you need it</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Specialized Skills</h4>
                  <p className="text-sm text-white/90">Access niche expertise that may be hard to find or train internally</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Scalable Teams</h4>
                  <p className="text-sm text-white/90">Easily scale up or down based on project demands</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Knowledge Transfer</h4>
                  <p className="text-sm text-white/90">Your team gains insights and best practices from our experts</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Rapid Deployment</h4>
                  <p className="text-sm text-white/90">Engineers can start contributing within days, not months</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">50+</div>
              <div className="text-sm text-gray-600">Expert Engineers</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">3-5 days</div>
              <div className="text-sm text-gray-600">Deployment Time</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">100+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-emuski-teal-darker mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Request Expert Engineering Support
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
