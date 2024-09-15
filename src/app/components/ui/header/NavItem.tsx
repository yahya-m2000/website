// NavItem.tsx
import clsx from "clsx";
import React from "react";

interface NavItemProps {
  label: string;
  isDark: boolean;
  dropdownOpen: boolean;
  onClick: () => void;
  isSelected: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  isDark,
  dropdownOpen,
  onClick,
  isSelected,
}) => (
  <p
    onClick={onClick}
    className={clsx(
      "relative font-assistant font-medium text-lg cursor-pointer whitespace-nowrap mr-[2vw] mt-[2vh]",
      "after:content-[''] after:absolute after:left-0 after:top-[5vh] after:w-full after:h-[2px] after:scale-x-0 after:origin-left",
      "after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left z-30 transition-all",
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

export default NavItem;
