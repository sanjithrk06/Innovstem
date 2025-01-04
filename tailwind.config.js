/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "serif"],
        hedvig: ["Hedvig Letters Serif"],
        publicsans: ["Public Sans"],
      },
      colors: {
        primary: "#f67009",
      },
    },
  },
  plugins: [],
};
