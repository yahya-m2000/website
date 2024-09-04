"use client";
import React from "react";
import { Container, SectionText, SectionTitle } from "../style";
import { Box } from "@mui/material";
import clsx from "clsx"; // Import clsx for conditional class handling

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
      className={clsx(
        "px-[12vw] pt-24 flex justify-between", // Default classes
        {
          "flex-row-reverse": isReversed, // Apply flex-row-reverse if isReversed is true
          "flex-row": !isReversed, // Default to flex-row if isReversed is false
        }
      )}
    >
      <Box
        className={clsx("flex-1", {
          "ml-12": isReversed && !isCentered,
          "mr-12": !isReversed && !isCentered,
          "mx-[200px]": isCentered,
        })}
      >
        <SectionTitle className={clsx({ "text-center": isCentered })}>
          {title}
        </SectionTitle>
        <SectionText className={clsx({ "text-center": isCentered })}>
          {text}
        </SectionText>
      </Box>
      {image && (
        <Box
          className="flex-1 h-[400px] bg-cover bg-center flex items-center justify-center bg-slate-400"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
    </Container>
  );
};

export default Paragraph;
