"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { juliusSansOne } from "../../fonts";

const bgImage =
  "https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const HeroImage = () => {
  return (
    <Box
      className="relative h-[75vh] bg-cover bg-center flex items-center justify-center border-b-[2.5vh] border-primary"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <Box className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 backdrop-blur-[4px] z-1" />

      {/* Content */}
      <Typography
        className={`${juliusSansOne.className} relative text-white text-center z-20 text-base tracking-wider mx-[10vw]`}
      >
        WE BELIEVE IN INNOVATION AND, MORE IMPORTANTLY, THE INNOVATORS
        THEMSELVES.
      </Typography>
    </Box>
  );
};

export default HeroImage;
