/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple": "rgb(32, 19, 53)",
        "dark-color": "rgb(42, 47, 79, 0.5)",
        "secondary-white": "#c7c7c7",
      },
    },
  },
  plugins: [],
};
