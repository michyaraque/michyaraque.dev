const { spacing, fontFamily, colors } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
      },
      colors: {
        languages: {
          lua: '#00007c',
          c: '#a3b3c6',
          javascript: '#efd81d'
        },
        ...colors
      },
      grayscale: {
        50: '50%',
        80: '80%'
      },
      'animation': {
        'text': 'text 5s ease infinite',
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      }
    },
  },
  plugins: [require("daisyui")],
}
