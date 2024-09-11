"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconButton, Drawer } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import clsx from "clsx";
import { useScroll } from "@/context/ScrollContext";

const navLinks = [
  { href: "/about", label: "About us" },
  { href: "/insights", label: "Insights" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  ,
];

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

  isDark && scrolled ? "text-white" : "text-black";
  const hoverColor = noAnimations
    ? "hover:underline"
    : isDark
    ? "hover:text-primary"
    : "hover:text-black";

  return (
    <Link href={href} passHref>
      <p
        onClick={onClick}
        className={`font-assistant font-light text-lg cursor-pointer ml-[1vw] text-center whitespace-nowrap ${textColor} ${hoverColor}`}
        style={{ minWidth: "120px" }}
      >
        {label}
      </p>
    </Link>
  );
};

// Logo component
const EasternTradeGroupLogo: React.FC<HeaderProps> = ({
  scrolled,
  isDark,
  noAnimations,
}) => {
  const logoWidth = noAnimations || !scrolled ? "w-[125px]" : "w-[100px]";
  const filterStyle = noAnimations
    ? "invert(1)"
    : scrolled && !isDark
    ? "invert(1)"
    : "invert(0)";

  return (
    <div className="flex items-center lg:justify-start justify-center flex-1">
      <Link href="/">
        <Image
          src={require("../../assets/images/logo.png")}
          objectFit="contain"
          alt="Logo"
          className={`transition-all duration-300 ease-in-out hover:scale-105 ${logoWidth}`}
          style={{ filter: filterStyle }}
        />
      </Link>
    </div>
  );
};

const Header: React.FC<{ isDark?: boolean; noAnimations?: boolean }> = ({
  isDark = false,
  noAnimations = false,
}) => {
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
        "flex px-[2vw] lg:py-0 py-[2vh] justify-between lg:pb-[2vh] items-end fixed top-0 left-0 right-0 z-[100] backdrop-blur-[4px] border-b-white-transparent border-b-[0.5px]",
        {
          "transition-all duration-300 ease-in-out": !noAnimations,
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
      <div className="hidden lg:flex items-end h-[100px] flex-grow-0">
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
        className={`absolute left-4 top-[50%] translate-y-[-50%] z-2 lg:hidden ${headerText}`}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div className="w-[250px] p-[4vh_4vh] bg-white h-full flex flex-col">
          {navLinks.map((item) => (
            <Link href={item.href} passHref key={item.href}>
              <p className="mb-6 font-semibold">{item.label}</p>
            </Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
