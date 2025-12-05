import { Navbar } from "@/components/Navbar"
import { BlogPage } from "@/components/BlogPage"
import { Footer } from "@/components/Footer"

export const dynamic = 'force-dynamic'

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BlogPage />
      <Footer />
    </div>
  )
}
