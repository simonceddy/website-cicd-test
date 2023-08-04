const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          'Ubuntu Mono',
          ...defaultTheme.fontFamily.mono
        ],
      },
      fontSize: {
        huge: '8rem'
      }
    },
  },
  plugins: [],
};
