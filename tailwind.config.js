/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#E4DFDC",
          2: "#333333",
          3: "#B1A29D",
          4: "#2D2B2C",
          5: "#F6F0F0",
          6: "#1E1E1E",
        }
      },
      fontFamily: {
        monument: ["Monument", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
        sans: ['Work Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('./public/scroll.js'),
  ],
}