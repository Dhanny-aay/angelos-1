/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Satoshi: [ 'Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}