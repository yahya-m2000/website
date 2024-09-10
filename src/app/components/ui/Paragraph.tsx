"use client";
import React from "react";
import clsx from "clsx";

const Paragraph: React.FC<ParagraphProps> = ({
  title,
  text,
  image,
  isReversed = false,
  isCentered = false,
  buttonUrl,
}) => {
  return (
    <div
      className={clsx("flex flex-wrap h-auto px-[4vw] py-[4vh]", {
        "flex-col": buttonUrl && isCentered,
        "lg:flex-row-reverse": isReversed,
        "lg:flex-row": !isReversed,
        "md:flex-col-reverse": true, // Always column reverse on medium screens
      })}
    >
      {/* Text Section */}
      <div
        className={clsx("flex-1", {
          "lg:ml-12": isReversed && !isCentered,
          "lg:mr-12": !isReversed && !isCentered,
          "lg:mx-auto": isCentered, // Centered margins if content is centered
        })}
      >
        <h2
          className={clsx(
            "font-extrabold font-assistant text-xl text-black mb-4",
            {
              "text-center": isCentered,
            }
          )}
        >
          {title}
        </h2>
        <p
          className={clsx("font-assistant text-base text-black", {
            "mx-auto md:max-w-[50vw]": isCentered, // Center text with max width control
          })}
        >
          {text}
        </p>
      </div>

      {/* Image Section */}
      {image && (
        <div
          className="flex-[0.33] h-auto w-full lg:w-[50%] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
    </div>
  );
};

export default Paragraph;
