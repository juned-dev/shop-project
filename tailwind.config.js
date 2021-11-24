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
        'fontawesome' : ['"Font Awesome 5 Free"'],
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
          '500': '#6A6A6A',
          '600': '#5B5B5B',
          '700': '#3A3A3A',
          '800': '#403E3F',
          '900': '#505155',
        },
        yellow:{
          '400': 'rgba(255,218,107,0.20)',
          '600': '#D6AC75',
          '700': '#FFF8E1',
          '800': '#FFDA6B',
        },
        blue:{
          '100': '#BDCFCE',
        },
        body: '#ffffff',

      },

      dropShadow: {
         md: '0 3px 20px rgba(0, 0, 0, 0.10)',
       },

       content:{
         'right-arrow': '<i class="fas fa-chevron-right"></i>',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
