'use client'

import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BlogPostComponent } from '@/components/BlogPost'

export default function NewsroomSlug() {
  const params = useParams()
  const router = useRouter()
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug

  useEffect(() => {
    // Redirect to blog post page since newsroom articles are stored as blog posts
    if (slug) {
      router.push(`/blog/${slug}`)
    }
  }, [slug, router])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Blog post component will handle the display */}
      <BlogPostComponent />

      <Footer />
    </div>
  )
}
