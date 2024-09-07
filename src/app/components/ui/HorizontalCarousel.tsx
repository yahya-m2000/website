"use client";
import React from "react";
import { Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { CarouselButton } from "../style";
import Card from "./Card";
import Spacer from "./Spacer";

type HorizontalCarouselProps = {
  items: { title: string; subtitle: string; image: string }[];
  currentIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
  getTranslateValue: (index: number) => number;
};

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({
  items,
  currentIndex,
  handlePrev,
  handleNext,
  getTranslateValue,
}) => {
  return (
    <Box className="flex relative h-[400px] justify-center items-center bg-slate-400">
      {/* <Spacer /> */}
      <Box className="flex flex-1 justify-center items-center">
        <CarouselButton
          onClick={handlePrev}
          className="flex justify-start lg:right-[36vw] md:right-[30vw] sm:right-[24vw] right-[24vw] top-[1rem] z-20"
        >
          <ArrowBackIos className="text-primary-contrast" />
        </CarouselButton>
        <CarouselButton
          onClick={handleNext}
          className="flex justify-end lg:left-[36vw] md:left-[30vw] sm:left-[24vw] left-[24vw] top-[1rem] z-20"
        >
          <ArrowForwardIos className="text-primary-contrast" />
        </CarouselButton>
      </Box>

      <Box>
        {items.map((item, index) => {
          const isFocused = index === currentIndex;

          return (
            <Box
              key={index}
              className={`absolute top-0 left-1/2 transform-gpu ${
                isFocused ? "scale-100 opacity-100" : "scale-80 opacity-50"
              } transition-transform duration-500 ease-in-out`}
              style={{
                transform: `translateX(calc(${getTranslateValue(
                  index
                )}% - 50%))`,
                width: "50vw",
              }}
            >
              <Card
                title={item.title}
                subtitle={item.subtitle}
                backgroundImage={item.image}
                isFocused={isFocused}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default HorizontalCarousel;
