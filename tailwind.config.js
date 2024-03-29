module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "30px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#A46B52",
        secondary: "#F5E6E0",
      },
      backgroundImage: {
        hero: "url('./img/bg-image.png')",
      },
    },
  },
  plugins: [],
};
