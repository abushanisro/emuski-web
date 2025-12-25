'use client'

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, Calendar, User, Clock, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { useBloggerPosts } from "../hooks/useBloggerApi";
import { useEngineeringPosts } from "../hooks/useEngineeringBlogger";
import { BlogPostSummary } from "../api/types";
import { EmailSubscription } from "./EmailSubscription";
import { LoadingPage, ServerErrorPage } from "./ui/error-pages";
import { SuccessStoriesSection } from "./SuccessStoriesSection";

export const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetch posts from both Manufacturing and Engineering blogs
  const { posts: manufacturingPosts, loading: mfgLoading, error: mfgError } = useBloggerPosts(20);
  const { posts: engineeringPosts, loading: engLoading, error: engError } = useEngineeringPosts(20);

  // Combine posts from both blogs
  const allPosts = useMemo(() => {
    return [...(manufacturingPosts || []), ...(engineeringPosts || [])];
  }, [manufacturingPosts, engineeringPosts]);

  const loading = mfgLoading || engLoading;
  const error = mfgError || engError;

  // Extract categories from posts
  const categories = useMemo(() => {
    const cats = new Set(['All']);
    allPosts.forEach(post => {
      if (post.category) cats.add(post.category);
    });
    return Array.from(cats);
  }, [allPosts]);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = !searchTerm ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [allPosts, searchTerm, selectedCategory]);

  const featuredPosts = filteredPosts.slice(0, 3); // First 3 as featured
  const regularPosts = filteredPosts.slice(3); // Rest as regular


  // Handle loading state
  if (loading) {
    return <LoadingPage title="Loading Articles" description="Please wait while we fetch the latest insights..." />;
  }

  // If error or no posts from API, show simplified state
  if (error || allPosts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header Navigation */}
        <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between py-4">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Manufacturing Blog</h1>
            </div>
          </div>
        </section>

        {/* Message */}
        <section className="bg-white py-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
            {error ? (
              <div className="max-w-2xl mx-auto">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Updating Blog Content</h2>
                  <p className="text-gray-700">
                    We're currently updating our blog content. Meanwhile, explore our success stories and resources below.
                  </p>
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h2>
                <p className="text-gray-600">Check back soon for new manufacturing insights and expert perspectives.</p>
              </div>
            )}
          </div>
        </section>

        {/* Topics & Newsletter Section */}
        <section className="bg-white py-16 border-t border-gray-200">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Topics */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Topics We Cover</h3>

                {/* Manufacturing Topics */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-emuski-teal-dark mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Manufacturing
                  </h4>
                  <div className="grid grid-cols-1 gap-2 ml-7">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                      <span className="text-gray-700">Precision Manufacturing</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                      <span className="text-gray-700">CNC Machining & Fabrication</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                      <span className="text-gray-700">Quality Assurance</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                      <span className="text-gray-700">Industry 4.0 & Smart Factories</span>
                    </div>
                  </div>
                </div>

                {/* Engineering Topics */}
                <div>
                  <h4 className="text-lg font-bold text-emuski-teal-dark mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    Engineering
                  </h4>
                  <div className="grid grid-cols-1 gap-2 ml-7">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                      <span className="text-gray-700">Cost Engineering & VAVE</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                      <span className="text-gray-700">Design for Manufacturing (DFM)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                      <span className="text-gray-700">Supply Chain Optimization</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                      <span className="text-gray-700">AI & Automation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-emuski-teal to-emuski-teal-dark rounded-2xl p-8 text-white">
                <EmailSubscription variant="default" />
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Blog Section */}
        {engineeringPosts.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
              <div className="mb-8 flex items-center space-x-3">
                <div className="h-12 w-1 bg-emuski-teal-dark rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Engineering Services</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {engineeringPosts.slice(0, 6).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <article className="group cursor-pointer bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-emuski-teal/40 transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-block px-2.5 py-1 bg-emuski-teal text-white text-xs font-semibold rounded">
                            Engineering
                          </span>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emuski-teal-dark transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-3">
                            <span className="font-medium text-gray-700">{post.author}</span>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Success Stories Section */}
        <SuccessStoriesSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Manufacturing Blog</h1>

            {/* Desktop Categories */}
            <div className="hidden md:flex items-center space-x-6">
              {categories.slice(0, 5).map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm font-medium transition-colors relative ${
                    selectedCategory === category
                      ? 'text-emuski-teal-dark font-semibold after:absolute after:bottom-[-18px] after:left-0 after:right-0 after:h-0.5 after:bg-emuski-teal-dark'
                      : 'text-gray-600 hover:text-emuski-teal-dark'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <Filter className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          {/* Mobile Categories Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 pt-2 border-t border-gray-100 mt-4">
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-emuski-teal/10 text-emuski-teal-dark font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent transition-all"
              />
            </div>

            {/* Active Filters */}
            {(selectedCategory !== "All" || searchTerm) && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="text-sm text-gray-500">Active filters:</span>
                {selectedCategory !== "All" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emuski-teal/10 text-emuski-teal-dark text-sm font-medium rounded-full">
                    {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory("All")}
                      className="hover:bg-emuski-teal/20 rounded-full p-0.5 transition-colors"
                      aria-label="Clear category filter"
                    >
                      <span className="text-base leading-none">×</span>
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm("")}
                      className="hover:bg-gray-200 rounded-full p-0.5 transition-colors"
                      aria-label="Clear search term"
                    >
                      <span className="text-base leading-none">×</span>
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="text-sm text-emuski-teal-dark hover:text-emuski-teal-darker font-medium underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hero Featured Post */}
      {featuredPosts.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <Link href={`/blog/${featuredPosts[0].slug}`}>
              <div className="group cursor-pointer bg-gradient-to-br from-emuski-teal/5 to-blue-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-[300px] lg:h-[500px] overflow-hidden">
                    <img
                      src={featuredPosts[0].image}
                      alt={featuredPosts[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-4 py-1.5 bg-emuski-teal text-white text-xs font-bold uppercase tracking-wider rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-emuski-teal/10 text-emuski-teal-dark text-xs font-semibold uppercase tracking-wider rounded">
                        {featuredPosts[0].category}
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 group-hover:text-emuski-teal-dark transition-colors leading-tight">
                      {featuredPosts[0].title}
                    </h2>

                    <p className="text-lg text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {featuredPosts[0].excerpt}
                    </p>

                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPosts[0].publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPosts[0].readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-emuski-teal-dark font-semibold group-hover:text-emuski-teal-darker">
                      Read Full Article
                      <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Latest Articles Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            {regularPosts.length > 0 && (
              <span className="text-sm text-gray-500">
                Showing {regularPosts.length} article{regularPosts.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-emuski-teal/40 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 bg-white/95 text-gray-900 text-xs font-medium rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emuski-teal-dark transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-gray-700">{post.author}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* No Results */}
      {filteredPosts.length === 0 && allPosts.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or browse all articles by clearing the filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="inline-flex items-center px-6 py-3 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white font-semibold rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Topics & Newsletter Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Topics */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Topics We Cover</h3>

              {/* Manufacturing Topics */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-emuski-teal-dark mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Manufacturing
                </h4>
                <div className="grid grid-cols-1 gap-2 ml-7">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                    <span className="text-gray-700">Precision Manufacturing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                    <span className="text-gray-700">CNC Machining & Fabrication</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                    <span className="text-gray-700">Quality Assurance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                    <span className="text-gray-700">Industry 4.0 & Smart Factories</span>
                  </div>
                </div>
              </div>

              {/* Engineering Topics */}
              <div>
                <h4 className="text-lg font-bold text-emuski-teal-dark mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  Engineering
                </h4>
                <div className="grid grid-cols-1 gap-2 ml-7">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                    <span className="text-gray-700">Cost Engineering & VAVE</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                    <span className="text-gray-700">Design for Manufacturing (DFM)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                    <span className="text-gray-700">Supply Chain Optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emuski-teal mt-2"></div>
                    <span className="text-gray-700">AI & Automation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-emuski-teal to-emuski-teal-dark rounded-2xl p-8 text-white">
              <EmailSubscription variant="default" />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Blog Section */}
      {engineeringPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-1 bg-emuski-teal-dark rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Engineering Services</h2>
              </div>
              <span className="text-sm text-gray-500">
                {engineeringPosts.length} article{engineeringPosts.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Engineering Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engineeringPosts.slice(0, 6).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group cursor-pointer bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-emuski-teal/40 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-2.5 py-1 bg-emuski-teal text-white text-xs font-semibold rounded">
                          Engineering
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emuski-teal-dark transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium text-gray-700">{post.author}</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* View All Link */}
            {engineeringPosts.length > 6 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setSelectedCategory('Engineering')}
                  className="inline-flex items-center px-6 py-3 bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white font-semibold rounded-lg transition-colors"
                >
                  View All Engineering Articles
                  <ChevronRight className="h-5 w-5 ml-1" />
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Success Stories Section */}
      <SuccessStoriesSection />
    </div>
  );
};