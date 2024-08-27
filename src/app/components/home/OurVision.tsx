// OurVision.tsx
"use client";
import React from "react";
import {
  Container,
  SectionTitle,
  SectionText,
  StyledButton,
} from "../StyledComponents";
import { Box } from "@mui/material";

const OurVision = () => {
  return (
    <Container>
      <SectionTitle>Our Vision</SectionTitle>
      <Box
        sx={{
          margin: "0 auto", // Center the text horizontally
          maxWidth: "400px", // Keep the maxWidth as specified
        }}
      >
        <SectionText>
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
