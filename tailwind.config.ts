import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // EMUSKI Brand Colors
        "emuski-teal": {
          DEFAULT: "hsl(var(--emuski-teal))",
          light: "hsl(var(--emuski-teal-light))",
          dark: "hsl(var(--emuski-teal-dark))",
          darker: "hsl(var(--emuski-teal-darker))",
        },
        // Dark & Industrial Colors
        "emuski-dark": "hsl(var(--emuski-dark))",
        "hero-background": "hsl(var(--hero-background))",
        "industrial-dark": "hsl(var(--industrial-dark))",
        // Neutral Foundation
        "text-gray": "hsl(var(--text-gray))",
        "border-gray": "hsl(var(--border-gray))",
        "dark-text": "hsl(var(--dark-text))",
        // Accent & System Colors
        "grid-line": "hsl(var(--grid-line))",
        "success": "hsl(var(--success))",
        "warning": "hsl(var(--warning))",
        "error": "hsl(var(--error))",
        // Legacy compatibility
        "tech-green": "hsl(var(--tech-green))",
        "tech-green-dark": "hsl(var(--tech-green-dark))",
        "tech-black": "hsl(var(--tech-black))",
        "tech-gray": "hsl(var(--tech-gray))",
        "tech-light-gray": "hsl(var(--tech-light-gray))",
        "industrial-blue": "hsl(var(--industrial-blue))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

export default config