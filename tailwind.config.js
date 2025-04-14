/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7CC5DE',
        secondary: '#0F1F47',
        background: '#FCFBF2',
      },
      fontFamily: {
        heading: ['Glacial Indifference', 'serif'],
        body: ['Helvetica Neue', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};