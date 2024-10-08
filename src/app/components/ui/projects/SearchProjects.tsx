"use client"; // This makes the component a Client Component

import React, { useState } from "react";
import SearchBar from "@/components/ui/SearchBar";
import CardGrid from "@/components/ui/card/CardGrid";

interface SearchProjectsProps {
  insights: InsightProps[];
}

const SearchProjects: React.FC<SearchProjectsProps> = ({ insights }) => {
  const [filteredInsights, setFilteredInsights] = useState(insights);
  const [loading, setLoading] = useState(false); // Add loading state

  // Function to filter insights based on search term
  const handleSearch = (term: string) => {
    setLoading(true); // Start loading

    setTimeout(() => {
      if (term === "") {
        setFilteredInsights(insights); // Show all insights if no search term
      } else {
        const filtered = insights.filter((insight) =>
          insight.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredInsights(filtered);
      }
      setLoading(false); // End loading
    }, 1000); // Simulate network delay for loading
  };

  // Function to filter insights based on selected tag
  const handleFilterByTag = (tag: string) => {
    const filtered = insights.filter((insight) => insight.tags?.includes(tag));
    setFilteredInsights(filtered);
  };

  return (
    <div>
      {/* SearchBar Component */}
      <SearchBar
        onSearch={handleSearch}
        onFilterByTag={handleFilterByTag}
        initialSearchTerm={""}
        initialTag={""}
        insights={insights}
      />

      {/* Display the filtered insights using the CardGrid component */}
      <div className="main min-h-[20vh]">
        {loading ? (
          <p className="text-white text-lg">Loading...</p> // Display loading message
        ) : filteredInsights.length > 0 ? (
          <div
            className="transition-opacity duration-500 ease-in-out"
            style={{ opacity: loading ? 0 : 1 }}
          >
            <CardGrid
              data={filteredInsights}
              itemsToShow={filteredInsights.length}
              isDark={false}
            />
          </div>
        ) : (
          <p className="text-white text-lg">No results found.</p> // No results message
        )}
      </div>
    </div>
  );
};

export default SearchProjects;
