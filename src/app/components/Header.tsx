"use client";
import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  useTheme,
  styled,
  IconButton,
  Drawer,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material"; // Import Menu Icon for the Hamburger button
import { inriaSerif } from "../fonts";
import Image from "next/image";

const NavItem = styled(Typography)(({ theme }) => ({
  fontFamily: inriaSerif.style.fontFamily,
  fontSize: "0.9em",
  marginInline: theme.spacing(4),
  cursor: "pointer",
  whiteSpace: "nowrap", // Prevent text from wrapping
}));

const Header = () => {
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [initialWindowWidth, setInitialWindowWidth] = useState(
    window.innerWidth
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log("Window resized. Current windowWidth:", window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    console.log("Initial window width set to:", initialWindowWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialWindowWidth]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const isMobile = windowWidth <= 1024; // Set your breakpoint for mobile view

  console.log("Current windowWidth:", windowWidth);
  console.log("Initial windowWidth:", initialWindowWidth);
  console.log("Is mobile:", isMobile);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 3,
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(0, 0, 0, 0.25)",
        color: isScrolled ? "black" : theme.palette.primary.contrastText,
        backdropFilter: "blur(2px)",
        borderBottom: `0.5vh solid ${theme.palette.primary.main}`,
        transition: "all 0.3s ease-in-out",
        padding: "0 2vw",
      }}
    >
      {/* Conditional rendering based on screen size */}
      {isMobile ? (
        <>
          <Box
            sx={{
              display: "flex",
              flex: 1,

              alignItems: "center",
              justifyContent: "space-between",
              height: "10vh",
              // backgroundColor: "red",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flex: 1,
              }}
            >
              <IconButton
                onClick={toggleDrawer}
                sx={{
                  color: isScrolled
                    ? "black"
                    : theme.palette.primary.contrastText,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
              <Box
                sx={{
                  width: 250,
                  padding: "2vh",
                  backgroundColor: theme.palette.background.default,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <NavItem
                  variant="h6"
                  sx={{ color: "black", marginBottom: theme.spacing(3) }}
                >
                  About Us
                </NavItem>
                <NavItem
                  variant="h6"
                  sx={{ color: "black", marginBottom: theme.spacing(3) }}
                >
                  Our Vision
                </NavItem>
                <NavItem
                  variant="h6"
                  sx={{ color: "black", marginBottom: theme.spacing(3) }}
                >
                  News
                </NavItem>
                <NavItem
                  variant="h6"
                  sx={{ color: "black", marginBottom: theme.spacing(3) }}
                >
                  Services
                </NavItem>
                <NavItem
                  variant="h6"
                  sx={{ color: "black", marginBottom: theme.spacing(3) }}
                >
                  Placeholder
                </NavItem>
                <NavItem
                  variant="h6"
                  sx={{ color: "black", marginBottom: theme.spacing(3) }}
                >
                  Contact
                </NavItem>
              </Box>
            </Drawer>

            <Box
              sx={{
                position: "relative",
                width: "20em",
                height: "4em",
                display: "flex",
                flex: 1,
              }}
            >
              <Image
                src={require("../assets/images/logo.png")}
                layout="fill"
                objectFit="contain"
                alt="Logo"
                style={{
                  filter: isScrolled ? "invert(1)" : "invert(0)",
                }} // Invert color for dark background
              />
            </Box>
            <Box sx={{ display: "flex", flex: 1 }} />
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ display: "flex", alignItems: "center", height: "10vh" }}>
            <NavItem
              variant="h6"
              sx={{
                color: isScrolled
                  ? "black"
                  : theme.palette.primary.contrastText,
              }}
            >
              About Us
            </NavItem>
            <NavItem
              variant="h6"
              sx={{
                color: isScrolled
                  ? "black"
                  : theme.palette.primary.contrastText,
              }}
            >
              Our Vision
            </NavItem>
            <NavItem
              variant="h6"
              sx={{
                color: isScrolled
                  ? "black"
                  : theme.palette.primary.contrastText,
              }}
            >
              News
            </NavItem>
          </Box>
          <Box>
            <Image
              src={require("../assets/images/logo.png")}
              layout="fill"
              objectFit="contain"
              alt="Logo"
              style={{
                filter: isScrolled ? "invert(1)" : "invert(0)",
                paddingBlock: "1vh",
              }} // Invert color for dark background
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavItem
              variant="h6"
              sx={{
                color: isScrolled
                  ? "black"
                  : theme.palette.primary.contrastText,
              }}
            >
              Services
            </NavItem>
            <NavItem
              variant="h6"
              sx={{
                color: isScrolled
                  ? "black"
                  : theme.palette.primary.contrastText,
              }}
            >
              Placeholder
            </NavItem>
            <NavItem
              variant="h6"
              sx={{
                color: isScrolled
                  ? "black"
                  : theme.palette.primary.contrastText,
              }}
            >
              Contact
            </NavItem>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Header;
