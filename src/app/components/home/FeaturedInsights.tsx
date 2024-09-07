"use client";
import React, { useState, useEffect } from "react";
import { Container, SectionTitle } from "../style";
import { Card } from "../ui";
import { Box } from "@mui/material";
import theme from "@/app/theme";

type Props = {};

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
  {
    title: "Insight 6",
    subtitle: "Subtitle 6",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Insight 7",
    subtitle: "Subtitle 7",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Insight 8",
    subtitle: "Subtitle 8",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Insight 9",
    subtitle: "Subtitle 9",
    image: "https://via.placeholder.com/600x400",
  },
];

const FeaturedInsights = (props: Props) => {
  const [itemsToShow, setItemsToShow] = useState(9);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;

      if (width >= theme.breakpoints.values.lg) {
        setItemsToShow(9); // xl or lg screens, show all 9
      } else if (width >= theme.breakpoints.values.md) {
        setItemsToShow(6); // md or sm screens, show 6
      } else {
        setItemsToShow(4); // xs screens, show 3
      }
    };

    // Set the initial value based on window size
    updateItemsToShow();

    // Add event listener for window resize
    window.addEventListener("resize", updateItemsToShow);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  return (
    <Container className="py-[5vh]">
      <SectionTitle className="pb-[4vh] text-4xl font-bold">
        Featured Insights
      </SectionTitle>
      <Box className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
        {mockInsights.slice(0, itemsToShow).map((insight, index) => (
          <Card
            key={index}
            title={insight.title}
            tag={insight.subtitle}
            backgroundImage={insight.image}
          />
        ))}
      </Box>
    </Container>
  );
};

export default FeaturedInsights;
