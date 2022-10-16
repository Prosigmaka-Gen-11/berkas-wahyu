/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    '**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'text': ['Open Sans', ...defaultTheme.fontFamily.sans],
        'title': ['Bree Serif', 'serif']
      },
      colors: {
        desains: '#ED743D',
        second: '#EFEFEF'
      }
    },
  },
  plugins: [],
}