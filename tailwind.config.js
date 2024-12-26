/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#808080",//"#FFC000,"
        brightColor: "#333333",//"#dd8036",
        backgroundColor: "#00a850",//"#558413",
      },
    },
  },
  plugins: [],
};
