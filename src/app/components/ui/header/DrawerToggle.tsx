// DrawerToggle.tsx
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import clsx from "clsx";
import React from "react";

const DrawerToggle: React.FC<DrawerToggleProps> = ({
  isDark,
  toggleDrawer,
}) => (
  <IconButton onClick={toggleDrawer} className="block lg:!hidden z-2">
    <Menu className={clsx("font-4xl", isDark ? "text-white" : "text-black")} />
  </IconButton>
);

export default DrawerToggle;
