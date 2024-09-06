/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('../src/Images/hero.jpg')",
        'about': "url('../src/Images/drone8.jpg')",

      },
      screens:{
        'kobus': '2012px'
      }
    },
  },
  plugins: [],
}