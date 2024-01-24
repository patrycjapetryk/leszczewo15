/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-red-hat-mono)'],
        display: ['var(--font-chewy)'],
      },
      screens: {
        xs: '400px',
        '1xl': '1440px',
      },
      rotate: {
        5: '5deg',
        10: '10deg',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
