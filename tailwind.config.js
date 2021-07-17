module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        offWhite: "#FCFCFC",
        blackTransparent: "rgba(0,0,0,25%)",
        secondary: {
          50: "#f6fbf4",
          100: "#ecf8ea",
          200: "#d0edca",
          300: "#b3e2aa",
          400: "#7bcd6a",
          500: "#42b72a",
          600: "#3ba526",
          700: "#328920",
          800: "#286e19",
          900: "#205a15",
        },
        accent: "#FA3E3E",
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
