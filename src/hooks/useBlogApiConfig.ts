import { useState, useEffect } from 'react';
import { BlogPost, BlogPostSummary, BlogFilters, RelatedPost } from '../api/types';
import { activeBlogApi, USE_STRAPI } from '../api/blogApiConfig';

// Universal hooks that work with both static data and Strapi
export const useBlogPosts = (filters?: BlogFilters) => {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await activeBlogApi.getAllPosts(filters);
        setPosts(response.data);
        setMeta(response.meta);
      } catch (err: any) {
        setError(USE_STRAPI ? err.message : err.error?.message || 'Failed to fetch blog posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [JSON.stringify(filters)]);

  return { posts, loading, error, meta };
};

export const useBlogPost = (slug: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await activeBlogApi.getPostBySlug(slug);
        setPost(response.data);
      } catch (err: any) {
        setError(USE_STRAPI ? err.message : err.error?.message || 'Failed to fetch blog post');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading, error };
};

export const useFeaturedPosts = (limit?: number) => {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await activeBlogApi.getFeaturedPosts(limit);
        setPosts(response.data);
      } catch (err: any) {
        setError(USE_STRAPI ? err.message : err.error?.message || 'Failed to fetch featured posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPosts();
  }, [limit]);

  return { posts, loading, error };
};

export const useRelatedPosts = (postId: number, limit?: number) => {
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await activeBlogApi.getRelatedPosts(postId, limit);
        setRelatedPosts(response.data);
      } catch (err: any) {
        setError(USE_STRAPI ? err.message : err.error?.message || 'Failed to fetch related posts');
        setRelatedPosts([]);
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchRelatedPosts();
    }
  }, [postId, limit]);

  return { relatedPosts, loading, error };
};

export const useBlogCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await activeBlogApi.getCategories();
        setCategories(response.data);
      } catch (err: any) {
        setError(USE_STRAPI ? err.message : err.error?.message || 'Failed to fetch categories');
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export const useBlogTags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await activeBlogApi.getTags();
        setTags(response.data);
      } catch (err: any) {
        setError(USE_STRAPI ? err.message : err.error?.message || 'Failed to fetch tags');
        setTags([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return { tags, loading, error };
};