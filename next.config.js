/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Configure quality levels for Next.js 16 compatibility
    qualities: [75, 80, 85, 90, 95, 100],
  },

  // Explicitly tell Next.js your project root
  outputFileTracingRoot: __dirname,

  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/assets/documents/:path*.pdf',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self';",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
