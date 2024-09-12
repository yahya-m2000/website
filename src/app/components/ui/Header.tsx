"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconButton, Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";
import clsx from "clsx";
import { navigationData } from "@/lib/constants";

const NavItem: React.FC<HeaderProps> = ({ href, label, isDark, onClick }) => {
  return (
    <Link href={href} passHref>
      <p
        onClick={onClick}
        className={clsx(
          "font-assistant font-medium text-lg cursor-pointer text-center whitespace-nowrap",
          isDark ? "text-white hover:underline" : "text-black hover:underline",
          "min-w-[120px]"
        )}
      >
        {label}
      </p>
    </Link>
  );
};

const Logo: React.FC<HeaderProps> = ({ isDark }) => {
  return (
    <div className="flex flex-1">
      <Link href="/">
        <Image
          src={require("../../assets/images/logo1.png")}
          alt="Logo"
          className={clsx(
            "transition-all duration-300 ease-in-out hover:scale-105 w-[125px] lg:w-[200px]",
            {
              invert: !isDark,
            }
          )}
        />
      </Link>
    </div>
  );
};

const DrawerToggle: React.FC<DrawerToggleProps> = ({
  isDark,
  toggleDrawer,
}) => {
  return (
    <IconButton onClick={toggleDrawer} className="z-2 block lg:hidden">
      <Menu
        className={clsx("font-4xl", isDark ? "text-white" : "text-black")}
      />
    </IconButton>
  );
};

const Header: React.FC<{
  isDark?: boolean;
}> = ({ isDark = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <header
      className={clsx(
        "main lg:py-[2vh] flex flex-row lg:flex-col justify-between lg-justify-normal absolute left-0 right-0 z-[100] border-b-white border-opacity-30 border-b-[1px]",
        {}
      )}
    >
      <Logo isDark={isDark} href={""} />

      {/* Navigation links */}
      <div className="hidden lg:flex items-end h-[auto] flex-grow-0">
        {navigationData.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            isDark={isDark}
          />
        ))}
      </div>
      <DrawerToggle isDark={isDark} toggleDrawer={toggleDrawer} />

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div className="w-[50vw] p-[4vh_4vh] bg-black h-full flex flex-col">
          {navigationData.map((item) => (
            <Link href={item.href} passHref key={item.href}>
              <p className="font-assistant mb-6 text-white">{item.label}</p>
            </Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
