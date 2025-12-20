'use client'

import Link from 'next/link'
import { ChevronRight, Loader2 } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { useBloggerPostsByLabel } from '@/hooks/useBloggerApi'

export default function Newsroom() {
  // Fetch news articles from Blogger using label "News" or "Press Release"
  const { posts: newsArticles, loading, error } = useBloggerPostsByLabel("News", 10);


  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-16 bg-gray-50 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">EMUSKI Newsroom</h1>
            <p className="text-gray-600 text-lg">
              Latest manufacturing innovations, company updates, and industry insights.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-16 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Manufacturing Excellence in Media</h2>
            <p className="text-gray-600 text-lg">
              Discover EMUSKI's precision engineering innovations and manufacturing leadership.
            </p>
          </div>

          {loading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-emuski-teal-dark" />
              <span className="ml-3 text-gray-600">Loading news articles...</span>
            </div>
          )}

          {error && (
            <div className="max-w-3xl mx-auto text-center py-20">
              <p className="text-red-600">Unable to load news articles. Please try again later.</p>
            </div>
          )}

          {!loading && !error && newsArticles && newsArticles.length === 0 && (
            <div className="max-w-3xl mx-auto text-center py-20">
              <p className="text-gray-600">No news articles available at the moment.</p>
            </div>
          )}

          {!loading && !error && newsArticles && newsArticles.length > 0 && (
            <div className="space-y-8">
              {newsArticles.map((article) => (
                <div key={article.id} className="flex flex-col md:flex-row border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden bg-white min-h-[220px]">
                  <div className="md:w-[38%] w-full flex-shrink-0 flex items-stretch">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover h-full w-full"
                      style={{ minHeight: '220px' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/blog/manufacturing-innovation.jpg';
                      }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center px-8 py-6 md:py-0">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="border border-emuski-teal-dark text-emuski-teal-dark px-4 py-2 rounded-lg font-medium text-sm md:text-lg bg-white">
                        {article.category || 'News'}
                      </span>
                      {article.publishDate && (
                        <span className="text-sm text-gray-500">
                          {new Date(article.publishDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center text-emuski-teal-dark text-lg md:text-xl font-semibold hover:underline transition-all"
                      >
                        Read full article&nbsp;
                        <ChevronRight size={22} className="inline transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && newsArticles && newsArticles.length > 0 && (
            <div className="max-w-3xl mx-auto text-center mt-12">
              <Link href="/blog">
                <button className="bg-emuski-teal-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emuski-teal-darker transition-colors shadow-md hover:shadow-lg">
                  Explore All Articles
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <div className="pb-20">
        <Footer />
      </div>
    </div>
  )
}
