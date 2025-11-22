import { useState, useEffect } from 'react';
import { blogApi } from '../api/blogApi';
import { BlogPost, BlogPostSummary, BlogFilters, RelatedPost } from '../api/types';

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
        const response = await blogApi.getAllPosts(filters);
        setPosts(response.data);
        setMeta(response.meta);
      } catch (err: any) {
        setError(err.error?.message || 'Failed to fetch blog posts');
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
        const response = await blogApi.getPostBySlug(slug);
        setPost(response.data);
      } catch (err: any) {
        setError(err.error?.message || 'Failed to fetch blog post');
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
        const response = await blogApi.getFeaturedPosts(limit);
        setPosts(response.data);
      } catch (err: any) {
        setError(err.error?.message || 'Failed to fetch featured posts');
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
        const response = await blogApi.getRelatedPosts(postId, limit);
        setRelatedPosts(response.data);
      } catch (err: any) {
        setError(err.error?.message || 'Failed to fetch related posts');
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
        const response = await blogApi.getCategories();
        setCategories(['All', ...response.data]);
      } catch (err: any) {
        setError(err.error?.message || 'Failed to fetch categories');
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
        const response = await blogApi.getTags();
        setTags(response.data);
      } catch (err: any) {
        setError(err.error?.message || 'Failed to fetch tags');
        setTags([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return { tags, loading, error };
};