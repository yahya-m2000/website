"use client";
import { Box, useTheme, styled, Typography, Button } from "@mui/material";
import React from "react";
import { assistant, inriaSerif } from "@/app/fonts";

// Styled component for the percentage block
const PercentageBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "1vw", // Adjust margin for spacing between blocks
}));

const PercentageText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "4vw",
  margin: 0,
  color: theme.palette.primary.main,
}));

const SubtitleText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "0.9vw",
  color: theme.palette.primary.main,
}));

const VisionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: inriaSerif.style.fontFamily,
}));

const AssistantText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: assistant.style.fontFamily,
  maxWidth: "50%", // Adjust the width as needed to control text wrapping
  wordWrap: "break-word", // Ensure long words are wrapped properly
}));

const OurMission = () => {
  const theme = useTheme(); // Access the theme

  const whoWeAreImage =
    "https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "80vh", // Adjust according to your design
          backgroundImage: `url(${whoWeAreImage})`, // Use a template literal to set the background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            backgroundColor: "rgba(255, 255, 255, 0.75)", // Light overlay with 75% opacity
            zIndex: 1,
          }}
        />

        {/* Parent Flexbox Container */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2, // Ensure the content is on top of the overlay
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "blue",
          }}
        >
          {/* Percentage Grid Container */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)", // Create a 2x2 grid
              gridTemplateRows: "repeat(2, auto)",
              gap: "2vw", // Adjust gap between grid items
              marginRight: "4vw", // Add space between the grid and the text container
            }}
          >
            <PercentageBlock>
              <PercentageText>24%</PercentageText>
              <SubtitleText>Increase over 1 year</SubtitleText>
            </PercentageBlock>
            <PercentageBlock>
              <PercentageText>24%</PercentageText>
              <SubtitleText>Increase over 1 year</SubtitleText>
            </PercentageBlock>
            <PercentageBlock>
              <PercentageText>24%</PercentageText>
              <SubtitleText>Increase over 1 year</SubtitleText>
            </PercentageBlock>
            <PercentageBlock>
              <PercentageText>24%</PercentageText>
              <SubtitleText>Increase over 1 year</SubtitleText>
            </PercentageBlock>
          </Box>

          {/* Who We Are Container */}
          <Box>
            <VisionText sx={{ fontSize: "1.5vw", marginBottom: "2vh" }}>
              Who we are
            </VisionText>
            <AssistantText sx={{ fontSize: "0.9vw", marginBottom: "2vh" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim v
            </AssistantText>
            <Button
              variant="contained"
              sx={{
                borderRadius: 0,
                textTransform: "none",
                fontFamily: inriaSerif.style.fontFamily,
                fontSize: "0.9vw",
                boxShadow: 0,
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurMission;
