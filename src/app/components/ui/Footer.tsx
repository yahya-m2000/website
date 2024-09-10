"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

const mockLinks = [
  { title: "About Us", url: "/about" },
  { title: "Our Mission", url: "/mission" },
  { title: "Insights", url: "/insights" },
  { title: "Projects", url: "/projects" },
  { title: "Services", url: "/services" },
  { title: "Contact", url: "/contact" },
  { title: "Careers", url: "/careers" },
  { title: "Press", url: "/press" },
  { title: "Blog", url: "/blog" },
  { title: "Privacy Policy", url: "/privacy-policy" },
  { title: "Terms of Service", url: "/terms-of-service" },
];

type FooterProps = {
  isDark?: boolean;
};

// Footer component
const Footer: React.FC<FooterProps> = ({ isDark }) => {
  // Divide mockLinks into columns of 3 links each
  const groupedLinks = [];
  for (let i = 0; i < mockLinks.length; i += 3) {
    groupedLinks.push(mockLinks.slice(i, i + 3));
  }

  return (
    <footer className={clsx(isDark ? "bg-black" : "bg-background-paper")}>
      <div className="main py-0 flex flex-col lg:flex-row lg:text-left items-center">
        {/* Logo */}
        <div className="flex justify-center items-center w-[200px] h-[200px]">
          <Image
            src={require("../../assets/images/logo.png")}
            layout="responsive"
            width={100}
            height={100}
            alt="Logo"
            style={{
              filter: isDark ? "invert(0)" : "invert(1)",
            }}
          />
        </div>

        {/* Links - Render as multiple columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 md:gap-x-12">
          {/* Links */}
          {mockLinks.map((group, index) => (
            <div key={index} className="text-center md:text-left">
              <a
                href={group.url}
                className={clsx(
                  "font-assistant text-lg hover:underline",
                  isDark ? "text-white" : "text-black"
                )}
              >
                {group.title}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright section */}
      <div className="flex flex-row justify-between items-center mt-6">
        <p
          className={clsx(
            "font-assistant text-sm",
            isDark ? "text-white" : "text-black"
          )}
        >
          Copyright © 2024 The Eastern Trade Group LLC
        </p>
        <div
          className={clsx(
            "w-[100px] h-[20px] border-[2px]",
            isDark ? "border-white" : "border-black"
          )}
        />
      </div>
    </footer>
  );
};

export default Footer;
