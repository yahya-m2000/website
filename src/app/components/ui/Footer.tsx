"use client";
import React from "react";
import Image from "next/image";
import { assistant } from "@/fonts/index";

// Footer component
const Footer = () => {
  return (
    <footer className="bg-background-paper">
      <div className="py-0 flex flex-col text-center lg:flex-row lg:text-left items-center">
        {/* Logo */}
        <div className="flex justify-center items-center w-[200px] h-[200px]">
          <Image
            src={require("../../assets/images/logo.png")}
            layout="responsive"
            width={100}
            height={100}
            alt="Logo"
          />
        </div>

        {/* Links */}
        <div className="flex flex-col lg:flex-row justify-around mt-10 lg:mt-10 lg:ml-[5vw] lg:space-x-20">
          <div className="flex flex-col items-center lg:items-start border-b lg:border-b-0 pb-4 lg:pb-0 lg:px-8">
            <p className="text-white font-assistant text-lg mb-4">
              Placeholder
            </p>
            <p className="text-white font-assistant text-lg mb-4">
              Placeholder
            </p>
            <p className="text-white font-assistant text-lg mb-4">
              Placeholder
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start border-b lg:border-b-0 pb-4 lg:pb-0 lg:px-8">
            <p className="text-white font-assistant text-lg mb-4">
              Placeholder
            </p>
            <p className="text-white font-assistant text-lg mb-4">
              Placeholder
            </p>
            <p className="text-white font-assistant text-lg mb-4">
              Placeholder
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start lg:px-8">
            <p className="text-white font-assistant text-lg mb-4">
              Placeholder
            </p>
            <p className="text-white font-assistant text-lg mb-4">
              Placeholder
            </p>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="flex flex-row justify-between items-center mt-6">
        <p className="text-white font-assistant text-sm">
          Copyright © 2024 The Eastern Trade Group LLC
        </p>
        <div className="w-[100px] h-[20px] border-[2px] border-white" />
      </div>
    </footer>
  );
};

export default Footer;
