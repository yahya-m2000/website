"use client";
import React from "react";
import clsx from "clsx";

const placeholderImage = "https://via.placeholder.com/600x400";

const Card: React.FC<CardProps> = ({
  title,
  tag,
  backgroundImage,
  isDark,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="py-0 w-auto h-auto flex flex-col cursor-pointer overflow-hidden "
    >
      {/* Card Image */}
      <div className="w-[100%] h-auto overflow-hidden p-0">
        <div
          className={clsx(
            "w-full h-[33.3vh] bg-gray-500 bg-cover bg-center transform transition-transform duration-300 ease-in-out hover:scale-105",
            {
              "bg-white": isDark,
            }
          )}
          style={{
            backgroundImage: `url(${backgroundImage || placeholderImage})`,
          }}
        />
      </div>

      {/* Card Content */}
      <div className="container flex-1 px-0 z-10">
        {/* Card Tag */}
        <p
          className={clsx(
            "font-assistant text-gray-400 font-bold uppercase text-base my-[-1vh]"
          )}
        >
          {tag}
        </p>
        {/* Card Title */}
        <h3
          className={clsx(
            "font-assistant font-extrabold text-3xl text-black hover:text-primary hover:underline",
            {
              "text-white": isDark,
            }
          )}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
