module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily:{
        'title' : ['"Bebas Neue", sans-serif'],
        'body' : ['"Montserrat", sans-serif'],
      },

      container:{
        DEFAULT: '1420px',
        center: true,
        padding: '1rem'
      },

      colors:{
        primary:{
          dark: '#59A13A',
          light: '#74D44C',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
