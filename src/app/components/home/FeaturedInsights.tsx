"use client";
import React from "react";
import CardGrid from "../ui/CardGrid";

const FeaturedInsights = ({ insights }: { insights: InsightProps[] }) => {
  const itemsToShow = 5;

  return (
    <div className="main bg-background-paper">
      <CardGrid
        data={insights}
        itemsToShow={itemsToShow}
        isDark={false}
        isHome={true}
      />
    </div>
  );
};

export default FeaturedInsights;
