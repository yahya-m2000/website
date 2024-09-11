"use client";
import React, { useState } from "react";
import CardGrid from "../ui/CardGrid";
import { mockInsights } from "@/assets/mockData/insights";

const FeaturedInsights = () => {
  const [itemsToShow] = useState(9);

  return (
    <div className="main py-[2vh] bg-gray-150">
      {/* Content Grid */}
      <CardGrid
        insights={mockInsights}
        itemsToShow={itemsToShow}
        isDark={false}
      />
    </div>
  );
};

export default FeaturedInsights;
