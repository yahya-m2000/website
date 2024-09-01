"use client";
import React from "react";
import { Box, useTheme } from "@mui/material";
import { VisionText, AssistantText, OutlinedButton, StyledButton } from "../StyledComponents";

const WhoWeAre = () => {
  const theme = useTheme();

  const whoWeAreImage =
    "https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "60vh",
          backgroundImage: `url(${whoWeAreImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            zIndex: 1,
          }}
        />

        {/* Text and Button Container */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            marginLeft: "15vw",
            maxWidth: "800px",
            padding: "0 15px", // Add padding for mobile
            [theme.breakpoints.down("sm")]: {
              marginLeft: "5vw", // Reduce margin on smaller screens
              maxWidth: "90%", // Adjust the max-width on smaller screens
              padding: "0 10px", // Add padding for small screens
            },
          }}
        >
          <VisionText sx={{color:theme.palette.primary.main}}>Our Mission</VisionText>
          <AssistantText
            sx={{
              lineHeight: 1.5, // Adjust line height
              wordWrap: "break-word",
              overflowWrap: "break-word",

              color:theme.palette.primary.main,
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.9rem", // Smaller font on mobile
              },
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim v
          </AssistantText>
          <StyledButton variant="contained">Learn More</StyledButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
      </Box>
    </Box>
  );
};

export default WhoWeAre;
