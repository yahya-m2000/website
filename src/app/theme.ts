import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B51E32", // Dark color
    },
    secondary: {
      main: "#2373EA", // Blue color
    },
    background: {
      default: "#ffffff", // White color for general background
      paper: "#f5f5f5", // Background color for paper components
    },
    text: {
      primary: "#000000", // Black text color for primary text
      secondary: "#FFFFFF", // Grey text color for secondary text
      disabled: "#bdbdbd", // Light grey color for disabled text
    },
    error: {
      main: "#d32f2f", // Red color for error messages
    },
    warning: {
      main: "#ffa726", // Orange color for warnings
    },
    info: {
      main: "#29b6f6", // Light blue color for informational messages
    },
    success: {
      main: "#66bb6a", // Green color for success messages
    },
  },
  typography: {
    fontFamily: ["Inria Serif", "Julius Sans One", "Lateef"].join(","),
  },
});

export default theme;
