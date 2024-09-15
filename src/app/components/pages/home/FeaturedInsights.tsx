"use client";
import React from "react";
import CardGrid from "../../ui/card/CardGrid";

const FeaturedInsights = ({ insights }: { insights: InsightProps[] }) => {
  const itemsToShow = 5;

  return (
    <div className="main bg-background-paper">
      <CardGrid data={insights} itemsToShow={itemsToShow} isDark={false} />
    </div>
  );
};

export default FeaturedInsights;
