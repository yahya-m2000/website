"use client";
import React from "react";
import {
  Container,
  SectionTitle,
  SectionText,
  StyledButton,
} from "../style";
import { Box } from "@mui/material";
import theme from "@/app/theme";

const OurVision = () => {

  return (
    <Container sx={{paddingBlock: "10vh"}}>
      <SectionTitle sx={{textAlign: "center"}}>Our Vision</SectionTitle>
      <Box
        sx={{
          margin: "0 auto", // Center the text horizontally
          maxWidth: "400px", // Keep the maxWidth as specified
          padding: "0 15px", // Add padding for mobile
          [theme.breakpoints.down("sm")]: {
            maxWidth: "90%", // Adjust the max-width on smaller screens
            padding: "0 10px", // Add padding for small screens
          },
        }}
      >
        <SectionText
          sx={{
            lineHeight: 1.5, // Adjust line height
            wordWrap: "break-word",
            overflowWrap: "break-word",
            [theme.breakpoints.down("sm")]: {
              fontSize: "0.9rem", // Smaller font on mobile
            },
          }}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim v
        </SectionText>
        <StyledButton variant="contained">Learn More</StyledButton>
      </Box>
    </Container>
  );
};

export default OurVision;
