/** @type {import("tailwindcss").Config} */
const config = {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

module.exports = config;
