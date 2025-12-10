import { allBlogPosts, relatedPosts } from '../data/blogData';
import {
  BlogPost,
  BlogPostSummary,
  BlogListResponse,
  BlogPostResponse,
  BlogFilters,
  RelatedPost,
  ApiError
} from './types';

const API_BASE_URL = '/api/v1';

class BlogApi {
  private mapToBlogPostSummary(post: BlogPost): BlogPostSummary {
    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      author: post.author,
      publishDate: post.publishDate,
      readTime: post.readTime,
      image: post.image,
      tags: post.tags,
      featured: post.featured,
    };
  }

  private filterPosts(posts: BlogPost[], filters: BlogFilters): BlogPost[] {
    let filtered = [...posts];

    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter(post => post.category === filters.category);
    }

    if (filters.tag) {
      filtered = filtered.filter(post => post.tags.includes(filters.tag));
    }

    if (filters.featured !== undefined) {
      filtered = filtered.filter(post => post.featured === filters.featured);
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.author.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    return filtered;
  }

  private paginateResults<T>(items: T[], page: number = 1, limit: number = 10): { data: T[], meta: any } {
    const offset = (page - 1) * limit;
    const paginatedItems = items.slice(offset, offset + limit);
    const total = items.length;
    const totalPages = Math.ceil(total / limit);

    return {
      data: paginatedItems,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      }
    };
  }

  async getAllPosts(filters: BlogFilters = {}): Promise<BlogListResponse> {
    try {
      const { page = 1, limit = 10, ...otherFilters } = filters;

      const filteredPosts = this.filterPosts(allBlogPosts, otherFilters);

      const sortedPosts = filteredPosts.sort((a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      );

      const summaries = sortedPosts.map(post => this.mapToBlogPostSummary(post));
      const result = this.paginateResults(summaries, page, limit);

      return result as BlogListResponse;
    } catch (error) {
      throw this.createApiError('Failed to fetch blog posts', 'FETCH_POSTS_ERROR', error);
    }
  }

  async getFeaturedPosts(limit: number = 5): Promise<BlogListResponse> {
    try {
      const featuredPosts = allBlogPosts
        .filter(post => post.featured)
        .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
        .slice(0, limit)
        .map(post => this.mapToBlogPostSummary(post));

      return {
        data: featuredPosts,
        meta: {
          total: featuredPosts.length,
          page: 1,
          limit,
          totalPages: 1,
          hasNextPage: false,
          hasPrevPage: false,
        }
      };
    } catch (error) {
      throw this.createApiError('Failed to fetch featured posts', 'FETCH_FEATURED_ERROR', error);
    }
  }

  async getPostBySlug(slug: string): Promise<BlogPostResponse> {
    try {
      const post = allBlogPosts.find(p => p.slug === slug);

      if (!post) {
        throw this.createApiError(`Post not found: ${slug}`, 'POST_NOT_FOUND');
      }

      return { data: post };
    } catch (error) {
      if (error instanceof Error && error.message.includes('POST_NOT_FOUND')) {
        throw error;
      }
      throw this.createApiError('Failed to fetch blog post', 'FETCH_POST_ERROR', error);
    }
  }

  async getPostById(id: number): Promise<BlogPostResponse> {
    try {
      const post = allBlogPosts.find(p => p.id === id);

      if (!post) {
        throw this.createApiError(`Post not found: ${id}`, 'POST_NOT_FOUND');
      }

      return { data: post };
    } catch (error) {
      if (error instanceof Error && error.message.includes('POST_NOT_FOUND')) {
        throw error;
      }
      throw this.createApiError('Failed to fetch blog post', 'FETCH_POST_ERROR', error);
    }
  }

  async getRelatedPosts(postId: number, limit: number = 3): Promise<{ data: RelatedPost[] }> {
    try {
      const currentPost = allBlogPosts.find(p => p.id === postId);

      if (!currentPost) {
        throw this.createApiError(`Post not found: ${postId}`, 'POST_NOT_FOUND');
      }

      const related = allBlogPosts
        .filter(post =>
          post.id !== postId &&
          (post.category === currentPost.category ||
           post.tags.some(tag => currentPost.tags.includes(tag)))
        )
        .sort((a, b) => {
          const aScore = this.calculateRelatednessScore(currentPost, a);
          const bScore = this.calculateRelatednessScore(currentPost, b);
          return bScore - aScore;
        })
        .slice(0, limit)
        .map(post => ({
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          image: post.image,
          link: `/blog/${post.slug}`,
        }));

      return { data: related };
    } catch (error) {
      if (error instanceof Error && error.message.includes('POST_NOT_FOUND')) {
        throw error;
      }
      throw this.createApiError('Failed to fetch related posts', 'FETCH_RELATED_ERROR', error);
    }
  }

  async getCategories(): Promise<{ data: string[] }> {
    try {
      const uniqueCategories = Array.from(new Set(allBlogPosts.map(post => post.category)));
      const categories = ['All', ...uniqueCategories.filter(cat => cat !== 'All')];
      return { data: categories };
    } catch (error) {
      throw this.createApiError('Failed to fetch categories', 'FETCH_CATEGORIES_ERROR', error);
    }
  }

  async getTags(): Promise<{ data: string[] }> {
    try {
      const tags = Array.from(new Set(allBlogPosts.flatMap(post => post.tags)));
      return { data: tags.sort() };
    } catch (error) {
      throw this.createApiError('Failed to fetch tags', 'FETCH_TAGS_ERROR', error);
    }
  }

  private calculateRelatednessScore(post1: BlogPost, post2: BlogPost): number {
    let score = 0;
    
    if (post1.category === post2.category) score += 3;
    
    const commonTags = post1.tags.filter(tag => post2.tags.includes(tag));
    score += commonTags.length * 2;
    
    if (post1.author === post2.author) score += 1;
    
    return score;
  }

  private createApiError(message: string, code: string, details?: any): Error {
    const error = new Error(message) as Error & { error?: { message: string; code: string; details?: any } };
    error.error = {
      message,
      code,
      details
    };
    return error;
  }
}

export const blogApi = new BlogApi();
export default blogApi;