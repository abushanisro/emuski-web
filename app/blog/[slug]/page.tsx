import { Navbar } from "@/components/Navbar"
import { BlogPostComponent } from "@/components/BlogPost"
import { Footer } from "@/components/Footer"
import { SuccessStoryDetail } from "@/components/SuccessStoryDetail"
import { getSuccessStoryBySlug, getRelatedSuccessStories } from "@/data/successStories"
import { notFound } from "next/navigation"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Await params in Next.js 15
  const { slug } = await params;

  // Check if it's a success story
  const successStory = getSuccessStoryBySlug(slug);

  if (successStory) {
    const relatedStories = getRelatedSuccessStories(successStory.id, successStory.relatedStories);
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <SuccessStoryDetail story={successStory} relatedStories={relatedStories} />
        <Footer />
      </div>
    );
  }

  // Otherwise, it's a regular blog post
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BlogPostComponent />
      <Footer />
    </div>
  )
}
