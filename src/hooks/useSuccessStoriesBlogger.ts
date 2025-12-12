'use client'

import { useState, useEffect } from 'react';
import {
  getBlogId,
  fetchBloggerPosts,
  convertBloggerPostToLocalFormat,
} from '../api/bloggerApi';

// Success Stories Blogger blog URL
const SUCCESS_STORIES_BLOG_URL = 'https://emuski-stories.blogspot.com';

export const useSuccessStoriesPosts = (maxResults: number = 10) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [blogId, setBlogId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get blog ID for success stories blog
        const id = await getBlogId(SUCCESS_STORIES_BLOG_URL);
        setBlogId(id);

        // Fetch posts
        const response = await fetchBloggerPosts(id, maxResults);

        // Convert to local format and set category to "Case Study"
        const convertedPosts = response.items.map(post => {
          const converted = convertBloggerPostToLocalFormat(post);
          return {
            ...converted,
            category: 'Case Study'
          };
        });
        setPosts(convertedPosts);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch success stories');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [maxResults]);

  return { posts, loading, error, blogId };
};
