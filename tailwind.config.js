module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat'
      },
      textColor: {
        theme: {
          primary: "#252B42",
          secondary: "#737373"
        }
      },
      backgroundColor: {
        theme: {
          primary: "#23A6F0",
          secondary: "#252B42"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
