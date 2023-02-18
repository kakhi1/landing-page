/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/image.png')",
        hero1: "url('./assets/traveloka1.png')",
        hero2: "url('./assets/traveloka2.png')",
        hero3: "url('./assets/traveloka3.png')",
        hero4: "url('./assets/traveloka4.png')",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      Lexend: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
};
