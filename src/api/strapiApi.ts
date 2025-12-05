import { 
  BlogPost, 
  BlogPostSummary, 
  BlogListResponse, 
  BlogPostResponse, 
  BlogFilters, 
  RelatedPost,
  StrapiResponse,
  StrapiCollectionResponse,
  StrapiArticle
} from './types';

class StrapiApi {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  }

  private async fetchFromStrapi(endpoint: string): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/api${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || ''}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Strapi API Error:', error);
      throw error;
    }
  }

  private mapStrapiToBlogPost(strapiData: StrapiArticle): BlogPost {
    const { id, attributes } = strapiData;
    
    return {
      id,
      slug: attributes.slug,
      title: attributes.title,
      excerpt: attributes.excerpt || '',
      content: attributes.content || '',
      fullContent: attributes.fullContent || attributes.content || '',
      category: attributes.category?.data?.attributes?.name || 'Uncategorized',
      author: attributes.author?.data?.attributes?.name || 'Anonymous',
      authorBio: attributes.author?.data?.attributes?.bio || '',
      authorImage: attributes.author?.data?.attributes?.avatar?.data?.attributes?.url || '/assets/team/founder.jpg',
      publishDate: attributes.publishedAt || attributes.createdAt,
      readTime: this.calculateReadTime(attributes.content || ''),
      image: attributes.featuredImage?.data?.attributes?.url || '/ai-solutions-hero.jpg',
      tags: attributes.tags?.data?.map((tag: any) => tag.attributes.name) || [],
      featured: attributes.featured || false,
      seoTitle: attributes.seoTitle || attributes.title,
      metaDescription: attributes.metaDescription || attributes.excerpt || '',
      keywords: attributes.keywords || []
    };
  }

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

  private calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  }

  private buildQueryParams(filters: BlogFilters): string {
    const params = new URLSearchParams();
    
    // Populate fields
    params.append('populate[category]', 'true');
    params.append('populate[author][populate]', 'avatar');
    params.append('populate[featuredImage]', 'true');
    params.append('populate[tags]', 'true');

    // Filters
    if (filters.category && filters.category !== 'All') {
      params.append('filters[category][name][$eq]', filters.category);
    }

    if (filters.tag) {
      params.append('filters[tags][name][$containsi]', filters.tag);
    }

    if (filters.featured !== undefined) {
      params.append('filters[featured][$eq]', filters.featured.toString());
    }

    if (filters.search) {
      params.append('filters[$or][0][title][$containsi]', filters.search);
      params.append('filters[$or][1][excerpt][$containsi]', filters.search);
      params.append('filters[$or][2][content][$containsi]', filters.search);
    }

    // Pagination
    if (filters.page) {
      params.append('pagination[page]', filters.page.toString());
    }

    if (filters.limit) {
      params.append('pagination[pageSize]', filters.limit.toString());
    }

    // Sorting
    params.append('sort[0]', 'publishedAt:desc');

    return params.toString();
  }

  async getAllPosts(filters: BlogFilters = {}): Promise<BlogListResponse> {
    try {
      const queryParams = this.buildQueryParams(filters);
      const response: StrapiCollectionResponse<StrapiArticle> = await this.fetchFromStrapi(
        `/articles?${queryParams}`
      );

      const posts = response.data.map(item => this.mapStrapiToBlogPost(item));
      const summaries = posts.map(post => this.mapToBlogPostSummary(post));

      return {
        data: summaries,
        meta: {
          total: response.meta.pagination.total,
          page: response.meta.pagination.page,
          limit: response.meta.pagination.pageSize,
          totalPages: response.meta.pagination.pageCount,
          hasNextPage: response.meta.pagination.page < response.meta.pagination.pageCount,
          hasPrevPage: response.meta.pagination.page > 1,
        }
      };
    } catch (error) {
      console.error('Failed to fetch posts from Strapi:', error);
      throw new Error('Failed to fetch blog posts');
    }
  }

  async getFeaturedPosts(limit: number = 5): Promise<BlogListResponse> {
    try {
      const response: StrapiCollectionResponse<StrapiArticle> = await this.fetchFromStrapi(
        `/articles?filters[featured][$eq]=true&populate[category]=true&populate[author][populate]=avatar&populate[featuredImage]=true&populate[tags]=true&sort[0]=publishedAt:desc&pagination[pageSize]=${limit}`
      );

      const posts = response.data.map(item => this.mapStrapiToBlogPost(item));
      const summaries = posts.map(post => this.mapToBlogPostSummary(post));

      return {
        data: summaries,
        meta: {
          total: summaries.length,
          page: 1,
          limit,
          totalPages: 1,
          hasNextPage: false,
          hasPrevPage: false,
        }
      };
    } catch (error) {
      console.error('Failed to fetch featured posts from Strapi:', error);
      throw new Error('Failed to fetch featured posts');
    }
  }

  async getPostBySlug(slug: string): Promise<BlogPostResponse> {
    try {
      const response: StrapiCollectionResponse<StrapiArticle> = await this.fetchFromStrapi(
        `/articles?filters[slug][$eq]=${slug}&populate[category]=true&populate[author][populate]=avatar&populate[featuredImage]=true&populate[tags]=true`
      );

      if (!response.data || response.data.length === 0) {
        throw new Error(`Post not found: ${slug}`);
      }

      const post = this.mapStrapiToBlogPost(response.data[0]);
      return { data: post };
    } catch (error) {
      console.error('Failed to fetch post by slug from Strapi:', error);
      throw new Error(`Failed to fetch blog post: ${slug}`);
    }
  }

  async getPostById(id: number): Promise<BlogPostResponse> {
    try {
      const response: StrapiResponse<StrapiArticle> = await this.fetchFromStrapi(
        `/articles/${id}?populate[category]=true&populate[author][populate]=avatar&populate[featuredImage]=true&populate[tags]=true`
      );

      if (!response.data) {
        throw new Error(`Post not found: ${id}`);
      }

      const post = this.mapStrapiToBlogPost(response.data);
      return { data: post };
    } catch (error) {
      console.error('Failed to fetch post by ID from Strapi:', error);
      throw new Error(`Failed to fetch blog post: ${id}`);
    }
  }

  async getRelatedPosts(postId: number, limit: number = 3): Promise<{ data: RelatedPost[] }> {
    try {
      // First get the current post to find its category and tags
      const currentPostResponse = await this.getPostById(postId);
      const currentPost = currentPostResponse.data;

      // Get related posts by category or tags
      const response: StrapiCollectionResponse<StrapiArticle> = await this.fetchFromStrapi(
        `/articles?filters[$or][0][category][name][$eq]=${currentPost.category}&filters[$or][1][tags][name][$in]=${currentPost.tags.join(',')}&filters[id][$ne]=${postId}&populate[featuredImage]=true&sort[0]=publishedAt:desc&pagination[pageSize]=${limit}`
      );

      const relatedPosts: RelatedPost[] = response.data.map(item => ({
        id: item.id,
        title: item.attributes.title,
        excerpt: item.attributes.excerpt || '',
        image: item.attributes.featuredImage?.data?.attributes?.url || '/ai-solutions-hero.jpg',
        link: `/blog/${item.attributes.slug}`,
      }));

      return { data: relatedPosts };
    } catch (error) {
      console.error('Failed to fetch related posts from Strapi:', error);
      throw new Error('Failed to fetch related posts');
    }
  }

  async getCategories(): Promise<{ data: string[] }> {
    try {
      const response = await this.fetchFromStrapi('/categories');
      const categories = response.data.map((item: any) => item.attributes.name);
      return { data: categories.sort() };
    } catch (error) {
      console.error('Failed to fetch categories from Strapi:', error);
      throw new Error('Failed to fetch categories');
    }
  }

  async getTags(): Promise<{ data: string[] }> {
    try {
      const response = await this.fetchFromStrapi('/tags');
      const tags = response.data.map((item: any) => item.attributes.name);
      return { data: tags.sort() };
    } catch (error) {
      console.error('Failed to fetch tags from Strapi:', error);
      throw new Error('Failed to fetch tags');
    }
  }
}

export const strapiApi = new StrapiApi();
export default strapiApi;