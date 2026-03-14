import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#020B18',
          900: '#061529',
          800: '#0A2540',
          700: '#0D3560',
          600: '#1050A0',
          500: '#1A6FD4',
          400: '#3B8FE8',
          300: '#72B5F2',
          200: '#AECFF7',
          100: '#DAEEFF',
        },
        gold: {
          600: '#B8860B',
          500: '#D4A017',
          400: '#E8B840',
          300: '#F0CC70',
          200: '#F7E0A8',
          100: '#FBF0D4',
        },
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(26, 111, 212, 0.5), 0 0 60px rgba(26, 111, 212, 0.2)',
        'glow-gold': '0 0 20px rgba(212, 160, 23, 0.5), 0 0 60px rgba(212, 160, 23, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255,255,255,0.05) inset',
        'navbar': '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-up-delay-1': 'fade-up 0.7s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fade-up 0.7s ease-out 0.4s forwards',
        'fade-up-delay-3': 'fade-up 0.7s ease-out 0.6s forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      backdropBlur: {
        navbar: '20px',
        card: '12px',
      },
    },
  },
  plugins: [],
} satisfies Config
