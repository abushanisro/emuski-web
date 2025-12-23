'use client'

import { SuccessStory } from "../data/successStories";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, CheckCircle2, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface SuccessStoryDetailProps {
  story: SuccessStory;
  relatedStories?: SuccessStory[];
}

export const SuccessStoryDetail = ({ story, relatedStories = [] }: SuccessStoryDetailProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 border-b border-border/30 overflow-hidden" style={{backgroundColor: 'rgb(18, 26, 33)'}}>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4fd3d4_1px,transparent_1px),linear-gradient(to_bottom,#4fd3d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-4 sm:pt-5 md:pt-6">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link href="/blog">
                <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Category Badge */}
                <div className="flex items-center gap-3">
                  <span className="text-emuski-teal text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    Case Study
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300 text-xs sm:text-sm">{story.industry}</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  {story.title}
                </h1>

                {/* Client & Service Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-emuski-teal">Client:</span>
                    <span>{story.client}</span>
                  </div>
                  <span className="text-gray-500">|</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-emuski-teal">Service:</span>
                    <span>{story.service}</span>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(story.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{story.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 -mt-12 relative z-20">
        <div className="max-w-5xl mx-auto">
          <img
            src={story.heroImage}
            alt={story.title}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Metrics Section */}
      {story.metrics && story.metrics.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {story.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-emuski-teal-dark mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{story.challenge.title}</h2>
                </div>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {story.challenge.description}
                </p>

                <div className="space-y-3">
                  {story.challenge.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 font-bold text-sm">!</span>
                      </div>
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {story.challenge.image && (
                <div className="order-first md:order-last">
                  <img
                    src={story.challenge.image}
                    alt="Challenge"
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {story.solution.image && (
                <div>
                  <img
                    src={story.solution.image}
                    alt="Solution"
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{story.solution.title}</h2>
                </div>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {story.solution.description}
                </p>

                <div className="space-y-3">
                  {story.solution.approach.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 font-bold text-sm">→</span>
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{story.outcome.title}</h2>
                </div>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {story.outcome.description}
                </p>

                <div className="space-y-3">
                  {story.outcome.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {story.outcome.image && (
                <div className="order-first md:order-last">
                  <img
                    src={story.outcome.image}
                    alt="Outcome"
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {story.outcome.testimonial && (
        <section className="py-16 bg-emuski-teal-darker">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl text-emuski-teal mb-6">"</div>
              <blockquote className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
                {story.outcome.testimonial.quote}
              </blockquote>
              <div className="text-gray-300">
                <p className="font-semibold text-white">{story.outcome.testimonial.author}</p>
                <p className="text-sm">{story.outcome.testimonial.position}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-1 w-12 bg-emuski-teal-dark rounded"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">More Success Stories</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedStories.map((relatedStory) => (
                  <Link
                    key={relatedStory.id}
                    href={`/blog/${relatedStory.slug}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <Card className="group overflow-hidden bg-white border-gray-200 hover:border-emuski-teal/50 transition-all duration-300 h-full shadow-sm hover:shadow-md cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedStory.heroImage}
                          alt={relatedStory.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emuski-teal-dark transition-colors line-clamp-2">
                          {relatedStory.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {relatedStory.excerpt}
                        </p>
                        <div className="flex items-center text-emuski-teal-darker font-medium text-sm">
                          Read Story
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
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

      {/* CTA Section */}
      <section className="py-16 bg-emuski-teal-darker text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let EMUSKI's NPD Center help you accelerate innovation and reduce time-to-market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-emuski-teal-darker hover:bg-gray-100 px-8 py-3">
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="border-white/80 bg-white/10 text-white hover:bg-white hover:text-emuski-teal-darker px-8 py-3">
                  View All Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
