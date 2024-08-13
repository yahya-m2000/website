"use client";
import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { assistant, inriaSerif, rozha_One } from "@/app/fonts";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme?.palette?.common?.black || "#000000", // Fallback to black if theme is undefined
  color: theme?.palette?.common?.white || "#ffffff", // Fallback to white if theme is undefined
  padding: "3vh 5vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));

const Logo = styled(Box)(({ theme }) => ({
  marginBottom: "2vh",
}));

const LinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  maxWidth: "800px",
  marginBottom: "2vh",
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "1vw",
  color: theme?.palette?.common?.white || "#ffffff", // Fallback to white if theme is undefined
  marginBottom: "1vh",
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "0.8vw",
  color: theme?.palette?.common?.white || "#ffffff", // Fallback to white if theme is undefined
}));

const Footer = () => {
  const theme = useTheme();

  return (
    <FooterContainer>
      <Logo>
        {/* Replace with your logo image */}
        <Typography
          sx={{ fontFamily: rozha_One.style.fontFamily, fontSize: "2vw" }}
        >
          THE EASTERN TRADE GROUP
        </Typography>
      </Logo>
      <LinksContainer>
        <Box>
          <FooterLink>Placeholder</FooterLink>
          <FooterLink>Placeholder</FooterLink>
          <FooterLink>Placeholder</FooterLink>
        </Box>
        <Box>
          <FooterLink>Placeholder</FooterLink>
          <FooterLink>Placeholder</FooterLink>
          <FooterLink>Placeholder</FooterLink>
        </Box>
        <Box>
          <FooterLink>Placeholder</FooterLink>
          <FooterLink>Placeholder</FooterLink>
          <FooterLink>Placeholder</FooterLink>
        </Box>
      </LinksContainer>
      <CopyrightText>
        Copyright © 2024 The Eastern Trade Group LLC
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
