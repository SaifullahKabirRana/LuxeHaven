/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        glitch: "'Rubik Glitch Pop', system-ui",
        roboto: "'Roboto', sans-serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

