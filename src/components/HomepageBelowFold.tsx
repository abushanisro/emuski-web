'use client'

import dynamic from 'next/dynamic'
import { LazyRender } from '@/components/LazyRender'
import type { BlogPost } from '@/lib/api/blogger'

const ServicesShowcase = dynamic(() => import('@/components/ServicesShowcase').then((module) => module.ServicesShowcase), { ssr: false })
const NewsCarousel = dynamic(() => import('@/components/NewsCarousel').then((module) => module.NewsCarousel), { ssr: false })
const AboutSection = dynamic(() => import('@/components/AboutSection').then((module) => module.AboutSection), { ssr: false })
const ManufacturingNPDSection = dynamic(() => import('@/components/ManufacturingNPDSection').then((module) => module.ManufacturingNPDSection), { ssr: false })
const TechnicalSpecsSection = dynamic(() => import('@/components/TechnicalSpecsSection').then((module) => module.TechnicalSpecsSection), { ssr: false })
const RegionDiscovery = dynamic(() => import('@/components/RegionDiscovery').then((module) => module.RegionDiscovery), { ssr: false })
const ContactSection = dynamic(() => import('@/components/ContactSection').then((module) => module.ContactSection), { ssr: false })
const FAQSection = dynamic(() => import('@/components/FAQSection').then((module) => module.FAQSection), { ssr: false })

interface HomepageBelowFoldProps {
  successStories: BlogPost[]
}

export function HomepageBelowFold({ successStories }: HomepageBelowFoldProps) {
  return (
    <>
      <LazyRender minHeight="500px">
        <ServicesShowcase />
      </LazyRender>

      <LazyRender minHeight="300px">
        <NewsCarousel initialPosts={successStories} />
      </LazyRender>

      <LazyRender minHeight="400px">
        <AboutSection />
      </LazyRender>

      <LazyRender minHeight="600px">
        <ManufacturingNPDSection />
      </LazyRender>

      <LazyRender minHeight="300px">
        <TechnicalSpecsSection focus="metrics" compact={true} />
      </LazyRender>

      <LazyRender minHeight="300px">
        <RegionDiscovery />
      </LazyRender>

      <LazyRender minHeight="400px">
        <ContactSection />
      </LazyRender>

      <LazyRender minHeight="300px">
        <FAQSection compact={true} maxItems={6} usePageSpecific={true} />
      </LazyRender>
    </>
  )
}
