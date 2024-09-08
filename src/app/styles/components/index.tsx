// StyledComponents.tsx
import { Box, Typography, Button, styled } from "@mui/material";
import { assistant, inriaSerif } from "@/fonts/index";
import zIndex from "@mui/material/styles/zIndex";

// Container for sections
export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  // paddingBlock: "10vh",
  // paddingInline: "10vh",
  // maxWidth: "1200px", // Set a maximum width for the content
  // margin: "0 auto", // Center the container horizontally
}));

// Carousel Buttons
export const CarouselButton = styled(Button)(({ theme }) => ({
  transform: "translateY(-50%)",
  zIndex: 10,
  backgroundColor: "transparent", // Initial background color
  "&:hover": {
    backgroundColor: "transparent", // Keep it transparent on hover
  },
  "&:active": {
    backgroundColor: "transparent", // Keep it transparent when active (clicked)
  },
  "&:focus": {
    backgroundColor: "transparent", // Keep it transparent when focused
    outline: "none", // Remove any default focus outline
  },
  "&:visited": {
    backgroundColor: "transparent",
  },
}));

/* TEXT COMPONENTS */

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontFamily: assistant.style.fontFamily,
  fontWeight: 800,
  color: theme.palette.text.primary,
}));

export const SectionText = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: "300",
  marginBottom: "2vh",
  fontFamily: assistant.style.fontFamily,
  color: theme.palette.text.primary,
  textAlign: "justify",
}));

/* BUTTON COMPONENTS */

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  textTransform: "none",
  fontFamily: inriaSerif.style.fontFamily,
  fontWeight: 300,
  fontSize: "1rem",
}));

export const OutlinedButton = styled(StyledButton)(({ theme }) => ({
  color: "white",
  border: "1px solid white",
}));

/* CARD COMPONENT */

export const LargeCard = styled(Box)(({ theme }) => ({
  width: "50vw",
  height: "40vh",
  backgroundColor: theme?.palette?.primary?.main || "grey",
  display: "flex",
  flexDirection: "column",

  transition: "transform 0.3s ease-in-out", // Transition for carousel effect

  // Media query for smaller screens
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
export const CardTitleText = styled(Typography)(({ theme }) => ({
  fontFamily: inriaSerif.style.fontFamily,
  fontWeight: "600",
  fontSize: "2.5rem",
  color: theme.palette.primary.contrastText,
  zIndex: 1,
}));

export const CardSubtitleText = styled(Typography)(({ theme }) => ({
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
