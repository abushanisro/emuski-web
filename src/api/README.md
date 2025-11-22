# Blog API Documentation

## Overview

This API provides clean, well-structured endpoints for managing blog functionality with proper error handling, pagination, and filtering capabilities following REST API standards.

## API Structure

### Types

#### BlogPost
```typescript
interface BlogPost {
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
```

#### BlogPostSummary
```typescript
interface BlogPostSummary {
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
```

## API Methods

### `getAllPosts(filters?)`
Retrieves paginated blog posts with optional filtering.

**Parameters:**
- `filters?: BlogFilters`
  - `category?: string`
  - `tag?: string`
  - `featured?: boolean`
  - `search?: string`
  - `page?: number` (default: 1)
  - `limit?: number` (default: 10)

**Response:**
```typescript
{
  data: BlogPostSummary[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  }
}
```

### `getFeaturedPosts(limit?)`
Retrieves featured blog posts.

**Parameters:**
- `limit?: number` (default: 5)

**Response:** `BlogListResponse`

### `getPostBySlug(slug)`
Retrieves a single blog post by its slug.

**Parameters:**
- `slug: string`

**Response:**
```typescript
{
  data: BlogPost;
}
```

### `getPostById(id)`
Retrieves a single blog post by its ID.

**Parameters:**
- `id: number`

**Response:** `BlogPostResponse`

### `getRelatedPosts(postId, limit?)`
Retrieves related posts based on category and tags.

**Parameters:**
- `postId: number`
- `limit?: number` (default: 3)

**Response:**
```typescript
{
  data: RelatedPost[];
}
```

### `getCategories()`
Retrieves all available blog categories.

**Response:**
```typescript
{
  data: string[];
}
```

### `getTags()`
Retrieves all available blog tags.

**Response:**
```typescript
{
  data: string[];
}
```

## React Hooks

### `useBlogPosts(filters?)`
Hook for fetching paginated blog posts with filtering.

**Returns:**
```typescript
{
  posts: BlogPostSummary[];
  loading: boolean;
  error: string | null;
  meta: PaginationMeta;
}
```

### `useBlogPost(slug)`
Hook for fetching a single blog post.

**Returns:**
```typescript
{
  post: BlogPost | null;
  loading: boolean;
  error: string | null;
}
```

### `useFeaturedPosts(limit?)`
Hook for fetching featured posts.

### `useRelatedPosts(postId, limit?)`
Hook for fetching related posts.

### `useBlogCategories()`
Hook for fetching all categories.

### `useBlogTags()`
Hook for fetching all tags.

## Error Handling

All API methods return structured error objects:

```typescript
{
  error: {
    message: string;
    code: string;
    details?: any;
  }
}
```

Common error codes:
- `POST_NOT_FOUND` - Requested post doesn't exist
- `FETCH_POSTS_ERROR` - General error fetching posts
- `FETCH_FEATURED_ERROR` - Error fetching featured posts
- `FETCH_RELATED_ERROR` - Error fetching related posts
- `FETCH_CATEGORIES_ERROR` - Error fetching categories
- `FETCH_TAGS_ERROR` - Error fetching tags

## Usage Examples

### Fetching all posts with filtering
```typescript
const { posts, loading, error, meta } = useBlogPosts({
  category: 'Technology',
  search: 'AI',
  page: 1,
  limit: 10
});
```

### Fetching a single post
```typescript
const { post, loading, error } = useBlogPost('my-blog-post-slug');
```

### Fetching featured posts
```typescript
const { posts, loading, error } = useFeaturedPosts(5);
```

## Best Practices

1. **Always handle loading states** - Use loading indicators while fetching data
2. **Implement error handling** - Display meaningful error messages to users
3. **Use pagination** - Implement pagination for better performance
4. **Cache responses** - Consider implementing caching for better UX
5. **Debounce search** - Implement search debouncing to reduce API calls
6. **SEO optimization** - Use the provided SEO fields for better search rankings