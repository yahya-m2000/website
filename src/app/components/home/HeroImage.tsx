"use client";
import Box from "@mui/material/Box";
import { assistant } from "../../fonts";
import { SectionText, SectionTitle } from "../style";
import bgImage from "@/app/assets/images/home_background.jpg";
import Spacer from "../ui/Spacer";
import { useScroll } from "@/app/context/ScrollContext";
import clsx from "clsx";

const HeroImage = () => {
  const { scrolled } = useScroll(); // Use the scroll state

  return (
    <>
      {/* Spacer that simulates header height */}

      <Box
        className="relative h-[90vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        {/* Overlay */}
        <Box className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1" />

        {/* Content */}
        <Box
          className={clsx(
            "z-20 xl:ml-[10vw] lg:ml-[10vw] mx-[10vw] xl:w-[40vw] lg:w-[40vw] transition-all duration-500 ease-in-out",
            { "mt-[5vh]": !scrolled, "mt-[2vh]": scrolled }
          )}
        >
          <SectionText className={`${assistant.className} text-white mb-0`}>
            TAGS
          </SectionText>
          <SectionTitle
            className={`${assistant.className} text-white text-5xl break-words py-[1vh]`}
          >
            This is a Placeholder Featured Insight
          </SectionTitle>
          <SectionText className={`${assistant.className} text-white mb-0`}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim v...
          </SectionText>
          <Box className="flex row-auto justify-between">
            <SectionText className={`${assistant.className} text-white mb-0`}>
              AUTHOR
            </SectionText>
            <SectionText className={`${assistant.className} text-white mb-0`}>
              1 JANUARY 2025
            </SectionText>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroImage;
