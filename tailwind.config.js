/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx}", "./components/**/*.{js,jsx}", "./screens/**/*.{js,jsx}", "./navigation/**/*.{js,jsx}", "./context/**/*.{js,jsx}"],
  darkMode: "class",
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        firefly: {
          50: "#e3f4f7",
          100: "#b1e3eb",
          200: "#90c0c8",
          300: "#78a2a8",
          400: "#63868b",
          500: "#4f6c70",
          600: "#3d5457",
          700: "#2c3e40",
          800: "#1c292b",
          900: "#121c1d",
          950: "#0b1213"
        }
      },
      borderRadius: {
        card: "20px"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(11, 18, 19, 0.14)"
      }
    }
  },
  plugins: []
};
