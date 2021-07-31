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
        primary: {
          50: "#f3f8fe",
          100: "#e8f1fe",
          200: "#c5ddfc",
          300: "#a3c9fa",
          400: "#5da0f6",
          500: "#1877f2",
          600: "#166bda",
          700: "#1259b6",
          800: "#0e4791",
          900: "#0c3a77",
        },
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
