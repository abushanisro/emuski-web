const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      '@fullhuman/postcss-purgecss': {
        content: [
          './app/**/*.{js,jsx,ts,tsx}',
          './src/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: [
            'html', 'body',
            /^PhoneInput/, // React phone number input
            /^recaptcha/, // reCAPTCHA
            /^grecaptcha/,
            /data-/, // Data attributes
            /aria-/, // ARIA attributes
          ],
          deep: [
            /PhoneInput/,
            /recaptcha/,
            /sonner/, // Toast notifications
          ],
          greedy: [
            /^animate-/,
            /^transition-/,
            /^hover:/,
            /^focus:/,
            /^active:/,
            /^data-\[state/,
          ]
        },
        // Don't remove CSS from node_modules that we need
        blocklist: [],
      },
      cssnano: {
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
          minifyFontValues: true,
          minifySelectors: true,
          reduceIdents: false, // Prevent breaking animations
          zindex: false, // Prevent z-index optimization
        }]
      }
    } : {}),
  },
}

export default config