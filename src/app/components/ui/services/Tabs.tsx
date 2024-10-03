"use client"; // This makes the component a client-side component

import React, { useState } from "react";
import Paragraph from "@/components/ui/Paragraph";

interface Service {
  title: string;
  text: string;
  image: string;
}

const ServiceTabs: React.FC<{ services: Service[] }> = ({ services }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Handle tab change
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      {/* Tabs for each service */}
      <div className="flex justify-between space-x-4 main py-0 border-b border-black ">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={`font-assistant px-4 py-2 rounded-md ${
              activeTab === index ? "text-black font-bold" : "text-gray-500"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Paragraph that updates based on the selected tab */}
      <Paragraph
        text={services[activeTab].text}
        image={services[activeTab].image}
        isReversed={activeTab % 2 === 0} // Reverse every second paragraph for alternating layout
        title={services[activeTab].title}
      />
    </div>
  );
};

export default ServiceTabs;
