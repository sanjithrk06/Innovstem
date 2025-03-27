/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "serif"],
        hedvig: ["Hedvig Letters Serif"], // Hedvig Letters Serif
        publicsans: ["Public Sans"],
      },
      colors: {
        whiteDim: "hsl(0, 0%, 97%)",
        secondary: "#002479", // 002359
        primary: "#FF5F00",
        hover: "#F5A623",
        header: "#FF5F00",
        cream: "#eae2b7", // cream
        title: "#024CAA", // blue
        c3: "#f77f00", // orange
      },
    },
  },
  plugins: [],
};
