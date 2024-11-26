/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'elevated-separator': 'rgb(200, 200, 200)', 
      },
      borderColor: {
        'custom-gray': 'rgb(219,219,219)', // Custom border color
      },
    },
  },
  plugins: [],
};
