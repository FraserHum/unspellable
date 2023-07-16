/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 0% 0%, var(--tw-gradient-stops))",
      },
      spacing: {
        "1/2": "50%",
      },
      colors: {
        black: "#231f20",
        white: "#F2F2F2",
        lime: "#a6dbbc",
        green: "#3b5d4e",
        emerald: "#afd69b",
        episodes: "#62907b",
        characters: "#FFFFFF",
        title: "#484d52",
      },
    },
  },
  plugins: [],
};

// #a6dbbc
// #b7cb9c
// #3b5d4e
// #b7cb9c
// #dbe5ce
// #90b6ab
// #b8b09e
// #231f20
// #62907b
// #afd69b
// #484d52
// #c8c9cb