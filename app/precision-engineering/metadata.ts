import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Precision Engineering Services | Cost Estimation, VAVE & Strategic Sourcing | EMUSKI',
  description: 'Expert precision engineering services including product cost estimation, VAVE analysis, strategic sourcing, and engineering support. Reduce manufacturing costs by 15-25% with EMUSKI\'s proven methodologies in Bangalore, India.',
  keywords: 'precision engineering, product cost estimation, should-cost analysis, VAVE methodology, value engineering, strategic sourcing, supplier management, cost reduction, manufacturing engineering, design for manufacturing, DFM, teardown analysis, cost optimization, engineering consulting, product development, manufacturing cost analysis, supplier selection, cost breakdown, engineering services Bangalore, precision engineering India',
  openGraph: {
    title: 'Precision Engineering Services - Cost Optimization & VAVE Analysis | EMUSKI',
    description: 'Reduce manufacturing costs by 15-25% with expert cost estimation, VAVE analysis, and strategic sourcing services. Proven engineering methodologies from EMUSKI, Bangalore.',
    type: 'website',
    url: 'https://www.emuski.com/precision-engineering',
    siteName: 'EMUSKI',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.emuski.com/docs/specialized-engineering-talent-on-demand.svg',
        width: 1200,
        height: 630,
        alt: 'EMUSKI Precision Engineering Services - Cost Estimation and VAVE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precision Engineering Services | EMUSKI',
    description: 'Expert cost estimation, VAVE analysis & strategic sourcing. Reduce manufacturing costs by 15-25%.',
    images: ['https://www.emuski.com/docs/specialized-engineering-talent-on-demand.svg'],
  },
  alternates: {
    canonical: 'https://www.emuski.com/precision-engineering',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
