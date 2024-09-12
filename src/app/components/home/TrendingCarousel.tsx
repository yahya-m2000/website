import React from "react";
import HorizontalCarousel from "../ui/HorizontalCarousel";
import { mockCards } from "@/assets/mockData/cards";

const TrendingCarousel = () => {
  return (
    <div className="main bg-background-paper py-[4vh]">
      <h3 className="subheading">Trending News</h3>
      <HorizontalCarousel cards={mockCards} isDark={false} />
    </div>
  );
};

export default TrendingCarousel;
