'use client'

import { useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function TermsAndConditions() {

  useEffect(() => {
    document.title = "Terms & Conditions – EMUSKI"

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute(
      'content',
      'Read the Terms & Conditions governing the use of EMUSKI platforms, services, and AI solutions.'
    )

    let canonicalUrl = document.querySelector('link[rel="canonical"]')
    if (!canonicalUrl) {
      canonicalUrl = document.createElement('link')
      canonicalUrl.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalUrl)
    }
    canonicalUrl.setAttribute('href', 'https://www.emuski.com/terms-and-conditions')
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="text-gray-900 bg-white font-sans leading-normal tracking-normal pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
          
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-8">
            Terms & Conditions
          </h2>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Agreement to Terms</h3>
            <p className="mb-4 text-gray-700">
              By accessing or using EMUSKI platforms, services or AI tools, you agree to be bound by these Terms & Conditions. If you do not agree with these terms, please stop using our platform.
            </p>
            <p className="mb-4 text-gray-700">
              These Terms govern your use of our website, software, AI systems, solutions, and related offerings (collectively referred to as “Services”).
            </p>
            <p className="text-gray-700">
              EMUSKI reserves the right to modify these terms without prior notice. Please review periodically.
            </p>
          </div>

          {/* Section 1 */}
          <h3 className="text-2xl font-bold mb-6">1. Use of Services</h3>
          <p className="text-gray-700 mb-4">
            You agree to use our Services only for lawful purposes. Misuse, abuse, or unauthorized exploitation is prohibited.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Do not reverse-engineer, copy, or resell platform components.</li>
            <li>Do not attempt to gain unauthorized access.</li>
            <li>Do not submit harmful, abusive or illegal content.</li>
          </ul>

          {/* Section 2 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">2. Accounts & Access</h3>
          <p className="text-gray-700 mb-4">
            Some Services require user accounts. You agree to maintain accurate information and secure login credentials.
          </p>
          <p className="text-gray-700 mb-4">
            EMUSKI is not responsible for losses caused by unauthorized access due to user negligence.
          </p>

          {/* Section 3 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">3. Intellectual Property</h3>
          <p className="text-gray-700 mb-4">
            All software, content, architecture, AI models, brand assets, and trademarks belong to EMUSKI or licensors.
          </p>
          <p className="text-gray-700">
            Unauthorized copying or reproduction is prohibited.
          </p>

          {/* Section 4 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">4. User Data & Processing</h3>
          <p className="text-gray-700 mb-4">
            You retain ownership of any data you submit. By using the platform, you grant EMUSKI permission to process, store, and analyze your data to operate Services and enhance AI capabilities.
          </p>

          {/* Section 5 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">5. AI & Automation Disclaimer</h3>
          <p className="text-gray-700 mb-4">
            EMUSKI AI systems (including Mithran) provide insights and automation but results may not always be fully accurate.
          </p>
          <p className="text-gray-700 mb-4">
            You are responsible for validating outputs. EMUSKI is not liable for decisions taken based on AI recommendations.
          </p>

          {/* Section 6 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">6. Payments & Subscriptions</h3>
          <p className="text-gray-700 mb-4">
            Paid Services are billed per agreement or subscription plan. All payments are final unless otherwise stated.
          </p>
          <p className="text-gray-700">
            Non-payment may result in restricted access.
          </p>

          {/* Section 7 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">7. Limitation of Liability</h3>
          <p className="text-gray-700 mb-4">
            EMUSKI is not liable for indirect losses, including loss of profits, data, business disruptions, or reliance damages.
          </p>

          {/* Section 8 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">8. Termination</h3>
          <p className="text-gray-700 mb-4">
            EMUSKI may suspend or terminate access for violations, misuse, fraud, or compliance reasons.
          </p>

          {/* Section 9 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">9. Governing Law</h3>
          <p className="text-gray-700 mb-4">
            These Terms shall be governed by the laws of India. Disputes will be resolved under jurisdiction of Indian courts.
          </p>

          {/* Section 10 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">10. Contact Information</h3>
          <p className="text-gray-700">
            For concerns or inquiries, please email: <a href="mailto:enquiries@emuski.com" className="underline">enquiries@emuski.com</a>
          </p>

        </div>
      </div>

      <div className="pb-20">
        <Footer />
      </div>
    </div>
  )
}
