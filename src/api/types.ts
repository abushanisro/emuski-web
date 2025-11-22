export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  fullContent: string;
  category: string;
  author: string;
  authorBio: string;
  authorImage: string;
  publishDate: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface BlogPostSummary {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export interface BlogListResponse {
  data: BlogPostSummary[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface BlogPostResponse {
  data: BlogPost;
}

export interface BlogFilters {
  category?: string;
  tag?: string;
  featured?: boolean;
  search?: string;
  page?: number;
  limit?: number;
}

export interface ApiError {
  error: {
    message: string;
    code: string;
    details?: any;
  };
}

export interface RelatedPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}