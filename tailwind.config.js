/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // SAP Brand Colors
        'sap-blue': '#0070F2',
        'sap-dark-blue': '#0854A0',
        'sap-light-blue': '#74B3F7',
        'sap-navy': '#12161B',
        'sap-gray': '#6A6D70',
        'sap-light-gray': '#F5F5F5',
        'sap-white': '#FFFFFF',
        'sap-green': '#30914C',
        'sap-orange': '#FF7500',
        // Semantic colors
        primary: '#0070F2',
        secondary: '#0854A0',
        accent: '#74B3F7',
        dark: '#12161B',
        gray: '#6A6D70',
        light: '#F5F5F5',
      },
      fontFamily: {
        'sap': ['72', 'Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
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