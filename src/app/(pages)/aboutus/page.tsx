import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "@/app/components/ui/Layout";
import Header from "@/app/components/ui/Header";
import HeaderBackground from "@/app/components/aboutus/HeaderBackground";
import Paragraph from "@/app/components/aboutus/Paragraph";
import Footer from "@/app/components/ui/Footer";

const AboutUs = () => {
  return (
    <Layout>
      <Header />
      <HeaderBackground text="About Us" />
      <Paragraph
        title="test"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et eum fugiat quo voluptas nulla pariatur?"
        image="https://via.placeholder.com/600x400"
      />
      <Paragraph
        title="test"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et eum fugiat quo voluptas nulla pariatur?"
        image="https://via.placeholder.com/600x400"
        isReversed={true}
      />
      <Paragraph
        title="test"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et eum fugiat quo voluptas nulla pariatur?"
        isCentered={true}
      />
      <Footer />
    </Layout>
  );
};

export default AboutUs;
