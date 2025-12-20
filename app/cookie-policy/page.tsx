'use client'

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function CookiePolicy() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="text-gray-900 bg-white font-sans leading-normal tracking-normal pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">

          <h1 className="text-3xl md:text-4xl font-bold text-left mb-8">
            Cookie Policy
          </h1>

          {/* Plain-language summary for readability */}
          <div className="bg-emuski-teal/5 border border-emuski-teal/20 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-3">In simple terms</h3>
            <p className="text-gray-700 mb-3">
              We use cookies to help the site work properly, remember your settings, and understand how people use EMUSKI.
            </p>
            <p className="text-gray-700">
              You can turn cookies off in your browser at any time. Some parts of the site may not work as expected if you do. The detailed legal terms are explained below.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Introduction</h3>
            <p className="mb-4 text-gray-700">
              This Cookie Policy explains how EMUSKI uses cookies and similar technologies when you access our website and platforms.
            </p>
            <p className="text-gray-700">
              By continuing to use our site, you consent to the placement of cookies in accordance with this policy.
            </p>
          </div>

          {/* Section 1 */}
          <h3 className="text-2xl font-bold mb-6">1. What Are Cookies?</h3>
          <p className="text-gray-700 mb-4">
            Cookies are small text files stored on your browser when you visit websites. They help recognize your device and enhance your browsing experience.
          </p>

          {/* Section 2 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">2. Types of Cookies We Use</h3>
          <p className="text-gray-700 mb-4">We may use the following categories of cookies:</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Essential Cookies</strong> – Required for core functionality and security.</li>
            <li><strong>Performance Cookies</strong> – Help us monitor usage and improve platform performance.</li>
            <li><strong>Analytics Cookies</strong> – Allow us to analyze traffic patterns and optimize services.</li>
            <li><strong>Functional Cookies</strong> – Enable personalization such as remembering settings.</li>
            <li><strong>Third-Party Cookies</strong> – Placed by service providers like analytics tools, marketing partners, or embedded services.</li>
          </ul>

          {/* Section 3 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">3. Why We Use Cookies</h3>
          <p className="text-gray-700 mb-4">
            We use cookies to:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Identify returning users and provide faster access.</li>
            <li>Remember preferences, sessions, and saved settings.</li>
            <li>Enhance security and prevent fraud.</li>
            <li>Measure platform performance and improve experience.</li>
            <li>Support analytics, AI training, and personalization.</li>
          </ul>

          {/* Section 4 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">4. Third-Party Cookies</h3>
          <p className="text-gray-700 mb-4">
            Some cookies are set by third parties including analytics tools, automation engines, embedded content, and integrations.
          </p>
          <p className="text-gray-700">
            EMUSKI does not control these cookies but ensures that providers adhere to applicable privacy and security requirements.
          </p>

          {/* Section 5 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">5. Managing & Disabling Cookies</h3>
          <p className="text-gray-700 mb-4">
            You can manage or disable cookies through your browser settings. Note that disabling cookies may affect functionality or limit access to certain features.
          </p>

          {/* Section 6 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">6. Updates to This Policy</h3>
          <p className="text-gray-700 mb-4">
            We may update this Cookie Policy periodically. Continued use indicates acceptance of any updated terms.
          </p>

          {/* Section 7 */}
          <h3 className="text-2xl font-bold mt-10 mb-6">7. Contact Us</h3>
          <p className="text-gray-700">
            For questions or concerns, email: <a href="mailto:enquiries@emuski.com" className="underline">enquiries@emuski.com</a>
          </p>

        </div>
      </div>

      <div className="pb-20">
        <Footer />
      </div>
    </div>
  )
}
