module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: {DEFAULT: '#1c1c1e'},
      gray: {
        light: '#393939',
        DEFAULT: '#2c2c2e'},
      white: {DEFAULT: '#e8eaed'},
      green: {DEFAULT: '#6aeb9d'},
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Source Serif Pro', 'serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
