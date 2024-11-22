/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#686868",
      },
      screens: {
        xl: "1440px",
        "2xl": "1920px",
      },
    },
    fontFamily: {
      body: ["Open Sans"],
    },
  },
  plugins: [],
};
