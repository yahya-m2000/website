"use client";
import { StaticImageData } from "next/image";
import React from "react";
import clsx from "clsx";
import Link from "next/link";

const getBackgroundImage = (imageUrl?: string | StaticImageData) => {
  // Check if imageUrl is StaticImageData (imported from Next.js)
  const imageUrlString = typeof imageUrl === "object" ? imageUrl.src : imageUrl;

  return {
    backgroundImage: `url(${
      imageUrlString || "https://via.placeholder.com/600x400"
    })`,
  };
};

const Card: React.FC<CardProps> = ({
  title,
  tags = [], // Default to empty array
  subtitle = "", // Default to empty string
  date = "", // Default to empty string
  heroImage,
  isDark = false, // Default to false
  onClick,
  basePath,
  slug,
}) => {
  const cardClasses = clsx(
    "w-auto border-background-paper border-2 text-black lg:min-h-[500px] md:min-h-[500px] min-h-[100px] flex md:flex-col flex-row cursor-pointer overflow-hidden rounded-md transition-shadow duration-300 ease-in-out hover:shadow-lg",
    isDark ? "bg-black border-2 border-gray-900" : "bg-white"
  );

  const textClass = isDark ? "text-white" : "text-subtitle";

  const cardContent = (
    <div onClick={onClick} className={cardClasses}>
      {/* Image Section */}
      <div className="flex md:w-full lg:min-h-[250px] md:min-h-[200px] min-h-[100px] bg-gray-500 overflow-hidden">
        <div
          className="flex-1 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-105"
          style={getBackgroundImage(heroImage)}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between z-10 px-[2vw] py-[4vh]">
        <div>
          {/* Tags */}
          {tags.length > 0 && (
            <p
              className={clsx(
                "font-assistant text-subtitle font-bold uppercase text-base mb-[5px]",
                textClass
              )}
            >
              {tags.join(", ")}
            </p>
          )}

          {/* Title */}
          <h3
            className={clsx(
              "font-assistant font-bold text-2xl mb-[5px] hover:underline",
              textClass
            )}
          >
            {title}
          </h3>

          {/* Subtitle */}
          {subtitle && (
            <p className="font-assistant font-normal text-sm md:line-clamp-1">
              {subtitle}
            </p>
          )}
        </div>

        {/* Date */}
        {date && (
          <p
            className={clsx(
              "uppercase font-assistant font-bold md:text-sm text-xs mt-[5px]",
              textClass
            )}
          >
            {date}
          </p>
        )}
      </div>
    </div>
  );

  return title ? (
    <Link href={`/${basePath}/${slug}`} passHref>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default React.memo(Card);
