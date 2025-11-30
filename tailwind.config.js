/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandBlack: "#000000",
        brandCyan: "#47AEB6",
        brandWhite: "#FFFFFF",
        brandBlue: "#0634FD",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
