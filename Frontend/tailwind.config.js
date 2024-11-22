/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'left-bg' : '#292543',
        'right-bg':'#202129',
        'navbar':'#36363C',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

