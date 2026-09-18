'use client'

import dynamic from 'next/dynamic'
import { LazyRender } from '@/components/LazyRender'
import type { BlogPost } from '@/lib/api/blogger'

const ServicesShowcase = dynamic(() => import('@/components/ServicesShowcase').then((module) => module.ServicesShowcase))
const NewsCarousel = dynamic(() => import('@/components/NewsCarousel').then((module) => module.NewsCarousel))
const AboutSection = dynamic(() => import('@/components/AboutSection').then((module) => module.AboutSection))
const ManufacturingNPDSection = dynamic(() => import('@/components/ManufacturingNPDSection').then((module) => module.ManufacturingNPDSection))
const TechnicalSpecsSection = dynamic(() => import('@/components/TechnicalSpecsSection').then((module) => module.TechnicalSpecsSection))
const RegionDiscovery = dynamic(() => import('@/components/RegionDiscovery').then((module) => module.RegionDiscovery))
const ContactSection = dynamic(() => import('@/components/ContactSection').then((module) => module.ContactSection))
const FAQSection = dynamic(() => import('@/components/FAQSection').then((module) => module.FAQSection))

interface HomepageBelowFoldProps {
  successStories: BlogPost[]
}

export function HomepageBelowFold({ successStories }: HomepageBelowFoldProps) {
  return (
    <>
      <LazyRender minHeightClass="min-h-[500px]">
        <ServicesShowcase />
      </LazyRender>

      <LazyRender minHeightClass="min-h-[300px]">
        <NewsCarousel initialPosts={successStories} />
      </LazyRender>

      <LazyRender minHeightClass="min-h-[400px]">
        <AboutSection />
      </LazyRender>

      <LazyRender minHeightClass="min-h-[600px]">
        <ManufacturingNPDSection />
      </LazyRender>

      <LazyRender minHeightClass="min-h-[300px]">
        <TechnicalSpecsSection focus="metrics" compact={true} />
      </LazyRender>

      <LazyRender minHeightClass="min-h-[300px]">
        <RegionDiscovery />
      </LazyRender>

      <LazyRender minHeightClass="min-h-[400px]">
        <ContactSection />
      </LazyRender>

      <LazyRender minHeightClass="min-h-[300px]">
        <FAQSection compact={true} maxItems={6} usePageSpecific={true} />
      </LazyRender>
    </>
  )
}
