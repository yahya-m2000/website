"use client";
import React from "react";
import { Container, SectionText, SectionTitle, StyledButton } from "../style";
import { Box } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";

type ParagraphProps = {
  title: string;
  text: string;
  image?: string;
  buttonUrl?: string;
  isReversed?: boolean;
  isCentered?: boolean;
};

const Paragraph: React.FC<ParagraphProps> = ({
  title,
  text,
  image,
  isReversed = false,
  isCentered = false,
  buttonUrl,
}) => {
  return (
    <Container
      className={clsx("lg:flex flex-wrap h-auto justify-between", {
        "lg:flex-col md:flex-col sm:flex-col flex-col": buttonUrl && isCentered,
        "lg:flex-row-reverse": isReversed,
        "lg:flex-row": !isReversed,
        "md:flex-col-reverse": true, // Ensure flex-column for medium screens
      })}
    >
      <Box
        className={clsx("flex-[0.66]", {
          "lg:ml-12": isReversed && !isCentered,
          "lg:mr-12": !isReversed && !isCentered,
          "lg:mx-auto": isCentered, // Ensure centered text for centered content
        })}
      >
        <SectionTitle
          className={clsx("font-extrabold text-[1.5rem]", {
            "text-center": isCentered,
          })}
        >
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
            "flex-[0.33] h-auto bg-cover bg-center items-center justify-center",
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
