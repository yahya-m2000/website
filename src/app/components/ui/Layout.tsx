"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../theme";
import { ScrollProvider } from "@/context/common/src/ScrollContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <ScrollProvider>
        <CssBaseline />
        {/* <div className="flex flex-1 justify-center bg-red-700">
          <p className="subheading text-white">CURRENTLY IN DEVELOPMENT</p>
        </div> */}
        {children}
      </ScrollProvider>
    </ThemeProvider>
  );
};

export default Layout;
