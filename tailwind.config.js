/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Rubik'],
    },
    extend: {
      colors: {
        myGreen: '#8ec07c',
        myBlue: '#458588',
        myOrange: '#d79921',
        myRed: '#cc241d',
        myBlack: '#3c3836',
      },
    },
  },
  plugins: [],
}
