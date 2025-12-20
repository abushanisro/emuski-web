/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Allowed quality values for Next.js 16 compatibility
    qualities: [70, 75, 80, 85, 90],
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

  async headers() {
    return [
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
