"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconButton, Drawer } from "@mui/material";
import { SortRounded } from "@mui/icons-material";
import clsx from "clsx";
import { useScroll } from "@/context/ScrollContext";

// Corrected navLinks array without a trailing comma
const navLinks = [
  { href: "/about", label: "About us" },
  { href: "/insights", label: "Insights" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

// Updated NavLink component
const NavLink: React.FC<HeaderProps> = ({
  href,
  label,
  scrolled,
  isDark,
  noAnimations,
  onClick,
}) => {
  const textColor = noAnimations
    ? "text-black"
    : isDark
    ? "text-white"
    : scrolled
    ? "text-black"
    : "text-white";

  const hoverColor = noAnimations
    ? "hover:underline"
    : isDark
    ? "hover:text-white"
    : "hover:underline";
  return (
    <Link href={href} passHref>
      <p
        onClick={onClick}
        className={`font-assistant font-medium text-lg cursor-pointer text-center whitespace-nowrap ${textColor} ${hoverColor}`}
        style={{ minWidth: "120px" }}
      >
        {label}
      </p>
    </Link>
  );
};

const EasternTradeGroupLogo: React.FC<HeaderProps> = ({
  scrolled,
  isDark,
  noAnimations,
}) => {
  const filterStyle = noAnimations
    ? "invert(1)"
    : scrolled && !isDark
    ? "invert(1)"
    : "invert(0)";

  return (
    <div className="flex flex-1">
      <Link href="/">
        <Image
          src={require("../../assets/images/logo1.png")}
          alt="Logo"
          className={clsx(
            `transition-all duration-300 ease-in-out hover:scale-105 w-[125px] lg:w-[200px]`,
            {
              "lg:w-[150px] lg:ml-[6px]": scrolled,
            }
          )}
          style={{ filter: filterStyle }}
        />
      </Link>
    </div>
  );
};

// Header component
const Header: React.FC<{
  isDark?: boolean;
  noAnimations?: boolean;
  scrolled?: boolean;
}> = ({ isDark = false, noAnimations = false }) => {
  const { scrolled, nearBottom } = useScroll();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const headerBg = noAnimations
    ? "bg-[rgba(255,255,255,1)]"
    : isDark
    ? "bg-[rgba(0,0,0,0.5)]"
    : scrolled && !nearBottom
    ? "bg-[rgba(255,255,255,1)]"
    : "bg-[rgba(0,0,0,0)]";

  const headerText = noAnimations
    ? "text-black"
    : isDark || !scrolled
    ? "text-white"
    : "text-black";

  return (
    <header
      className={clsx(
        "main  flex flex-col fixed top-0 left-0 right-0 z-[100] = border-b-white border-opacity-20 border-b-[0.5px]",
        {
          " bg-gradient-to-b from-black-transparent to-transparent": !scrolled,
          "transition-all duration-300 ease-in-out": scrolled,
          [headerBg]: true,
          [headerText]: true,
          "h-auto -translate-y-full": nearBottom,
        }
      )}
    >
      <EasternTradeGroupLogo
        scrolled={scrolled}
        isDark={isDark}
        noAnimations={noAnimations}
        href={""}
      />

      {/* Navigation links */}
      <div className="hidden lg:flex items-end h-[auto] flex-grow-0">
        {navLinks.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            scrolled={scrolled}
            isDark={isDark}
            noAnimations={noAnimations}
          />
        ))}
      </div>

      {/* Drawer for mobile */}
      <IconButton
        onClick={toggleDrawer}
        className={`absolute right-[4vw] md:right-[10vw] top-[50%] translate-y-[-50%] z-2 lg:hidden ${headerText}`}
      >
        <SortRounded />
      </IconButton>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div className="w-[50vw] p-[4vh_4vh] bg-black  h-full flex flex-col">
          {navLinks.map((item) => (
            <Link href={item.href} passHref key={item.href}>
              <p className="font-assistant mb-6 text-white ">{item.label}</p>
            </Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
