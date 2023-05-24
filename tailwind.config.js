/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "1px",
        mobile: "375px",
        tablet: "768px",
        desktop: "1440px",
      },
      fontFamily: {
        fontAnt: "'Antonio', sans-serif",
        fontSpart: "'League Spartan', sans-serif",
      },
    },
  },
  plugins: [],
};
