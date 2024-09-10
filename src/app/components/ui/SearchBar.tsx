"use client";
import React, { useState, useEffect } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { mockInsights } from "@/assets/mockData/insights"; // Ensure this path is correct

type SearchBarProps = {
  onSearch: (term: string) => void;
  onFilterByTag: (tag: string) => void; // Add handler for filtering by tags
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilterByTag }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); // Toggle for showing the dropdown
  const [tagsWithCount, setTagsWithCount] = useState<{ [key: string]: number }>(
    {}
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle key press event
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchTerm); // Trigger search only when Enter is pressed
    }
  };

  // Compute tags and their counts from mockInsights
  useEffect(() => {
    const tagCounts: { [key: string]: number } = {};
    mockInsights.forEach((insight) => {
      insight.tags.forEach((tag) => {
        if (tagCounts[tag]) {
          tagCounts[tag] += 1;
        } else {
          tagCounts[tag] = 1;
        }
      });
    });
    setTagsWithCount(tagCounts);
  }, []);

  // Handle tag selection
  const handleTagSelect = (tag: string) => {
    onFilterByTag(tag); // Trigger filter by tag
    setShowDropdown(false); // Close dropdown after selection
  };

  return (
    <div className="main flex flex-1 justify-center items-center w-auto">
      <div className="relative w-full border-b flex flex-1">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Add key press listener
          placeholder="Search..."
          className="font-assistant text-white placeholder:italic w-full px-[2vw] py-[2vh] bg-black focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white rounded-lg px-[2vw] py-[2vh] transition-colors duration-300"
          onClick={() => onSearch(searchTerm)} // Also allow search on button click
        >
          <ArrowForwardRoundedIcon />
        </button>
      </div>

      {/* Filter by tag dropdown */}
      <div className="relative">
        <button
          type="button"
          className="flex flex-row text-white  px-[2vw] my-[2vh] transition-colors duration-300"
          onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown
        >
          <SortRoundedIcon className="mr-[2vw]" />
          <p className="font-assistant italic">Filter By...</p>
        </button>

        {/* Dropdown content */}
        {showDropdown && (
          <div className="absolute z-20 right-0 mt-2 w-56 bg-black text-white shadow-lg">
            <ul className="p-2">
              {Object.keys(tagsWithCount).map((tag) => (
                <li
                  key={tag}
                  onClick={() => handleTagSelect(tag)}
                  className="font-assistant cursor-pointer flex justify-between p-2 relative group" // Added relative and group
                >
                  {/* Tag text */}
                  <span>{tag}</span>
                  <span>{tagsWithCount[tag]}</span>

                  {/* Sliding border */}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
