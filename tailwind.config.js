/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Singleday: ["Single Day", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
        Literata: ["Literata", "serif"],
      },
      colors: {
        rgba1: "rgba(0, 0, 0, 0.1)", //rgba(171, 194, 191, 0.685)
        rgba2: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
