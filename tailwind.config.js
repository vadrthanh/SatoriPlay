/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['afacad', 'sans-serif'],
        heading: ['ADLaM Display', 'serif'],
      },
    },
  },
  plugins: [],
};
