import { Box, styled } from "@mui/material";

const Spacer = styled(Box)(({ scrolled }: { scrolled: boolean }) => ({
  height: scrolled ? "150px" : "500px", // Match the header height
  transition: "height 0.5s ease-in-out",
}));

export default Spacer;
