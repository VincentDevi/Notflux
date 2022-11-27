/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      padding:{
        '[10vh]':'10vh',
      },
      height:{
        '[7vh]': '7vh',
        'navMobile': '10vh',
        'contentMobile': '90vh',
        'screenMax': '100vh',
        'max': '100%',
        'demi' : '50%',
        'desc' : '35%',
        'genre' : '15%',
        'genreMin' : '150px',
        'vid': '384px',
        'descMov' : '150px'
      },
      fontFamily:{
        'halloween' : ['Creepster', 'cursive'],
        'netflix' : ['Bebas Neue', 'cursive'],
        'list' : ['Heebo', 'sans-serif']
      },
      fontWeight:{
        'light' : '200',
        'regular': '400',
        'semiBold' : '600',
        'bold': '900'
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
        'huge': '2.5rem',
        'gigantous' : '2.2rem',
        'enormous' : '1.5rem',
        'xtra' : "1.5rem",
        'large' : "2rem",
        'medium' : "1rem",
        'small' : "0.75rem",
      },
    extend: {},
  },
  plugins: [
  ],
}