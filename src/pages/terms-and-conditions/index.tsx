import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = "Terms and Conditions – EMUSKI User Agreement";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', "Review EMUSKI's terms of service to understand your rights, obligations, and the rules that govern your use of our platform and services.");

    let canonicalUrl = document.querySelector('link[rel="canonical"]');
    if (!canonicalUrl) {
      canonicalUrl = document.createElement('link');
      canonicalUrl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalUrl);
    }
    canonicalUrl.setAttribute('href', 'https://www.emuski.com/terms-and-conditions');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="text-gray-900 bg-white font-sans leading-normal tracking-normal pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-8">
            Terms and Conditions
          </h2>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Note</h3>
            <p className="mb-4 text-gray-700">
              Our terms and conditions are subject to change at any time without notice. You are responsible for reviewing the terms and conditions periodically to ensure that you are aware of the current terms and conditions.
            </p>
          </div>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">General</h3>
            <p className="text-gray-700 mb-4">
              The domain name www.emuski.com or any other domain name belonging to subsidiary company, holding company and affiliates (hereinafter referred to as "Website") is owned by EMUSKI Manufacturing Solutions, a manufacturing and engineering company registered under the laws of India with its registered office situated at 126, RNS Plaza, KIADB Industrial Area, Electronic City Phase 2, Bengaluru, Karnataka 560100 IN, info@emuski.com India (hereinafter referred to as "EMUSKI").
            </p>
            <p className="text-gray-700 mb-4">
              For the purpose of these Terms of Use, wherever the context so requires "You", "Your" or "User" shall mean any natural or legal person who has agreed to become a registered User on the Website by providing registration data using the computer systems. EMUSKI allows the User to surf the Website without registering on the Website. The term "We", "Us", "Our" shall mean EMUSKI Manufacturing Solutions and includes all its successors, assignees or affiliates.
            </p>
            <p className="text-gray-700 mb-4">
              Your use of the Website and services are governed by the following terms and conditions ("Terms of Use") as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, you shall be contracting with EMUSKI and these terms and conditions including the policies constitute Your binding obligations, with EMUSKI.
            </p>
            <p className="text-gray-700 mb-4">
              The Terms of Use applies to Your use of the software, Website, smartphone applications or other electronic means ("Platform").
            </p>
            <p className="text-gray-700 mb-4">
              This document is an electronic record in terms of the Information Technology Act, 2000 and the applicable rules, and is published in accordance with Rule 3 (1) of the Information Technology (Intermediaries Guidelines) Rules, 2011.
            </p>
            <p className="text-gray-700">
              We reserve the right, at Our sole discretion, to change, modify, add or remove portions of these Terms of Use at any time without any prior written notice to You. It is Your responsibility to review these Terms of Use periodically for updates/changes. Your continued use of the Website following the posting of changes will mean that You accept and agree to all revisions made from time to time. As long as You comply with these Terms of Use, We grant You a personal, non-exclusive, non-transferable, limited privilege to enter and use the Website.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Membership Eligibility</h3>
            <p className="text-gray-700">
              Use of the Website is available only to persons who can form legally binding contracts under the Indian Contract Act, 1872. Persons who are "incompetent to contract" within the meaning of the Act including minors, undischarged insolvents etc. are not eligible to use or challenge the Terms of Use of the Website. If you are a minor (i.e. under the age of 18 years), you shall not register as a User of the Website and shall not transact on or use the Website.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Privacy</h3>
            <p className="text-gray-700">
              Any Personal Information submitted in connection with Your use of the offerings or the Website is subject to Our privacy policy, located at www.emuski.com/privacy-policy.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Your Account And Registration Obligations</h3>
            <p className="text-gray-700">
              When You register, the information You provide to Us during the registration process will help Us in offering content, service, and management of Your account. You are solely responsible for maintaining the confidentiality of Your account, username, and password and for all activities associated with or occurring under Your Account. You represent and warrant that Your Account information will be accurate at all times. You agree that if You provide any information that is untrue, inaccurate, not current or incomplete, or if We have reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, or not in accordance with the Terms of Use, We shall have the right to indefinitely suspend, terminate, or block access to Your membership on the Website.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Communications</h3>
            <p className="text-gray-700 mb-4">
              When You use the Website or send emails or other data, information or communication to us or our registered agents, You agree and understand that You are communicating with Us through electronic records and You consent to receive communications via electronic records from Us periodically and as required.
            </p>
            <p className="text-gray-700">
              We may communicate with you by email or other modes, and You hereby grant consent to EMUSKI to call your registered mobile phone for verification or to communicate details of any products, irrespective of Your mobile number being on any Do Not Call registry.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Transaction And Communication Platform</h3>
            <p className="text-gray-700 mb-4">
              The Website is a Platform for Users to interact with EMUSKI for their transactions. To avail of the services, You are required to register by logging into Your User account. During registration, You shall share and upload certain information on the Website including personal details, business information, and other relevant data. You agree that the information provided shall be accurate, correct, and complete.
            </p>
            <p className="text-gray-700">
              EMUSKI may collect, authenticate, verify, and confirm the User Data as required to process transactions. All transactions undertaken on Your behalf by EMUSKI will be strictly based on Your express instructions/consent.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Intellectual Property Rights</h3>
            <p className="text-gray-700">
              This site is controlled and operated by EMUSKI. All material, including images and illustrations, are protected by trademarks, copyrights, and other intellectual property rights. All brand names, logos, service marks, inventions, and other intellectual property associated with the services, content, and technology are solely owned by EMUSKI.
            </p>
            <p className="text-gray-700 mt-4">
              Nothing contained in these Terms of Use or the privacy policy should be construed as granting any license or right to use any such intellectual property. The material on the Website is solely for personal, non-commercial use. You must not reproduce, distribute, transmit, or otherwise use the content except as expressly permitted.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Indemnity</h3>
            <p className="text-gray-700">
              You shall indemnify and hold harmless EMUSKI, its affiliates, subsidiaries, and their respective officers, directors, agents, and employees from any claim or demand, including reasonable attorneys' fees, arising out of Your breach of these Terms of Use, privacy policy, or any applicable laws, or any violation of any third party's rights.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Warranties</h3>
            <p className="text-gray-700">
              EMUSKI makes no warranties or representations, whether express or implied, other than those specifically stated herein. All warranties, express or implied, regarding the content, services, or technology are disclaimed to the fullest extent permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Disclaimer</h3>
            <p className="text-gray-700 mb-4">
              This Website and all content and services provided are on an "as is" and "as available" basis without any express or implied warranties. EMUSKI does not guarantee that the Website will be available at all times, that the content will be complete, accurate, or up-to-date, or that the Website will be error-free.
            </p>
            <p className="text-gray-700">
              EMUSKI is not responsible for any viruses or harmful components that may infect your computer equipment or property as a result of accessing the Website or downloading any content.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Limitation Of Liability</h3>
            <p className="text-gray-700">
              IN NO EVENT SHALL EMUSKI BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES ARISING OUT OF THESE TERMS OF USE, EVEN IF USER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. EMUSKI and its affiliates will not be liable for any direct, indirect, punitive, incidental, or consequential damages arising from the use of the Website.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Termination</h3>
            <p className="text-gray-700">
              If You violate the Terms of Use, Your ability to use the Platform will be terminated. We may, at Our sole discretion, terminate Your access to the Platform without prior notice. This termination is without prejudice to any other rights or remedies available under applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Platform Use</h3>
            <p className="text-gray-700">
              You agree that Your use of the Platform shall be governed by the following principles. You shall not host, display, upload, or share any information that is not rightfully yours, is harmful, misleading, or violates any laws. You further agree not to use any automated tools to access, copy, or monitor any portion of the Website. Any unauthorized access or interference with the Website's operation is strictly prohibited.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Applicable Law</h3>
            <p className="text-gray-700">
              These Terms of Use shall be governed by, interpreted, and construed in accordance with the laws of India.
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
