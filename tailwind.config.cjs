/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#f4f5f0',
        'secondary': '#1e1e1e'
      },
      fontFamily: {
        'plain-bold': ["Plain-Bold"],
        'plain-medium': ["Plain-Medium"],
        'plain-regular': ["Plain-Regular"],
        'plain-thin': ["Plain-Thin"],
        'plain-ultra-light': ["Plain-UltraLight"],
        'plain-ultra-thin': ["Plain-UltraThin"],
      },
    },
  },
  plugins: [],
};
