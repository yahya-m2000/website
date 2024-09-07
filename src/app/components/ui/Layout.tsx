"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../theme";
import { ScrollProvider } from "@/app/context/ScrollContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <ScrollProvider>
        <CssBaseline />
        {children}
      </ScrollProvider>
    </ThemeProvider>
  );
};

export default Layout;
