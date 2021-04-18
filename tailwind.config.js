module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    letterSpacing: {
      negative: '-.2em'
    },
    extend: {
      fontFamily: {
        ms: ['Montserrat', 'sans-serif'],
        ns: ['"Nunito Sans"', 'sans-serif'],
        so: ['"Scope One"', 'serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
