"use client";
import React, { useState, useEffect } from "react";
import { Container, SectionText, SectionTitle } from "@/styles/index";
import { Card } from "../ui";
import { Box, Typography } from "@mui/material";
import theme from "../../theme";

const mockInsights = [
  {
    title: "Understanding AI Ethics",
    subtitle: "The ethical challenges of AI technology",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fit=crop&w=600&q=80",
  },
  {
    title: "Sustainable Architecture",
    subtitle: "Eco-friendly designs shaping our future",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=600&q=80",
  },
  {
    title: "Blockchain Beyond Bitcoin",
    subtitle: "How blockchain is revolutionizing industries",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=600&q=80",
  },
  {
    title: "The Future of Remote Work",
    subtitle: "Adapting to a hybrid workforce",
  },
  {
    title: "Electric Vehicles: A Growing Trend",
    subtitle: "The rise of EVs and their environmental impact",
  },
  {
    title: "Space Exploration in the 21st Century",
    subtitle: "Private companies leading the new space race",
  },
  {
    title: "Green Energy Solutions",
    subtitle: "The shift towards renewable energy sources",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?fit=crop&w=600&q=80",
  },
  {
    title: "The Rise of Smart Cities",
    subtitle: "Technology transforming urban landscapes",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fit=crop&w=600&q=80",
  },
  {
    title: "Healthcare Innovations in 2024",
    subtitle: "Cutting-edge tech reshaping the medical field",
    image:
      "https://images.unsplash.com/photo-1581091012184-9720b8b9a681?fit=crop&w=600&q=80",
  },
];

const FeaturedInsights = () => {
  const [itemsToShow, setItemsToShow] = useState(9);

  return (
    <div className="bg-gray-150">
      {/* Header */}
      <div className="flex xl:justify-between md:justify-between justify-center items-center ">
        {/* SectionTitle */}
        <h2
          className={`xl:text-4xl  md:text-4xl text-3xl font-extrabold font-assistant text-black leading-tight`}
        >
          Featured Insights
        </h2>

        {/* SectionText */}
        <p className="hidden xl:block md:block text-lg font-bold text-gray-500">
          SEE ALL
        </p>
      </div>

      {/* Content Grid */}
      <div className="p-0 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10   w-full">
        {mockInsights.slice(0, itemsToShow).map((insight, index) => (
          <Card
            key={index}
            title={insight.title}
            tag={insight.subtitle}
            backgroundImage={insight.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedInsights;
