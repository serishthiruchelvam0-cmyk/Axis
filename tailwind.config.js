/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0a',
          900: '#111111',
          850: '#161616',
          800: '#1c1c1c',
          700: '#262626',
          600: '#333333',
          500: '#444444',
          400: '#666666',
          300: '#999999',
          200: '#cccccc',
          100: '#e8e8e8',
          50: '#f5f5f5',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde58a',
          300: '#fbcf4f',
          400: '#f5b324',
          500: '#e09b16',
          600: '#c47d0f',
          700: '#9c5f10',
          800: '#7c4b12',
          900: '#673e13',
        },
        sage: {
          50: '#f3f7f4',
          100: '#e0eae3',
          200: '#c2d4ca',
          300: '#97b6a3',
          400: '#6b9079',
          500: '#4f755e',
          600: '#3d5e4a',
          700: '#334d3e',
          800: '#2b3f33',
          900: '#243429',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245,179,36,0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(245,179,36,0.4)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(16px)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slide-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.7s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
        'float-y': 'floatY 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scroll-down': 'scrollDown 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
