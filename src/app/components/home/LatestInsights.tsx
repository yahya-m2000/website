"use client";
import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { SectionTitle, CarouselButton, Container } from "../style";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Card from "../ui/Cards";

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
      return 0; // Center the current card
    } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
      return -100; // Move the previous card to the left
    } else if (index === (currentIndex + 1) % totalItems) {
      return 100; // Move the next card to the right
    } else {
      return index < currentIndex ? -200 : 200; // Move out-of-focus cards out of frame
    }
  };

  return (
    <Box className="h-[540px]">
      <SectionTitle className="text-text-primary text-center py-[40px]">
        Latest Insights
      </SectionTitle>

      <Box className="relative h-[425px] flex justify-center items-center">
        <CarouselButton
          onClick={handlePrev}
          className="absolute left-[1rem] z-20"
        >
          <ArrowBackIos className="text-primary-contrast text-2xl" />
        </CarouselButton>
        <CarouselButton
          onClick={handleNext}
          className="absolute right-[1rem] z-20"
        >
          <ArrowForwardIos className="text-primary-contrast text-2xl" />
        </CarouselButton>

        <Box>
          {mockInsights.map((insight, index) => {
            const isFocused = index === currentIndex;

            return (
              <Box
                key={index}
                className={`absolute top-0 left-1/2 transform-gpu ${
                  isFocused ? "scale-100 opacity-100" : "scale-80 opacity-50"
                } transition-transform duration-500 ease-in-out`}
                style={{
                  transform: `translateX(calc(${getTranslateValue(
                    index
                  )}% - 50%))`,
                  width: "50vw",
                }}
              >
                <Card
                  title={insight.title}
                  subtitle={insight.subtitle}
                  backgroundImage={insight.image}
                  isFocused={isFocused} // Pass isFocused to the Card component
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default LatestInsights;
