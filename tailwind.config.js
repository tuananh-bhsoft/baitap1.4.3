/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        laptop: {
          max: "1024px",
        },
        tablet: {
          max: "768px",
        },
        mobile: {
          max: "425px",
        },
      },
      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        main: "1140px",
      },
      colors: {
        primary: {
          m: "#091156",
          l: "#414880",
          sl: "#d7dbff",
        },
        secondary: "#ff64ae",
        tertiary: {
          m: "#8b8b8b",
          l: "#c5c5c5",
        },
        white: "#fff",
      },
      backgroundColor: {
        primary: "#ff64ae",
        secondary: {
          d: "#0d165c",
          m: "#091156",
          l: "#414880",
        },
        tertiary: "#eee",
        white: "#fff",
        transparent: "transparent",
      },
      spacing: {
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "100px": "100px",
        "120px": "120px",
        "200px": "200px",
      },
      borderRadius: {
        "40px": "40px",
      },
    },
  },
  plugins: [],
};
