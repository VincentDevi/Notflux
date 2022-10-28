/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily:{
        'halloween' : ['Creepster', 'cursive'],
        'netflix' : ['Bebas Neue', 'cursive'],
      },

      colors:{
        'darkBlack' : '#0f0f0f',
        'red' : "#db0000",
        'black' : "#141414",
        'grey' : "#564d4d",
        'bordeaux' : "#831010",
        'white' : '#FFFFFF',
        'test' : '#3C4048'
      },
      fontSize:{
        'gigantous' : '5rem',
        'enormous' : '3rem',
        'xtra' : "2rem",
        'large' : "1.75rem",
        'medium' : "1.2rem",
        'small' : "0.75rem",
      },
    extend: {},
  },
  plugins: [
  ],
}