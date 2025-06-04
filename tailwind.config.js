/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'devil-red': '#C41E1E',
        'devil-orange': '#FF7700',
        'devil-yellow': '#FFBB00',
        'devil-black': '#1E1E1E',
        'devil-dark': '#2D2D2D',
        'devil-light': '#F5F5F5'
      },
      fontFamily: {
        'display': ['Anton', 'sans-serif'],
        'body': ['Poppins', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'devil': '0 4px 14px 0 rgba(196, 30, 30, 0.3)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2137231/pexels-photo-2137231.jpeg')",
        'paintball-pattern': "url('https://images.pexels.com/photos/9896719/pexels-photo-9896719.jpeg')",
      }
    },
  },
  plugins: [],
};