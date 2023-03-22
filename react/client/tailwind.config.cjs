/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      /** set color-theme */
      colors:{
        "primary": "#f7886d",
        "secondary": "#9d3ebe",
        "backgrounddark": "#272838",
        "background": "#313247",
        "backgroundbright": "#4a4c68da",
      }
    }
  },
  plugins: [],
}
