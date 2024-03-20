/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Rubik'],
    },
    extend: {
      colors: {
        gruvbox_brown: '#282828',
        gruvbox_light_brown: '#504945',
        gruvbox_text: '#ebdbb2',
        gruvbox_subtext: '#7c6f64',
        gruvbox_green: '#b8bb26',
      },
    },
  },
  plugins: [],
}
