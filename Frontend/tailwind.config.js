/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
