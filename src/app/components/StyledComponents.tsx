// StyledComponents.tsx
import { Box, Typography, Button, styled } from "@mui/material";
import { assistant, inriaSerif } from "@/app/fonts";

// Container for sections
export const Container = styled(Box)(({ theme }) => ({
  marginBlock: "10vh",
  marginInline: "15vw",
  justifyContent: "center",
  alignItems: "center",
}));

// Placeholder Card Styling with Media Queries
export const PlaceholderCard = styled(Box)(({ theme }) => ({
  width: "50vw",
  height: "40vh",
  backgroundColor: theme?.palette?.primary?.main || "grey",
  // borderRadius: "1.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "1vh",
  transition: "transform 0.3s ease-in-out", // Transition for carousel effect

  // Media query for smaller screens
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

// Carousel Buttons
export const CarouselButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "2rem",
  zIndex: 10,
  color: theme.palette.primary.contrastText,
  // backgroundColor: theme.palette.primary.main,
  borderRadius: "50%",
  padding: "0.5em",
  minWidth: "auto",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },

  // Media query to hide buttons on larger screens
  // [theme.breakpoints.up("md")]: {
  //   display: "none",
  // },
}));

export const PlaceholderText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontWeight: "600",
  fontSize: "2.5em",
  color: theme.palette.primary.contrastText
}));

export const SubtitleText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "0.75em",
}));

export const MoreNewsLink = styled(Button)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "0.75em",
  display: "flex",
  alignItems: "center",
  marginTop: "2vh",
  textTransform: "none",
  "& .MuiButton-startIcon": {
    marginRight: "0.5vw",
  },
}));

// Section Title
export const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "2.5em",
  marginBottom: "2vh",
  fontFamily: inriaSerif.style.fontFamily,
  color: theme.palette.primary.main,
  fontWeight: 700,
}));

// Section Text
export const SectionText = styled(Typography)(({ theme }) => ({
  fontSize: "1.25em",
  marginBottom: "2vh",
  fontFamily: assistant.style.fontFamily,
  color: theme.palette.primary.main,
  maxWidth: "400px", // or other specific widths
}));

// Vision Text (for white text on dark background)
export const VisionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontFamily: inriaSerif.style.fontFamily,
  fontSize: "2.5em",
  marginBottom: "2vh",
}));

// Assistant Text (for white text on dark background)
export const AssistantText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontFamily: assistant.style.fontFamily,
  fontSize: "1.25em",
  marginBottom: "2vh",
  maxWidth: "50%",
  wordWrap: "break-word",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  textTransform: "none",
  fontFamily: inriaSerif.style.fontFamily,
  fontWeight: 300,
  fontSize: "1em",
}));

export const OutlinedButton = styled(StyledButton)(({ theme }) => ({
  color: "white",
  border: "1px solid white",
}));
