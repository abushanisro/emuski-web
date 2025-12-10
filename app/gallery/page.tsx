import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Gallery as GalleryComponent } from "@/components/Gallery"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | EMUSKI',
  description: 'Explore our portfolio of manufacturing excellence, precision engineering projects, and advanced production facilities.',
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
