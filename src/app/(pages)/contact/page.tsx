"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  Footer,
  Header,
  HorizontalCarousel,
  Layout,
  Paragraph,
} from "@/components/ui";
import HeaderBackground from "@/components/about/HeaderBackground";

const mockProjects = [
  {
    title: "Project 1",
    subtitle: "Subtitle 1",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Project 2",
    subtitle: "Subtitle 2",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Project 3",
    subtitle: "Subtitle 3",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Project 4",
    subtitle: "Subtitle 4",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Project 5",
    subtitle: "Subtitle 5",
    image: "https://via.placeholder.com/600x400",
  },
];
const Contact = () => {
  const totalItems = mockProjects.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };
  const getTranslateValue = (index: number) => {
    if (index === currentIndex) {
      return 0;
    } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
      return -100;
    } else if (index === (currentIndex + 1) % totalItems) {
      return 100;
    } else {
      return index < currentIndex ? -200 : 200;
    }
  };

  return (
    <Layout>
      <Header />
      <HeaderBackground text="Contact Us" />
      <Paragraph
        title="Our Story"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et eum fugiat quo voluptas nulla pariatur?"
        image="https://via.placeholder.com/600x400"
      />
      <Paragraph
        title="Our Purpose"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et eum fugiat quo voluptas nulla pariatur?"
        image="https://via.placeholder.com/600x400"
        isReversed={true}
      />
      <Paragraph
        title="Our Work"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et eum fugiat quo voluptas nulla pariatur?"
        isCentered={true}
      />
      <HorizontalCarousel
        items={mockProjects}
        currentIndex={currentIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
        getTranslateValue={getTranslateValue}
      />
      <Box className="mt-[100px]" />
      <Footer />
    </Layout>
  );
};

export default Contact;
