"use client";
import React from "react";
import { Card } from "../ui";

type Insight = {
  title: string;
  subtitle: string;
  image?: string;
};

type CardGridProps = {
  insights: Insight[];
  itemsToShow: number;
  isDark: boolean;
};

const CardGrid: React.FC<CardGridProps> = ({
  insights,
  itemsToShow,
  isDark,
}) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[4vw] w-full">
      {insights.slice(0, itemsToShow).map((insight, index) => (
        <Card
          key={index}
          title={insight.title}
          tag={insight.subtitle}
          backgroundImage={insight.image}
          isDark={isDark}
        />
      ))}
    </div>
  );
};

export default CardGrid;
