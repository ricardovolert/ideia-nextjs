module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '10240px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        gray: '#c7d0d8',
        jungle: '#1a1d28',
        gunmetal: '#2e3142',
        red: '#f25f5c',
      },
      container: {
        center: true,
      },
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    margin: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
