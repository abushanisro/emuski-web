'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface AutomotiveCaseStudyCarouselProps {
  className?: string
}

export function AutomotiveCaseStudyCarousel({ className = '' }: AutomotiveCaseStudyCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  )

  const pages = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => {
        const pageNum = (i + 1).toString().padStart(2, '0')
        return {
          id: i + 1,
          src: `/docs/automotive-exhaust-system-case-study/automotive-exhaust-system-case-study-page-${pageNum}.svg`,
          alt: `Automotive Exhaust System Case Study - Page ${i + 1} of 4`,
        }
      }),
    []
  )

  useEffect(() => {
    if (!api) return

    const onSelect = () => setCurrent(api.selectedScrollSnap())

    setCurrent(api.selectedScrollSnap())
    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  return (
    <div className={`relative ${className}`}>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'center',
          loop: true,
        }}
        plugins={[autoplayPlugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {pages.map((page) => (
            <CarouselItem key={page.id} className="pl-0">
              <div className="relative bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg w-full h-[350px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
                <img
                  src={page.src}
                  alt={page.alt}
                  className="w-full h-full object-contain"
                  loading={page.id === 1 ? 'eager' : 'lazy'}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation Buttons & Progress Indicators - Below carousel */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {/* Previous Button */}
        <button
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full bg-white hover:bg-gray-50 border-2 border-gray-300 shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Progress Indicators */}
        <div className="flex items-center gap-3">
          {/* Page counter */}
          <span className="text-sm font-medium text-gray-600">
            {current + 1} / {pages.length}
          </span>

          {/* Dots */}
          <div className="flex gap-2">
            {pages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => api?.scrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  current === index
                    ? 'bg-emuski-teal-dark w-8 h-2'
                    : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
                }`}
                aria-label={`Go to page ${page.id}`}
              />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="w-10 h-10 rounded-full bg-white hover:bg-gray-50 border-2 border-gray-300 shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  )
}
