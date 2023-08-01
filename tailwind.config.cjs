/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "Poppins",
      },
      colors : {
        "primary" : '#6246ea',
        "white" : '#fffffe',
        "black" : '#2b2c34',
        "secondary" : '#d1d1e9',
        "danger" : '#e45858'
      }
    },
  },
  plugins: [],
};
