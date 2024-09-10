"use client";
import React, { useState } from "react";
import CardGrid from "../ui/CardGrid";
import { mockInsights } from "@/assets/mockData/insights";

const FeaturedInsights = () => {
  const [itemsToShow] = useState(9);

  return (
    <div className="main bg-gray-150">
      {/* Header */}
      <div className="flex xl:justify-between md:justify-between justify-center items-center ">
        {/* SectionTitle */}
        <h2
          className={`md:text-4xl text-3xl mb-[2vh] font-extrabold font-assistant text-black leading-tight`}
        >
          Featured Insights
        </h2>

        {/* SectionText */}
        <p className="hidden xl:block md:block text-lg font-bold text-gray-500">
          SEE ALL
        </p>
      </div>

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
