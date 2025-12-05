/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
    ]
  },
}

module.exports = nextConfig
