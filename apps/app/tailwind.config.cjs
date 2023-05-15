/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.tsx"],
  // @ts-ignore
  presets: [require("@nearbyevcharging.com/tailwind-config")],
};

module.exports = config;
