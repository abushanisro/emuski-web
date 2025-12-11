const BLOGGER_API_KEY = 'AIzaSyAMGNkribakVu5-d7yT8B3WDA9x7PsgunA';
const BLOGGER_API_BASE = 'https://www.googleapis.com/blogger/v3';

// Blog ID will be extracted from your blog URL
let BLOG_ID: string | null = null;

export interface BloggerPost {
  id: string;
  title: string;
  content: string;
  published: string;
  updated: string;
  url: string;
  author: {
    displayName: string;
    image?: {
      url: string;
    };
  };
  labels?: string[];
  images?: {
    url: string;
  }[];
}

export interface BloggerResponse {
  items: BloggerPost[];
  nextPageToken?: string;
}

// Get blog ID from blog URL
export async function getBlogId(blogUrl: string): Promise<string> {
  if (BLOG_ID) return BLOG_ID;

  try {
    const response = await fetch(
      `${BLOGGER_API_BASE}/blogs/byurl?url=${encodeURIComponent(blogUrl)}&key=${BLOGGER_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch blog ID');
    }

    const data = await response.json();
    BLOG_ID = data.id;
    return BLOG_ID;
  } catch (error) {
    console.error('Error fetching blog ID:', error);
    throw error;
  }
}

// Fetch blog posts
export async function fetchBloggerPosts(
  blogId: string,
  maxResults: number = 10,
  pageToken?: string
): Promise<BloggerResponse> {
  try {
    let url = `${BLOGGER_API_BASE}/blogs/${blogId}/posts?key=${BLOGGER_API_KEY}&maxResults=${maxResults}`;

    if (pageToken) {
      url += `&pageToken=${pageToken}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

// Fetch a single post by ID
export async function fetchBloggerPost(blogId: string, postId: string): Promise<BloggerPost> {
  try {
    const response = await fetch(
      `${BLOGGER_API_BASE}/blogs/${blogId}/posts/${postId}?key=${BLOGGER_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
}

// Search posts by label
export async function searchBloggerPostsByLabel(
  blogId: string,
  label: string,
  maxResults: number = 10
): Promise<BloggerResponse> {
  try {
    const response = await fetch(
      `${BLOGGER_API_BASE}/blogs/${blogId}/posts?key=${BLOGGER_API_KEY}&labels=${encodeURIComponent(label)}&maxResults=${maxResults}`
    );

    if (!response.ok) {
      throw new Error('Failed to search blog posts');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching blog posts:', error);
    throw error;
  }
}

// Helper function to decode HTML entities and clean text
function decodeHtmlEntities(text: string): string {
  const textarea = typeof document !== 'undefined' ? document.createElement('textarea') : null;
  if (textarea) {
    textarea.innerHTML = text;
    return textarea.value;
  }
  // Fallback for server-side: manual decode common entities
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"');
}

// Convert Blogger post to our BlogPost format
export function convertBloggerPostToLocalFormat(post: BloggerPost) {
  // Extract first image from content if available
  const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
  const image = imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80';

  // Extract full description from content
  // Remove HTML tags, decode entities, and clean whitespace
  let textContent = post.content
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '') // Remove style tags
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '') // Remove script tags
    .replace(/<[^>]*>/g, ' ') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // Decode HTML entities
  textContent = decodeHtmlEntities(textContent);

  // Use full text as excerpt (no truncation)
  const excerpt = textContent;

  // Generate slug from title
  const slug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  // Calculate read time (rough estimate: 200 words per minute)
  const wordCount = textContent.split(/\s+/).length;
  const readTime = `${Math.ceil(wordCount / 200)} min read`;

  return {
    id: post.id,
    slug: slug,
    title: post.title,
    excerpt: excerpt,
    content: textContent.substring(0, 500),
    fullContent: post.content,
    category: post.labels?.[0] || 'Blog',
    author: post.author.displayName,
    authorBio: '',
    authorImage: post.author.image?.url || '/assets/authors/default.jpg',
    publishDate: new Date(post.published).toISOString().split('T')[0],
    readTime: readTime,
    image: image,
    tags: post.labels || [],
    featured: false,
    seoTitle: post.title,
    metaDescription: excerpt,
    keywords: post.labels || []
  };
}
