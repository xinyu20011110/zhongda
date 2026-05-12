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
          950: '#F5F7FA',
          900: '#EDF1F7',
          800: '#D6E4F0',
          700: '#B0CDE6',
          600: '#4DA8FF',
          500: '#1890FF',
          400: '#0D7FEE',
          300: '#0A6DD4',
          200: '#0758B0',
          100: '#044080',
        },
        accent: {
          600: '#00D4AA',
          500: '#00BFA5',
          400: '#00A88E',
          300: '#009078',
          200: '#007862',
          100: '#00604C',
        },
        gold: {
          600: '#00BFA5',
          500: '#00D4AA',
          400: '#00BFA5',
          300: '#00A88E',
          200: '#E8F9F5',
          100: '#F0FBF8',
        },
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(24, 144, 255, 0.25), 0 0 60px rgba(24, 144, 255, 0.08)',
        'glow-gold': '0 0 20px rgba(0, 191, 165, 0.25), 0 0 60px rgba(0, 191, 165, 0.08)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(0,0,0,0.02) inset',
        'card-hover': '0 12px 40px rgba(24, 144, 255, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06)',
        'navbar': '0 2px 16px rgba(0, 0, 0, 0.06)',
        'premium': '0 8px 32px rgba(0, 0, 0, 0.08)',
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
