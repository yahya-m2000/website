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
  isDark,
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
              scrolled && !isDark,
            "text-white hover:text-white hover:underline hover:font-bold decoration-white":
              !scrolled || isDark,
          }
        )}
        style={{ minWidth: "120px" }}
      >
        {label}
      </p>
    </Link>
  );
};

const EasternTradeGroupLogo: React.FC<EasternTradeGroupLogoProps> = ({
  scrolled,
  isDark,
}) => {
  return (
    <div className="flex items-center lg:justify-start justify-center flex-1">
      <Link href="/">
        <Image
          src={require("../../assets/images/logo.png")}
          objectFit="contain"
          alt="Logo"
          className={clsx(
            "transition-all duration-300 ease-in-out hover:scale-105",
            {
              "w-[90px] md:w-[100px]": scrolled,
              "w-[90px] md:w-[125px]": !scrolled,
              "invert-0": isDark || !scrolled,
            }
          )}
          style={{
            filter: scrolled && !isDark ? "invert(1)" : "invert(0)",
          }}
        />
      </Link>
    </div>
  );
};

const Header: React.FC<{ isDark?: boolean }> = ({ isDark = false }) => {
  const { scrolled, nearBottom } = useScroll();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <header
      className={clsx(
        "flex px-[2vw] lg:py-0 py-[2vh] justify-between  lg:pb-[2vh] items-end fixed top-0 left-0 right-0 z-[100] backdrop-blur-[4px] border-b-white-transparent border-b-[0.5px] transition-all duration-300 ease-in-out",
        {
          "bg-[rgba(0,0,0,0.5)] text-white": isDark, // Dark mode
          "bg-[rgba(255,255,255,1)] text-black":
            scrolled && !nearBottom && !isDark, // Light mode when scrolled
          "bg-[rgba(0,0,0,0)] text-white": !scrolled && !isDark, // Light mode when not scrolled
          "h-auto -translate-y-full": nearBottom,
        }
      )}
    >
      <EasternTradeGroupLogo scrolled={scrolled} isDark={isDark} />

      {/* Navigation links */}
      <div className="hidden lg:flex items-end h-[100px] flex-grow-0">
        {navLinks.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            scrolled={scrolled}
            isDark={isDark} // Pass isDark to NavLink
          />
        ))}
      </div>

      {/* Drawer for mobile */}
      <IconButton
        onClick={toggleDrawer}
        className={clsx(
          "absolute left-4 top-[50%] translate-y-[-50%] z-2 lg:hidden",
          { "text-white": isDark || !scrolled, "text-black": scrolled }
        )}
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
