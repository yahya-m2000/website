"use client";

import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import clsx from "clsx";

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="absolute top-[50%] left-[-50px] z-10 transform -translate-y-1/2 cursor-pointer hidden md:block"
    onClick={onClick}
  >
    <ArrowBackIosRounded className="text-black hover:text-primary" />
  </div>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="absolute top-[50%] right-[-50px] z-10 transform -translate-y-1/2 cursor-pointer hidden md:block"
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
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: () => <div className="!hidden" />,
    appendDots: (dots: React.ReactNode[]) => (
      <div>
        <div className="flex justify-center space-x-5">
          {dots.map((dot, index) => {
            // Cast dots[index] to ReactElement to access props
            const dotElement = dot as React.ReactElement | null;

            return (
              <div
                key={index}
                className={clsx(
                  " rounded-full cursor-pointer transition-all duration-300 ease-in-out transform",
                  dotElement?.props?.className?.includes("slick-active")
                    ? "bg-primary scale-50 "
                    : "bg-gray-300 scale-50"
                )}
              >
                {dot}
              </div>
            );
          })}
        </div>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="horizontal-carousel w-full relative">
      <Slider {...settings}>
        {cards.map((card, index) => {
          // console.log(card.basePath);
          return (
            <div key={index} className="px-[1vw] py-[1vh]">
              <Card
                title={card.title}
                tags={card.tags}
                body={card.body}
                date={card.date}
                backgroundImage={card.backgroundImage}
                basePath={card.basePath}
                onClick={() => {}}
                isDark={isDark}
                slug={card.slug}
                author={""}
                heroImage={""}
                images={[]}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HorizontalCarousel;
