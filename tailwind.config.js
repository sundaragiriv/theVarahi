/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Professional Design System
        'brand': {
          50: '#ecf3ff',
          100: '#d8e6ff',
          200: '#b5d0ff',
          300: '#86b1ff',
          400: '#5f8fff',
          500: '#3f70ff',
          600: '#1c4dff',
          700: '#143bd1',
          800: '#102d98',
          900: '#061a5a',
        },
        'accent': {
          50: '#eef8ff',
          100: '#d9eeff',
          200: '#b9ddff',
          300: '#8bc9ff',
          400: '#5eb3ff',
          500: '#4fa3ff',
          600: '#3288eb',
          700: '#266bc0',
          800: '#1f5496',
          900: '#183f72',
        },
        'neutral': {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        // Semantic colors
        primary: '#1c4dff',
        secondary: '#4fa3ff',
        surface: '#fafafa',
        text: '#18181b',
        'text-light': '#71717a',
        border: '#e4e4e7',
        // Custom turmeric yellow
        'turmeric': {
          400: '#f7c65b',
          500: '#f2b233',
          600: '#d8901d',
        },
        'signal-red': {
          400: '#f07a7a',
          500: '#e43d3d',
          600: '#be2a2a',
        },
        // Finquick-inspired clean light green palette
        'finquick': {
          // Beautiful light green gradients inspired by Finquick
          'gradient-start': '#10b981',
          'gradient-middle': '#34d399', 
          'gradient-end': '#6ee7b7',
          // Clean light colors
          'light': '#f0fdf4',
          'soft': '#ecfdf5',
          'muted': '#d1fae5',
          'border': '#d1d5db',
          // Professional text colors  
          'text-dark': '#111827',
          'text-medium': '#374151',
          'text-light': '#6b7280',
        },
        // Modern light green gradient combinations
        'gradient-finquick': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'green-clean': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontFamily: {
        'sap': ['72', 'Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'futuristic': ['Orbitron', 'system-ui', 'sans-serif'],
        'logo': ['Monaco', 'Consolas', 'Menlo', 'monospace'],
        'mono-futuristic': ['SF Mono', 'Monaco', 'Consolas', 'Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'sap-sm': '0 2px 4px rgba(0, 112, 242, 0.1)',
        'sap-md': '0 4px 12px rgba(0, 112, 242, 0.15)',
        'sap-lg': '0 8px 24px rgba(0, 112, 242, 0.2)',
        'sap-xl': '0 16px 48px rgba(0, 112, 242, 0.25)',
        'glow': '0 0 20px rgba(0, 112, 242, 0.3)',
      },
      borderRadius: {
        'DEFAULT': '8px',
        'sap': '4px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 112, 242, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 112, 242, 0.6)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};