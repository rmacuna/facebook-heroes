module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        offWhite: "#FCFCFC",
      },
      spacing: {
        31.5: "7.5rem",
      },
      height: {
        x443: "443px",
      },
      lineHeight: {
        x36: "42.96px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
