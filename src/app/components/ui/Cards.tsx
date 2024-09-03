import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { inriaSerif, assistant } from "@/app/fonts";

const CardContainer = styled(Box)(({ theme }) => ({
  width: "50vw",
  height: "40vh",
  backgroundColor: theme?.palette?.primary?.main || "grey",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
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
  fontFamily: inriaSerif.style.fontFamily,
  fontWeight: "600",
  fontSize: "2.5rem",
  color: theme.palette.primary.contrastText,
  zIndex: 1,
}));

const CardSubtitleText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "1.25rem",
  color: theme.palette.primary.contrastText,
  fontWeight: "300",
  zIndex: 1,
}));

export const CardImage = styled(Box)(({ src }: { src: string }) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: 0,
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "brightness(0.7)", // Darken the image for better text contrast
}));

type CardProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  isFocused?: boolean; // Add this prop to control focus state
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  backgroundImage,
  isFocused = false,
  onClick,
}) => {
  return (
    <CardContainer
      sx={{
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
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "2rem",
          background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))", // Ensure the gradient is applied correctly
          zIndex: 1,
        }}
      >
        <CardTitleText>{title}</CardTitleText>
        <CardSubtitleText>{subtitle}</CardSubtitleText>
      </Box>
    </CardContainer>
  );
};

export default Card;
