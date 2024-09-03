"use client";
import React from "react";
import { SectionText, SectionTitle, StyledButton } from "../style";
import { Box, Container } from "@mui/material";

const LetsConnect = () => {
  return (
    <Container className="flex   h-[500px]  justify-center flex-col">
      {/*  eslint-disable-next-line react/no-unescaped-entities */}
      <SectionTitle className="text-center">Let's Connect</SectionTitle>
      <Box className="mx-auto max-w-[400px] px-[15px] sm:max-w-[50%] sm:px-[10px]">
        <SectionText className="leading-[1.5] break-words">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim v
        </SectionText>
        <StyledButton variant="contained">Contact Us</StyledButton>
      </Box>
    </Container>
  );
};

export default LetsConnect;
