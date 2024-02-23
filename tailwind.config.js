/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        dark: "#888688",
        black: "#1F2544",
        dim_dark: "#E5E1DA",
        light: "#ffffff",
        blue: "#0766AD",
        red: "#F34573",
        gradient: "#7752FE",
        orange: "#F7B633",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
