/**
 * Success Stories Data Structure
 *
 * IMPORTANT: Success stories are now fetched from Blogger API using the "Success Story" label.
 * This file maintains interfaces for backward compatibility and type safety.
 *
 * To add new success stories:
 * 1. Create a new blog post in Blogger
 * 2. Add the label "Success Story" to the post
 * 3. The post will automatically appear in the Success Stories section
 */

export interface SuccessStory {
  id: number;
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  excerpt: string;
  heroImage: string;
  readTime: string;
  publishDate: string;
  challenge: {
    title: string;
    description: string;
    keyPoints: string[];
    image?: string;
  };
  solution: {
    title: string;
    description: string;
    approach: string[];
    image?: string;
  };
  outcome: {
    title: string;
    description: string;
    results: string[];
    testimonial?: {
      quote: string;
      author: string;
      position: string;
    };
    image?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  tags: string[];
  relatedStories?: number[];
}

// Success stories are now fetched from Blogger API
// See: src/components/SuccessStoriesSection.tsx
export const successStories: SuccessStory[] = [];

// Legacy helper functions - kept for backward compatibility
export const getSuccessStoryBySlug = (slug: string): SuccessStory | undefined => {
  return successStories.find(story => story.slug === slug);
};

export const getRelatedSuccessStories = (currentId: number, relatedIds?: number[]): SuccessStory[] => {
  if (!relatedIds || relatedIds.length === 0) {
    return successStories
      .filter(story => story.id !== currentId)
      .slice(0, 3);
  }

  return successStories.filter(story => relatedIds.includes(story.id));
};
