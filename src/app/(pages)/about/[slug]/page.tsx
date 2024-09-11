"use client";
import { Layout, Header, Footer } from "@/components/ui";
import React, { useEffect, useState } from "react";

// Placeholder data for tabs
const tabData = [
  {
    id: 1,
    tabTitle: "Who we are",
    title: "Who we are",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    url: "who-we-are",
  },
  {
    id: 2,
    tabTitle: "What we do",
    title: "What we do",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    url: "what-we-do",
  },
  {
    id: 3,
    tabTitle: "Who we represent",
    title: "Who we represent",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    url: "who-we-represent",
  },
  {
    id: 4,
    tabTitle: "Where we operate",
    title: "Where we operate",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    url: "where-we-operate",
  },
  {
    id: 5,
    tabTitle: "Contact us",
    title: "Contact us",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    url: "contact-us",
  },
];

const Page = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  // Handle initial URL parsing to set the correct tab on page load
  useEffect(() => {
    const path = window.location.pathname.split("/").pop(); // Get the last part of the URL
    const foundTab = tabData.find((tab) => tab.url === path);
    if (foundTab) {
      setSelectedTab(foundTab.id);
    }
  }, []);

  // Handle tab selection and URL update
  const handleTabChange = (tabId: number) => {
    const selectedTab = tabData.find((tab) => tab.id === tabId);
    if (selectedTab) {
      // Update the selected tab
      setSelectedTab(tabId);

      // Use the history API to update the URL without a page reload
      window.history.pushState(null, "", `/about/${selectedTab.url}`);
    }
  };

  const selectedContent = tabData.find((tab) => tab.id === selectedTab);

  return (
    <Layout>
      {/* Wrapper for full-height page */}
      <div className="min-h-screen flex flex-col">
        <Header isDark={false} noAnimations={true} />
        <main className="main flex-grow pt-[15vh]">
          {/* Tabs and Content Section */}
          <div className="flex flex-col md:flex-row md:items-baseline">
            {/* Tabs Section */}
            <div className="flex-[0.25]">
              <h3 className="subheading mb-[2vh] hidden md:block">About us</h3>
              <ul className="flex flex-row justify-between md:justify-start md:flex-col md:space-y-[2vh]">
                {tabData.map((tab) => (
                  <li
                    key={tab.id}
                    className={`cursor-pointer ${
                      selectedTab === tab.id
                        ? "font-assistant font-bold md:text-2xl sm:text-base text-sm text-black"
                        : "font-assistant font-regular md:text-xl sm:text-base text-sm text-gray-500"
                    }`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    {tab.tabTitle}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Section */}
            <div className="flex-[0.75] md:ml-4 relative">
              <h2 className="title mb-[2vh]">{selectedContent?.title}</h2>
              <p className="base md:w-[50vw]">{selectedContent?.content}</p>
            </div>
          </div>
        </main>
        {/* Footer is now always at the bottom */}
        <Footer />
      </div>
    </Layout>
  );
};

export default Page;
