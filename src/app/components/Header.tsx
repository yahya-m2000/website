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
import { Menu as MenuIcon } from "@mui/icons-material";
import { inriaSerif } from "../fonts";
import Image from "next/image";

// Styled component for NavItem with media queries
const NavItem = styled(Typography)(({ theme }) => ({
  fontFamily: inriaSerif.style.fontFamily,
  fontSize: "1em",
  marginInline: theme.spacing(4),
  cursor: "pointer",
  whiteSpace: "nowrap", // Prevent text from wrapping
}));

// Container for desktop and mobile navigation
const NavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "10vh",
  width: "100%",
  [`@media (max-width: 1024px)`]: {
    display: "none", // Hide on mobile view
  },
}));

// Mobile drawer toggle button container
const MobileNavContainer = styled(Box)(({ theme }) => ({
  display: "none",
  [`@media (max-width: 1024px)`]: {
    display: "flex", // Show on mobile view
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "10vh",
  },
}));

const Header = () => {
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > (60 * window.innerHeight) / 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

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
        borderBottom: isScrolled
          ? ""
          : `0.5vh solid ${theme.palette.primary.main}`,
        transition: "all 0.3s ease-in-out",
        padding: "0 2vw",
      }}
    >
      <NavContainer>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <NavItem
            variant="h6"
            sx={{
              color: isScrolled ? "black" : theme.palette.primary.contrastText,
            }}
          >
            About Us
          </NavItem>
          <NavItem
            variant="h6"
            sx={{
              color: isScrolled ? "black" : theme.palette.primary.contrastText,
            }}
          >
            Our Vision
          </NavItem>
          <NavItem
            variant="h6"
            sx={{
              color: isScrolled ? "black" : theme.palette.primary.contrastText,
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
        <Box sx={{ display: "flex", alignItems: "center", height: "10vh" }}>
          <NavItem
            variant="h6"
            sx={{
              color: isScrolled ? "black" : theme.palette.primary.contrastText,
            }}
          >
            Services
          </NavItem>
          <NavItem
            variant="h6"
            sx={{
              color: isScrolled ? "black" : theme.palette.primary.contrastText,
            }}
          >
            Placeholder
          </NavItem>
          <NavItem
            variant="h6"
            sx={{
              color: isScrolled ? "black" : theme.palette.primary.contrastText,
            }}
          >
            Contact
          </NavItem>
        </Box>
      </NavContainer>

      <MobileNavContainer>
        <IconButton
          onClick={toggleDrawer}
          sx={{
            color: isScrolled ? "black" : theme.palette.primary.contrastText,
            position: "relative",
            zIndex: 2, // Ensure the hamburger icon is above other elements
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={
            {
              // position: "absolute", // Position the logo absolutely
              // left: "50%", // Center the logo horizontally
              // transform: "translateX(-50%)", // Adjust position to account for 50% width
              // width: "5em",
              // height: "5em",
            }
          }
        >
          <Image
            src={require("../assets/images/logo.png")}
            layout="fill"
            objectFit="contain"
            alt="Logo"
            style={{
              filter: isScrolled ? "invert(1)" : "invert(0)",
              paddingBlock: "1vh",
            }}
          />
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
      </MobileNavContainer>
    </Box>
  );
};

export default Header;
