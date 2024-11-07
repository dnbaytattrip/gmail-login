/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          lg: "1160px",
          xl: "1160px",
          "2xl": "1160px",
        },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Arimo: ["Arimo", "sans-serif"],
      },
      colors: {
        "custom-black": "#0a0a0a",
        "custom-gray": "#ededed",
        "custom-gray2": "#fafafa",
        "custom-gray3": "#383838",
        "custom-gray4": "#5f5f5f",
        "custom-amber": "#efbe00",
        "custom-yellow": "#bc9500",
        "custom-red": "#fd2221",
        "custom-red2": "#fe4a49",
      },
      boxShadow: {
        "custom-bottom": " 0 3px 5px 0 rgba(0, 0, 0, .3)",
      },
    },
  },
  plugins: [],
};
