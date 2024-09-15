"use client";
import React, { useState, useMemo } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { useRouter } from "next/navigation";

// A separate component for the dropdown filter
const FilterDropdown: React.FC<{
  tagsWithCount: { [key: string]: number };
  onTagSelect: (tag: string) => void;
}> = ({ tagsWithCount, onTagSelect }) => {
  return (
    <div className="absolute z-20 right-0 mt-2 w-56 bg-background-paper text-primary shadow-lg">
      <ul className="p-2">
        {Object.keys(tagsWithCount).map((tag) => (
          <li
            key={tag}
            onClick={() => onTagSelect(tag)}
            className="font-assistant cursor-pointer flex justify-between p-2 relative group"
          >
            <span>{tag}</span>
            <span>{tagsWithCount[tag]}</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SearchBar: React.FC<SearchProps & { insights: InsightProps[] }> = ({
  initialSearchTerm,
  initialTag,
  // onFilterByTag,
  insights,
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("term", searchTerm);
    if (selectedTag) params.set("tag", selectedTag);
    router.push(`?${params.toString()}`);
  };

  const tagsWithCount = useMemo(() => {
    const tagCounts: { [key: string]: number } = {};
    insights.forEach((insight) => {
      insight.tags?.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
    return tagCounts;
  }, [insights]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag); // Update selected tag
    handleSearch(); // Trigger search with updated tag
    setShowDropdown(false); // Close dropdown after selecting
  };

  return (
    <div className="main flex flex-1 justify-center items-center w-auto">
      <div className="relative w-full border-b flex flex-1">
        <input
          type="text"
          value={searchTerm}
          onKeyDown={handleKeyDown} // Replaced onKeyPress with onKeyDown
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="font-assistant text-black rounded-md placeholder:italic w-full px-[2vw] py-[2vh] bg-background-paper focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-primary rounded-lg px-[2vw] py-[2vh] transition-colors duration-300"
          onClick={handleSearch}
        >
          <ArrowForwardRoundedIcon />
        </button>
      </div>

      <div className="relative">
        <button
          type="button"
          className="flex flex-row rounded-md text-primary  px-[2vw] mb-[2vh] transition-colors duration-300"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <SortRoundedIcon className="mr-[2vw]" />
          <p className="font-assistant italic">Filter By...</p>
        </button>

        {showDropdown && (
          <FilterDropdown
            tagsWithCount={tagsWithCount}
            onTagSelect={handleTagSelect}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
