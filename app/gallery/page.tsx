import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Gallery as GalleryComponent } from "@/components/Gallery"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EMUSKI Component Gallery - Manufacturing Excellence Showcase',
  description: 'Explore EMUSKI\'s comprehensive gallery of precision manufacturing components, engineering solutions, and production excellence. Showcasing automotive, aerospace, and industrial manufacturing capabilities.',
  alternates: {
    canonical: 'https://www.emuski.com/gallery',
  },
}

export default function Gallery() {
  return (
    <>
      <Navbar />
      <GalleryComponent />
      <Footer />
    </>
  )
}
