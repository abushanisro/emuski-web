'use client'

import { useState, useEffect } from 'react';
import {
  getBlogId,
  fetchBloggerPosts,
  fetchBloggerPost,
  searchBloggerPostsByLabel,
  convertBloggerPostToLocalFormat,
  BloggerPost
} from '../api/bloggerApi';

// Your Blogger blog URL - Update this with your actual Blogger blog URL
// Example: 'https://yourblog.blogspot.com' or your custom domain
const BLOG_URL = 'https://emuski.blogspot.com'; // TODO: Replace with your actual blog URL

export const useBloggerPosts = (maxResults: number = 10) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [blogId, setBlogId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get blog ID
        const id = await getBlogId(BLOG_URL);
        setBlogId(id);

        // Fetch posts
        const response = await fetchBloggerPosts(id, maxResults);

        // Convert to local format
        const convertedPosts = response.items.map(convertBloggerPostToLocalFormat);
        setPosts(convertedPosts);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blog posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [maxResults]);

  return { posts, loading, error, blogId };
};

export const useBloggerPost = (postId: string) => {
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get blog ID
        const blogId = await getBlogId(BLOG_URL);

        // Fetch post
        const bloggerPost = await fetchBloggerPost(blogId, postId);

        // Convert to local format
        const convertedPost = convertBloggerPostToLocalFormat(bloggerPost);
        setPost(convertedPost);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blog post');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  return { post, loading, error };
};

export const useBloggerPostsByLabel = (label: string, maxResults: number = 10) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get blog ID
        const blogId = await getBlogId(BLOG_URL);

        // Fetch posts by label
        const response = await searchBloggerPostsByLabel(blogId, label, maxResults);

        // Convert to local format
        const convertedPosts = response.items.map(convertBloggerPostToLocalFormat);
        setPosts(convertedPosts);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blog posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    if (label) {
      fetchPosts();
    }
  }, [label, maxResults]);

  return { posts, loading, error };
};
