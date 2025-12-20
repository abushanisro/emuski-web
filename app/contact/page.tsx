import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Contact as ContactComponent } from "@/components/Contact"
import { FAQSection } from "@/components/FAQSection"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact EMUSKI | Get In Touch - Manufacturing Solutions',
  description: 'Contact EMUSKI for manufacturing solutions. Speak with our experts about your OEM manufacturing, precision engineering, and AI-powered production needs.',
  alternates: {
    canonical: 'https://www.emuski.com/contact',
  },
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
