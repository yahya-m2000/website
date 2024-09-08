import theme from "./src/app/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        assistant: ["var(--font-assistant)", "sans-serif"],
        inriaSerif: ["var(--font-inria-serif)", "serif"],
        juliusSansOne: ["var(--font-julius-sans)", "sans-serif"],
        rozhaOne: ["var(--font-rozha-one)", "serif"],
      },
      fontSize: {
        // Custom font sizes
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
      },

      // Extend Tailwind's default font weight options
      fontWeight: {
        thin: "100",
        "extra-light": "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },

      // Extend Tailwind's default spacing options (for padding, margin, etc.)
      spacing: {
        1: "0.25rem", // 4px
        2: "0.5rem", // 8px
        3: "0.75rem", // 12px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        8: "2rem", // 32px
        10: "2.5rem", // 40px
        12: "3rem", // 48px
        16: "4rem", // 64px
        20: "5rem", // 80px
      },
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
export default config;
