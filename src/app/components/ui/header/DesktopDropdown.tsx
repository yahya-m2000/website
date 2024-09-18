import { cleanUrlString } from "@/lib/common/src/utils";
import Link from "next/link";
import clsx from "clsx";
import NavItem from "./NavItem"; // Assuming NavItem is a component you're using

export const DesktopDropdown: React.FC<DropdownMenuProps> = ({
  navigationTabs,
  dropdownOpen,
  dropdownRef,
  isMobile,
  selectedNav,
  handleNavClick,
  isDark,
}) => {
  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="hidden lg:flex items-end h-[auto]">
          {navigationTabs.map((navItem, index) => (
            <NavItem
              key={index}
              label={navItem.title}
              isDark={isDark}
              dropdownOpen={dropdownOpen}
              onClick={() => handleNavClick(index)}
              isSelected={selectedNav === index}
            />
          ))}
        </div>
      )}

      {/* Desktop Dropdown */}
      {!isMobile && selectedNav !== null && (
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
            <Link
              href={`/${cleanUrlString(navigationTabs[selectedNav]?.title)}`}
            >
              <h3 className="font-bold font-assistant text-lg pb-[2vh] text-gray-500 hover:text-black">
                {navigationTabs[selectedNav]?.title}
              </h3>
            </Link>
            <ul>
              {/* Conditionally render tabs if they exist */}
              {
                navigationTabs[selectedNav]?.tabs?.map((tab, index) => (
                  <li
                    key={index}
                    className="text-gray-500 text-lg font-assistant hover:cursor-pointer hover:text-black"
                  >
                    <Link
                      href={`/${
                        navigationTabs[selectedNav]?.slug
                      }/${cleanUrlString(tab)}`}
                    >
                      {tab}
                    </Link>
                  </li>
                )) || <p>No tabs available</p> /* Display message if no tabs */
              }
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default DesktopDropdown;
