/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: '#000',
        black50: 'rgba(0, 0, 0, 0.50)',
        black75: 'rgba(0, 0, 0, 0.75)',
        white: '#fff',

        brandPurple: '#7F56D9',
      },
    },
  },
  plugins: [],
}
