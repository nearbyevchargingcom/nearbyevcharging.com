/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.tsx"],
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
};

module.exports = config;
