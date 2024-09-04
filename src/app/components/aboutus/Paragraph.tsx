"use client";
import React from "react";
import { Container, SectionText, SectionTitle } from "../style";
import { Box } from "@mui/material";
import clsx from "clsx";

type ParagraphProps = {
  title: string;
  text: string;
  image?: string;
  isReversed?: boolean;
  isCentered?: boolean;
};

const Paragraph: React.FC<ParagraphProps> = ({
  title,
  text,
  image,
  isReversed = false,
  isCentered = false,
}) => {
  return (
    <Container
      className={clsx("lg:flex flex-wrap h-auto px-[12vw] justify-between ", {
        "lg:flex-row-reverse": isReversed,
        "lg:flex-row": !isReversed,
        "md:flex-col-reverse": true, // Ensure flex-column for medium screens
      })}
    >
      <Box
        className={clsx("flex-1", {
          "lg:ml-12": isReversed && !isCentered,
          "lg:mr-12": !isReversed && !isCentered,
          "lg:mx-auto": isCentered, // Ensure centered text for centered content
        })}
      >
        <SectionTitle className={clsx({ "text-center": isCentered })}>
          {title}
        </SectionTitle>
        <SectionText
          className={clsx("", {
            "mx-auto": isCentered,
            "sm:max-w-full md:max-w-[50vw]": isCentered, // Max width adjustments for breakpoints
          })}
        >
          {text}
        </SectionText>
      </Box>
      {image && (
        <Box
          className={clsx(
            "flex-1 h-[300px] lg:h-[400px] md:h-[200px] sm:h-[300px] bg-cover bg-center items-center justify-center",
            {
              "w-full md:w-full lg:w-[50%]": true, // Ensure image takes full width on small and medium screens
            }
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
    </Container>
  );
};

export default Paragraph;
