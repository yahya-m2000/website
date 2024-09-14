"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Menu } from "@mui/icons-material";
import { IconButton, Drawer } from "@mui/material";
import { cleanUrlString } from "@/utils/cleanURLstring";

const NavItem: React.FC<{
  label: string;
  isDark: boolean;
  dropdownOpen: boolean;
  onClick: () => void;
  isSelected: boolean;
}> = ({ label, isDark, dropdownOpen, onClick, isSelected }) => (
  <p
    onClick={onClick}
    className={clsx(
      "relative font-assistant font-medium text-lg cursor-pointer whitespace-nowrap mr-[2vw] mt-[2vh] after:content-[''] after:absolute after:left-0 after:top-[5vh] after:w-full after:h-[2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left z-30 transition-all",
      isSelected
        ? "text-primary after:bg-primary"
        : dropdownOpen
        ? "text-black after:bg-primary"
        : isDark
        ? "text-white after:bg-white"
        : "text-black after:bg-white"
    )}
  >
    {label}
  </p>
);

const Logo: React.FC<{ isDark: boolean; dropdownOpen: boolean }> = ({
  isDark,
  dropdownOpen,
}) => (
  <div className="flex flex-1">
    <Link href="/">
      <Image
        src={require("../../assets/images/logo1.png")}
        alt="Logo"
        className={clsx(
          "transition-all duration-300 ease-in-out hover:scale-105 w-[125px] lg:w-[150px]",
          dropdownOpen ? "invert" : isDark ? "" : "invert"
        )}
      />
    </Link>
  </div>
);

const DrawerToggle: React.FC<{ isDark: boolean; toggleDrawer: () => void }> = ({
  isDark,
  toggleDrawer,
}) => (
  <IconButton onClick={toggleDrawer} className="block lg:!hidden z-2">
    <Menu className={clsx("font-4xl", isDark ? "text-white" : "text-black")} />
  </IconButton>
);

const Header: React.FC<{ isDark?: boolean; navigationTabs: any[] }> = ({
  isDark = false,
  navigationTabs,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handleNavClick = (navIndex: number) => {
    if (selectedNav === navIndex) {
      setSelectedNav(null);
      setDropdownOpen(false);
    } else {
      setSelectedNav(navIndex);
      setDropdownOpen(true);
    }
  };

  return (
    <>
      <div
        className={clsx(
          dropdownOpen
            ? "fixed inset-0 bg-slate-200 bg-opacity-25 z-[30] backdrop-brightness-50 duration-750"
            : "hidden fixed inset-0 bg-slate-200 bg-opacity-0 z-[0]  duration-750"
        )}
      />

      <header
        ref={headerRef}
        className={clsx(
          "absolute main flex flex-row lg:flex-col justify-between lg-justify-normal left-0 w-full z-[50] transition-all duration-300 ease-in-out",
          dropdownOpen ? "shadow-lg bg-white " : ""
        )}
      >
        <Logo isDark={isDark} dropdownOpen={dropdownOpen} />

        <div className="hidden lg:flex items-end h-[auto]">
          {navigationTabs.map((navItem, index) => (
            <NavItem
              key={index}
              label={navItem.title}
              isDark={isDark}
              dropdownOpen={dropdownOpen}
              onClick={() => handleNavClick(index)} // Set selected navigation
              isSelected={selectedNav === index}
            />
          ))}
        </div>

        <DrawerToggle isDark={isDark} toggleDrawer={toggleDrawer} />

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <div className="w-[50vw] p-[4vh_4vh] bg-black h-full flex flex-col">
            {navigationTabs.map((tab, index) => (
              <Link href={`/${tab.slug}`} passHref key={index}>
                <p className="font-assistant mb-6 text-white">{tab.title}</p>
              </Link>
            ))}
          </div>
        </Drawer>

        <div
          ref={dropdownRef}
          className={clsx(
            "absolute main hidden lg:!block left-0 w-full z-[10] duration-500 ease-in-out",
            dropdownOpen
              ? "top-full h-[32vh] opacity-100 translate-y-0 bg-white backdrop-blur-sm shadow-lg"
              : "top-full opacity-0 h-0"
          )}
        >
          <div>
            <h3 className="font-bold font-assistant text-lg pb-[2vh]">
              {navigationTabs[selectedNav!]?.title}
            </h3>
            <ul>
              {navigationTabs[selectedNav!]?.tabs?.map(
                (tab: string, index: number) => (
                  <li
                    key={index}
                    className="text-gray-500 text-lg font-assistant hover:cursor-pointer hover:text-black"
                  >
                    <Link
                      href={`/${
                        navigationTabs[selectedNav!]?.slug
                      }/${cleanUrlString(tab)}`}
                    >
                      {tab}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
