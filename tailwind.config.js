/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#F85E9F",
        secondary: "#5D50C6",
        black: "#191825",
        "gray-1/2": "rgba(25,24,37,0.5)",
        gray: "rgba(25,24,37,0.1)",
        "gray-3/4": "rgba(25,24,37,0.75)",
        orange: "#FF5722"
      },
      borderRadius:{
        "100": "100px"
      },
      screens:{
        md: "1024px",
        lg: "1440px"
      }
    },
  },
  plugins: [],
};
