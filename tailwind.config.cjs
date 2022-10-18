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
        'red' : "#db0000",
        'black' : "#000000",
        'grey' : "#564d4d",
        'bordeaux' : "#831010",
      },
      fontSize:{
        'enormous' : '3rem',
        'xtra' : "2rem",
        'large' : "1.5rem",
        'medium' : "1rem",
        'small' : "0.75rem",
      },
    extend: {},
  },
  plugins: [],
}