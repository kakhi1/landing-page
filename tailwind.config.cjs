/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // hero backgraund
        hero: "url('./assets/image.png')",
        // sponsor div backgraund
        hero1: "url('./assets/traveloka1.png')",
        hero2: "url('./assets/traveloka2.png')",
        hero3: "url('./assets/traveloka3.png')",
        hero4: "url('./assets/traveloka4.png')",
        // backgraund for recomandetion
        rec1: "url('./assets/Ellipse4.png')",
        rec2: "url('./assets/Ellipse5.png')",
        rec3: "url('./assets/Ellipse6.png')",
        rec4: "url('./assets/Rectangle12.png')",
        rec5: "url('./assets/Ellipse7.png')",
        ////
        house1: "url('./assets/house1.png')",
        house2: "url('./assets/house2.png')",
        house3: "url('./assets/house3.png')",
        house4: "url('./assets/house4.png')",
        robert: "url('./assets/robert.png')",
        ronald: "url('./assets/ronald.png')",
        jenny: "url('./assets/jenny.png')",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      Lexend: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
};
