module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'fold': '280px',
      'iphone5': '320px',
      'moto': '360px',
      'iphone6': '375px',
      'pixel': '411px',
      'iphone6plus': '414px',
      'surface': '540px',
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat'],
        serif: ['Montserrat'],
        mono: ['Montserrat'],
        display: ['Montserrat'],
        body: ['Montserrat']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
