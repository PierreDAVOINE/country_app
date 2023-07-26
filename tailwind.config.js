/** @type {import('tailwindcss').Config} */
/*eslint-env node*/

export default {
  content: ['index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
