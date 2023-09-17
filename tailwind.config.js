/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mountcolor: "#0d0e12",
      },
    },
    fontFamily: {
      signature: ["Cinzel Decorative"]
    }
  },
  plugins: [],
}

