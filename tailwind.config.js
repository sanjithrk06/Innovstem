/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regarn: ["regarn", "sans-serif"],
        newsreader: ["Newsreader", "serif"],
        noto: ["Noto Sans KR", "sans-serif"],
      },
      colors: {
        primary: "#f67009",
      },
    },
  },
  plugins: [],
};
