"use client";
import React from "react";
import clsx from "clsx";

const footerSections = [
  {
    heading: "ABOUT US",
    links: [
      { title: "Our Mission", url: "/mission" },
      { title: "Our Impact", url: "/impact" },
      { title: "Leadership and Governance", url: "/leadership" },
      { title: "Forum Statements", url: "/statements" },
      { title: "Partners", url: "/partners" },
      { title: "Sustainability at the Forum", url: "/sustainability" },
      { title: "History", url: "/history" },
      { title: "Careers", url: "/careers" },
      { title: "Contact Us", url: "/contact" },
    ],
  },
  {
    heading: "EVENTS",
    links: [
      { title: "Events", url: "/events" },
      { title: "Open Forum", url: "/open-forum" },
    ],
  },
  {
    heading: "MEDIA",
    links: [
      { title: "Press", url: "/press" },
      { title: "Subscribe to our press releases", url: "/press-releases" },
      { title: "Pictures", url: "/pictures" },
    ],
  },
  {
    heading: "MORE FROM THE GROUP",
    links: [
      { title: "Strategic Intelligence", url: "/strategic-intelligence" },
      { title: "UpLink", url: "/uplink" },
      { title: "Global Shapers", url: "/global-shapers" },
      { title: "Young Global Leaders", url: "/young-global-leaders" },
      { title: "Centre for the Fourth Industrial Revolution", url: "/cfir" },
    ],
  },
  {
    heading: "PARTNERS & MEMBERS",
    links: [
      { title: "Sign in", url: "/signin" },
      { title: "Join Us", url: "/join" },
    ],
  },
  {
    heading: "LANGUAGE EDITIONS",
    links: [
      { title: "English", url: "/en" },
      { title: "Español", url: "/es" },
      { title: "中文", url: "/cn" },
      { title: "日本語", url: "/jp" },
    ],
  },
];

type FooterProps = {
  isDark?: boolean;
};

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer
      className={clsx(isDark ? "bg-black" : "bg-background-paper", "py-8")}
    >
      <div className="main grid grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Render each section */}
        {footerSections.map((section, idx) => (
          <div key={idx}>
            {/* Section Heading */}
            <h4
              className={clsx(
                "font-assistant font-bold uppercase text-lg mb-4",
                isDark ? "text-white" : "text-black"
              )}
            >
              {section.heading}
            </h4>
            {/* Section Links */}
            <ul>
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx} className="mb-2">
                  <a
                    href={link.url}
                    className={clsx(
                      "font-assistant text-base hover:underline",
                      isDark ? "text-white" : "text-black"
                    )}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright section */}
      <div className="flex font-assistant px-[4vw] justify-between items-center">
        <p
          className={clsx(
            "font-assistant  text-sm",
            isDark ? "text-white" : "text-black"
          )}
        >
          Copyright © 2024 The Eastern Trade Group LLC. All rights reserved.{" "}
          <a href="/privacy-policy" className="hover:underline font-bold">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms-of-service" className="hover:underline font-bold">
            Terms of Use
          </a>
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
