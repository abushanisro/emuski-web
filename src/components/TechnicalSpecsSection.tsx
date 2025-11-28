import React, { useState } from 'react';
import { ChevronDown, Activity, Target, Zap, TrendingUp, Settings, Award } from 'lucide-react';
import { 
  PERFORMANCE_METRICS, 
  CNC_MACHINING_SPECS, 
  INJECTION_MOLDING_SPECS,
  SHEET_METAL_SPECS,
  PROCESS_CAPABILITY,
  EQUIPMENT_SPECS,
  type CapabilityMatrix 
} from '../data/technicalSpecifications';

interface TechnicalSpecsSectionProps {
  compact?: boolean;
  focus?: 'metrics' | 'capabilities' | 'equipment' | 'all';
  showTitle?: boolean;
}

export const TechnicalSpecsSection: React.FC<TechnicalSpecsSectionProps> = ({ 
  compact = false, 
  focus = 'all',
  showTitle = true 
}) => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'capabilities' | 'equipment'>('metrics');
  const [expandedCapability, setExpandedCapability] = useState<string | null>(null);

  const capabilities = [
    { id: 'cnc', name: 'CNC Machining', data: CNC_MACHINING_SPECS, icon: Settings },
    { id: 'molding', name: 'Injection Molding', data: INJECTION_MOLDING_SPECS, icon: Activity },
    { id: 'sheet', name: 'Sheet Metal', data: SHEET_METAL_SPECS, icon: Zap }
  ];

  const MetricsGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Business Metrics */}
      <div className="bg-gradient-to-br from-emuski-teal to-emuski-teal-dark p-6 rounded-lg text-white">
        <div className="flex items-center mb-4">
          <Target className="h-8 w-8 mr-3" />
          <h3 className="text-lg font-bold">Business Impact</h3>
        </div>
        <div className="space-y-3">
          {PERFORMANCE_METRICS.businessMetrics.map((metric, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-90">{metric.metric}</p>
                <p className="text-xs opacity-75">{metric.period}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">{metric.value}{metric.unit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Award className="h-8 w-8 mr-3 text-green-600" />
          <h3 className="text-lg font-bold text-gray-900">Quality Performance</h3>
        </div>
        <div className="space-y-3">
          {PERFORMANCE_METRICS.quality.map((metric, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-700">{metric.metric}</p>
                <p className="text-xs text-gray-500">{metric.period}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">{metric.value}{metric.unit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Metrics */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-8 w-8 mr-3 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Delivery Excellence</h3>
        </div>
        <div className="space-y-3">
          {PERFORMANCE_METRICS.delivery.map((metric, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-700">{metric.metric}</p>
                <p className="text-xs text-gray-500">{metric.period}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">{metric.value}{metric.unit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Efficiency Metrics */}
      <div className="bg-white border border-gray-200 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Activity className="h-8 w-8 mr-3 text-purple-600" />
          <h3 className="text-lg font-bold text-gray-900">Operational Efficiency</h3>
        </div>
        <div className="space-y-3">
          {PERFORMANCE_METRICS.efficiency.map((metric, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-700">{metric.metric}</p>
                <p className="text-xs text-gray-500">{metric.period}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">{metric.value}{metric.unit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CapabilitiesSection = () => (
    <div className="space-y-6">
      {capabilities.map((capability) => (
        <div key={capability.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setExpandedCapability(
              expandedCapability === capability.id ? null : capability.id
            )}
            className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <capability.icon className="h-6 w-6 text-emuski-teal-darker mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{capability.name}</h3>
              </div>
              <ChevronDown 
                className={`h-5 w-5 text-gray-400 transition-transform ${
                  expandedCapability === capability.id ? 'rotate-180' : ''
                }`} 
              />
            </div>
          </button>
          
          {expandedCapability === capability.id && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
                
                {/* Materials */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Materials</h4>
                  <ul className="space-y-2">
                    {capability.data.materials.slice(0, compact ? 3 : undefined).map((material, idx) => (
                      <li key={idx} className="text-sm text-gray-700 py-1 px-2 bg-gray-50 rounded">
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tolerances */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Tolerances</h4>
                  <div className="space-y-2">
                    {capability.data.tolerances.slice(0, compact ? 3 : undefined).map((spec, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="font-medium text-gray-700">{spec.parameter}</p>
                        <p className="text-emuski-teal-darker font-bold">{spec.value}{spec.unit}</p>
                        {spec.standard && <p className="text-xs text-gray-500">{spec.standard}</p>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Surface Finish */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Surface Finish</h4>
                  <div className="space-y-2">
                    {capability.data.surfaceFinish.slice(0, compact ? 3 : undefined).map((spec, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="font-medium text-gray-700">{spec.parameter}</p>
                        <p className="text-emuski-teal-darker font-bold">{spec.value} {spec.unit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dimensions */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Capabilities</h4>
                  <div className="space-y-2">
                    {capability.data.dimensions.map((spec, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="font-medium text-gray-700">{spec.parameter}</p>
                        <p className="text-emuski-teal-darker font-bold">{spec.value} {spec.unit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Process Capability (Cpk) */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Process Capability (Cpk)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(PROCESS_CAPABILITY).map(([process, capabilities]) => 
                    capabilities.filter(cap => cap.process.toLowerCase().includes(capability.id.substring(0, 3))).map((cap, idx) => (
                      <div key={`${process}-${idx}`} className="bg-green-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900">{cap.process}</p>
                        <p className="text-sm text-gray-600">{cap.parameter}</p>
                        <div className="flex items-center mt-2">
                          <span className="text-lg font-bold text-green-600">Cpk {cap.cpk}</span>
                          <span className="text-sm text-gray-500 ml-2">({cap.sigma})</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Certifications & Standards</h4>
                <div className="flex flex-wrap gap-2">
                  {capability.data.certifications.map((cert, idx) => (
                    <span key={idx} className="px-3 py-1 bg-emuski-teal/10 text-emuski-teal-darker text-sm font-medium rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const EquipmentSection = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {EQUIPMENT_SPECS.map((category, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
          {category.models.map((model, modelIdx) => (
            <div key={modelIdx} className="mb-4">
              <h4 className="font-semibold text-emuski-teal-darker mb-3">{model.name}</h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(model.specifications).map(([spec, value]) => (
                  <div key={spec} className="text-sm">
                    <p className="text-gray-600">{spec}</p>
                    <p className="font-medium text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  if (focus === 'metrics') {
    return (
      <section className={`${compact ? 'py-12' : 'py-20'} bg-gray-50`}>
        <div className="container mx-auto px-4">
          {showTitle && (
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Performance Metrics & KPIs</h2>
              <p className="text-xl text-gray-600">Data-driven excellence in manufacturing operations</p>
            </div>
          )}
          <MetricsGrid />
        </div>
      </section>
    );
  }

  return (
    <section className={`${compact ? 'py-12' : 'py-20'} bg-gray-50`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">Precise engineering capabilities and performance data</p>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            {(['metrics', 'capabilities', 'equipment'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-emuski-teal text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab === 'metrics' && 'Performance Metrics'}
                {tab === 'capabilities' && 'Manufacturing Capabilities'}
                {tab === 'equipment' && 'Equipment Specifications'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto">
          {activeTab === 'metrics' && <MetricsGrid />}
          {activeTab === 'capabilities' && <CapabilitiesSection />}
          {activeTab === 'equipment' && <EquipmentSection />}
        </div>
      </div>
    </section>
  );
};