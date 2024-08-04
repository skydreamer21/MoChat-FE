/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#FFB646",
      sub: "#FFDF6C",
      "black-12": "#121212",
      "black-20": "#202020",
      "black-60": "#606060",
      "black-84": "#848484",
      "gray-dark": "#BDBDBD",
      "gray-light": "#ECECEC",
      background: "#F6F6F6",
      white: "#FDFDFD",
      red: "#FC6363",
      blue: "#4F8EEC",
      green: "#30DA87",
    },
    fontFamily: {
      pre: ["Pretendard"],
    },
    extend: {
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
      boxShadow: {
        nav: "12px 12px 12px 12px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
