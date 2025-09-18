import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ea580c',
          foreground: '#ffffff',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.08)',
        card: '0 8px 24px rgba(0,0,0,.08)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(600px 400px at center, rgba(234,88,12,0.12), transparent 60%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-playfair)'],
      },
      animation: {
        fadeIn: 'fadeIn .6s ease both',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
    },
  },
  plugins: [typography],
}
export default config
