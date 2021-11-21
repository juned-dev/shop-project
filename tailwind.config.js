module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {

      fontSize: {
        'tiny': '.938rem',
      },
      
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
          '400': '#D9D9D9',
          '600': '#5B5B5B',
          '700': '#3A3A3A',
          '800': '#403E3F',
        },
        yellow:{
          '400': 'rgba(255,218,107,0.20)',
          '600': '#D6AC75',
          '700': '#FFF8E1',
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
