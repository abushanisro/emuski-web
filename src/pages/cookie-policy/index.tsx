import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function CookiePolicy() {
  useEffect(() => {
    document.title = "Cookie Policy – How EMUSKI Uses Cookies";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Learn about how EMUSKI uses cookies and similar technologies to improve your browsing experience and provide personalized services.');

    let canonicalUrl = document.querySelector('link[rel="canonical"]');
    if (!canonicalUrl) {
      canonicalUrl = document.createElement('link');
      canonicalUrl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalUrl);
    }
    canonicalUrl.setAttribute('href', 'https://www.emuski.com/cookie-policy');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="text-gray-900 font-sans leading-normal tracking-normal pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-8">
            Cookie Policy
          </h2>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">What Are Cookies</h3>
            <p className="text-gray-700">
              Cookies are small text files placed on your device when you visit www.emuski.com. They help us deliver our Manufacturing Excellences platform efficiently, remember your quote requests, and improve your experience when exploring our precision engineering and manufacturing solutions.
            </p>
          </div>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">How EMUSKI Uses Cookies</h3>
            <p className="text-gray-700 mb-4">
              EMUSKI Manufacturing Solutions uses cookies to enhance your experience when requesting manufacturing quotes, browsing our CNC machining services, and accessing technical specifications. We use both session cookies (temporary) and persistent cookies (stored for future visits) to provide seamless service delivery.
            </p>
            <p className="text-gray-700">
              Our cookies help us understand how manufacturers and engineers interact with our platform, enabling us to optimize our OEM manufacturing, rapid prototyping, and custom fabrication services.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Types of Cookies We Use</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Essential Cookies</h4>
                <p className="text-gray-700">
                  Required for core functionality including quote request forms, Manufacturing Excellence navigation, CAD file uploads, technical specification access, and secure communication with our engineering team. Without these cookies, you cannot submit manufacturing quotes or access protected areas of our platform.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Performance Cookies</h4>
                <p className="text-gray-700">
                  Help us analyze how manufacturers use our CNC machining, injection molding, and sheet metal fabrication services. We track which manufacturing processes are most viewed, quote completion rates, and technical documentation downloads to improve our service offerings and platform performance.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Functional Cookies</h4>
                <p className="text-gray-700">
                  Remember your manufacturing preferences, saved quote requests, preferred measurement units (metric/imperial), industry sector selections (automotive, aerospace, medical, electronics), and language settings. These enhance your experience when returning to explore our precision Engineering Innovations.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Analytics Cookies</h4>
                <p className="text-gray-700">
                  Track engagement with our manufacturing blog, case studies, technical whitepapers, and industry insights. This helps us create relevant content about CNC machining innovations, lean manufacturing practices, and Industry 4.0 solutions that matter to our manufacturing partners.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Third-Party Cookies</h3>
            <p className="text-gray-700 mb-4">
              EMUSKI integrates with trusted third-party services to enhance our manufacturing platform. These include analytics tools to measure service performance, LinkedIn and social media integrations for industry networking, and WhatsApp for instant manufacturing support communication.
            </p>
            <p className="text-gray-700">
              Third-party cookies may track your interaction with our manufacturing content, quote requests, and technical resources. Each provider maintains their own privacy policy governing cookie usage.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Managing Cookies</h3>
            <p className="text-gray-700 mb-4">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and some functionality may no longer be available.
            </p>
            <p className="text-gray-700 mb-4">
              Most browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. Instructions for managing cookies in popular browsers:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
              <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
              <li>Safari: Preferences → Privacy → Cookies and website data</li>
              <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Cookie Consent for Manufacturing Excellences</h3>
            <p className="text-gray-700">
              By using www.emuski.com to request manufacturing quotes, access technical specifications, or explore our precision Engineering Innovations, you consent to our cookie usage as described in this policy. Disabling cookies may limit your ability to submit quote requests, upload CAD files, or access certain manufacturing resources on our platform.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Updates to This Policy</h3>
            <p className="text-gray-700 mb-4">
              EMUSKI may update this Cookie Policy to reflect new manufacturing technologies, regulatory requirements, or platform enhancements. We recommend reviewing this policy periodically, especially before submitting manufacturing quotes or technical specifications.
            </p>
            <p className="text-gray-700">
              For questions about cookies or data handling in relation to your manufacturing projects, contact our team at info@emuski.com or +91-83444-74556. Visit our Privacy Policy for comprehensive information about how EMUSKI protects your manufacturing data and business information.
            </p>
          </section>
        </div>
      </div>

      <div className="pb-20">
        <Footer />
      </div>
    </div>
  );
}
