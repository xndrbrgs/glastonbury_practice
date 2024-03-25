/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      display: ["var(--fs-display)", { lineHeight: "var(--lh-display)" }],
      display_md: [
        "var(--fs-display-md)",
        { lineHeight: "var(--lh-display-md)" },
      ],
      display_sm: [
        "var(--fs-display-sm)",
        { lineHeight: "var(--lh-display-sm)" },
      ],
      h1: ["var(--fs-h1)", { lineHeight: "var(--lh-h1)" }],
      h1_md: ["var(--fs-h1-md)", { lineHeight: "var(--lh-h1-md)" }],
      h1_sm: ["var(--fs-h1-sm)", { lineHeight: "var(--lh-h1-sm)" }],
      h2: ["var(--fs-h2)", { lineHeight: "var(--lh-h2)" }],
      h2_md: ["var(--fs-h2-md)", { lineHeight: "var(--lh-h2-md)" }],
      h2_sm: ["var(--fs-h2-sm)", { lineHeight: "var(--lh-h2-sm)" }],
      base: ["var(--fs-base)", { lineHeight: "var(--lh-base)" }],
      base_md: [
        "var(--fs-base-md)",
        { lineHeight: "var(--lh-base-md)" },
      ],
      base_sm: [
        "var(--fs-base-sm)",
        { lineHeight: "var(--lh-base-sm)" },
      ],
    },
    colors: {
      "black-50": "var(--black-50)",
      "black-75": "var(--black-75)",
      "black-100": "var(--black-100)",
      "black-125": "var(--black-125)",
      "black-150": "var(--black-150)",

      blue: "var(--blue)",
      cream: "var(--cream)",
      pink: "var(--pink)",
      green: "var(--green)",

      "white-50": "var(--white-50)",
      "white-100": "var(--white-100)",
      "white-125": "var(--white-125)",
      "white-150": "var(--white-150)",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1.2rem",
        lg: "1.4rem",
        xl: "1.4375rem",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        suiss: ["var(--font-suiss)"],
        editorial: ["var(--font-editorial)"],
        satoshi: ["var(--font-satoshi)"],
      },
    },
  },
  plugins: [],
};
