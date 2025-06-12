/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'elegant-white': '#FFFFFF',
        'elegant-cream': '#FEFDFB',
        'elegant-gray': '#F8F9FA',
        'elegant-silver': '#E9ECEF',
        'elegant-charcoal': '#495057',
        'elegant-dark': '#212529',
        'elegant-accent': '#6C757D',
        'elegant-soft': '#ADB5BD',
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
        'gradient-soft': 'linear-gradient(135deg, #FEFDFB 0%, #E9ECEF 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, rgba(108, 117, 125, 0.05) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'magnetic': 'magnetic 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { 'box-shadow': '0 0 20px rgba(108, 117, 125, 0.1)' },
          to: { 'box-shadow': '0 0 30px rgba(108, 117, 125, 0.2)' },
        },
        slideUp: {
          from: { transform: 'translateY(40px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        magnetic: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.05)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}