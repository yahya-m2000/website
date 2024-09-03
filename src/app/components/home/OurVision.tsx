"use client";
import React from "react";
import { Container, SectionTitle, SectionText, StyledButton } from "../style";
import { Box } from "@mui/material";
import theme from "@/app/theme";

const OurVision = () => {
  return (
    <Container className="py-[10vh]">
      <SectionTitle className="text-center">Our Vision</SectionTitle>
      <Box
        className="mx-auto max-w-[400px] px-[15px]"
        sx={{
          [theme.breakpoints.down("sm")]: {
            maxWidth: "90%", // Adjust the max-width on smaller screens
            padding: "0 10px", // Add padding for small screens
          },
        }}
      >
        <SectionText
          className="leading-relaxed break-words"
          sx={{
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.2rem", // Smaller font on mobile
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
