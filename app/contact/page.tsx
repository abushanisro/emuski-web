import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Contact as ContactComponent } from "@/components/Contact"
import { FAQSection } from "@/components/FAQSection"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | EMUSKI',
  description: 'Get in touch with EMUSKI for your manufacturing and engineering needs. Contact our experts today.',
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactComponent />
      <FAQSection
        compact={true}
        maxItems={6}
        showCategories={false}
        usePageSpecific={true}
      />
      <Footer />
    </>
  )
}
