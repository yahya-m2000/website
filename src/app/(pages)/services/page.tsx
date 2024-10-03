import { Footer, Header, Layout, Paragraph } from "@/components/ui";
import HeroImage from "@/components/ui/HeroImage";
import {
  fetchNavigation,
  fetchPageContent,
  fetchParagraph,
} from "@/lib/api/src/contentful";
import ServiceTabs from "@/components/ui/services/Tabs";

export default async function Page() {
  const navigationTabs = await fetchNavigation("navigation");

  let content: PageContent | null = null;
  const pageContentData = await fetchPageContent("pageContent");

  if (pageContentData) {
    content =
      pageContentData.find((page: PageContent) => page.slug === "services") ||
      null;
  }

  let title = "";
  let subtitle = "";
  let heroImage = "";
  // let sections: Section[] | undefined;

  if (content) {
    title = content.title;
    subtitle = content.subtitle;
    heroImage = content.heroImage;
    // sections = content.sections;
  }

  const paragraphData = await fetchParagraph("paragraph");

  // Mock services data
  const servicesData = [
    {
      title: "Consulting",
      text: "Our consulting services help businesses navigate complex challenges...",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fit=crop&w=600&q=80",
    },
    {
      title: "Development",
      text: "We provide world-class development services to bring your ideas to life...",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=600&q=80",
    },
    {
      title: "Design",
      text: "Our design team focuses on creating visually stunning and user-friendly designs...",
      image:
        "https://images.unsplash.com/photo-1581091012184-9720b8b9a681?fit=crop&w=600&q=80",
    },
  ];

  // Ensure you are looking for the right slug or page identifier
  const paragraphContent = paragraphData?.find(
    (page) => page.slug === "services"
  ) || {
    title: "What we offer",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fit=crop&w=600&q=80",
  };

  return (
    <Layout>
      <main className="hide-scrollbar ">
        <Header isDark={true} navigationTabs={navigationTabs} />
        <HeroImage
          title={title}
          body={""}
          date={""}
          heroImage={heroImage}
          subtitle={subtitle}
          basePath={""}
        />

        <div className="">
          {/* Render the title */}
          <Paragraph
            title={paragraphContent.title}
            text={paragraphContent.body}
            image={paragraphContent.image}
            isReversed={true}
          />
        </div>

        <ServiceTabs services={servicesData} />
        <Footer isDark={true} />
      </main>
    </Layout>
  );
}
