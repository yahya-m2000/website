"use client";
import React, { useState } from "react";
import { Footer, Header, Layout, Paragraph } from "@/components/ui";
import HeroImage from "@/components/ui/HeroImage";
import bgImage from "@/assets/images/projects_background.png";

// Mock services data
const servicesData = [
  {
    title: "Consulting",
    text: "Our consulting services help businesses navigate complex challenges...",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fit=crop&w=600&q=80",
  },
  {
    title: "Development",
    text: "We provide world-class development services to bring your ideas to life...",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=600&q=80",
  },
  {
    title: "Design",
    text: "Our design team focuses on creating visually stunning and user-friendly designs...",
    image:
      "https://images.unsplash.com/photo-1581091012184-9720b8b9a681?fit=crop&w=600&q=80",
  },
];

export default function Projects() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Handle tab change
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Layout>
      <main className="hide-scrollbar">
        <Header isDark={true} />
        <HeroImage
          title={"Services"}
          backgroundImage={bgImage}
          body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v..."
          tag={""}
          author={""}
          date={""}
        />

        <div className="main">
          <Paragraph
            title="What we offer"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v..."
            image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fit=crop&w=600&q=80"
            isReversed={true}
          />

          {/* Tabs for each service */}
          <div className="flex justify-center space-x-4 my-8">
            {servicesData.map((service, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`px-4 py-2 rounded-md ${
                  activeTab === index
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Paragraph that updates based on the selected tab */}
          <Paragraph
            text={servicesData[activeTab].text}
            image={servicesData[activeTab].image}
            isReversed={activeTab % 2 === 0} // Reverse every second paragraph for alternating layout
            title={""}
          />
        </div>

        <Footer isDark={true} />
      </main>
    </Layout>
  );
}
