module.exports = {
  content: [
    './views/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'signature': ['Brittany Signature', 'sans-serif']

      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

