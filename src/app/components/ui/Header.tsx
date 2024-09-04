"use client";
import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  useTheme,
  styled,
  IconButton,
  Drawer,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importing usePathname
import { inriaSerif } from "@/app/fonts";

const NavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100px",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  backgroundColor: theme.palette.background.default,
  backdropFilter: "blur(2px)",
  transition: "all 0.3s ease-in-out",

  [`@media (max-width: 2000px)`]: {
    flexDirection: "row",
  },
}));

const NavItem = styled(Typography)(({ theme }) => ({
  fontFamily: inriaSerif.style.fontFamily,
  fontSize: "1em",
  paddingInline: theme.spacing(4),
  cursor: "pointer",
  whiteSpace: "nowrap",
  color: theme.palette.text.primary,
}));

type NavItemLinkProps = {
  href: string;
  label: string;
  isScrolled: boolean;
  onClick?: () => void; // Optional click handler
  ignoreScroll?: boolean; // New prop to ignore scroll logic
};

const NavItemLink: React.FC<NavItemLinkProps> = ({
  href,
  label,
  isScrolled,
  onClick,
  ignoreScroll = false, // Defaults to false
}) => {
  const theme = useTheme();
  return (
    <Link href={href} passHref>
      <NavItem
        onClick={onClick}
        sx={{
          color:
            ignoreScroll || isScrolled
              ? theme.palette.text.primary
              : theme.palette.text.secondary,
        }}
      >
        {label}
      </NavItem>
    </Link>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname(); // Get the current path using usePathname

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > (60 * window.innerHeight) / 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  // Determine if we're on the home page
  const isHomePage = pathname === "/";

  return (
    <NavContainer
      className={`${
        isScrolled ? "bg-[rgba(255,255,255,0.9)]" : "bg-[rgba(0,0,0,0.25)]"
      }`}
    >
      <IconButton
        onClick={toggleDrawer}
        className={`${
          isScrolled ? "text-black" : "text-white"
        } flex lg:hidden z-2 pl-[4vw]`}
      >
        <MenuIcon />
      </IconButton>
      <Box className="hidden lg:flex items-center h-[100px]">
        <NavItemLink label="About Us" href="/aboutus" isScrolled={isScrolled} />
        <NavItemLink
          label="Services"
          href="/services"
          isScrolled={isScrolled}
        />
        <NavItemLink label="News" href="/news" isScrolled={isScrolled} />
      </Box>

      <Link href="/">
        <Image
          src={require("../../assets/images/logo.png")}
          objectFit="contain"
          alt="Logo"
          style={{
            filter: isScrolled ? "invert(1)" : "invert(0)",
            paddingBlock: "8px",
            width: "275px",
            paddingInline: "16px",
            zIndex: -1,
          }}
        />
      </Link>
      <IconButton
        onClick={toggleDrawer}
        className={`${
          isScrolled ? "text-black" : "text-white"
        } flex lg:hidden z-2 pl-[4vw]`}
      />

      <Box className="hidden lg:flex items-center h-[100px]">
        <NavItemLink
          label="Insights"
          href="/insights"
          isScrolled={isScrolled}
        />
        <NavItemLink
          label="Projects"
          href="/projects"
          isScrolled={isScrolled}
        />
        <NavItemLink label="Contact" href="/contact" isScrolled={isScrolled} />
      </Box>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box className="w-[250px] p-[4vh_2vh] bg-white h-full flex flex-col">
          {[
            { href: "/aboutus", label: "About Us" },
            { href: "/ourvision", label: "Our Vision" },
            { href: "/news", label: "News" },
            { href: "/services", label: "Services" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link href={item.href} passHref key={item.label}>
              <NavItem className="mb-6">{item.label}</NavItem>
            </Link>
          ))}
        </Box>
      </Drawer>
    </NavContainer>
  );
};

export default Header;
