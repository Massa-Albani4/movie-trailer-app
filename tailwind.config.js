/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      backgroundColor: {
        transparent: "transparent",
      },
      colors: {
        black: "#0A0A0A",
      },
    },
    fontFamily: {
      body: ["Open Sans"],
    },
  },
  plugins: [],
};
