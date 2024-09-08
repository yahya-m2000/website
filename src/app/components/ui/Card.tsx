"use client";
import React from "react";
import { Box } from "@mui/material";
import clsx from "clsx"; // Optional for conditional classes

const placeholderImage = "https://via.placeholder.com/600x400";

const Card: React.FC<CardProps> = ({
  title,
  tag,
  backgroundImage,
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
          className="w-full h-[33.3vh] bg-gray-500 bg-cover bg-center transform transition-transform duration-300 ease-in-out hover:scale-105 "
          style={{
            backgroundImage: `url(${backgroundImage || placeholderImage})`,
          }}
        />
      </div>

      {/* Card Content */}
      <div className="flex-1 px-0 z-10">
        {/* Card Tag */}
        <p className="font-assistant text-gray-400 font-bold uppercase text-base my-[-1vh]">
          {tag}
        </p>
        {/* Card Title */}
        <h3 className="font-assistant font-extrabold text-3xl text-black hover:text-primary hover:underline">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
