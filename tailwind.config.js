/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      color: {
        "creme": "#85643E",
        "coffee": "#86797A"
      },
    },
  },
  plugins: [],
}