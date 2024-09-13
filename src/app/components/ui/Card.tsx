"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { BLOCKS, Document } from "@contentful/rich-text-types";

const placeholderImage = "https://via.placeholder.com/600x400";

const Card: React.FC<CardProps> = ({
  title,
  tags,
  subtitle,
  date,
  heroImage,
  isDark,
  onClick,
  basePath,
  slug,
}) => {
  // const isValidBody = (body: any): body is Document =>
  //   body && body.nodeType === BLOCKS.DOCUMENT;

  const cardContent = (
    <div
      onClick={onClick}
      className={clsx(
        "w-auto lg:min-h-[500px] md:min-h-[500px] min-h-[100px] flex md:flex-col flex-row cursor-pointer overflow-hidden rounded-md transition-shadow duration-300 ease-in-out hover:shadow-lg",
        isDark ? "bg-black border-2 border-gray-900" : "bg-white"
      )}
    >
      <div className="flex md:w-full lg:min-h-[250px] md:min-h-[200px] min-h-[100px] bg-gray-500 overflow-hidden">
        <div
          className="flex-1 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-105"
          style={{
            backgroundImage: `url(${heroImage || placeholderImage})`,
          }}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between z-10 px-[2vw] py-[4vh]">
        <div>
          <p
            className={clsx(
              "font-assistant text-subtitle font-bold uppercase text-base mb-[5px]",
              isDark ? "text-white" : "text-subtitle"
            )}
          >
            {Array.isArray(tags) ? tags.join(", ") : tags}
          </p>

          <h3
            className={clsx(
              "font-assistant font-bold text-2xl mb-[5px] hover:underline",
              isDark ? "text-white" : "text-black"
            )}
          >
            {title}
          </h3>
          {/* <div className="font-assistant font-normal text-sm md:line-clamp-1">
            {isValidBody(body)
              ? documentToReactComponents(body)
              : "No content available"}
          </div> */}
          <p className="font-assistant font-normal text-sm md:line-clamp-1">
            {subtitle}
          </p>
        </div>
        <p
          className={clsx(
            "uppercase font-assistant font-bold md:text-sm text-xs mt-[5px]",
            isDark ? "text-white" : "text-subtitle"
          )}
        >
          {date}
        </p>
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

export default Card;
