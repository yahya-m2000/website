// StyledComponents.tsx
import { Box, Typography, Button, styled } from "@mui/material";
import { assistant, inriaSerif } from "@/app/fonts";
import zIndex from "@mui/material/styles/zIndex";

// Container for sections
export const Container = styled(Box)(({ theme }) => ({
  paddingBlock: "10vh",
  paddingInline: "15vw",
  justifyContent: "center",
  alignItems: "center",
}));

// Placeholder Card Styling with Media Queries
export const PlaceholderCard = styled(Box)(({ theme }) => ({
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

// Carousel Buttons
export const CarouselButton = styled(Button)(({ theme }) => ({
  // position: "absolute",
  transform: "translateY(-50%)",
  fontSize: "2rem",
  zIndex: 10,
  color: theme.palette.primary.contrastText,
  // backgroundColor: theme.palette.primary.main,
  // borderRadius: "50%",
  padding: "0.5em",
  // minWidth: "auto",
  // "&:hover": {
  //   backgroundColor: theme.palette.primary.dark,
  // },

  // Media query to hide buttons on larger screens
  // [theme.breakpoints.up("md")]: {
  //   display: "none",
  // },
}));

export const PlaceholderText = styled(Typography)(({ theme }) => ({
  fontFamily: inriaSerif.style.fontFamily,
  fontWeight: "600",
  fontSize: "2.5rem",
  color: theme.palette.primary.contrastText,
  zIndex: 1,
}));

export const SubtitleText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "1.25rem",
  color: theme.palette.primary.contrastText,
  fontWeight: "300",
  zIndex: 1,
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
  // fontWeight: 700,
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
  fontWeight: "500",
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
