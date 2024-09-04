"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { SectionTitle } from "../style";
import backgroundImg from "@/app/assets/images/subpath_background.png";

type HeaderBackgroundProps = {
  text: string;
};

const HeaderBackground: React.FC<HeaderBackgroundProps> = ({ text }) => {
  return (
    <Box
      className="relative h-[75vh] bg-cover bg-center flex items-end justify-left border-b-[2.5vh] border-secondary"
      style={{
        backgroundImage: `url(${backgroundImg.src})`, // Use the imported image
      }}
    >
      <SectionTitle className="text-6xl ml-[120px] mb-[60px] text-primary-contrast">
        {text}
      </SectionTitle>
    </Box>
  );
};

export default HeaderBackground;
