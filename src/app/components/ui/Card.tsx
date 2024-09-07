"use client";
import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { inriaSerif, assistant } from "@/app/fonts";

const CardContainer = styled(Box)(({ theme }) => ({
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)", // Add drop shadow
  // padding: "2vw",
  width: "auto",
  height: "33.3vh",
  // backgroundColor: theme?.palette?.primary?.main || "grey",
  display: "flex",
  flexDirection: "column",
  // position: "relative",
  // overflow: "hidden",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 0,
    height: "4px", // Thickness of the bottom border
    backgroundColor: theme.palette.primary.main, // Color of the border
    zIndex: 1,
    transition: "width 0.3s ease-in-out", // Smooth transition
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const CardTitleText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontWeight: "600",
  fontSize: "2rem",
  color: theme.palette.text.primary,
  zIndex: 1,
}));

const CardTagText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "1rem",
  color: theme.palette.text.primary,
  fontWeight: "300",
  zIndex: 1,
}));

export const CardImage = styled(Box)(({ src }: { src: string }) => ({
  display: "flex",
  flex: 1,
  width: "100%",
  height: "60%",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  zIndex: 0,
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "brightness(0.7)", // Darken the image for better text contrast
  backgroundColor: "blue",
}));

type CardProps = {
  title: string;
  tag: string;
  backgroundImage?: string;
  isFocused?: boolean; // Add this prop to control focus state
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({
  title,
  tag,
  backgroundImage,
  isFocused = false,
  onClick,
}) => {
  return (
    <CardContainer
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          ...(isFocused && {
            "&::after": {
              width: "100%", // Show border only if the card is focused
            },
          }),
        },
      }}
      onClick={onClick}
    >
      {backgroundImage && <CardImage src={backgroundImage} />}
      <Box
        sx={{
          padding: "1rem",
          zIndex: 1,
        }}
      >
        <CardTagText>{tag?.toUpperCase()}</CardTagText>
        <CardTitleText>{title}</CardTitleText>
      </Box>
    </CardContainer>
  );
};

export default Card;
