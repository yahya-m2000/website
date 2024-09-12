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
      className={clsx("py-[7.5vh] flex flex-wrap main h-auto", {
        "flex-col": buttonUrl && isCentered,
        "lg:flex-row-reverse": isReversed,
        "lg:flex-row": !isReversed,
        "md:flex-col-reverse": true,
      })}
    >
      {/* Text Section */}
      <div
        className={clsx(
          "flex flex-col md:flex-[0.66] flex-[1] justify-center",
          {
            "lg:ml-12 ml-0": isReversed && !isCentered,
            "lg:mr-12 ml-0": !isReversed && !isCentered,
            "lg:mx-auto mx-0": isCentered,
          }
        )}
      >
        <h2
          className={clsx(
            "font-extrabold uppercase font-assistant text-xl text-subtitle mb-4",
            {
              "text-center": isCentered,
            }
          )}
        >
          {title}
        </h2>
        <p
          className={clsx("font-assistant md:text-lg text-base text-black ", {
            "mx-auto md:max-w-[50vw] ": isCentered, // Center text with max width control
          })}
        >
          {text}
        </p>
      </div>

      {/* Image Section */}
      {image && (
        <div
          className="flex-[0.33] rounded-md min-h-[200px] md:mb-[10px] w-full bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
    </div>
  );
};

export default Paragraph;
