import { SuccessStoryDetail } from "@/components/SuccessStoryDetail";
import { getSuccessStoryBySlug, getRelatedSuccessStories } from "@/data/successStories";
import { notFound } from "next/navigation";

export default function SuccessStoryPage({ params }: { params: { slug: string } }) {
  const story = getSuccessStoryBySlug(params.slug);

  if (!story) {
    notFound();
  }

  const relatedStories = getRelatedSuccessStories(story.id, story.relatedStories);

  return <SuccessStoryDetail story={story} relatedStories={relatedStories} />;
}

// Generate static params for all success stories
export async function generateStaticParams() {
  const { successStories } = await import("@/data/successStories");

  return successStories.map((story) => ({
    slug: story.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const story = getSuccessStoryBySlug(params.slug);

  if (!story) {
    return {
      title: "Success Story Not Found",
    };
  }

  return {
    title: `${story.title} | EMUSKI Success Stories`,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      images: [story.heroImage],
      type: "article",
      publishedTime: story.publishDate,
    },
  };
}
