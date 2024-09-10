"use client";
import React from "react";
import { Footer, Header, Layout, Paragraph } from "@/components/ui";
import HeroImage from "@/components/ui/HeroImage";
import bgImage from "@/assets/images/projects_background.png";

export default function Projects() {
  return (
    <Layout>
      <main className="hide-scrollbar">
        <Header isDark={true} />
        <HeroImage
          title={"Services"}
          backgroundImage={bgImage}
          body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v..."
          tag={""}
          author={""}
          date={""}
        />
        <div className="main">
          <Paragraph
            title="What we offer"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v..."
            image=""
          />
        </div>

        <Footer isDark={true} />
      </main>
    </Layout>
  );
}
