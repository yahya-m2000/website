"use client"
import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { assistant, rozha_One } from "@/app/fonts";
import Image from "next/image";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme?.palette?.secondary?.main || "#000000",
  color: theme?.palette?.common?.white || "#ffffff",
  padding: "3vh 5vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  [`@media (min-width: 1200px)`]: {
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "left",
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: rozha_One.style.fontFamily,
  fontSize: "2.5em",
  [`@media (min-width: 1200px)`]: {
    marginBottom: "0",
  },
}));

const LinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginInline: "2vw",
  marginBottom: "2vh",
  [`@media (min-width: 1200px)`]: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "0",
  },
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "1em",
  marginBlock: "1vh",
  color: theme?.palette?.common?.white || "#ffffff",
  marginBottom: "1vh",
  [`@media (min-width: 1200px)`]: {
    marginBottom: "0",
  },
}));

// Adding a border only when the screen width is less than 1200px
const LinkBox = styled(Box)(({ theme }) => ({
  // width: "100%",
  paddingInline: "5vw",
  paddingBottom: "2vh",
  [`@media (max-width: 1199px)`]: {
    borderBottom: `1px solid ${theme?.palette?.common?.white || "#ffffff"}`,
    paddingBottom: "2vh",
    marginBottom: "2vh",
  },
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "1em",
  color: theme?.palette?.common?.white || "#ffffff",
  marginTop: "2vh",
  [`@media (min-width: 1200px)`]: {
    marginTop: "0",
  },
}));

const Footer = () => {
  const theme = useTheme();

  return (
    <FooterContainer>
     <Box sx={{ width: "25rem", height: "auto", marginBottom: "2vh" }}>
        <Image
          src={require("../assets/images/logo.png")}
          layout="responsive"
          width={500} // Adjust this as necessary
          height={500} // Adjust this as necessary
          objectFit="contain"
          alt="Logo"
        />
      </Box>
      <LinksContainer>
        <LinkBox>
          <FooterLink>Placeholder</FooterLink>
          <FooterLink>Placeholder</FooterLink>
          <FooterLink>Placeholder</FooterLink>
        </LinkBox>
        <LinkBox>
          <FooterLink>Placeholder</FooterLink>
          <FooterLink>Placeholder</FooterLink>
          <FooterLink>Placeholder</FooterLink>
        </LinkBox>
        <LinkBox>
          <FooterLink>Placeholder</FooterLink>
          <FooterLink>Placeholder</FooterLink>
          <FooterLink>Placeholder</FooterLink>
        </LinkBox>
      </LinksContainer>
      <CopyrightText>
        Copyright © 2024 The Eastern Trade Group LLC
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
