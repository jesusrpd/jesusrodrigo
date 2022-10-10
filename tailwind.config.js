/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'dark': '#121215',
        'blue': '#05C3FF',
        'light': '#ffff'
      },
      colors:{
        'blue': '#05C3FF'
      }
    },
  },
  plugins: [],
}