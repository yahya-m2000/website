"use client";
import React, { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import {
  SectionTitle,
  PlaceholderCard,
  PlaceholderText,
  SubtitleText,
  MoreNewsLink,
  CarouselButton,
} from "../StyledComponents";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Mock Data for Insights
const mockInsights = [
  { title: "Insight 1", subtitle: "Subtitle 1" },
  { title: "Insight 2", subtitle: "Subtitle 2" },
  { title: "Insight 3", subtitle: "Subtitle 3" },
  { title: "Insight 4", subtitle: "Subtitle 4" },
  { title: "Insight 5", subtitle: "Subtitle 5" },
];

const LatestInsights = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const itemsToShow = isSmallScreen ? 1 : 3;
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
    <Box
      sx={{
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      <SectionTitle>Latest Insights</SectionTitle>
      
      {/* Carousel Container */}
      <Box
        sx={{
          position: "relative",
          height: "50vh", // Adjust height as needed
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CarouselButton
          onClick={handlePrev}
          sx={{ position: "absolute", left: "1rem", zIndex: 2 }}
        >
          <ArrowBackIos />
        </CarouselButton>
        <CarouselButton
          onClick={handleNext}
          sx={{ position: "absolute", right: "1rem", zIndex: 2 }}
        >
          <ArrowForwardIos />
        </CarouselButton>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {mockInsights.map((insight, index) => {
            const isFocused = index === currentIndex;

            return (
              <Box
                key={index}
                sx={{
                  transform: `translateX(calc(${getTranslateValue(index)}% - 50%)) scale(${
                    isFocused ? 1 : 0.8
                  })`,
                  opacity: isFocused ? 1 : 0.5,
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  position: "absolute",
                  top: "0",
                  left: "50%",
                  transformOrigin: "center",
                  width: "50vw", // Ensure the card takes up one-third of the container width
                  // maxWidth: "33.33%",
                }}
              >
                <PlaceholderCard>
                  <PlaceholderText>{insight.title}</PlaceholderText>
                  <SubtitleText>{insight.subtitle}</SubtitleText>
                </PlaceholderCard>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <MoreNewsLink
          startIcon={<span style={{ transform: "rotate(45deg)" }}>➔</span>}
        >
          More News
        </MoreNewsLink>
      </Box>
    </Box>
  );
};

export default LatestInsights;
