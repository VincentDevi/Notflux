/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      borderWidth:{
        mobileBorderTop : "4px",
        mobileNavBorder: "3px"
      },
      height:{
        'navMobile': '10vh',
        'contentMobile': '77vh'
      },
      fontFamily:{
        'halloween' : ['Creepster', 'cursive'],
        'netflix' : ['Bebas Neue', 'cursive'],
        'list' : ['Noto Sans', 'sans-serif']
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
        'gigantous' : '3.5rem',
        'enormous' : '1.5rem',
        'xtra' : "1.5rem",
        'large' : "1.75rem",
        'medium' : "1rem",
        'small' : "0.75rem",
      },
    extend: {},
  },
  plugins: [
  ],
}