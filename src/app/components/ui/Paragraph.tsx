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
      className={clsx(
        "flex-wrap h-auto justify-between pb-[10vh]",
        {
          "flex-col": buttonUrl && isCentered, // Stack content if centered
          "lg:flex-row-reverse": isReversed, // Reverse layout if needed
          "lg:flex-row": !isReversed,
          "md:flex-col-reverse": true, // Always column reverse on medium screens
        },
        "lg:flex" // Ensure large screen uses flex-row or reversed rows
      )}
    >
      {/* Text Section */}
      <div
        className={clsx("flex-[0.66] p-0 ", {
          "lg:ml-12": isReversed && !isCentered, // Left margin if reversed
          "lg:mr-12": !isReversed && !isCentered, // Right margin if not reversed
          "lg:mx-auto": isCentered, // Centered margins if content is centered
        })}
      >
        <h2
          className={clsx(
            "font-extrabold font-assistant text-xl text-black mb-4", // Font size and primary color
            {
              "text-center": isCentered, // Center title if content is centered
            }
          )}
        >
          {title}
        </h2>
        <p
          className={clsx("font-assistant text-base text-black", {
            "mx-auto": isCentered, // Center text if content is centered
            "sm:max-w-full md:max-w-[50vw]": isCentered, // Max width control on smaller screens
          })}
        >
          {text}
        </p>
      </div>

      {/* Image Section */}
      {image && (
        <div
          className={clsx(
            "flex-[0.33] p-0 h-auto bg-cover bg-center items-center justify-center",
            {
              "w-full p-0 md:w-full lg:w-[50%]": true, // Full width for small screens, 50% for large
            }
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
    </div>
  );
};

export default Paragraph;
