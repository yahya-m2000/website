"use client";
import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { assistant } from "@/app/fonts";
import Image from "next/image";
import { Container } from "../style";

const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  color: theme?.palette?.common?.white || "#ffffff",
  flexDirection: "column",
  textAlign: "center",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row", // Changed to row for larger screens
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "left",
  },
}));

const LinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginInline: "2vw",
  marginBottom: "2vh",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "0",
  },
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "1rem",
  marginBlock: "1vh",
  color: theme?.palette?.common?.white || "#ffffff",
  marginBottom: "1vh",
  [theme.breakpoints.up("lg")]: {
    marginBottom: "0",
  },
}));

const LinkBox = styled(Box)(({ theme }) => ({
  paddingInline: "5vw",
  paddingBottom: "2vh",
  [theme.breakpoints.down("lg")]: {
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
  [theme.breakpoints.up("lg")]: {
    marginTop: "0",
  },
}));

const Footer = () => {
  const theme = useTheme();

  return (
    <Container className="bg-background-paper py-[5vh]">
      <FooterContainer>
        <Box className="w-[100px] h-[100px] flex justify-center items-center mx-auto lg:mx-0">
          <Image
            src={require("../../assets/images/logo.png")}
            layout="responsive"
            width={100}
            height={100}
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
          </LinkBox>
        </LinksContainer>
      </FooterContainer>
      <Box className="flex flex-1 row-auto justify-between align-middle items-center">
        <CopyrightText>
          Copyright © 2024 The Eastern Trade Group LLC
        </CopyrightText>
        <Box className="w-[100px] h-[20px] border-primary-contrast border-[2px]" />
      </Box>
    </Container>
  );
};

export default Footer;
