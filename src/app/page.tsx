import { Footer, Header, Layout, Paragraph } from "@/components/ui";
import { FeaturedInsights, TrendingCarousel } from "@/components/pages/home";
import { renderHeroImage } from "./lib/common/src/ui/renderHeroImage";
import { placeholderHeroImage } from "./assets/data/placeholderHeroImage";

import {
  fetchInsights,
  fetchInsightBySlug,
  fetchNavigation,
} from "@/lib/api/src/contentful";

export default async function Home() {
  const [insights, navigationTabs] = await Promise.all([
    fetchInsights("article").then((res) => res || []), // Fallback to an empty array if null or undefined
    fetchNavigation("navigation"),
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
        <Paragraph
          title="About us"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v"
          buttonUrl="/contact"
          image="https://via.placeholder.com/600x400"
        />
        <TrendingCarousel />
        <Footer isDark={false} />
      </main>
    </Layout>
  );
}
