"use client";
import { useState, useEffect } from "react";
import { Typography, Box, useTheme, styled } from "@mui/material";
import { inriaSerif, rozha_One } from "../fonts"; // Adjust according to your path
import Image from "next/image";

const NavItem = styled(Typography)(({ theme }) => ({
  fontFamily: inriaSerif.style.fontFamily,
  fontSize: "0.9vw",
  margin: theme.spacing(5),
  cursor: "pointer",
}));

const Header = () => {
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > (60 * window.innerHeight) / 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      }}
    >
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
      <Box sx={{ position: "relative", width: "250px", height: "10vh" }}>
        <Image
          src={require("../assets/images/logo.png")}
          layout="fill"
          objectFit="contain"
          alt="Logo"
          style={{ filter: isScrolled ? "invert(1)" : "invert(0)" }} // Invert color for dark background
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
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
    </Box>
  );
};

export default Header;
