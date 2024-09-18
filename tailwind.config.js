/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#f8981f',
        secondary: '#e54416',
        tertiary: '#f5ede3',
      },
      fontFamily:{
        Alegreya: ["Alegreya", 'serif']
      },
      container:{
        center:true,
        padding:{
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
}

