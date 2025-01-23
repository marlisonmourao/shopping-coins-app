import { colors, fontFamily } from "./src/styles/default"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily,
      colors
    },
  },
  plugins: [],
}