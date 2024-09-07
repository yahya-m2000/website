"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Typography,
  Box,
  useTheme,
  styled,
  IconButton,
  Drawer,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { assistant } from "@/app/fonts";
import clsx from "clsx";
import { useScroll } from "@/app/context/ScrollContext";

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

type NavLinkProps = {
  href: string;
  label: string;
  scrolled: boolean;
  onClick?: () => void;
  overrideScrollStyle?: boolean;
};

type EasternTradeGroupLogoProps = {
  scrolled: boolean;
};

// styled
const Navbar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  // paddingInline: "8vw",
  paddingBlock: "1vh",
  height: "auto",
  alignItems: "end",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  backdropFilter: "blur(2px)",
  transition: "all 0.3s ease-in-out",
  borderBottom: `0.5px solid ${theme.palette.divider}`,
}));

const NavLinkText = styled(Typography)(({ theme }) => ({
  fontFamily: assistant.style.fontFamily,
  fontSize: "1.25rem",
  fontWeight: "200",
  cursor: "pointer",
  whiteSpace: "nowrap",
  color: theme.palette.text.primary,
}));

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  scrolled,
  onClick,
  overrideScrollStyle = false,
}) => {
  return (
    <Link href={href} passHref>
      <NavLinkText
        onClick={onClick}
        className={clsx(
          "font-light text-lg cursor-pointer ml-[1vw] text-center transition-all",
          {
            "text-text-primary hover:font-semibold":
              overrideScrollStyle || scrolled,
            "text-text-secondary hover:font-semibold":
              !scrolled && !overrideScrollStyle,
          }
        )}
        style={{
          minWidth: "120px",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </NavLinkText>
    </Link>
  );
};

const EasternTradeGroupLogo: React.FC<EasternTradeGroupLogoProps> = ({
  scrolled,
}) => {
  return (
    <Box className="flex items-center xl:justify-normal lg:justify-center  md:justify-center sm:justify-center justify-center xl:flex-0 lg:flex-1 md:flex-1 sm:flex-1 flex-1">
      <Link href="/">
        <Image
          src={require("../../assets/images/logo.png")}
          objectFit="contain"
          alt="Logo"
          style={{
            filter: scrolled ? "invert(1)" : "invert(0)",
            transition: "width 0.5s ease, filter 0.3s ease",
          }}
          className={clsx(
            "py-[10px] px-[16px] w-[100px] lg:w-[200px] xl:w-[275px]",
            {
              "py-[10px] px-[16px] w-[100px] lg:w-[125px] xl:w-[125px]":
                scrolled,
            }
          )}
        />
      </Link>
    </Box>
  );
};

const Header = () => {
  const { scrolled, nearBottom } = useScroll();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Navbar
      className={clsx("xl:px[10vw] lg:px[8vw] md:px[6vw] sm:px[6vw] px-[6vw]", {
        "bg-[rgba(255,255,255,0.9)] h-[auto] xl:px-[6vw] md:px-[4vw] sm:px-[4vw] px-[4vw]":
          scrolled && !nearBottom,
        "bg-[rgba(255,255,255,0.9)] h-[auto] lg:px-[6vw] -translate-y-full":
          nearBottom,
        "bg-[rgba(0,0,0,0)] ": !scrolled && !nearBottom,
      })}
    >
      <EasternTradeGroupLogo scrolled={scrolled} />

      {/* Updated: Navigation links container */}
      <Box className="hidden xl:flex items-end h-[100px]  flex-grow-0">
        {navLinks.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            scrolled={scrolled}
          />
        ))}
      </Box>

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
        <Box className="w-[250px] p-[4vh_2vh] bg-white h-full flex flex-col">
          {drawerLinks.map((item) => (
            <Link href={item.href} passHref key={item.href}>
              <NavLinkText className="mb-6">{item.label}</NavLinkText>
            </Link>
          ))}
        </Box>
      </Drawer>
    </Navbar>
  );
};

export default Header;
