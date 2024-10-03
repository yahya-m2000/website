import { Footer, Header, Layout, Paragraph } from "@/components/ui";
import { FeaturedInsights, TrendingCarousel } from "@/components/pages/home";
import { renderHeroImage } from "./lib/common/src/ui/renderHeroImage";
import { placeholderHeroImage } from "./assets/data/placeholderHeroImage";
import {
  fetchInsights,
  fetchInsightBySlug,
  fetchNavigation,
  fetchPageContent,
} from "@/lib/api/src/contentful";

export default async function Home() {
  const [insights, navigationTabs, aboutUsContent] = await Promise.all([
    fetchInsights("article").then((res) => res || []), // Fallback to an empty array if null or undefined
    fetchNavigation("navigation"),
    fetchPageContent("pageContent").then((pages) =>
      pages?.find((page) => page.slug === "about-us")
    ),
  ]);

  // featured insight or project for the hero image
  const featuredInsight = insights.find((insight) => insight.isFeatured);

  let featuredHeroImage = null;
  if (featuredInsight) {
    featuredHeroImage = await fetchInsightBySlug(
      "article",
      featuredInsight.slug
    );
  }

  // Rendering
  return (
    <Layout>
      <main>
        <Header isDark={true} navigationTabs={navigationTabs} />

        {/* HeroImage rendering */}
        {renderHeroImage(
          featuredHeroImage
            ? {
                title: featuredHeroImage[0].title,
                subtitle: featuredHeroImage[0].subtitle,
                heroImage: featuredHeroImage[0].heroImage,
                tags: featuredHeroImage[0].tags,
                author: featuredHeroImage[0].author,
                date: featuredHeroImage[0].date,
                body: "",
                basePath: "",
              }
            : placeholderHeroImage
        )}

        <FeaturedInsights insights={insights} />

        {/* About Us Section (Paragraph) */}
        {aboutUsContent ? (
          <Paragraph
            title={aboutUsContent.title}
            text={aboutUsContent.subtitle}
            buttonUrl="/contact"
            image={
              aboutUsContent.heroImage || "https://via.placeholder.com/600x400"
            }
          />
        ) : (
          <p>About Us content not available.</p>
        )}

        <TrendingCarousel />
        <Footer isDark={false} />
      </main>
    </Layout>
  );
}
