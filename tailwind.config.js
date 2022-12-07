const { spacing, fontFamily, colors } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        brand: {
          primary: {
            100: '#F6A02D'
          }
        },
        technologies: {
          lua: '#00007c',
          c: '#a3b3c6',
          javascript: '#efd81d',
          php: '#4f5b93',
          typescript: '#3078c6',
          stripe: '#635bff',
          metamask: '#f5943e',
          nextjs: '',
          reactjs: '#61dafb'
        },
        ...colors
      },
      grayscale: {
        50: '50%',
        80: '80%'
      },
      animation: {
        'text': 'text 5s ease infinite',
        'wave': 'wave 1.5s infinite'
      },
      keyframes: {
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
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        }
      },
    },
  },
  plugins: [require("daisyui")],
}
