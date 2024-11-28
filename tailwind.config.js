/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
        "2xl": "1920px",
      },
      backgroundColor: {
        transparent: "transparent",
      },
      colors: {
        "dark-green": "#30362F",
      },
    },
    fontFamily: {
      body: ["Open Sans"],
    },
  },
  plugins: [],
};
