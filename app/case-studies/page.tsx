'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductionPDFViewer } from '@/components/ProductionPDFViewer'
import { FileText, ChevronDown } from 'lucide-react'

const CASE_STUDIES = [
  {
    id: 'exhaust-system',
    title: 'Exhaust System Case Study',
    description: 'Comprehensive analysis of exhaust system engineering and manufacturing processes',
    url: 'https://khvugugbswtbosjlzsml.supabase.co/storage/v1/object/public/emuski-pdf/pdf/CASE%20STUDY%20-%20EXHAUST%20SYSTEM..pdf',
    category: 'Case Study',
  },
  {
    id: 'cost-breakdown',
    title: 'Cost Breakdown Report',
    description: 'Detailed cost analysis and breakdown for manufacturing projects',
    url: '/docs/CostBreakDownReport/CostBreakDownReport-1.png',
    category: 'Financial Report',
  },
  {
    id: 'project-delivery',
    title: 'Project Delivery Report',
    description: 'Complete project delivery documentation and performance metrics',
    url: '/docs/Project_Delivery_Report.pdf',
    category: 'Project Report',
  },
  {
    id: 'tear-down',
    title: 'Tear Down Analysis Report',
    description: 'In-depth tear down analysis and component evaluation',
    url: 'https://khvugugbswtbosjlzsml.supabase.co/storage/v1/object/public/emuski-pdf/pdf/Sample%20-%20Tear%20Down%20Report.pdf',
    category: 'Technical Report',
  },
  {
    id: 'detailed-analysis',
    title: 'Detailed Analysis Report',
    description: 'Comprehensive technical analysis and engineering insights',
    url: 'https://khvugugbswtbosjlzsml.supabase.co/storage/v1/object/public/emuski-pdf/pdf/Sample%20Detailed%20Analysis%20Report.pdf',
    category: 'Technical Report',
  },
]

export default function CaseStudiesPage() {
  const [selectedStudy, setSelectedStudy] = useState(CASE_STUDIES[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
          {/* Header */}
          <div className="mb-8 md:mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Engineering Excellence</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Case Studies & Technical Reports
            </h1>

            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of engineering case studies, technical reports, and project analyses.
              All documents are view-only for your reference.
            </p>
          </div>

          {/* Document Selector - Desktop Tabs */}
          <div className="hidden md:flex flex-wrap gap-3 mb-8 pb-6 border-b border-gray-200">
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setSelectedStudy(study)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedStudy.id === study.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-left">
                  <div className="font-semibold">{study.title}</div>
                  <div className={`text-xs mt-1 ${selectedStudy.id === study.id ? 'text-blue-100' : 'text-gray-500'}`}>
                    {study.category}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Document Selector - Mobile Dropdown */}
          <div className="md:hidden mb-6">
            <label htmlFor="study-select" className="block text-sm font-medium text-gray-700 mb-2">
              Select Document
            </label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{selectedStudy.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{selectedStudy.category}</div>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
                  {CASE_STUDIES.map((study) => (
                    <button
                      key={study.id}
                      onClick={() => {
                        setSelectedStudy(study)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                        selectedStudy.id === study.id ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{study.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{study.category}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Selected Document Info */}
          <div className="mb-6 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {selectedStudy.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600 mb-3">
                  {selectedStudy.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                  <span className="text-xs font-medium text-gray-700">{selectedStudy.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* PDF Viewer */}
          <ProductionPDFViewer
            url={selectedStudy.url}
            title={selectedStudy.title}
            className="mb-8"
          />

          {/* Information Footer */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Document Information</h3>
                <p className="text-sm text-gray-600">
                  All documents are provided for viewing purposes only. Download and printing capabilities
                  have been disabled to protect intellectual property.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
                  <div className="text-xs text-gray-500">Format</div>
                  <div className="text-sm font-semibold text-gray-900">PDF</div>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
                  <div className="text-xs text-gray-500">Access</div>
                  <div className="text-sm font-semibold text-gray-900">View Only</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
