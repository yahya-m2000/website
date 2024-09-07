"use client";
import { createContext, useContext, useState, useEffect } from "react";

type ScrollContextType = {
  scrolled: boolean;
  nearBottom: boolean;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Update `scrolled` when any scroll happens
      setScrolled(scrollTop > 0);

      // Check if we're near the bottom
      const bottomThreshold = docHeight - windowHeight * 1.1; // 10% from the bottom
      setNearBottom(scrollTop > bottomThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrolled, nearBottom }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
