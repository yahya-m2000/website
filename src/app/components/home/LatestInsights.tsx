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
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (totalItems / itemsToShow)
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + totalItems / itemsToShow) % (totalItems / itemsToShow)
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        padding: "5vh 5vw",
        backgroundColor: theme?.palette?.background?.default || "white",
      }}
    >
      <SectionTitle>Latest Insights</SectionTitle>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Carousel Buttons */}
        <CarouselButton onClick={handlePrev} sx={{ left: "1rem" }}>
          <ArrowBackIos />
        </CarouselButton>
        <CarouselButton onClick={handleNext} sx={{ right: "1rem" }}>
          <ArrowForwardIos />
        </CarouselButton>

        {/* Placeholder Cards */}
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
            transition: "transform 0.5s ease",
            width: `${(100 / itemsToShow) * totalItems}%`,
            gap: "2vw", // Add margin between the cards
          }}
        >
          {mockInsights
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((insight, index) => (
              <Box
                key={index}
                sx={{
                  height: "20vh",
                  flex: `0 0 ${100 / itemsToShow}%`, // Adjust width to show correct number of cards
                  maxWidth: `${100 / itemsToShow}%`, // Ensure the card takes up the correct width
                  boxSizing: "border-box",
                }}
              >
                <PlaceholderCard>
                  <PlaceholderText>{insight.title}</PlaceholderText>
                  <SubtitleText>{insight.subtitle}</SubtitleText>
                </PlaceholderCard>
              </Box>
            ))}
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
