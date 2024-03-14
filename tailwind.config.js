/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: '"Poppins", sans-serif'
      },
      colors: {
        brend: {
          blue: {
            100: '#161D2F',
            200: '#3043A9',
            300: '#3043A9',
            400: "#C2D8FE"
          }
        }
      },
      borderRadius: {
        8.75: '35px'
      }
    },
  },
  plugins: [],
}

