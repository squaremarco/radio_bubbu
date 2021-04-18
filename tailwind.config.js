// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindBlendModePlugin = require('tailwindcss-blend-mode');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    letterSpacing: {
      negative: '-.23em',
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
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
  plugins: [tailwindBlendModePlugin()]
};
