"use client";

import React from "react";
import Slider from "react-slick";
import Card from "./Card"; // Import your card component here
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

// Custom Previous Arrow
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="absolute top-[50%] left-[-30px] z-10 transform -translate-y-1/2 cursor-pointer hidden md:block" // Hidden on screens smaller than md
    onClick={onClick}
  >
    <ArrowBackIosRounded className="text-black hover:text-primary" />
  </div>
);

// Custom Next Arrow
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="absolute top-[50%] right-[-30px] z-10 transform -translate-y-1/2 cursor-pointer hidden md:block" // Hidden on screens smaller than md
    onClick={onClick}
  >
    <ArrowForwardIosRounded className="text-black hover:text-primary" />
  </div>
);

const HorizontalCarousel: React.FC<{
  cards: CardProps[];
  isDark?: boolean;
}> = ({ cards, isDark = false }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 3, // Scroll 3 slides at a time
    arrows: true, // Add left and right arrows
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
    responsive: [
      {
        breakpoint: 1024, // Matches the tailwind md breakpoint (1024px)
        settings: {
          slidesToShow: 2, // Show 2 cards on medium screens
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false, // Disable arrows for smaller screens
        },
      },
      {
        breakpoint: 768, // Matches the tailwind sm breakpoint (768px)
        settings: {
          slidesToShow: 1, // Show 1 card on small screens
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false, // Disable arrows for smaller screens
        },
      },
    ],
  };

  return (
    <div className="horizontal-carousel w-full relative">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-2">
            <Card
              title={card.title}
              tag={card.tag}
              body={card.body}
              date={card.date}
              backgroundImage={card.backgroundImage}
              isDark={isDark}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalCarousel;
