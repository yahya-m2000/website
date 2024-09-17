import { Footer, Header, HeroImage, Layout } from "@/components/ui";
import { fetchNavigation, fetchPageContent } from "@/lib/api/src/contentful";
import React from "react";
import { Document } from "@contentful/rich-text-types";
import Section from "@/components/ui/Section";

type Section = {
  title: string;
  subtitle: string;
  body: Document;
  callToAction?: string;
  quote?: string;
  author?: string;
  image?: string;
};

type PageContent = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  date: string;
  sections?: Section[];
};

export default async function Page() {
  // Fetch navigation tabs
  const navigationTabs = await fetchNavigation("navigation");

  let content: PageContent | null = null;

  // Fetch page content
  const pageContentData = await fetchPageContent("pageContent");

  // Check if pageContentData contains the 'about-us' slug
  if (pageContentData) {
    content =
      pageContentData.find((page: PageContent) => page.slug === "about-us") ||
      null;
  }

  let title = "";
  let subtitle = "";
  let heroImage = "";
  let sections: Section[] | undefined;

  // If it's regular page content
  if (content) {
    title = content.title;
    subtitle = content.subtitle;
    heroImage = content.heroImage;
    sections = content.sections; // Get all sections
  }

  return (
    <Layout>
      <Header navigationTabs={navigationTabs} isDark={true} />
      <HeroImage
        title={title}
        body={""}
        date={""}
        heroImage={heroImage}
        subtitle={subtitle}
        basePath={""}
      />
      <div className="main flex flex-1 flex-col-reverse md:flex-row bg-white border-b border-b-slate-300 border-[1px]">
        <div className="flex-[1] h-full">
          <div className="sections-container ">
            {sections &&
              sections.map((section, index) => (
                <Section
                  key={index}
                  section={section}
                  isReversed={index % 2 === 1}
                />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
