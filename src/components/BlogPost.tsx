'use client'

import { useState, useEffect, useMemo, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Twitter, Linkedin, Facebook, Mail, ArrowRight, Phone, ChevronRight, Menu, Share2, Bookmark, Eye, TrendingUp, CheckCircle2, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useBloggerPosts } from "../hooks/useBloggerApi";
import { BlogNotFoundPage, LoadingPage } from "./ui/error-pages";

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

  const { posts: allPosts, loading, error } = useBloggerPosts(50);

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

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return;
      
      const article = articleRef.current;
      const scrollTop = window.scrollY;
      const docHeight = article.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
      
      setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));

      // Update active section
      const headings = document.querySelectorAll('h2[id], h3[id]');
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(heading.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (post) {
      document.title = post.seoTitle;

      const updateOrCreateMeta = (selector: string, attribute: string, content: string) => {
        let element = document.querySelector(selector);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attribute.split('=')[0], attribute.split('=')[1].replace(/['"]/g, ''));
          document.head.appendChild(element);
        }
        element.setAttribute('content', content);
      };

      updateOrCreateMeta('meta[name="description"]', 'name=description', post.metaDescription);
      updateOrCreateMeta('meta[name="keywords"]', 'name=keywords', post.keywords.join(', '));
      updateOrCreateMeta('meta[property="og:title"]', 'property=og:title', post.title);
      updateOrCreateMeta('meta[property="og:description"]', 'property=og:description', post.excerpt);
      updateOrCreateMeta('meta[property="og:image"]', 'property=og:image', post.image);
      updateOrCreateMeta('meta[property="og:type"]', 'property=og:type', 'article');
      updateOrCreateMeta('meta[name="twitter:card"]', 'name=twitter:card', 'summary_large_image');

      let structuredData = document.querySelector('#article-structured-data');
      if (!structuredData) {
        structuredData = document.createElement('script');
        structuredData.setAttribute('type', 'application/ld+json');
        structuredData.setAttribute('id', 'article-structured-data');
        document.head.appendChild(structuredData);
      }
      structuredData.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "datePublished": post.publishDate,
        "author": { "@type": "Person", "name": post.author },
        "publisher": {
          "@type": "Organization",
          "name": "EMUSKI",
          "logo": { "@type": "ImageObject", "url": "https://emuski.com/logo.png" }
        },
        "description": post.metaDescription
      });
    }
  }, [post]);

  useEffect(() => {
    if (post && contentRef.current) {
      const headingElements = contentRef.current.querySelectorAll('h2, h3');
      headingElements.forEach((heading, index) => {
        heading.id = `heading-${index}`;
      });
    }
  }, [post]);

  if (loading) {
    return <LoadingPage title="Loading Article" description="Please wait while we fetch this article..." />;
  }

  if (error || !post) {
    return <BlogNotFoundPage description={error} />;
  }

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
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      setActiveSection(id);
      setTocOpen(false);
    }
  };

  return (
    <article ref={articleRef} className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-4 md:right-8 bottom-8 z-40 flex flex-col gap-3">
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
        className="lg:hidden fixed left-4 bottom-8 z-40 w-12 h-12 rounded-full bg-teal-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110"
        aria-label="Table of contents"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Breadcrumb Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
            <Link href="/blog" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
            <span className="text-teal-600 font-semibold truncate">{post.category}</span>
          </nav>
        </div>
      </div>

      {/* Article Header - Hero Style */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="inline-flex items-center px-4 py-2 bg-teal-500/20 backdrop-blur-sm text-teal-300 text-sm font-bold uppercase tracking-wider rounded-full border border-teal-400/30">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-8 duration-900">
              {post.excerpt}
            </p>

            {/* Author & Meta Info */}
            <div className="flex flex-wrap items-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="flex items-center gap-4">
                <img
                  src={post.authorImage || '/assets/authors/default.jpg'}
                  alt={post.author}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-teal-500/30"
                />
                <div>
                  <p className="font-bold text-white text-lg">{post.author}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <time dateTime={post.publishDate} className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-4 ml-auto">
                <div className="flex items-center gap-1.5 text-gray-300">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm font-medium">2.4k</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-300">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image with Parallax Effect */}
      <section className="relative -mt-12 md:-mt-16 z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="relative">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[280px_1fr_240px] lg:gap-8">
              {/* Left Sidebar - TOC */}
              <aside className={`${tocOpen ? 'fixed inset-0 bg-black/50 z-50 lg:relative lg:bg-transparent' : 'hidden'} lg:block`}>
                <div className={`${tocOpen ? 'fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto' : ''} lg:sticky lg:top-28 lg:self-start lg:h-fit lg:max-h-[calc(100vh-8rem)]`}>
                  {/* Mobile Close Button */}
                  {tocOpen && (
                    <button
                      onClick={() => setTocOpen(false)}
                      className="lg:hidden absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                    >
                      ×
                    </button>
                  )}

                  <div className="p-4 lg:p-0">
                    {tableOfContents.length > 0 && (
                      <div className="bg-white lg:bg-gradient-to-br lg:from-teal-50 lg:to-blue-50 rounded-xl p-5 border border-gray-200 lg:border-teal-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-1 h-6 bg-teal-600 rounded-full"></div>
                          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                            Table of Contents
                          </h3>
                        </div>
                        <nav className="space-y-1">
                          {tableOfContents.map((item, index) => (
                            <button
                              key={index}
                              onClick={() => scrollToSection(item.id)}
                              className={`block w-full text-left text-sm py-2.5 px-3 rounded-lg transition-all ${
                                item.level === 3 ? 'pl-8' : ''
                              } ${
                                activeSection === item.id
                                  ? 'text-teal-700 font-bold bg-teal-100 shadow-sm'
                                  : 'text-gray-600 hover:text-teal-700 hover:bg-white hover:shadow-sm'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                {activeSection === item.id && (
                                  <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" />
                                )}
                                <span className="line-clamp-2">{item.text}</span>
                              </span>
                            </button>
                          ))}
                        </nav>
                      </div>
                    )}
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
                  {/* Quick Stats */}
                  <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <TrendingUp className="h-4 w-4 text-teal-600" />
                        <span className="font-medium">Trending in {post.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div
                    ref={contentRef}
                    className="article-content prose prose-lg max-w-none
                      prose-headings:font-bold prose-headings:text-gray-900 prose-headings:scroll-mt-24
                      prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-teal-100
                      prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                      prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3
                      prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                      prose-a:text-teal-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:text-teal-700 hover:prose-a:underline prose-a:transition-colors
                      prose-strong:text-gray-900 prose-strong:font-bold
                      prose-ul:my-6 prose-ul:space-y-2
                      prose-ol:my-6 prose-ol:space-y-2
                      prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-lg
                      prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-gradient-to-r prose-blockquote:from-teal-50 prose-blockquote:to-transparent prose-blockquote:rounded-r-lg
                      prose-code:bg-teal-50 prose-code:text-teal-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-base prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                      prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:my-8 prose-pre:shadow-xl
                      prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                    dangerouslySetInnerHTML={{
                      __html: post.fullContent
                        .replace(/<img[^>]*>/g, '')
                        .replace(/&nbsp;/g, ' ')
                        .replace(/<p><\/p>/g, '')
                        .replace(/<p>\s*<\/p>/g, '')
                    }}
                  />

                  {/* Key Topics */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t-2 border-gray-100">
                      <div className="bg-gradient-to-br from-teal-50 to-blue-50 border-l-4 border-teal-600 rounded-r-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                          Key Topics Covered
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-4 py-2 bg-white text-teal-700 text-sm font-semibold rounded-full border border-teal-200 hover:bg-teal-50 hover:border-teal-300 transition-all cursor-pointer shadow-sm hover:shadow"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Author Bio Section */}
                  <div className="mt-12 pt-8 border-t-2 border-gray-100">
                    <div className="flex items-start gap-5 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                      <img
                        src={post.authorImage || '/assets/authors/default.jpg'}
                        alt={post.author}
                        className="w-20 h-20 rounded-full object-cover ring-4 ring-teal-100"
                      />
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Written by {post.author}</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Expert in manufacturing excellence and precision engineering with over 10 years of industry experience.
                        </p>
                        <Link href={`/author/${post.author.toLowerCase().replace(' ', '-')}`}>
                          <Button className="text-sm bg-teal-600 hover:bg-teal-700 text-white">
                            View Profile
                            <ExternalLink className="ml-2 h-3.5 w-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar - CTAs */}
              <aside className="hidden xl:block">
                <div className="sticky top-28 space-y-5">
                  {/* Primary CTA */}
                  <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-6 text-white shadow-xl">
                    <h4 className="text-lg font-bold mb-3">Need Manufacturing Solutions?</h4>
                    <p className="text-sm text-teal-50 mb-4 leading-relaxed">
                      Get expert precision engineering support for your projects.
                    </p>
                    <Link href="/contact">
                      <Button className="w-full bg-white text-teal-700 hover:bg-teal-50 font-bold shadow-lg hover:shadow-xl transition-all">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6 text-teal-600" />
                    </div>
                    <h4 className="text-base font-bold text-gray-900 mb-2">Stay Updated</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Get weekly insights delivered to your inbox.
                    </p>
                    <Link href="/newsletter">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold">
                        Subscribe
                      </Button>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem] animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with EMUSKI for precision engineering solutions that drive excellence and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg font-bold shadow-2xl hover:shadow-teal-500/50 transition-all hover:scale-105 rounded-xl">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/manufacturing-services">
                <Button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-bold rounded-xl transition-all hover:scale-105">
                  Explore Services
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Continue Reading</h2>
                  <p className="text-gray-600">More articles in {post.category}</p>
                </div>
                <Link href="/blog" className="hidden md:block">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                    View All Articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={relatedPost.link}>
                    <Card className="group h-full overflow-hidden bg-white border-gray-200 hover:border-teal-500 hover:shadow-2xl transition-all duration-300 rounded-xl">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2 leading-tight">
                          {relatedPost.title}
                        </h3>
                        <p className="text-base text-gray-600 line-clamp-3 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                        <div className="mt-4 flex items-center text-teal-600 font-semibold text-sm group-hover:gap-2 transition-all">
                          Read More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="mt-8 text-center md:hidden">
                <Link href="/blog">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold w-full sm:w-auto">
                    View All Articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Stay Updated with Industry Insights
                </h3>
                <p className="text-lg text-teal-50 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Get the latest in manufacturing excellence, precision engineering, and innovation delivered to your inbox weekly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-4 focus:ring-teal-300 text-base"
                  />
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 rounded-xl whitespace-nowrap">
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <p className="text-sm text-teal-100 mt-4">
                  Join 5,000+ professionals. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};