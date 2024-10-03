import { Footer, Header, HeroImage, Layout } from "@/components/ui";
import { fetchNavigation, fetchPageContent } from "@/lib/api/src/contentful";
import React from "react";
import Section from "@/components/ui/Section";

export default async function Page() {
  const navigationTabs = await fetchNavigation("navigation");

  let content: PageContent | null = null;
  const pageContentData = await fetchPageContent("pageContent");

  if (pageContentData) {
    content =
      pageContentData.find((page: PageContent) => page.slug === "about-us") ||
      null;
  }

  let title = "";
  let subtitle = "";
  let heroImage = "";
  let sections: Section[] | undefined;

  if (content) {
    title = content.title;
    subtitle = content.subtitle;
    heroImage = content.heroImage;
    sections = content.sections;
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
