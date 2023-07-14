/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('/src/assests/5c386908fc8f4f2373c8dc35b172f9e2.jpg')",
      },
    },
    fontFamily: {
      garchig: ["Playfair Display SC", "serif"],
    },
  },
  plugins: [],
};
