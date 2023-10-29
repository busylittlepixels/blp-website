/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      text:{
        'red': '#f00000'
      }
    }
  },
  plugins: [],
}