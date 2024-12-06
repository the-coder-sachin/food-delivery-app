/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "zero-offset": "0 0 15px rgba(0, 0, 0, 0.5)", // Adjust blur and spread as needed
      },
      keyframes: {
        click: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" }, // Button shrinks slightly
          "100%": { transform: "scale(1)" }, // Returns to normal size
        },
      },
      animation: {
        click: "click 0.2s ease-out ", // Define the animation name and duration
      },
    },
  },
  plugins: [],
};
