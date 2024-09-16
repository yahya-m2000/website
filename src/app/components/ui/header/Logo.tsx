import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import React from "react";

const Logo: React.FC<LogoProps> = ({
  isDark,
  dropdownOpen,
  isMobile = false,
}) => (
  <div className={clsx("flex", isMobile ? "justify-center mb-4" : "flex-1")}>
    <Link href="/">
      <Image
        src={require("../../../assets/images/logo1.png")}
        alt="Logo"
        className={clsx(
          "transition-all duration-300 ease-in-out hover:scale-105 w-[125px] lg:w-[150px]",
          dropdownOpen ? "invert" : isDark ? "" : "invert"
        )}
      />
    </Link>
  </div>
);

export default Logo;
