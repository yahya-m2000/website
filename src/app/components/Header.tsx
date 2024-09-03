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
import { inriaSerif } from "../fonts";
import Image from "next/image";
import Link from "next/link";

const NavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "10vh",
  width: "100%",
  padding: "0 2vw",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  backgroundColor: theme.palette.background.default,
  backdropFilter: "blur(2px)",
  transition: "all 0.3s ease-in-out",

  [`@media (max-width: 2000px)`]: {
    flexDirection: "row-reverse",
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
};

const NavItemLink: React.FC<NavItemLinkProps> = ({
  href,
  label,
  isScrolled,
  onClick,
}) => {
  const theme = useTheme();
  return (
    <Link href={href} passHref>
      <NavItem
        onClick={onClick}
        sx={{
          color: isScrolled
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

  return (
    <NavContainer
      className={`${
        isScrolled ? "bg-[rgba(255,255,255,0.9)]" : "bg-[rgba(0,0,0,0)]"
      }`}
    >
      <Box className="hidden lg:flex items-center h-[10vh]">
        <NavItemLink label="About Us" href="/aboutus" isScrolled={isScrolled} />
        <NavItemLink
          label="Our Vision"
          href="/ourvision"
          isScrolled={isScrolled}
        />
        <NavItemLink label="News" href="/news" isScrolled={isScrolled} />
      </Box>

      <Box>
        <Image
          src={require("../assets/images/logo.png")}
          layout="fill"
          objectFit="contain"
          alt="Logo"
          style={{
            filter: isScrolled ? "invert(1)" : "invert(0)",
            paddingBlock: "1vh",
            zIndex: -1,
          }}
        />
      </Box>

      <Box className="hidden lg:flex items-center h-[10vh]">
        <NavItemLink
          label="Services"
          href="/services"
          isScrolled={isScrolled}
        />
        <NavItemLink
          label="Placeholder"
          href="/placeholder"
          isScrolled={isScrolled}
        />
        <NavItemLink label="Contact" href="/contact" isScrolled={isScrolled} />
      </Box>

      <IconButton
        onClick={toggleDrawer}
        className={`${
          isScrolled ? "text-black" : "text-white"
        } flex lg:hidden z-2`}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box className="w-[250px] p-[4vh_2vh] bg-white h-full flex flex-col">
          {[
            { href: "/aboutus", label: "About Us" },
            { href: "/ourvision", label: "Our Vision" },
            { href: "/news", label: "News" },
            { href: "/services", label: "Services" },
            { href: "/placeholder", label: "Placeholder" },
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
