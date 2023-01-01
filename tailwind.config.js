/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mortend: "Mortend",
        bebas: "Bebas",
      },
      padding: {
        17: "66px",
      },
      spacing: {
        15: "60px",
      },
      colors: {
        silver: "#A8A8A8",
        "silver-light": "#ECECEC",
        primary: "#3FEA1E",
        secondary: "#8A4CF3",
        "bg-btn": "#00494F",
        "black-light": "#161616",
      },
      lineHeight: {
        16: "4rem",
      },
      zIndex: {
        1: "1",
      },
      boxShadow: {
        btn: "inset 0 0 0 0 #3FEA1E",
        "btn-hover": "inset 300px 0 0 0 #3FEA1E",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  plugins: [],
};
