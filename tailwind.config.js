/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'esgreen': '#51D289',
      'esblack': '#1E1E1E',
      'white' : 'white'
    },
  },
  plugins: [],
}