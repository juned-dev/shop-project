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
        screens: {
          DEFAULT: '1420px',
        },
        center: true,
        padding: '1rem'
      },

      colors:{
        primary:{
          dark: '#59A13A',
          light: '#74D44C',
        },
        gray:{
          '300': '#D8D8D8',
          '700': '#3A3A3A',
          '800': '#403E3F',
        },
        body: '#ffffff',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
