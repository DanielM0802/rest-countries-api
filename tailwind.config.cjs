/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif']
      },
      colors: {
        'darkBlue': 'hsl(209, 23%, 22%)',
        'veryDarkBlueBg': 'hsl(207, 26%, 17%)',
        'veryDarkBlueText': 'hsl(200, 15%, 8%)',
        'darkGray': 'hsl(0, 0%, 52%)',
        'veryLightGray': 'hsl(0, 0%, 98%)',
        'white': 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
}
