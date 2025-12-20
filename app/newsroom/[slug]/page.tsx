import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: 'News Article | EMUSKI Newsroom',
    description: 'Read the latest manufacturing innovations, company updates, and industry insights from EMUSKI.',
    alternates: {
      canonical: `https://www.emuski.com/blog/${slug}`,
    },
  };
}

export default async function NewsroomSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Redirect to blog post page since newsroom articles are stored as blog posts
  redirect(`/blog/${slug}`)
}
