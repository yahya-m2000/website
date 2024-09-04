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
      className="flex relative h-[75vh] bg-cover bg-center border-b-[2.5vh] border-secondary 
                 lg:justify-left lg:items-end 
                 md:justify-center md:items-center
                 sm:justify-center sm:items-center
                 justify-center items-center"
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
