/** @type {import('tailwindcss').Config} */

const theme = require("./src/app/theme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screen: {
        xs: theme.breakpoints.down("xs"),
        sm: theme.breakpoints.down("sm"),
        md: theme.breakpoints.down("md"),
        lg: theme.breakpoints.down("lg"),
        xl: theme.breakpoints.down("xl"),
      },
      colors: {
        primary: theme.palette.primary.main,
        "primary-contrast": theme.palette.primary.contrastText,
        secondary: theme.palette.secondary.main,
        "background-default": theme.palette.background.default,
        "background-paper": theme.palette.background.paper,
        "text-primary": theme.palette.text.primary,
        "text-secondary": theme.palette.text.secondary,
        "text-disabled": theme.palette.text.disabled,
        error: theme.palette.error.main,
        warning: theme.palette.warning.main,
        info: theme.palette.info.main,
        success: theme.palette.success.main,
        "black-transparent": "rgba(0, 0, 0, 0.5)",
        "white-transparent": "rgba(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
