/**
 * Next.js Configuration
 *
 * @see https://nextjs.org/docs/app/api-reference/next-config-js
 * @type {import('next').NextConfig}
 */

import path from 'path';
import { fileURLToPath } from 'url';

// ES Module compatibility: Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Environment variables
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

/**
 * Security Headers Configuration
 * Implements OWASP best practices
 */
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];

/**
 * Image optimization configuration
 * Allows images from trusted CDN sources only
 */
const imageConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'blogger.googleusercontent.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'via.placeholder.com',
      pathname: '/**',
    },
  ],
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  qualities: [60, 75],
  minimumCacheTTL: 60,
};

/**
 * Webpack optimization for production builds
 * Implements code splitting and tree shaking
 */
const configureWebpack = (config, { isServer, dev }) => {
  // Production optimizations only
  if (!isServer && !dev) {
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      minimize: true,
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          // Framework chunk (React, React-DOM)
          framework: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: 'framework',
            priority: 40,
            enforce: true,
            reuseExistingChunk: true,
          },
          // UI library chunks
          radixUI: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'radix-ui',
            priority: 35,
            reuseExistingChunk: true,
          },
          // Icon library
          icons: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: 'icons',
            priority: 30,
            reuseExistingChunk: true,
          },
          // Other vendor libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context?.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )?.[1];
              return packageName ? `vendor.${packageName.replace('@', '')}` : 'vendor';
            },
            priority: 20,
            reuseExistingChunk: true,
          },
          // CSS optimization
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'all',
            enforce: true,
            priority: 10,
          },
          // Common code
          common: {
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      },
      // Enable tree shaking
      usedExports: true,
      sideEffects: true,
    };

    // Skip parsing for known safe modules
    config.module.noParse = /^(react|react-dom|scheduler)$/;
  }

  // Performance budgets
  config.performance = {
    hints: dev ? false : 'warning',
    maxEntrypointSize: 512000, // 500KB
    maxAssetSize: 512000,
  };

  return config;
};

/**
 * Main Next.js Configuration
 */
const nextConfig = {
  // Enable React Strict Mode for development best practices
  reactStrictMode: true,

  // Security: Remove X-Powered-By header
  poweredByHeader: false,

  // Enable gzip compression
  compress: true,

  // Explicitly set project root (prevents multi-lockfile warnings)
  outputFileTracingRoot: __dirname,

  // Custom headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },

  // Image optimization
  images: imageConfig,

  // Experimental features
  experimental: {
    // Optimize CSS with critical CSS extraction
    optimizeCss: true,

    // Optimize package imports to reduce bundle size
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-tabs',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      'react-phone-number-input',
    ],
  },

  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: isProduction ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Turbopack configuration (Next.js 15+)
  turbopack: {},

  // Webpack configuration
  webpack: configureWebpack,
};

export default nextConfig;