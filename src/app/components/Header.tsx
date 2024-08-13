// components/Header.tsx
"use client";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { inriaSerif, rozha_One } from "../fonts"; // Adjust according to your path

const NavItem = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontFamily: inriaSerif.style.fontFamily,
  fontSize: "0.9vw",
  margin: theme.spacing(3),
  cursor: "pointer",
}));

const Header = () => {
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
        p: 2,
        zIndex: 3,
        backgroundColor: "rgba(30, 30, 30, 0.4)",
        backdropFilter: "blur(5px)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NavItem variant="h6">About Us</NavItem>
        <NavItem variant="h6">Our Vision</NavItem>
        <NavItem variant="h6">News</NavItem>
      </Box>
      <Typography
        sx={{
          color: "primary.contrastText",
          fontFamily: rozha_One.style.fontFamily,
          fontSize: "1.75vw",
          lineHeight: 0.75, // Adjust line height if needed
          textAlign: "center",
        }}
      >
        <span>THE EASTERN TRADE</span>
        <br />
        <span>GROUP</span>
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NavItem variant="h6">Services</NavItem>
        <NavItem variant="h6">Placeholder</NavItem>
        <NavItem variant="h6">Contact</NavItem>
      </Box>
    </Box>
  );
};

export default Header;
