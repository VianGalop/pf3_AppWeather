/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-weather-days':'#100E1D',
        'bg-weather':'#1E213A',
        'bg-boton-search':'#6E707A',
        'bg-rectangulos':'#1E213A',
        'color-place':'#A09FB1',
        'color-date':'#88869D',
        'color-text':'#E7E7EB',
        'color-text-small':'#A09FB1'
      },
      fontFamily:{
        'Raleway':['Raleway'],
        'Fraunces':['Fraunces','serif'],
      },
    },
  },
  plugins: [],
}

