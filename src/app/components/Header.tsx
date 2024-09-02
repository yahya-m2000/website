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

const NavItem = styled(Typography)(({ theme }) => ({
  fontFamily: inriaSerif.style.fontFamily,
  fontSize: "1em",
  paddingInline: theme.spacing(4),
  cursor: "pointer",
  whiteSpace: "nowrap",
}));

// Container for desktop and mobile navigation
const NavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "10vh",
  width: "100%",
  [`@media (max-width: 1200px)`]: {
    display: "none", // Hide on mobile view
  },
}));

// Mobile drawer toggle button container
const MobileNavContainer = styled(Box)(({ theme }) => ({
  display: "none",
  [`@media (max-width: 1200px)`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "10vh",
  },
}));

const Header = () => {
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > (60 * window.innerHeight) / 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 3,
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(0, 0, 0, 0)",
        backdropFilter: "blur(2px)",
        transition: "all 0.3s ease-in-out",
        padding: "0 2vw",
      }}
    >
      <NavContainer>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* <Link href="/aboutus" passHref> */}
          <NavItem
            variant="h6"
            sx={{
              color: isScrolled ? theme.palette.text.primary : theme.palette.text.secondary,
            }}
          >
            About Us
          </NavItem>
          {/* </Link> */}

          <Link href="/ourvision" passHref>
            <NavItem

              variant="h6"
              sx={{
                color: isScrolled ? theme.palette.text.primary : theme.palette.text.secondary,
              }}
            >
              Our Vision
            </NavItem>
          </Link>
          <Link href="/news" passHref>
            <NavItem

              variant="h6"
              sx={{
                color: isScrolled ? theme.palette.text.primary : theme.palette.text.secondary,
              }}
            >
              News
            </NavItem>
          </Link>
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
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", height: "10vh" }}>
          <Link href="/services" passHref>
            <NavItem

              variant="h6"
              sx={{
                color: isScrolled ? theme.palette.text.primary : theme.palette.text.secondary,
              }}
            >
              Services
            </NavItem>
          </Link>
          <Link href="/placeholder" passHref>
            <NavItem

              variant="h6"
              sx={{
                color: isScrolled ? theme.palette.text.primary : theme.palette.text.secondary,
              }}
            >
              Placeholder
            </NavItem>
          </Link>
          <Link href="/contact" passHref>
            <NavItem

              variant="h6"
              sx={{
                color: isScrolled ? theme.palette.text.primary : theme.palette.text.secondary,
              }}
            >
              Contact
            </NavItem>
          </Link>
        </Box>
      </NavContainer>

      <MobileNavContainer>
        <IconButton
          onClick={toggleDrawer}
          sx={{
            color: isScrolled ? theme.palette.text.primary : theme.palette.text.secondary, position: "relative",
            zIndex: 2, // Ensure the hamburger icon is above other elements
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box>
          <Image
            src={require("../assets/images/logo.png")}
            layout="fill"
            objectFit="contain"
            alt="Logo"
            style={{
              filter: isScrolled ? "invert(1)" : "invert(0)",
              paddingBlock: "1vh",
            }}
          />
        </Box>

        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <Box
            sx={{
              width: 250,
              padding: "2vh",
              paddingBlock: "4vh",
              backgroundColor: theme.palette.background.default,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link href="/aboutus" passHref>
              <NavItem

                variant="h6"
                sx={{ color: theme.palette.text.primary, marginBottom: theme.spacing(3) }}
              >
                About Us
              </NavItem>
            </Link>
            <Link href="/ourvision" passHref>
              <NavItem

                variant="h6"
                sx={{ color: theme.palette.text.primary, marginBottom: theme.spacing(3) }}
              >
                Our Vision
              </NavItem>
            </Link>
            <Link href="/news" passHref>
              <NavItem

                variant="h6"
                sx={{ color: theme.palette.text.primary, marginBottom: theme.spacing(3) }}
              >
                News
              </NavItem>
            </Link>
            <Link href="/services" passHref>
              <NavItem

                variant="h6"
                sx={{ color: theme.palette.text.primary, marginBottom: theme.spacing(3) }}
              >
                Services
              </NavItem>
            </Link>
            <Link href="/placeholder" passHref>
              <NavItem

                variant="h6"
                sx={{ color: theme.palette.text.primary, marginBottom: theme.spacing(3) }}
              >
                Placeholder
              </NavItem>
            </Link>
            <Link href="/contact" passHref>
              <NavItem

                variant="h6"
                sx={{ color: theme.palette.text.primary, marginBottom: theme.spacing(3) }}
              >
                Contact
              </NavItem>
            </Link>
          </Box>
        </Drawer>
      </MobileNavContainer>
    </Box>
  );
};

export default Header;

