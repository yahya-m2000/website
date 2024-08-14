"use client";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { assistant, inriaSerif } from "@/app/fonts";

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: inriaSerif.style.fontFamily,
  fontSize: "1.5em",
  marginBottom: "2vh",
  textAlign: "center",
  color: "black",
}));

const PlaceholderCard = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "300px",
  backgroundColor: theme?.palette?.primary?.main || "grey", // Fallback color if theme is undefined
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "1vh",
}));

const PlaceholderText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "1em",
}));

const SubtitleText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "0.75em",
}));

const MoreNewsLink = styled(Button)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "0.75em",
  display: "flex",
  alignItems: "center",
  marginTop: "2vh",
  textTransform: "none",
  "& .MuiButton-startIcon": {
    marginRight: "0.5vw",
  },
}));

const LatestInsights = () => {
  const theme = useTheme();
  console.log("Theme:", theme); // Debugging to check if theme is correctly loaded

  return (
    <Box
      sx={{
        padding: "5vh 5vw",
        backgroundColor: theme?.palette?.background?.default || "white",
      }}
    >
      <Title>Latest Insights</Title>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "5vh",
        }}
      >
        <PlaceholderCard>
          <PlaceholderText>Placeholder</PlaceholderText>
          <SubtitleText>Placeholder subtitle</SubtitleText>
        </PlaceholderCard>
        <PlaceholderCard>
          <PlaceholderText>Placeholder</PlaceholderText>
          <SubtitleText>Placeholder subtitle</SubtitleText>
        </PlaceholderCard>
        <PlaceholderCard>
          <PlaceholderText>Placeholder</PlaceholderText>
          <SubtitleText>Placeholder subtitle</SubtitleText>
        </PlaceholderCard>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <MoreNewsLink
          startIcon={<span style={{ transform: "rotate(45deg)" }}>➔</span>}
        >
          More News
        </MoreNewsLink>
      </Box>
    </Box>
  );
};

export default LatestInsights;
