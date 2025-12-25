'use client'

import { useState, useEffect, useMemo, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import { ArrowLeft, Twitter, Linkedin, Facebook, Mail, Menu, Share2, Bookmark, Clock, Calendar, ChevronRight } from "lucide-react";
import { useBloggerPosts } from "../hooks/useBloggerApi";
import { useSuccessStoriesPosts } from "../hooks/useSuccessStoriesBlogger";
import { useEngineeringPosts } from "../hooks/useEngineeringBlogger";
import { BlogNotFoundPage, LoadingPage } from "./ui/error-pages";
import "../styles/blog-content.css";

export const BlogPostComponent = () => {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const tocNavRef = useRef<HTMLElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Fetch from all three blogs: Manufacturing, Engineering, and Success Stories
  const { posts: manufacturingPosts, loading: mfgLoading, error: mfgError } = useBloggerPosts(50);
  const { posts: engineeringPosts, loading: engLoading, error: engError } = useEngineeringPosts(50);
  const { posts: storyPosts, loading: storyLoading, error: storyError } = useSuccessStoriesPosts(50);

  // Combine posts from all three blogs
  const allPosts = useMemo(() => {
    return [...(manufacturingPosts || []), ...(engineeringPosts || []), ...(storyPosts || [])];
  }, [manufacturingPosts, engineeringPosts, storyPosts]);

  const loading = mfgLoading || engLoading || storyLoading;
  const error = mfgError || engError || storyError;

  const post = useMemo(() => {
    return allPosts.find(p => p.slug === slug);
  }, [allPosts, slug]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return allPosts
      .filter(p => p.id !== post.id && p.category === post.category)
      .slice(0, 3)
      .map(p => ({
        id: parseInt(p.id),
        title: p.title,
        excerpt: p.excerpt,
        image: p.image,
        link: `/blog/${p.slug}`
      }));
  }, [allPosts, post]);

  const tableOfContents = useMemo(() => {
    if (!post) return [];
    const headings: { id: string; text: string; level: number }[] = [];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.fullContent;
    const headingElements = tempDiv.querySelectorAll('h2, h3');

    headingElements.forEach((heading, index) => {
      const text = heading.textContent || '';
      const id = `heading-${index}`;
      const level = parseInt(heading.tagName.substring(1));
      headings.push({ id, text, level });
    });

    return headings;
  }, [post]);

  // Scroll progress tracking - optimized with requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!contentRef.current) {
            ticking = false;
            return;
          }

          const contentElement = contentRef.current;
          const contentRect = contentElement.getBoundingClientRect();
          const contentHeight = contentElement.offsetHeight;
          const viewportHeight = window.innerHeight;

          // Calculate progress based on content visibility
          const contentTop = contentRect.top;
          const scrolled = Math.max(0, -contentTop);
          const totalScrollable = contentHeight - viewportHeight;
          const scrollPercent = totalScrollable > 0 ? (scrolled / totalScrollable) * 100 : 0;

          setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Accurate section detection using IntersectionObserver
  useEffect(() => {
    if (!contentRef.current) return;

    const headings = contentRef.current.querySelectorAll('h2[id], h3[id]');
    if (headings.length === 0) return;

    const observerOptions = {
      rootMargin: '-100px 0px -66% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [post]);

  // REMOVED: Client-side metadata manipulation
  // Metadata is now handled server-side via generateMetadata in page.tsx
  // This prevents canonical tags from appearing outside <head> and improves SEO

  useEffect(() => {
    if (post && contentRef.current) {
      const headingElements = contentRef.current.querySelectorAll('h2, h3, h4, h5, h6');
      headingElements.forEach((heading, index) => {
        heading.id = `heading-${index}`;

        // Make FAQ questions extra bold - ONLY if it's an actual question with "?"
        const text = heading.textContent || '';
        const lowerText = text.toLowerCase();

        // Only apply extra bold if:
        // 1. Contains a question mark AND starts with question words, OR
        // 2. Explicitly mentions "FAQ" or "Frequently Asked"
        const isQuestion = text.includes('?') && (
          lowerText.startsWith('what ') ||
          lowerText.startsWith('how ') ||
          lowerText.startsWith('why ') ||
          lowerText.startsWith('when ') ||
          lowerText.startsWith('where ') ||
          lowerText.startsWith('who ') ||
          lowerText.startsWith('can ') ||
          lowerText.startsWith('is ') ||
          lowerText.startsWith('are ') ||
          lowerText.startsWith('does ') ||
          lowerText.startsWith('do ')
        );

        const isFAQSection = lowerText.includes('faq') || lowerText.includes('frequently asked');

        if (isQuestion || isFAQSection) {
          (heading as HTMLElement).style.fontWeight = '900';
          (heading as HTMLElement).style.color = '#171A22';
          heading.classList.add('faq-question');

          // Ensure inner content is bold
          const allElements = heading.querySelectorAll('*');
          allElements.forEach(element => {
            (element as HTMLElement).style.fontWeight = '900';
          });

          // If there's no strong tag, wrap the content
          if (!heading.querySelector('strong')) {
            const innerHTML = heading.innerHTML;
            heading.innerHTML = `<strong>${innerHTML}</strong>`;
          }
        }
      });
    }
  }, [post]);

  // Auto-scroll active TOC item into view - NO smooth behavior to prevent glitching
  useEffect(() => {
    if (activeSection && tocNavRef.current) {
      const activeButton = tocNavRef.current.querySelector(`button[data-section="${activeSection}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'auto',
          block: 'nearest',
          inline: 'nearest'
        });
      }
    }
  }, [activeSection]);

  if (loading) {
    return <LoadingPage title="Loading Article" description="Please wait while we fetch this article..." />;
  }

  if (error || !post) {
    return <BlogNotFoundPage description={error} />;
  }

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "author": {
      "@type": "Person",
      "name": post.author,
      "image": post.authorImage
    },
    "publisher": {
      "@type": "Organization",
      "name": "EMUSKI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.emuski.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.emuski.com/blog/${post.slug}`
    },
    "keywords": post.tags?.join(", "),
    "articleSection": post.category,
    "wordCount": post.fullContent.replace(/<[^>]*>/g, '').split(/\s+/).length
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`);
        break;
    }
    setShowShareMenu(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 96; // Account for sticky navbar (64px navbar + 32px padding)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = elementPosition - offset;

      // Disable smooth scroll temporarily to prevent conflicts
      const originalBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Re-enable smooth scroll after navigation
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = originalBehavior;
      }, 50);

      // Update active section immediately for better UX
      setTimeout(() => setActiveSection(id), 100);
      setTocOpen(false);
    }
  };

  return (
    <article ref={articleRef} className="min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 transition-all duration-150 ease-out shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-4 md:right-8 bottom-32 z-[100] flex flex-col gap-3">
        {/* Share Button */}
        <div className="relative">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:text-teal-600 transition-all hover:scale-110"
            aria-label="Share article"
          >
            <Share2 className="h-5 w-5" />
          </button>
          
          {showShareMenu && (
            <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-3 min-w-[200px] animate-in fade-in slide-in-from-bottom-4 duration-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">Share Article</p>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-500 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="text-sm font-medium">Twitter</span>
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-4 w-4" />
                <span className="text-sm font-medium">Facebook</span>
              </button>
              <button
                onClick={() => handleShare('email')}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium">Email</span>
              </button>
            </div>
          )}
        </div>

        {/* Bookmark Button */}
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`w-12 h-12 rounded-full shadow-lg hover:shadow-xl border transition-all hover:scale-110 flex items-center justify-center ${
            isBookmarked 
              ? 'bg-teal-600 text-white border-teal-600' 
              : 'bg-white text-gray-700 hover:text-teal-600 border-gray-200'
          }`}
          aria-label="Bookmark article"
        >
          <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:text-teal-600 transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowLeft className="h-5 w-5 rotate-90" />
        </button>
      </div>

      {/* Mobile TOC Toggle */}
      <button
        onClick={() => setTocOpen(!tocOpen)}
        className="lg:hidden fixed left-4 bottom-32 z-[100] w-12 h-12 rounded-full bg-teal-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110"
        aria-label="Table of contents"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Header */}
      <section className="bg-white pt-24 pb-6 md:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1440px]">
          <div className="max-w-[885px] mx-auto">
            {/* Breadcrumb Navigation */}
            <nav className="mb-4 sm:mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-teal-600 transition-colors">Home</Link></li>
                <li><ChevronRight className="h-3 w-3" /></li>
                <li><Link href="/blog" className="hover:text-teal-600 transition-colors">Blog</Link></li>
                <li><ChevronRight className="h-3 w-3" /></li>
                <li className="text-gray-900 font-medium line-clamp-1">{post.title}</li>
              </ol>
            </nav>

            {/* Category Badge */}
            <div className="mb-4 sm:mb-5">
              <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 text-sm font-semibold rounded-full border border-teal-200">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-black leading-[1.15] mb-5 sm:mb-6 text-[#171A22] tracking-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 font-normal">
                {post.excerpt}
              </p>
            )}

            {/* Author & Meta Info */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img
                  src={post.authorImage || '/assets/authors/default.jpg'}
                  alt={post.author}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-teal-100"
                />
                <div>
                  <p className="font-bold text-[#171A22] text-base sm:text-lg">{post.author}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Manufacturing Expert</p>
                </div>
              </div>

              <div className="h-10 w-px bg-gray-300 hidden sm:block"></div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-teal-600" />
                  <time dateTime={post.publishDate} className="font-medium">
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-teal-600" />
                  <span className="font-medium">{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-0 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover rounded-xl shadow-lg border border-gray-200 transition-transform duration-300 group-hover:scale-[1.01]"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="relative bg-white">
        <section className="pt-8 pb-8">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1440px]">
            <div className="lg:grid lg:grid-cols-[885px_1fr] lg:gap-16">
              {/* Main Content */}
              <div ref={mainContentRef} className="article-main-content">
                <div className="bg-white pt-0">
                  {/* Article Content */}
                  <div
                    ref={contentRef}
                    className="article-content prose prose-lg max-w-none
                      prose-headings:font-extrabold prose-headings:text-[#171A22] prose-headings:scroll-mt-24
                      prose-h1:text-[42px] prose-h1:leading-[1.2] prose-h1:mt-12 prose-h1:mb-6 prose-h1:font-black
                      prose-h2:text-[32px] prose-h2:leading-[1.3] prose-h2:mt-12 prose-h2:mb-5 prose-h2:font-extrabold prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
                      prose-h3:text-[24px] prose-h3:leading-[1.4] prose-h3:mt-10 prose-h3:mb-4 prose-h3:font-extrabold
                      prose-h4:text-[20px] prose-h4:leading-[1.4] prose-h4:mt-8 prose-h4:mb-3 prose-h4:font-extrabold
                      prose-h5:text-[18px] prose-h5:leading-[1.5] prose-h5:mt-6 prose-h5:mb-2 prose-h5:font-bold
                      prose-h6:text-[16px] prose-h6:leading-[1.5] prose-h6:mt-6 prose-h6:mb-2 prose-h6:font-bold
                      prose-p:text-[#171A22] prose-p:leading-[1.6] prose-p:mb-5 prose-p:text-base
                      prose-a:text-teal-600 prose-a:underline prose-a:underline-offset-2 prose-a:decoration-dotted hover:prose-a:text-teal-700 hover:prose-a:no-underline
                      prose-strong:text-[#171A22] prose-strong:font-black
                      prose-em:text-[#171A22] prose-em:italic
                      prose-ul:my-5 prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-6
                      prose-ol:my-5 prose-ol:space-y-2 prose-ol:list-decimal prose-ol:pl-6
                      prose-li:text-[#171A22] prose-li:leading-[1.6] prose-li:text-base prose-li:mb-2
                      prose-blockquote:border-l-4 prose-blockquote:border-teal-600 prose-blockquote:bg-[#FFE5CB] prose-blockquote:pl-6 prose-blockquote:pr-6 prose-blockquote:py-4 prose-blockquote:my-6 prose-blockquote:not-italic prose-blockquote:text-[#171A22] prose-blockquote:rounded-lg
                      prose-code:bg-[#F6F7F8] prose-code:text-teal-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                      prose-pre:bg-[#171A22] prose-pre:text-white prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
                      prose-img:rounded-lg prose-img:border prose-img:border-gray-200 prose-img:my-8 prose-img:w-full prose-img:h-auto
                      prose-table:w-full prose-table:border-collapse prose-table:my-6
                      prose-th:bg-gray-100 prose-th:p-3 prose-th:border prose-th:border-gray-300 prose-th:font-bold prose-th:text-left
                      prose-td:p-3 prose-td:border prose-td:border-gray-300"
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      wordBreak: 'break-word'
                    }}
                    dangerouslySetInnerHTML={{
                      __html: (() => {
                        let html = post.fullContent;

                        // STEP 1: Preserve bold formatting - Convert all bold indicators to <strong>
                        // This must happen BEFORE we remove inline styles
                        // Handle font-weight in spans and divs
                        html = html.replace(/<(span|div|p)([^>]*)\s*style="([^"]*font-weight:\s*(?:bold|700|800|900)[^"]*)"([^>]*)>([\s\S]*?)<\/\1>/gi,
                          (match, tag, before, style, after, content) => {
                            // If content is not already wrapped in strong/b, wrap it
                            if (!content.includes('<strong>') && !content.includes('<b>')) {
                              return `<${tag}${before}${after}><strong>${content}</strong></${tag}>`;
                            }
                            return `<${tag}${before}${after}>${content}</${tag}>`;
                          });

                        // Convert <b> tags to <strong> FIRST before any other processing
                        html = html.replace(/<b(\s[^>]*)?>/gi, '<strong>');
                        html = html.replace(/<\/b>/gi, '</strong>');

                        // Clean up inline styles but preserve some important ones
                        html = html.replace(/\sstyle="[^"]*"/gi, '');

                        // HARDENING: strip any stray <title>, <head>, or canonical tags that
                        // might have been copied into the Blogger HTML. These belong in
                        // the document <head>, not inside the article body, and some SEO
                        // crawlers will flag them as "outside <head>" if they appear here.
                        html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '');
                        html = html.replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, '');
                        html = html.replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '');
                        html = html.replace(/<html[^>]*>|<\/html>|<body[^>]*>|<\/body>/gi, '');

                        // Remove Google Docs specific attributes
                        html = html.replace(/\sface="[^"]*"/gi, '');
                        html = html.replace(/\sdir="[^"]*"/gi, '');
                        html = html.replace(/\srole="[^"]*"/gi, '');
                        html = html.replace(/\saria-level="[^"]*"/gi, '');
                        html = html.replace(/\sid="docs-internal-guid-[^"]*"/gi, '');

                        // EXTRA HARDENING: strip any <meta> tags that may have been
                        // pasted into the article HTML (including meta description
                        // and OG tags). Meta tags belong in <head>; keeping them in
                        // the article body can trigger SEO tools that check for
                        // "meta description outside <head>".
                        html = html.replace(/<meta[^>]*>/gi, '');

                        // First, extract images from anchor tags (Blogger often wraps images in links)
                        html = html.replace(/<a[^>]*>\s*(<img[^>]*>)\s*<\/a>/gi, '$1');

                        // Remove the first image (featured image) to avoid duplication
                        let firstImageRemoved = false;
                        html = html.replace(/<img([^>]*)>/i, (match, attrs) => {
                          if (!firstImageRemoved) {
                            firstImageRemoved = true;
                            return ''; // Remove the first image
                          }
                          return match; // Keep subsequent images
                        });

                        // Clean up images - keep them but remove inline styles and fix attributes
                        html = html.replace(/<img([^>]*)>/gi, (match, attrs) => {
                          // Extract src attribute - handle both single and double quotes
                          const srcMatch = attrs.match(/src\s*=\s*["']([^"']+)["']/i) ||
                                          attrs.match(/src\s*=\s*([^\s>]+)/i);
                          const altMatch = attrs.match(/alt\s*=\s*["']([^"']+)["']/i);
                          const titleMatch = attrs.match(/title\s*=\s*["']([^"']+)["']/i);

                          if (srcMatch) {
                            let src = srcMatch[1];

                            // Fix Blogger image URLs if needed
                            if (src.includes('blogger.googleusercontent.com') ||
                                src.includes('blogspot.com') ||
                                src.includes('bp.blogspot.com')) {
                              // Remove any size restrictions from Blogger URLs
                              src = src.replace(/\/s\d+(-c)?\//, '/s1600/');
                            }

                            const alt = altMatch ? altMatch[1] : (titleMatch ? titleMatch[1] : '');

                            // Return clean img tag with proper classes
                            return `<img src="${src}" alt="${alt}" class="w-full h-auto rounded-lg border border-gray-200 my-8 object-cover" loading="lazy" onerror="this.style.display='none'" />`;
                          }
                          return '';
                        });

                        // Remove separator divs that blogger adds (but keep images inside)
                        html = html.replace(/<div[^>]*class=["'][^"']*separator[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi, '$1');

                        // Convert <i> tags to <em> for better semantic HTML
                        html = html.replace(/<i(\s[^>]*)?>([\s\S]+?)<\/i>/gi, '<em>$2</em>');

                        // Ensure FAQ questions have strong tags wrapped
                        // Only wrap if it's a question (contains ?) AND starts with question words
                        html = html.replace(/<(h[2-6])([^>]*)>([\s\S]*?)\?([^<]*)<\/h[2-6]>/gi,
                          (match, tag, attrs, content, afterQuestion) => {
                            const fullContent = content + '?' + afterQuestion;
                            const lowerContent = fullContent.toLowerCase();

                            // Check if it starts with question words
                            const isQuestion = lowerContent.match(/^\s*(?:what|how|why|when|where|who|can|is|does|are|do)\s/i);
                            const isFAQ = lowerContent.includes('faq') || lowerContent.includes('frequently asked');

                            if (isQuestion || isFAQ) {
                              // If not already wrapped in strong, wrap it
                              if (!fullContent.includes('<strong>')) {
                                return `<${tag}${attrs}><strong>${fullContent}</strong></${tag}>`;
                              }
                            }
                            return match;
                          });

                        // Clean up span tags - BUT preserve those with strong tags inside
                        html = html.replace(/<span[^>]*>(.*?)<\/span>/gi, (match, content) => {
                          // If the span contains strong or em tags, keep those tags but remove the span
                          return content;
                        });

                        // Clean up empty divs BUT preserve divs with images
                        html = html.replace(/<div([^>]*)>\s*<\/div>/gi, (match, attrs) => {
                          // Don't remove if it might be a container for images
                          if (attrs.includes('class') || attrs.includes('id')) {
                            return match;
                          }
                          return '';
                        });

                        // Clean up empty and whitespace-only paragraphs
                        html = html.replace(/<p[^>]*>(&nbsp;|\s|<br\s*\/?>)*<\/p>/gi, '');

                        // Fix list items - unwrap nested p tags
                        html = html.replace(/<li([^>]*)>\s*<p[^>]*>(.*?)<\/p>\s*<\/li>/gi, '<li$1>$2</li>');

                        // Remove unwanted "Pasted text" artifacts from Google Docs
                        html = html.replace(/\[Pasted text #?\d*\s*\+?\d*\s*lines?\]/gi, '');
                        html = html.replace(/\[Pasted text[^\]]*\]/gi, '');

                        // Clean nbsp entities and unicode spaces
                        html = html.replace(/&nbsp;/g, ' ');
                        html = html.replace(/\u00a0/g, ' ');

                        // Remove excessive line breaks
                        html = html.replace(/(<br\s*\/?>){3,}/gi, '<br /><br />');

                        // Normalize multiple spaces
                        html = html.replace(/\s{2,}/g, ' ');

                        // Remove internal links with no anchor text (e.g. <a href="/..."></a>)
                        // This helps avoid "internal outlinks with no anchor text" SEO warnings from imported Blogger HTML
                        html = html.replace(/<a([^>]*)>\s*<\/a>/gi, '');

                        // Remove empty tags but preserve structure (run twice for nested empties)
                        // BUT don't remove divs that might contain images
                        for (let i = 0; i < 2; i++) {
                          html = html.replace(/<(p|li|h[1-6])[^>]*>\s*<\/\1>/gi, '');
                        }

                        // Trim whitespace between tags but keep single space
                        html = html.replace(/>\s+</g, '> <');


                        return html;
                      })()
                    }}
                  />

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-10 pt-8 border-t border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded hover:bg-teal-100 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Author Bio Section */}
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <div className="flex items-start gap-4 p-6 bg-[#F6F7F8] rounded-lg">
                      <img
                        src={post.authorImage || '/assets/authors/default.jpg'}
                        alt={post.author}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-[#171A22] mb-2">About the Author</h4>
                        <p className="font-semibold text-[#171A22] mb-1">{post.author}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Expert in manufacturing excellence and precision engineering with over 10 years of industry experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <div className="bg-teal-600 rounded-lg p-8 text-center text-white">
                      <h3 className="text-2xl font-bold mb-3">
                        Ready to Start Your Project?
                      </h3>
                      <p className="text-teal-50 mb-6 leading-relaxed">
                        Get expert precision engineering and manufacturing solutions for your business needs.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/contact">
                          <button className="bg-white text-teal-700 px-6 py-3 rounded font-bold hover:bg-gray-50 transition-colors">
                            Contact Us Today
                          </button>
                        </Link>
                        {/* Use an existing, SEO-optimized services page instead of a non-existent /services route */}
                        <Link href="/manufacturing-services">
                          <button className="bg-teal-700 text-white px-6 py-3 rounded font-bold hover:bg-teal-800 transition-colors border border-teal-500">
                            View Our Services
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Table of Contents */}
              <aside className={`${tocOpen ? 'fixed inset-0 bg-black/50 z-50 lg:relative lg:bg-transparent' : 'hidden'} lg:block lg:sticky lg:top-20 lg:self-start`}>
                <div className={`${tocOpen ? 'fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto p-6' : ''}`}>
                  {/* Mobile Close Button */}
                  {tocOpen && (
                    <button
                      onClick={() => setTocOpen(false)}
                      className="lg:hidden absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold"
                    >
                      ×
                    </button>
                  )}

                  {tableOfContents.length > 0 && (
                    <div className="bg-white lg:border lg:border-gray-200 lg:rounded-lg lg:p-6">
                      <h3 className="text-sm font-bold text-[#171A22] uppercase tracking-wider mb-6">
                        Table of Contents
                      </h3>
                      <nav ref={tocNavRef} className="space-y-1 max-h-[calc(100vh-12rem)] overflow-y-auto">
                        {tableOfContents.map((item, index) => {
                          const isActive = activeSection === item.id;
                          return (
                            <button
                              key={index}
                              data-section={item.id}
                              onClick={() => scrollToSection(item.id)}
                              className={`block w-full text-left text-sm py-2 px-3 rounded transition-colors ${
                                item.level === 3 ? 'pl-6' : 'pl-3'
                              } ${
                                isActive
                                  ? 'text-teal-700 font-semibold bg-teal-50'
                                  : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                              }`}
                            >
                              <span className="line-clamp-2 leading-snug">{item.text}</span>
                            </button>
                          );
                        })}
                      </nav>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>


      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#F6F7F8] border-t border-gray-200">
          <div className="container mx-auto px-6 lg:px-16 max-w-[1440px]">
            <h2 className="text-[32px] font-bold text-[#171A22] mb-8">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={relatedPost.link} className="group">
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-200">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-[#171A22] mb-2 group-hover:text-teal-600 transition-colors line-clamp-2 leading-tight">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </article>
  );
};