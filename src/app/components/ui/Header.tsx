"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconButton, Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";
import clsx from "clsx";
import { navigationDataWithTabs } from "@/assets/mockData/tabsData";

type NavigationKeys = keyof typeof navigationDataWithTabs;

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
      "relative font-assistant font-medium text-lg cursor-pointer whitespace-nowrap mr-[2vw] after:content-[''] after:absolute after:left-0 after:top-[5vh] after:w-full after:h-[2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left z-30 transition-all",
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

const Header: React.FC<{ isDark?: boolean }> = ({ isDark = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState<NavigationKeys | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null); // Ref for the header

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handleNavClick = (navKey: NavigationKeys) => {
    if (selectedNav === navKey) {
      setSelectedNav(null);
      setDropdownOpen(false);
    } else {
      setSelectedNav(navKey);
      setDropdownOpen(true);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) && // Check against headerRef
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
        setSelectedNav(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, headerRef]);

  // Close dropdown on window resize for smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && dropdownOpen) {
        setDropdownOpen(false);
      }
      if (window.innerWidth > 1024 && drawerOpen) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dropdownOpen]);

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
        ref={headerRef} // Attach ref to header
        className={clsx(
          "absolute main flex flex-row lg:flex-col justify-between lg-justify-normal left-0 w-full z-[50] transition-all duration-300 ease-in-out",
          dropdownOpen ? "shadow-lg bg-white " : ""
        )}
      >
        <Logo isDark={isDark} dropdownOpen={dropdownOpen} />

        <div className="hidden lg:flex items-end h-[auto]">
          {Object.keys(navigationDataWithTabs).map((key) => (
            <NavItem
              key={key}
              label={navigationDataWithTabs[key as NavigationKeys].title}
              isDark={isDark}
              dropdownOpen={dropdownOpen}
              onClick={() => handleNavClick(key as NavigationKeys)}
              isSelected={selectedNav === key} // Check if this is the selected item
            />
          ))}
        </div>

        <DrawerToggle isDark={isDark} toggleDrawer={toggleDrawer} />

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <div className="w-[50vw] p-[4vh_4vh] bg-black h-full flex flex-col">
            {Object.keys(navigationDataWithTabs).map((key) => (
              <Link href={`/${key}`} passHref key={key}>
                <p className="font-assistant mb-6 text-white">
                  {navigationDataWithTabs[key as NavigationKeys].title}
                </p>
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
          <div className=" ">
            <h3 className="font-bold font-assistant text-b;acl text-lg pb-[2vh]">
              {navigationDataWithTabs[selectedNav!]?.title}
            </h3>
            <ul>
              {navigationDataWithTabs[selectedNav!]?.tabs?.map(
                (tab: string, index: number) => (
                  <li
                    key={index}
                    className="text-gray-500 text-lg font-assistant hover:cursor-pointer hover:text-black"
                  >
                    {tab}
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
