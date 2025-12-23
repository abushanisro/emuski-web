/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable gzip compression

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      // Add any other image domains you need here
    ],
    qualities: [40, 75, 85], // Support quality values used in your app
    formats: ['image/webp'], // Use modern formats
  },

  experimental: {
    optimizeCss: true, // Enable CSS optimization with critical CSS extraction
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-tabs',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      'react-phone-number-input'
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },

  // Webpack optimizations
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      // Optimize bundle splitting and reduce JS execution time
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        minimize: true,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          maxSize: 244000, // Split chunks larger than 244KB
          cacheGroups: {
            // React & React-DOM in separate chunk
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'react-vendor',
              priority: 30,
              reuseExistingChunk: true,
            },
            // Separate vendor chunks
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
              name(module) {
                // Get package name from node_modules path
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                // Split large libraries into separate chunks
                if (['@radix-ui', 'react-phone-number-input', 'lucide-react'].some(lib => packageName.includes(lib))) {
                  return `vendor.${packageName.replace('@', '')}`;
                }
                return 'vendor';
              },
            },
            // CSS optimization
            styles: {
              name: 'styles',
              test: /\.(css|scss)$/,
              chunks: 'all',
              enforce: true,
              priority: 10,
            },
            // Common chunks
            commons: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };

      // Tree shaking for unused exports
      config.optimization.usedExports = true;
      config.optimization.sideEffects = true;

      // Reduce module parsing time
      config.module.noParse = /^(react|react-dom|scheduler)$/;
    }

    // Performance hints
    config.performance = {
      ...config.performance,
      hints: dev ? false : 'warning',
      maxEntrypointSize: 512000, // 500KB
      maxAssetSize: 512000,
    };

    return config;
  },
};

export default nextConfig;