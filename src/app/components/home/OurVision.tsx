"use client";
import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { assistant, inriaSerif } from "@/app/fonts";

const VisionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: inriaSerif.style.fontFamily,
}));

const AssistantText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: assistant.style.fontFamily,
}));

const OurVision = () => {
  return (
    <Box marginBlock={"10vh"}>
      <Box
        sx={{
          marginInline: "15vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            margin: "0 auto", // Center the text horizontally
            maxWidth: "400px", // Keep the maxWidth as specified
          }}
        >
          <VisionText sx={{ fontSize: "1.5em", marginBottom: "2vh" }}>
            Our Vision
          </VisionText>
          <AssistantText
            sx={{
              fontSize: "1.25em",
              marginBottom: "2vh",
            }}
          >
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
  );
};

export default OurVision;
