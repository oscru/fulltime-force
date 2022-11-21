/** @type {import('tailwindcss').Config} */
/* eslint-env node */

module.exports = {
  content: ['./src/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D23369',
        'primary-dark': '#9C254D',
        'primary-light': '#F06292',
        dark: '#2A3990',
        light: '#E6E8EA',
        'dark-gray': '#171717',
      },
    },
  },
  plugins: [],
};
