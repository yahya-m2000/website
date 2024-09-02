"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { juliusSansOne } from "../../fonts";

const bgImage =
  "https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const HeroImage = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box
      sx={{
        position: "relative",
        height: "90vh", // Adjust according to your design
        backgroundImage: `url(${bgImage})`, // Use a template literal to set the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: `2.5vh solid ${theme.palette.primary.main}`, // Use theme color for border
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark overlay with 50% opacity
          backdropFilter: "blur(4px)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Typography
        sx={{
          position: "relative",
          color: "white",
          fontFamily: juliusSansOne.style.fontFamily,
          textAlign: "center",
          zIndex: 2, // Ensure the text is above the overlay
          fontSize: "1em",
          letterSpacing: "0.25vw",
          marginInline: "10vw",
        }}
      >
        WE BELIEVE IN INNOVATION AND, MORE IMPORTANTLY, THE INNOVATORS
        THEMSELVES.
      </Typography>
    </Box>
  );
};

export default HeroImage;
