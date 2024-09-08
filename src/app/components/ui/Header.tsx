"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconButton, Drawer } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import clsx from "clsx";
import { useScroll } from "@/context/ScrollContext";

// Define navigation links
const navLinks = [
  { href: "/about", label: "About" },
  { href: "/mission", label: "Our Mission" },
  { href: "/insights", label: "Insights" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const drawerLinks = [
  { href: "/about", label: "About" },
  { href: "/mission", label: "Our Mission" },
  { href: "/insights", label: "Insights" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

// Navigation link component
const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  scrolled,
  onClick,
}) => {
  return (
    <Link href={href} passHref>
      <p
        onClick={onClick}
        className={clsx(
          "font-assistant font-light text-lg cursor-pointer ml-[1vw] text-center whitespace-nowrap",
          {
            "text-secondary hover:text-primary hover:underline decoration-primary":
              scrolled,
            "text-white hover:text-white hover:underline hover:font-bold decoration-white":
              !scrolled,
          }
        )}
        style={{ minWidth: "120px" }}
      >
        {label}
      </p>
    </Link>
  );
};

// Logo component
const EasternTradeGroupLogo: React.FC<EasternTradeGroupLogoProps> = ({
  scrolled,
}) => {
  return (
    <div className="flex items-center xl:justify-start lg:justify-center md:justify-center sm:justify-center justify-center xl:flex-0 lg:flex-1 md:flex-1 sm:flex-1 flex-1">
      <Link href="/">
        <Image
          src={require("../../assets/images/logo.png")}
          objectFit="contain"
          alt="Logo"
          className={clsx(
            "py-[10px] px-[8px] w-[150px] lg:w-[200px] xl:w-[200px] transition-transform duration-300 ease-in-out hover:scale-105",
            {
              "py-[10px] px-[16px] w-[150px] lg:w-[150px] xl:w-[175px]":
                scrolled,
            }
          )}
          style={{
            filter: scrolled ? "invert(1)" : "invert(0)",
            transition: "all 0.3s ease",
          }}
        />
      </Link>
    </div>
  );
};

const Header = () => {
  const { scrolled, nearBottom } = useScroll();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <header
      className={clsx(
        "flex justify-between content-center py-[1vh] items-end fixed top-0 left-0 right-0 z-[100] backdrop-blur-[4px] border-b-white-transparent border-b-[0.5px] transition-all duration-300 ease-in-out ",
        {
          "bg-[rgba(255,255,255,1)] h-auto": scrolled && !nearBottom,
          "bg-[rgba(255,255,255,1)] h-auto -translate-y-full": nearBottom,
          "bg-[rgba(0,0,0,0)] ": !scrolled && !nearBottom,
        }
      )}
    >
      <EasternTradeGroupLogo scrolled={scrolled} />

      {/* Navigation links */}
      <div className="hidden xl:flex items-end h-[100px] flex-grow-0">
        {navLinks.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            scrolled={scrolled}
          />
        ))}
      </div>

      {/* Drawer for mobile */}
      <IconButton
        onClick={toggleDrawer}
        className={`${
          scrolled ? "text-black" : "text-white"
        } absolute left-4 top-[50%] translate-y-[-50%] z-2 xl:hidden`}
        sx={{
          transform: nearBottom ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div className="w-[250px] p-[4vh_4vh] bg-white h-full flex flex-col">
          {drawerLinks.map((item) => (
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
