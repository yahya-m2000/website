"use client";
import { Layout, Header, Footer } from "@/components/ui";
import React, { useEffect, useState } from "react";

const tabData = [
  {
    id: 1,
    tabTitle: "Who we are",
    title: "Who we are",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim vSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim vSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim vSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim vSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim vSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v",
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

  useEffect(() => {
    const path = window.location.pathname.split("/").pop();
    const foundTab = tabData.find((tab) => tab.url === path);
    if (foundTab) {
      setSelectedTab(foundTab.id);
    }
  }, []);

  const handleTabChange = (tabId: number) => {
    const selectedTab = tabData.find((tab) => tab.id === tabId);
    if (selectedTab) {
      setSelectedTab(tabId);

      window.history.pushState(null, "", `/about/${selectedTab.url}`);
    }
  };

  const selectedContent = tabData.find((tab) => tab.id === selectedTab);

  return (
    <Layout>
      {/* Wrapper for full-height page */}
      <div className="min-h-screen flex flex-col">
        <Header isDark={false} navigationTabs={[]} />
        <div className="pt-[15vh]" />
        <main className="main flex-grow min-h-screen h-auto pb-[15vh]">
          {/* Tabs and Content Section */}
          <div className="flex flex-row items-baseline">
            {/* Tabs Section */}
            <div className="flex-[0.25] pr-[4vw] md:pr-[0vw]">
              <ul className="flex flex-col  justify-start space-y-[2vh]">
                {tabData.map((tab) => (
                  <li
                    key={tab.id}
                    className={`cursor-pointer ${
                      selectedTab === tab.id
                        ? "font-assistant font-bold md:text-2xl text-base text-black"
                        : "font-assistant font-regular md:text-xl text-base text-gray-500"
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
        <Footer />
      </div>
    </Layout>
  );
};

export default Page;
