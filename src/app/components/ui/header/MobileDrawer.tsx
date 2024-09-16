import { Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";
import Link from "next/link";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { cleanUrlString } from "@/lib/common/src/utils";

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  drawerOpen,
  closeDrawer,
  navigationTabs,
  selectedNav,
  handleNavClick,
  drawerRef,
  dropdownRef,
  isDark,
}) => {
  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={closeDrawer}
      ref={drawerRef}
    >
      <div className="w-[100vw] p-[4vh_4vh] bg-white h-full flex flex-col transition-all duration-300 ease-in-out">
        {/* top section with logo and close button */}
        <div className="flex justify-between items-center p-[2vh]">
          <Logo isDark={isDark} dropdownOpen={drawerOpen} />
          <IconButton onClick={closeDrawer}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className="flex flex-row">
          {/* navigation items container */}
          <div
            className={clsx(
              "flex flex-col pr-[4vw] transition-all duration-300 ease-in-out",
              selectedNav !== null ? "flex-[0.3]" : "flex-[1]" // adjust width when a nav item is selected
            )}
          >
            {navigationTabs.map((navItem, index) => (
              <NavItem
                key={index}
                label={navItem.title}
                isDark={isDark}
                dropdownOpen={drawerOpen}
                onClick={() => handleNavClick(index)}
                isSelected={selectedNav === index}
                isInDrawer={true}
              />
            ))}
          </div>

          {/* selected nav content */}
          {selectedNav !== null && (
            <div
              ref={dropdownRef}
              className="flex-1 transition-all duration-300 ease-in-out"
            >
              <div>
                <h3 className="font-bold font-assistant text-lg pb-[2vh]">
                  {navigationTabs[selectedNav]?.title}
                </h3>
                <ul>
                  {navigationTabs[selectedNav]?.tabs?.map((tab, index) => (
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
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default MobileDrawer;
