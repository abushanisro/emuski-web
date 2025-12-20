import { Navbar } from "@/components/Navbar"
import { BlogPage } from "@/components/BlogPage"
import { Footer } from "@/components/Footer"
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Manufacturing Blog | Engineering Insights & AI Innovation | EMUSKI',
  description: 'Discover expert insights on manufacturing excellence, Engineering Innovations, and AI-powered solutions. Learn from industry leaders about cost optimization, VAVE, rapid prototyping, and intelligent manufacturing.',
  keywords: 'manufacturing blog, engineering precision, cost optimization, VAVE methodology, rapid prototyping, strategic sourcing, AI manufacturing, industrial engineering',
  alternates: {
    canonical: 'https://www.emuski.com/blog',
  },
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
