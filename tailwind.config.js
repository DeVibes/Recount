/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik']
    },
    colors: {
      'green': "#8ec07c",
      'blue': "#458588",
      'orange': "#d79921",
      'red': "#cc241d",
      'black': "#3c3836"
    },
    extend: {},
  },
  plugins: [],
}

