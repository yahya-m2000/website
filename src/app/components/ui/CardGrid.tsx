"use client";
import React from "react";
import { Card } from "../ui";

type CardGridProps = {
  insights: Insight[];
  itemsToShow: number;
  isDark: boolean;
  isHome?: boolean;
};

const CardGrid: React.FC<CardGridProps> = ({
  insights,
  itemsToShow,
  isDark,
  isHome = false,
}) => {
  return (
    <div
      className={
        isHome
          ? "grid grid-cols-1 grid-rows-1 md:grid-cols-6 md::grid-rows-2 gap-[2vw] w-full"
          : "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2vw] w-full"
      }
    >
      {insights.slice(0, itemsToShow).map((insight, index) => {
        const gridClass = isHome
          ? index === 0
            ? "md:col-span-3 md:row-start-1"
            : index === 1
            ? "md:col-span-2 md:row-start-2"
            : index === 2
            ? "md:col-span-2 md:row-start-2"
            : index === 3
            ? "md:col-span-2 md:row-start-2"
            : "md:col-span-3 md:row-start-1"
          : "";

        return (
          <div className={gridClass} key={index}>
            <Card
              title={insight.title}
              tag={insight.subtitle}
              body={insight.body}
              date={insight.date}
              backgroundImage={insight.image}
              isDark={isDark}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
