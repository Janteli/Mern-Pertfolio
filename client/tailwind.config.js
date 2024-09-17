/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#071A31",
        "secondary": "#FF7C0D",
        "tertiary": "#6932a8",
        "quadra" :" #660033"
      }
    },
    screens: {


      'lg': {'max': '2023px'},

      'sm': {'max': '1000px'},
    }
  },
  plugins: [],
}