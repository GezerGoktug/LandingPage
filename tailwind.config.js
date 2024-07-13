/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      xxxs: "350px",
      xxs: "400px",
      xs: "500px",
      sm: "590px",
      md: "768px",
      lg: "1000px",
      xl: "1320px",
    },
    extend: {
      dropShadow: {
        "3xl": "0 0  25px #00000089",
      },
      keyframes: {
        moving: {
          "0%": { transform: "translateY(0px)" },
          "25%": { transform: "translateY(-15px)" },
          "50%": { transform: "translateY(0px)" },
          "75%": { transform: "translateY(15px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        moving: "moving 4s linear infinite",
      },
    },
  },
  plugins: [],
};
