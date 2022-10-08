/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        engravers: 'EngraversGothicBT',
        canela: 'Canela Web',
      },
      colors: {
        'base-light': '#f0f0f0',
        'base-yellow': '#ffc90d',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
