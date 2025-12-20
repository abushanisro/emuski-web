'use client'

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, Calendar, User, Clock, ChevronRight, Tag } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useBloggerPosts } from "../hooks/useBloggerApi";
import { BlogPostSummary } from "../api/types";
import { EmailSubscription } from "./EmailSubscription";
import { LoadingPage, ServerErrorPage } from "./ui/error-pages";
import { SuccessStoriesSection } from "./SuccessStoriesSection";

export const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch posts from Blogger API
  const { posts: allPosts, loading, error } = useBloggerPosts(20);

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

  // If error or no posts from API, show only success stories section
  if (error || allPosts.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 border-b border-border/30 overflow-hidden" style={{backgroundColor: 'rgb(18, 26, 33)'}}>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>

          <div className="relative z-10">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-4 sm:pt-5 md:pt-6">
              <div className="max-w-4xl mx-auto text-center">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="flex justify-center">
                    <span className="text-emuski-teal text-xs sm:text-sm font-semibold tracking-wider uppercase">
                      Blog & Insights
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2">
                    EMUSKI Insights
                  </h1>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
                    Expert perspectives on engineering precision, manufacturing innovation, and the future of intelligent production systems.
                  </p>

                  {error && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 max-w-2xl mx-auto">
                      <p className="text-yellow-200 text-sm">
                        We're currently updating our blog content. Meanwhile, explore our success stories below.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - SEO Content */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Manufacturing Excellence Through Expert Insights
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to the EMUSKI manufacturing blog, your comprehensive resource for engineering innovation, precision manufacturing, and AI-driven production strategies. Our expert team shares in-depth knowledge on cost optimization, VAVE methodology, rapid prototyping, and intelligent manufacturing solutions that empower OEMs across automotive, aerospace, medical devices, electronics, and industrial sectors.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Discover practical insights on design for manufacturing (DFM), strategic sourcing, supply chain optimization, and quality assurance. We explore cutting-edge topics including Industry 4.0 integration, smart manufacturing technologies, CNC machining innovations, injection molding best practices, and sheet metal fabrication techniques. Our articles provide actionable strategies for reducing manufacturing costs, improving product quality, and accelerating time-to-market.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From teardown analysis and design benchmarking to advanced cost modeling and engineering consulting, our blog covers the full spectrum of manufacturing excellence. Whether you're seeking lean manufacturing principles, production optimization techniques, or insights into manufacturing automation, you'll find expert guidance to drive your operations forward.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Topics We Cover</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-emuski-teal mr-2">•</span>
                        <span>Cost Engineering & VAVE</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emuski-teal mr-2">•</span>
                        <span>Precision Manufacturing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emuski-teal mr-2">•</span>
                        <span>AI & Automation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emuski-teal mr-2">•</span>
                        <span>Supply Chain Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emuski-teal mr-2">•</span>
                        <span>Quality Assurance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emuski-teal mr-2">•</span>
                        <span>Industry 4.0 Solutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <SuccessStoriesSection />

        {/* Newsletter Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <EmailSubscription variant="default" />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 border-b border-border/30 overflow-hidden" style={{backgroundColor: 'rgb(18, 26, 33)'}}>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-4 sm:pt-5 md:pt-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Category Badge */}
                <div className="flex justify-center">
                  <span className="text-emuski-teal text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    Blog & Insights
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2">
                  EMUSKI Insights
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
                  Expert perspectives on engineering precision, manufacturing innovation, and the future of intelligent production systems.
                </p>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  Discover insights that drive manufacturing excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - SEO Content */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Manufacturing Excellence Through Expert Insights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to the EMUSKI manufacturing blog, your comprehensive resource for engineering innovation, precision manufacturing, and AI-driven production strategies. Our expert team shares in-depth knowledge on cost optimization, VAVE methodology, rapid prototyping, and intelligent manufacturing solutions that empower OEMs across automotive, aerospace, medical devices, electronics, and industrial sectors.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Discover practical insights on design for manufacturing (DFM), strategic sourcing, supply chain optimization, and quality assurance. We explore cutting-edge topics including Industry 4.0 integration, smart manufacturing technologies, CNC machining innovations, injection molding best practices, and sheet metal fabrication techniques. Our articles provide actionable strategies for reducing manufacturing costs, improving product quality, and accelerating time-to-market.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From teardown analysis and design benchmarking to advanced cost modeling and engineering consulting, our blog covers the full spectrum of manufacturing excellence. Whether you're seeking lean manufacturing principles, production optimization techniques, or insights into manufacturing automation, you'll find expert guidance to drive your operations forward.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Topics We Cover</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emuski-teal mr-2">•</span>
                      <span>Cost Engineering & VAVE</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emuski-teal mr-2">•</span>
                      <span>Precision Manufacturing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emuski-teal mr-2">•</span>
                      <span>AI & Automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emuski-teal mr-2">•</span>
                      <span>Supply Chain Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emuski-teal mr-2">•</span>
                      <span>Quality Assurance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emuski-teal mr-2">•</span>
                      <span>Industry 4.0 Solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {/* Search Bar */}
              <div className="md:col-span-2">
                <label htmlFor="blog-search" className="block text-sm font-medium text-white mb-2">
                  Search Articles
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="blog-search"
                    name="search"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoComplete="off"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent shadow-sm"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category-filter" className="block text-sm font-medium text-white mb-2">
                  Category
                </label>
                <select
                  id="category-filter"
                  name="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  autoComplete="off"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emuski-teal focus:border-transparent shadow-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== "All" || searchTerm) && (
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm text-white/70">Active filters:</span>
                {selectedCategory !== "All" && (
                  <span className="inline-flex items-center px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory("All")} className="ml-2 hover:bg-white/30 rounded-full transition-colors">×</button>
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                    "{searchTerm}"
                    <button onClick={() => setSearchTerm("")} className="ml-2 hover:bg-white/30 rounded-full transition-colors">×</button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-1 w-12 bg-emuski-teal-dark rounded"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Articles</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <Card className="group overflow-hidden bg-white border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 h-full shadow-sm hover:shadow-md cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-end mb-3">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emuski-teal-dark transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{post.author} | {post.category === "Case Study" ? "Case Study" : "Blog"}</span>
                        </div>

                        <div className="flex items-center text-emuski-teal-darker font-medium text-sm">
                          Read More
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>

                    </div>
                  </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-1 w-12 bg-emuski-teal-dark rounded"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Latest Articles</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {regularPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <Card className="group overflow-hidden bg-white border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 h-full shadow-sm hover:shadow-md cursor-pointer">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center justify-end mb-3">
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emuski-teal-dark transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="text-xs text-gray-600">{post.author} | {post.category === "Case Study" ? "Case Study" : "Blog"}</span>
                        </div>

                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                    </div>
                  </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {allPosts.length === 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or browse all articles by clearing the filters.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-emuski-teal-dark hover:bg-emuski-teal-darker text-white px-8 py-3"
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Success Stories Section */}
      <SuccessStoriesSection />

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-emuski-teal-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <EmailSubscription variant="default" />
        </div>
      </section>
    </div>
  );
};