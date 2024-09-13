"use client";
import React, { useState, useEffect } from "react";
import CardGrid from "../ui/CardGrid";

const FeaturedInsights = () => {
  const [itemsToShow] = useState(5);
  const [insights, setInsights] = useState([]); // Initialize an empty array for insights
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch insights from the API
  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}insights`
        );
        const data = await response.json();
        console.log("Fetched Data:", data); // Log the fetched data
        setInsights(data); // Set the fetched data to insights state
      } catch (error) {
        console.error("Error fetching insights:", error);
      } finally {
        setLoading(false); // Set loading to false when the fetch is complete
      }
    };

    fetchInsights();
  }, []); // Ensure the useEffect runs once when the component is mounted

  if (loading) {
    return <div></div>; // Render a loading message while data is being fetched
  }

  // Log insights after the data has been set in state
  console.log("Insights in state:", insights);

  return (
    <div className="main bg-background-paper">
      <CardGrid
        data={insights}
        itemsToShow={itemsToShow}
        isDark={false}
        isHome={true}
      />
    </div>
  );
};

export default FeaturedInsights;
