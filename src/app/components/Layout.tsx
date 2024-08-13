"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import theme from "../theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "primary.main", color: "secondary.main", p: 2 }}>
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
