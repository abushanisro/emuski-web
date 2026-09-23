import { MetadataRoute } from 'next';
import { fetchAllBlogs } from '@/lib/api/blogger';

/**
 * Dynamic Sitemap Generation for EMUSKI
 *
 * Industry Standard SEO Implementation:
 * - Automatically includes all blog posts from Blogger API
 * - Updates every hour via ISR (revalidate: 3600)
 * - Proper priority and changefreq settings
 * - Ensures Google discovers all canonical URLs
 *
 * Performance: ISR-cached, rebuilds hourly to stay in sync with blog updates
 */
export const revalidate = 3600; // 1 hour ISR, matches blog revalidation

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.emuski.com';

  // Only pages with a known, accurate modification date carry a lastmod. Static pages are
  // omitted rather than given a guessed date; the homepage date is derived from git history.
  const HOMEPAGE_LASTMOD = process.env.HOMEPAGE_CONTENT_DATE;

  // Static pages with high priority (only include pages that actually exist)
  // 2026 SEO Best Practice: Strategic priority and change frequency optimization
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: HOMEPAGE_LASTMOD,
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage - highest priority
    },
    // Core service pages - Prioritized indexing order
    // 1. Manufacturing Services (highest priority)
    // 2. Precision Engineering (second priority)
    // Note: /services redirects to /manufacturing-services, so removed from sitemap
    {
      url: `${baseUrl}/manufacturing-services`,
      changeFrequency: 'weekly',
      priority: 0.99, // HIGHEST - Primary OEM manufacturing service page
    },
    {
      url: `${baseUrl}/cost-engineering`,
      changeFrequency: 'weekly',
      priority: 0.97, // SECOND - Cost engineering and VAVE services
    },
    {
      url: `${baseUrl}/cost-engineering-services`,
      changeFrequency: 'weekly',
      priority: 0.95, // Core service offering
    },
    {
      url: `${baseUrl}/manufacturing-engineering-solutions`,
      changeFrequency: 'weekly',
      priority: 0.92, // High priority engineering solutions
    },
    // Geographic-specific service pages
    {
      url: `${baseUrl}/manufacturing-in-bangalore`,
      changeFrequency: 'weekly',
      priority: 0.94, // Local SEO focus
    },
    {
      url: `${baseUrl}/cost-engineering-uk`,
      changeFrequency: 'weekly',
      priority: 0.93, // International market focus
    },
    {
      url: `${baseUrl}/cost-engineering-usa`,
      changeFrequency: 'weekly',
      priority: 0.93, // International market focus
    },
    {
      url: `${baseUrl}/cost-engineering-germany`,
      changeFrequency: 'weekly',
      priority: 0.93, // International market focus
    },
    // Innovation and technology pages
    {
      url: `${baseUrl}/solutions/ai`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      changeFrequency: 'weekly',
      priority: 0.8, // High priority - careers and hiring
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/interview-guide`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Fetch all blog posts dynamically - now fetches ALL posts automatically
  let blogPages: MetadataRoute.Sitemap = [];

  try {
    const { all: allPosts } = await fetchAllBlogs(true);

    blogPages = allPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.lastModified || post.publishDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    const newest = allPosts
      .map((post) => post.lastModified || post.publishDate)
      .filter(Boolean)
      .sort()
      .pop();
    const blogIndex = staticPages.find((page) => page.url === `${baseUrl}/blog`);
    if (blogIndex && newest) blogIndex.lastModified = newest;
  } catch {
    // Return static pages even if blog fetch fails
  }

  return [...staticPages, ...blogPages];
}
