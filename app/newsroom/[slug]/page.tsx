'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const news = [
  {
    image: "/assets/blog/manufacturing-innovation.jpg",
    title: 'Manufacturing Today',
    quote: 'EMUSKI revolutionizes precision engineering with AI-driven manufacturing solutions, delivering cost-optimized OEM production for automotive and aerospace industries.',
    readMoreUrl: '/blog',
  },
  {
    image: "/assets/blog/cnc-machining.jpg",
    title: 'Industry Week',
    quote: "EMUSKI's advanced CNC machining capabilities and ISO 9001 certified quality control set new standards in precision manufacturing across India.",
    readMoreUrl: '/blog',
  },
  {
    image: "/assets/blog/industry-4.jpg",
    title: 'Smart Manufacturing',
    quote: "Leading the Industry 4.0 transformation, EMUSKI integrates smart manufacturing technologies with lean production methodologies for optimal efficiency.",
    readMoreUrl: '/blog',
  },
]

export default function NewsroomSlug() {
  useEffect(() => {
    document.title = "Newsroom | EMUSKI Manufacturing Solutions"
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-16 bg-gray-50 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">EMUSKI Newsroom</h1>
            <p className="text-gray-600">
              Latest manufacturing innovations, company updates, and industry insights.
            </p>
          </div>

          <div className="space-y-8">
            {news.map((n, idx) => (
              <div key={idx} className="flex flex-col md:flex-row border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden bg-white min-h-[220px]">
                <div className="md:w-[38%] w-full flex-shrink-0 flex items-stretch">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="object-cover h-full w-full"
                    style={{ minHeight: '220px' }}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center px-8 py-6 md:py-0">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="border border-emuski-teal-dark text-emuski-teal-dark px-4 py-2 rounded-lg font-medium text-lg bg-white">
                      {n.title}
                    </span>
                  </div>
                  <p className="text-gray-700 text-xl font-semibold mb-6 leading-snug">
                    "{n.quote}"
                  </p>
                  <div>
                    <Link
                      href={n.readMoreUrl}
                      className="inline-flex items-center text-emuski-teal-dark text-xl font-semibold hover:underline"
                    >
                      Read more on our blog&nbsp;
                      <ChevronRight size={22} className="inline transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-20">
        <Footer />
      </div>
    </div>
  )
}
