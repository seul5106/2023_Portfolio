/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: 'inset 2px 2px 4px #D0D6DC',
      },
      gridTemplateRows: {
        1: 'repeat(1, minmax(0, 1fr))',
        2: 'repeat(2, minmax(0, 1fr))',
        3: 'repeat(3, minmax(0, 1fr))',
        4: 'repeat(4, minmax(0, 1fr))',
        5: 'repeat(5, minmax(0, 1fr))',
        6: 'repeat(6, minmax(0, 1fr))',
        none: 'none',
      },
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      'grayscale-black': '#18181A',
      'grayscale-800': '#2A2C2F',
      'grayscale-600': '#5C5F69',
      'grayscale-500': '#80848E',
      'grayscale-400': '#bbbec5',
      'grayscale-300': '#B4B6BE',
      'grayscale-200': '#E6E7EE',
      'grayscale-100': '#F5F7FA',
      'grayscale-white': '#FFF',
      'brand-blue': '#4B71FF',
      'brand-purple': '#8C07FF',
      'system-validation': '#FF003D',
      'system-green': '#52E670',
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          maxWidth: '1312px',
          '@screen lg': {
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
        },
        '.container-wide': {
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          maxWidth: '1752px',
          '@screen lg': {
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
        },
      });
    },
    function ({ addComponents }) {
      addComponents({
        //48px
        '.text-first-character': {
          fontSize: '3rem',
          lineHeight: '3.75rem',
        },
        //40px
        '.text-title': {
          fontSize: '2.5rem',
          lineHeight: '3.75rem',
        },
        //28px
        '.text-h1': {
          fontSize: '1.75rem',
          lineHeight: '2.625rem',
        },
        //20px
        '.text-h2': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          '@screen lg': {
            fontSize: '1.25rem',
            lineHeight: '1.875rem',
          },
        },
        //16px
        '.text-b1': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          '@screen lg': {
            fontSize: '1rem',
            lineHeight: '1.5rem',
          },
        },
        //14px
        '.text-b2': {
          fontSize: '0.75rem',
          lineHeight: '1.125rem',
          '@screen lg': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
          },
        },
        //12px
        '.text-b3': {
          fontSize: '0.75rem',
          lineHeight: '1.125rem',
        },
        //15px
        '.text-b4': {
          fontSize: '0.9375rem',
          lineHeight: '1.25rem',
        },
        //10px
        '.text-b5': {
          fontSize: '0.625rem',
          lineHeight: '1.25rem',
        },
        //18px
        '.text-b6': {
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
        },
        //14px
        '.text-b7': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      });
    }
  ],
};