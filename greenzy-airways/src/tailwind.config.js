/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7BC043',
        'primary-light': '#A5D66F',
        secondary: '#003E9F',
        'secondary-light': '#1E5BD7',
        dark: '#081B33',
        light: '#F5F7FA',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};