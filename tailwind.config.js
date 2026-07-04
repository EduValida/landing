/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefbf5",
          100: "#d6f5e4",
          200: "#b0eacb",
          300: "#7edaae",
          400: "#47c58d",
          500: "#23aa72",
          600: "#17875c",
          700: "#156c4d",
          800: "#14553f",
          900: "#124636",
        },
      },
      boxShadow: {
        glow: "0 20px 45px -15px rgba(35, 170, 114, 0.35)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.15) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
