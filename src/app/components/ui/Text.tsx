"use client";
import { styled, Typography } from "@mui/material";
import { assistant } from "@/fonts/index";

const Text = styled(Typography)<TextProps>(
  ({ fontWeight, fontSize, color, textAlign, margin, padding, theme }) => ({
    fontFamily: assistant.style.fontFamily,
    fontWeight: fontWeight || "300",
    fontSize: fontSize || "1rem",
    color: color || theme.palette.text.primary,
    textAlign: textAlign || "left",
    margin: margin || "0",
    padding: padding || "0",
  })
);

export default Text;
