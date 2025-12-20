import { Navbar } from "@/components/Navbar"
import { BlogPostComponent } from "@/components/BlogPost"
import { Footer } from "@/components/Footer"
import { SuccessStoryDetail } from "@/components/SuccessStoryDetail"
import { getSuccessStoryBySlug, getRelatedSuccessStories } from "@/data/successStories"
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  // Check if it's a success story
  const successStory = getSuccessStoryBySlug(slug);

  if (successStory) {
    return {
      title: `${successStory.title} | Case Study | EMUSKI`,
      description: successStory.excerpt,
      alternates: {
        canonical: `https://www.emuski.com/blog/${slug}`,
      },
      openGraph: {
        title: successStory.title,
        description: successStory.excerpt,
        type: 'article',
        url: `https://www.emuski.com/blog/${slug}`,
        images: [
          {
            url: successStory.heroImage,
            width: 1200,
            height: 630,
            alt: successStory.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: successStory.title,
        description: successStory.excerpt,
        images: [successStory.heroImage],
      },
    };
  }

  // For regular blog posts, use generic metadata
  // The BlogPost component will fetch from Blogger API client-side
  return {
    title: 'Blog Post | EMUSKI',
    description: 'Read the latest insights on manufacturing excellence, engineering innovations, and AI-powered solutions from EMUSKI.',
    alternates: {
      canonical: `https://www.emuski.com/blog/${slug}`,
    },
  };
}

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
