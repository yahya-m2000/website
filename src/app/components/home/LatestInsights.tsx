"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { SectionTitle } from "../style";
import HorizontalCarousel from "../ui/HorizontalCarousel";

const mockInsights = [
  {
    title: "Insight 1",
    subtitle: "Subtitle 1",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Insight 2",
    subtitle: "Subtitle 2",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Insight 3",
    subtitle: "Subtitle 3",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Insight 4",
    subtitle: "Subtitle 4",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Insight 5",
    subtitle: "Subtitle 5",
    image: "https://via.placeholder.com/600x400",
  },
];

const LatestInsights = () => {
  const totalItems = mockInsights.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const getTranslateValue = (index: number) => {
    if (index === currentIndex) {
      return 0;
    } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
      return -100;
    } else if (index === (currentIndex + 1) % totalItems) {
      return 100;
    } else {
      return index < currentIndex ? -200 : 200;
    }
  };

  return (
    <Box className="h-[540px]">
      <SectionTitle className="text-text-primary text-center py-[40px]">
        Latest Insights
      </SectionTitle>

      <HorizontalCarousel
        items={mockInsights}
        currentIndex={currentIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
        getTranslateValue={getTranslateValue}
      />
    </Box>
  );
};

export default LatestInsights;
