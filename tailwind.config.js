module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "first-section-bg": "url('/src/static/first-section-bg.png')",
        "second-section-bg": "url('/src/static/second-section-bg.png')",
        "combined-section-bg": "url('/src/static/combined_section_bg.png')",
      },
      fontFamily: {
        open_sans: ["Open Sans"],
      },
      colors: {
        "third-bg-color": "#0D3946",

        "hover-color": "#282828",
        "button-color": "#178bc1",
        "header-bg-color": "#333333",
      },
    },
  },
  plugins: [],
};
