/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#0A0A0A',
        'luxury-charcoal': '#1A1A1A',
        'luxury-gold': '#C9A961',
        'luxury-red': '#FF4444',
        'luxury-white': '#F5F5F5',
        'luxury-gray': '#888888',
        'luxury-dark-blue': '#0F3460',
        'luxury-navy': '#16213E',
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 100%)',
        'gradient-blue': 'linear-gradient(135deg, #16213E 0%, #0F3460 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C9A961 0%, #B8935A 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, rgba(201, 169, 97, 0.1) 0%, transparent 70%)',
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
          from: { 'box-shadow': '0 0 20px rgba(201, 169, 97, 0.5)' },
          to: { 'box-shadow': '0 0 30px rgba(201, 169, 97, 0.8)' },
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