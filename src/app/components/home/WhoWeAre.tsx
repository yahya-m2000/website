"use client";
import React from "react";
import { Box, useTheme } from "@mui/material";
import { OutlinedButton, SectionTitle, SectionText } from "../style";

const WhoWeAre = () => {
  const theme = useTheme();

  const whoWeAreImage =
    "https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <Box>
      <Box
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-start"
        style={{
          backgroundImage: `url(${whoWeAreImage})`,
        }}
      >
        <Box className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 z-[10]" />
        <Box className={`relative z-20 ml-[15vw] max-w-[400px] px-[15px]`}>
          <SectionTitle sx={{ color: theme.palette.text.secondary }}>
            Who we are
          </SectionTitle>
          <SectionText className="leading-[1.5] break-words text-text-secondary">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim v
          </SectionText>
          <OutlinedButton variant="outlined">Learn More</OutlinedButton>
        </Box>
      </Box>
      <Box className="flex justify-end"></Box>
    </Box>
  );
};

export default WhoWeAre;
