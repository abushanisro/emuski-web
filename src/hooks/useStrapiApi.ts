import { useState, useEffect } from 'react';
import { strapiApi } from '../api/strapiApi';
import { BlogPost, BlogPostSummary, BlogFilters, RelatedPost } from '../api/types';

export const useStrapiPosts = (filters?: BlogFilters) => {
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
        const response = await strapiApi.getAllPosts(filters);
        setPosts(response.data);
        setMeta(response.meta);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blog posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [JSON.stringify(filters)]);

  return { posts, loading, error, meta };
};

export const useStrapiPost = (slug: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await strapiApi.getPostBySlug(slug);
        setPost(response.data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blog post');
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

export const useStrapiFeauredPosts = (limit?: number) => {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await strapiApi.getFeaturedPosts(limit);
        setPosts(response.data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch featured posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPosts();
  }, [limit]);

  return { posts, loading, error };
};

export const useStrapiRelatedPosts = (postId: number, limit?: number) => {
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await strapiApi.getRelatedPosts(postId, limit);
        setRelatedPosts(response.data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch related posts');
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

export const useStrapiCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await strapiApi.getCategories();
        setCategories(['All', ...response.data]);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch categories');
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export const useStrapiTags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await strapiApi.getTags();
        setTags(response.data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch tags');
        setTags([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return { tags, loading, error };
};