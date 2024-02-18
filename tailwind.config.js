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
        dim_dark: "#E5E1DA",
        light: "#ffffff",
        blue: "#0766AD",
        orange: "#ff006e",
        gradient:"#7752FE"
      },
      fontFamily: {
        sans:['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
