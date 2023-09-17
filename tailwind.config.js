/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resume/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        amatic:['Amatic SC', 'sans'],
        oswald:['Oswald', 'sans']
      },
    }
  },
  plugins: [],
}