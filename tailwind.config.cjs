/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    fontSize: {
      sm: '0.75rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.875rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
    },
    fontFamily: {
      Pretendard: 'Pretendard',
    },
    container: {
      center: true,
      screens: {
        xs: '280px',
        sm: '440px',
        md: '568px',
        lg: '824px',
        xl: '1080px',
        '2xl': '1336px',
      },
    },
    extend: {
      colors: {
        primary: colors.indigo,
        success: colors.emerald,
        error: colors.red,
        disabled: colors.slate,
      },
    },
  },
  plugins: [],
};
