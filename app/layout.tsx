import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@/index.css'
import { initializeCacheSystem } from '@/lib/cache'

// Initialize cache system on app startup (server-side only)
if (typeof window === 'undefined') {
  initializeCacheSystem().catch(console.error)
}
import { Providers } from './providers'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ClientErrorWrapper } from '@/components/ClientErrorWrapper'
import { ProductionErrorBoundary } from '@/components/ProductionErrorBoundary'
import { AIOptimizedStructuredData } from '@/components/SEO/AIOptimizedStructuredData'
import AISalesAgentClient from '@/components/AISalesAgentClient'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
  preload: true,
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.emuski.com'),
  title: {
    default: 'ISO Certified OEM Precision Manufacturing & Cost Engineering Partner | Bangalore, India',
    template: '%s | EMUSKI - Engineering & Manufacturing'
  },
  description: 'ISO 9001:2015 certified precision manufacturing and cost engineering partner in Bangalore. FREE consultation, 35% cost savings, serving Fortune 500 clients.',
  keywords: [
    'ISO certified OEM manufacturing',
    'precision manufacturing partner Bangalore',
    'cost engineering partner India',
    'ISO 9001 certified manufacturer',
    'OEM precision manufacturing Bangalore',
    'certified manufacturing partner',
    'precision engineering cost optimization',
    'ISO certified manufacturing solutions',
    'OEM manufacturing cost engineering',
    'precision manufacturing Bangalore India',
    'ISO certified precision engineering',
    'manufacturing cost optimization partner',
    'certified OEM manufacturing services',
    'precision manufacturing Electronic City',
    'ISO manufacturing partner India',
    'cost engineering precision manufacturing',
    'certified manufacturing Bangalore',
    'OEM precision cost engineering',
    'ISO certified manufacturing Electronic City',
    'manufacturing engineering partner India'
  ],
  authors: [{ name: 'EMUSKI Manufacturing Solutions', url: 'https://www.emuski.com' }],
  creator: 'EMUSKI Manufacturing Solutions',
  publisher: 'EMUSKI Manufacturing Solutions',
  applicationName: 'EMUSKI Manufacturing Solutions',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
    other: {
      'msvalidate.01': process.env.BING_VERIFICATION || '',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'EMUSKI - Engineering & Manufacturing',
    title: 'ISO Certified OEM Precision Manufacturing & Cost Engineering Partner | Bangalore, India',
    description: 'ISO 9001:2015 certified OEM precision manufacturing and cost engineering partner in Bangalore, India. World-class manufacturing solutions serving automotive, aerospace, medical device, and electronics industries globally.',
    images: [
      {
        url: '/social-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'EMUSKI - ISO Certified OEM Manufacturing & Precision Engineering Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@emuski',
    creator: '@emuski',
    title: 'ISO Certified OEM Precision Manufacturing & Cost Engineering Partner',
    description: 'ISO 9001:2015 certified OEM precision manufacturing and cost engineering partner in Bangalore, India. Serving automotive, aerospace, medical device, and electronics industries globally.',
    images: ['/social-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Manufacturing and Engineering',
  classification: 'Manufacturing Solutions Provider',
  // No sitewide `alternates.canonical` here — each page/layout declares its own
  // canonical. A default here previously leaked into every page's output as a
  // second, conflicting canonical tag pointing at the homepage.
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bangalore, Karnataka, India',
    'geo.position': '12.9716;77.5946',
    'ICBM': '12.9716, 77.5946',
    'language': 'English',
    'distribution': 'global',
    'rating': 'general',
    'citation_author': 'EMUSKI Manufacturing Solutions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>

        {/* Minimal DNS Prefetch - Carbon Optimized */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon - Explicit links for best SEO and browser compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon-new.ico" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon-new.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="shortcut icon" href="/favicon-new.ico" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />

        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#17B8BA" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#17B8BA" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color for browsers */}
        <meta name="theme-color" content="#17B8BA" />

        {/* Resource Preloading for Performance & Carbon Optimization */}
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/emuski-logo-optimized.webp" as="image" type="image/webp" />
        <link rel="preload" href="/assets/hero/manufacturing-services-hero-banner.webp" as="image" type="image/webp" />
        
        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//images.dmca.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Reduced Resource Hints for Carbon Optimization */}
        <link rel="preconnect" href="https://blogger.googleusercontent.com" crossOrigin="anonymous" />

        {/* Google-specific meta tags for AI Overviews */}
        <meta name="google" content="nositelinkssearchbox" />

        {/* Publisher and Content Classification */}

        {/* Business Verification Signals */}
        <meta name="company" content="EMUSKI Manufacturing Solutions" />
        <meta name="classification" content="Manufacturing, Engineering Solutions, OEM Manufacturing" />
        <meta name="coverage" content="Worldwide" />
        <meta name="identifier-URL" content="https://www.emuski.com" />

        {/* Social banner will load when needed for sharing - no preload required */}

        {/* Consent Mode Configuration moved to body */}

        {/* Commented out to fix Script warning - will be moved to body */}

        {/* PDF.js Configuration - moved to body to fix Script warning */}

        {/* AI-Optimized Structured Data for Business Recommendations */}
        <AIOptimizedStructuredData />

      </head>
      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N27V6HNK');`
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N27V6HNK"
            height="0"
            width="0"
            className="hidden invisible"
          />
        </noscript>

        <ProductionErrorBoundary>
          <ClientErrorWrapper>
            <ErrorBoundary>
              <Providers>{children}</Providers>
            </ErrorBoundary>
          </ClientErrorWrapper>
        </ProductionErrorBoundary>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        
        {/* Production Error Handler Script */}
        <Script src="/turbo-error-fix.js" strategy="afterInteractive" />
        
        {/* DMCA Protection Badge Script */}
        <Script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js" strategy="afterInteractive" />
        
        {/* Website Carbon Badge Script removed to reduce footprint */}
        
        {/* PDF.js Configuration */}
        <Script
          id="pdf-worker-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Set PDF.js worker to local file
              window.pdfjsWorkerPath = '/pdf.worker.min.js';
            `
          }}
        />
        
        {/* Minimal Consent Mode - Carbon Optimized */}
        <Script
          id="consent-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=[];function gtag(){dataLayer.push(arguments)}gtag('consent','default',{ad_storage:'denied',analytics_storage:'granted'});`
          }}
        />
        
        {/* Minimal Geo Config - Carbon Optimized */}
        <Script
          id="emuski-geo-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.EmuskiGeoConfig={defaultLanguage:'en'};`
          }}
        />

        {/* Apollo tracking removed to improve carbon footprint */}

        {/* Minimal Error Handlers - Carbon Optimized */}
        <Script
          id="global-error-handlers"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener('unhandledrejection',e=>e.preventDefault());`
          }}
        />
        
        {/* AI Sales Agent Widget */}
        <AISalesAgentClient />
        
      </body>
    </html>
  )
}
