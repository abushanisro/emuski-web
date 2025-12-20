'use client'

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function PrivacyPolicy() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="text-gray-900 bg-white font-sans leading-normal tracking-normal pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-8">
            Privacy Policy
          </h2>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Note</h3>
            <p className="mb-4 text-gray-700">
              Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.
            </p>
            <p className="mb-4 text-gray-700">
              By visiting this Platform you agree to be bound by the terms and conditions of this privacy policy. If you do not agree please do not use or access our Platform.
            </p>
            <p className="text-gray-700">
              By mere use of the Platform, mobile application or the Platform, you expressly consent to our use and disclosure of your personal information in accordance with this privacy policy. This privacy policy is incorporated into and subject to the Terms of Use.
            </p>
          </div>

          <h3 className="text-3xl md:text-2xl font-bold text-left mb-8">
            Collection Of Personally Identifiable Information And Other Information
          </h3>
          <p className="text-gray-700">
            When you use our Platform or mobile application, we collect and store your personal information provided by you from time to time. Our primary goal is to provide a safe, efficient, smooth, and customized experience. This enables us to deliver services and features tailored to your needs while collecting only the information necessary to achieve this purpose.
          </p>
          <p className="mt-5 text-gray-700">
            In general, you can browse the Platform anonymously. However, once you provide personal information, you are not anonymous to us. We indicate which fields are required and which are optional. You can choose not to provide certain information by not using a particular service or feature. We may also automatically track certain information based on your behavior to understand, protect, and serve our users better. This may include the referring URL, subsequent URL, browser information, and your IP address.
          </p>
          <p className="mt-5 text-gray-700">
            We use cookies on certain pages to analyze page flow, measure promotional effectiveness, and promote trust and safety. Cookies are small files placed on your hard drive that assist us in providing our services, including targeted information. Most cookies are session-based and are deleted after your session ends. You may decline cookies if your browser permits, though this may affect the usability of certain features on the Platform.
          </p>
          <p className="mt-5 text-gray-700">
            Additionally, you may encounter cookies or similar devices placed by third parties over which we have no control.
          </p>
          <p className="mt-5 text-gray-700">
            If you transact with us, we may collect additional information such as billing addresses, payment details, and tracking information from cheques or money orders.
          </p>
          <p className="mt-5 text-gray-700">
            If you post messages, use chat rooms, or leave feedback, we will collect that information and retain it as necessary to resolve disputes, provide support, and troubleshoot issues.
          </p>
          <p className="mt-5 text-gray-700">
            Personal correspondence, including emails or letters sent by you or about your activities on the Platform, may also be collected into a file specific to you.
          </p>
          <p className="mt-5 text-gray-700">
            We collect personally identifiable information (e.g., email address, name, phone number, payment details) when you set up a free account. Although you can browse parts of our Platform without registering, certain activities require registration.
          </p>

          <h3 className="text-3xl md:text-2xl mt-10 font-bold text-left mb-8">
            Use Of Demographic / Profile Data / Your Information
          </h3>
          <p className="mt-5 text-gray-700">
            We use personal information to provide the services you request. When used for marketing, you have the ability to opt out. Your information helps us resolve disputes, troubleshoot problems, promote safe services, collect payments, gauge consumer interest, inform you about offers, customize your experience, detect errors or fraud, and enforce our terms.
          </p>
          <p className="mt-5 text-gray-700">
            We collect and analyze demographic and profile data about your activity to continually improve our product and service offerings.
          </p>
          <p className="mt-5 text-gray-700">
            Your IP address is used to diagnose server issues, administer our Platform, and gather general demographic information.
          </p>
          <p className="mt-5 text-gray-700">
            Occasionally, you may be asked to complete optional online surveys that request contact and demographic information (e.g., zip code, age, income level).
          </p>
          <p className="mt-5 text-gray-700">
            This data is used to tailor your experience and display content according to your preferences.
          </p>
          <p className="mt-5 text-gray-700">
            Cookies: A cookie is a small file stored by a web server on a browser that enables the server to later retrieve information specific to that user. We place both permanent and temporary cookies on your hard drive. These cookies do not contain personally identifiable information.
          </p>

          <h3 className="text-3xl md:text-2xl mt-10 font-bold text-left mb-8">
            Sharing Of Personal Information
          </h3>
          <p className="mt-5 text-gray-700">
            We may share your personal information with our corporate entities and affiliates to help prevent identity theft, fraud, and other illegal acts, as well as to facilitate joint or co-branded services.
          </p>
          <p className="mt-5 text-gray-700">
            We may disclose personal information to law enforcement, third-party rights owners, or others if we believe such disclosure is necessary to enforce our Terms or Privacy Policy, respond to claims of rights violations, or protect the safety and rights of our users or the public.
          </p>
          <p className="mt-5 text-gray-700">
            In the event of a merger, acquisition, or restructuring, your personal information may be shared or sold to another business entity. In such cases, the new entity will be required to adhere to this privacy policy with respect to your personal information.
          </p>
        </div>
      </div>

      <div className="pb-20">
        <Footer />
      </div>
    </div>
  )
}
