/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'cb-green': '#082a21',
        'cb-gold': '#b08527',
        'cb-cream': '#f7f5f1',
      },
    },
  },
  plugins: [],
}
