"use client";
import { Box, useTheme, styled, Typography, Button } from "@mui/material";
import React from "react";
import { assistant, inriaSerif } from "@/app/fonts";
import { Height } from "@mui/icons-material";

const VisionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontFamily: inriaSerif.style.fontFamily,
}));

const AssistantText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontFamily: assistant.style.fontFamily,
  maxWidth: "50%", // Adjust the width as needed to control text wrapping
  wordWrap: "break-word", // Ensure long words are wrapped properly
}));

const WhoWeAre = () => {
  const theme = useTheme(); // Access the theme

  const whoWeAreImage =
    "https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <Box sx={{}}>
      <Box
        sx={{
          position: "relative",
          height: "60vh", // Adjust according to your design
          backgroundImage: `url(${whoWeAreImage})`, // Use a template literal to set the background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",

          //   borderBottom: `2.5vh solid ${theme.palette.primary.main}`, // Use theme color for border
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
            backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark overlay with 75% opacity
            zIndex: 1,
          }}
        />

        {/* Text and Button Container */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2, // Ensure the text is on top of the overlay
            marginLeft: "15vw",
            maxWidth: "800px", // Keep the maxWidth as specified
          }}
        >
          <VisionText sx={{ fontSize: "2.5em", marginBottom: "2vh" }}>
            Who we are
          </VisionText>
          <AssistantText sx={{ fontSize: "1.25em", marginBottom: "2vh" }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim v
          </AssistantText>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 0,
              textTransform: "none",
              fontFamily: inriaSerif.style.fontFamily,
              fontSize: "1em",
              boxShadow: 0,
              color: "white",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            height: "20vh",
            width: "15vw",
            backgroundColor: theme.palette.primary.main,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
