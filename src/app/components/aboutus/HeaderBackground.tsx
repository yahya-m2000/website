"use client";
import { Box } from "@mui/material";
import React from "react";
import { SectionTitle } from "../style";
import backgroundImg from "@/app/assets/images/subpath_background.png";

type HeaderBackgroundProps = {
  text: string;
};

const HeaderBackground: React.FC<HeaderBackgroundProps> = ({ text }) => {
  return (
    <Box
      className="flex relative h-[50vh] lg:h-[75vh] md:h-[50vh] md-h-[50vh] bg-cover bg-center border-b-[2.5vh] border-secondary 
                justify-center items-center
                 lg:justify-start lg:items-end 
                 md:justify-center md:items-center
                 sm:justify-center sm:items-center"
      style={{
        backgroundImage: `url(${backgroundImg.src})`, // Use the imported image
      }}
    >
      <SectionTitle className="text-6xl lg:ml-[120px] lg:mb-[60px] text-primary-contrast">
        {text}
      </SectionTitle>
    </Box>
  );
};

export default HeaderBackground;
