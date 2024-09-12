"use client";
import React, { useState } from "react";
import CardGrid from "../ui/CardGrid";
import { mockInsights } from "@/assets/mockData/insights";

const FeaturedInsights = () => {
  const [itemsToShow] = useState(5);

  return (
    <div className="main bg-background-paper">
      {/* Content Grid */}
      <CardGrid
        insights={mockInsights}
        itemsToShow={itemsToShow}
        isDark={false}
        isHome={true}
      />
    </div>
  );
};

export default FeaturedInsights;
