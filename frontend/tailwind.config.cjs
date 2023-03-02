/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        default: '#000000',
        passive: '#9B9B9B',
        quote: '#9283E0',
        hover: '#FF5480',
      },
      backgroundColor: {
        r: '#FF5480',
        p: '#9283E0',
        o: '#FFA599',
        y: '#FFD581',
        v: '#FE90EC',
        b: '#27AEFF',
        g: '#00DC90',
        gray: '#FF5480',
        pn: '#FF5480',
        background: '#F9F9Fb',
      },
      colors: {
        gray: '#979797',
      },
      fontSize: {
        header1: '3em',
        header2: '2.25em',
        header3: '1.75em',
        header4: '1.125em',
        header5: '1em',
        header6: '0.875em',
      },
    },
  },
  plugins: [],
};
