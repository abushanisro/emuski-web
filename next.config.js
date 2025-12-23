/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    qualities: [60, 65, 70, 75, 80, 85, 90, 95, 100],
    // Limit the largest generated image width to 1920px to avoid very heavy 4K assets
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.blogger.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Default quality for PNG/JPG optimization (70-80 recommended for SEO)
    unoptimized: false,
  },

  // Explicitly tell Next.js your project root
  outputFileTracingRoot: __dirname,

  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },

  // Modern browser target to reduce JavaScript bundle size
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com; script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob: https://www.google-analytics.com https://www.googletagmanager.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://www.googleapis.com https://www.google.com https://www.gstatic.com https://www.blogger.com https://blogger.googleusercontent.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://region1.analytics.google.com https://*.google-analytics.com https://*.analytics.google.com; frame-src 'self' https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'",
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|gif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/assets/documents/:path*.pdf',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/assets/documents/Project_Delivery_Report.pdf',
        headers: [
          {
            key: 'Link',
            value: '</assets/documents/Project_Delivery_Report.pdf>; rel="canonical"',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // Redirect non-www to www for SEO consistency
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'emuski.com',
          },
        ],
        destination: 'https://www.emuski.com/:path*',
        permanent: true, // 301 redirect
      },
    ]
  },
}

module.exports = nextConfig
