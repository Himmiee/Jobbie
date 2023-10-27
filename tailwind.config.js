/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "xs" : "1600px"
      }
    },
  },
  plugins: [],
}

