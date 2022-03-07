module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          '50': '#484848',
          '100': '#3e3e3e',
          '200': '#343434',
          '300': '#2a2a2a',
          '400': '#202020',
          '500': '#161616',
          '600': '#0c0c0c',
          '700': '#020202',
          '800': '#000000',
          '900': '#000000'
        }
      }
    },
  },
  plugins: [],
}