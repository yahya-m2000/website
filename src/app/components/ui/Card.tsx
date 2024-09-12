"use client";
import React from "react";
import clsx from "clsx";

const placeholderImage = "https://via.placeholder.com/600x400";

const Card: React.FC<CardProps> = ({
  title,
  tag,
  body,
  date,
  backgroundImage,
  isDark,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "w-auto lg:min-h-[500px] md:min-h-[500px] min-h-[100px] flex md:flex-col flex-row cursor-pointer overflow-hidden rounded-md transition-shadow duration-300 ease-in-out hover:shadow-lg",
        isDark ? "bg-black border-2 border-gray-900" : "bg-white"
      )}
    >
      {/* Image container with overflow-hidden */}
      <div className="flex md:w-full lg:min-h-[250px] md:min-h-[200px] min-h-[100px] bg-gray-500 overflow-hidden">
        <div
          className="flex-1 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-105"
          style={{
            backgroundImage: `url(${backgroundImage || placeholderImage})`,
          }}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between z-10 px-[2vw] py-[4vh]">
        <div>
          <p className="font-assistant text-gray-400 font-bold uppercase text-base mb-[5px]">
            {tag}
          </p>

          <h3
            className={clsx(
              "font-assistant font-bold text-2xl text-black mb-[5px] hover:text-primary hover:underline",
              {
                "text-white": isDark,
              }
            )}
          >
            {title}
          </h3>
          <p
            className={clsx(
              "font-assistant font-normal text-sm md:line-clamp-1",
              isDark ? "text-white" : "text-black"
            )}
          >
            {body}
          </p>
        </div>
        {/* Date */}
        <p
          className={clsx(
            "uppercase font-assistant text-black font-bold md:text-sm text-xs mt-[5px]",
            isDark ? "text-white" : "text-black"
          )}
        >
          {date}
        </p>
      </div>
    </div>
  );
};

export default Card;
