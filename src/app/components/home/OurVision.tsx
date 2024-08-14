"use client";
import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { assistant, inriaSerif } from "@/app/fonts";

const VisionText = styled(Typography)(({ theme }) => ({
  color: "black",
  fontFamily: inriaSerif.style.fontFamily,
}));

const AssistantText = styled(Typography)(({ theme }) => ({
  color: "black",
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
          <VisionText
            sx={{
              fontSize: "2.5em",
              marginBottom: "2vh",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
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
              fontWeight: 300,
              fontSize: "1em",
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
