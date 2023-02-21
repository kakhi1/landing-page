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
        tour: "url('./assets/Tour.png')",
        tour1: "url('./assets/Tour1.png')",
        tour2: "url('./assets/Tour2.png')",
        tour3: "url('./assets/Tour3.png')",
        review: "url('./assets/review.png')",
        review1: "url('./assets/review1.png')",
        henry: "url('./assets/henry.png')",
        review2: "url('./assets/review2.png')",
        howard: "url('./assets/howard.png')",
        partner: "url('./assets/partner.png')",
        partner1: "url('./assets/partner1.png')",
        partner2: "url('./assets/partner2.png')",
        darlene: "url('./assets/darlene.png')",
        partner3: "url('./assets/partner3.png')",
        cameron: "url('./assets/cameron.png')",
        subscribe: "url('./assets/subscribe.png')",
        subscribe1: "url('./assets/subscribe1.png')",
        subscribe2: "url('./assets/subscribe2.png')",
        subscribe3: "url('./assets/subscribe3.png')",
        subscribe4: "url('./assets/subscribe4.png')",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      Lexend: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
};
