import { Navbar } from "@/components/Navbar"
import { BlogPage } from "@/components/BlogPage"
import { Footer } from "@/components/Footer"
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog | EMUSKI',
  description: 'Stay updated with the latest insights on manufacturing, engineering, and AI innovations from EMUSKI.',
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BlogPage />
      <Footer />
    </div>
  )
}
