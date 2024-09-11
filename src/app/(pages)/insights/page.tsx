"use client";
import React, { useState } from "react";
import { Footer, Header, Layout } from "@/components/ui";
import HeroImage from "@/components/ui/HeroImage";
import SearchBar from "@/components/ui/SearchBar";
import CardGrid from "@/components/ui/CardGrid";
import bgImage from "@/assets/images/projects_background.png";
import { mockInsights } from "@/assets/mockData/insights";

export default function Projects() {
  const [filteredInsights, setFilteredInsights] = useState(mockInsights);
  const [loading, setLoading] = useState(false); // Add loading state

  // Function to filter insights based on search term
  const handleSearch = (term: string) => {
    setLoading(true); // Start loading

    setTimeout(() => {
      if (term === "") {
        setFilteredInsights(mockInsights); // Show all insights if no search term
      } else {
        const filtered = mockInsights.filter((insight) =>
          insight.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredInsights(filtered);
      }
      setLoading(false); // End loading
    }, 1000); // Simulate network delay for loading
  };

  // Function to filter insights based on selected tag
  const handleFilterByTag = (tag: string) => {
    const filtered = mockInsights.filter((insight) =>
      insight.tags.includes(tag)
    );
    setFilteredInsights(filtered);
  };

  return (
    <Layout>
      <main className="hide-scrollbar bg-black">
        <Header isDark={true} />
        <HeroImage
          title={"Insights"}
          backgroundImage={bgImage}
          tag={"Technology"}
          body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v..."
          author={"Test"}
          date={"01 January 2025"}
        />
        <div className="main">
          <h3 className="font-assistant text-white text-3xl md:w-[40vw] justify-start">
            We at the Eastern Trade Group believe in
            <span className="font-extrabold"> innovation</span> and, more
            importantly, the
            <span className="font-extrabold"> innovators themselves.</span>
          </h3>
          <h3 className="pt-[4vh] font-extrabold font-assistant text-white text-3xl md:w-[40vw] justify-start">
            Browse the work of our clients
          </h3>
        </div>

        {/* SearchBar Component */}
        <SearchBar onSearch={handleSearch} onFilterByTag={handleFilterByTag} />

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
                insights={filteredInsights}
                itemsToShow={filteredInsights.length}
                isDark={true}
              />
            </div>
          ) : (
            <p className="text-white text-lg">No results found.</p> // No results message
          )}
        </div>
        <Footer isDark={true} />
      </main>
    </Layout>
  );
}
