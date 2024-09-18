import { Footer, Header, HeroImage, Layout } from "@/components/ui";

import { fetchNavigation, fetchPageContent } from "@/lib/api/src/contentful";
import React from "react";
import ContactForm from "@/components/ui/form/ContactForm"; // Import the ContactForm component

export default async function ContactUs() {
  // Fetch navigation tabs
  const navigationTabs = await fetchNavigation("navigation");

  let content: PageContent | null = null;

  // Fetch page content
  const pageContentData = await fetchPageContent("pageContent");

  // Check if pageContentData contains the 'contact-us' slug
  if (pageContentData) {
    content =
      pageContentData.find((page: PageContent) => page.slug === "contact-us") ||
      null;
  }

  let title = "";
  let subtitle = "";
  let heroImage = "";
  let form: FormProps | undefined;

  // If it's regular page content
  if (content) {
    title = content.title;
    subtitle = content.subtitle;
    heroImage = content.heroImage;
    form = content.form; // Get the form data
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
          {/* Render the form if it exists */}
          {form && <ContactForm form={form} />}{" "}
          {/* Use ContactForm component */}
          {/* Render sections if they exist */}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
