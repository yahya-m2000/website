import { Footer, Header, Layout, Paragraph } from "@/components/ui";
import HeroImage from "./components/ui/HeroImage";
import FeaturedInsights from "./components/home/FeaturedInsights";
import TrendingCarousel from "./components/home/TrendingCarousel";
import bgImage from "@/assets/images/home_background.jpg";
import { fetchEntries, fetchNavigation } from "@/lib/contentful";

// Server component for Home page
export default async function Home() {
  // Fetch insights and navigation server-side inside this async function
  const insights = await fetchEntries("article");
  const navigationTabs = await fetchNavigation("navigation");

  return (
    <Layout>
      <main>
        {/* Pass the fetched navigationTabs data to the Header component */}
        <Header isDark={true} navigationTabs={navigationTabs} />
        <HeroImage
          title={"Placeholder Featured Insight #1 Technology"}
          subtitle="Placeholder Subtitle!!!"
          heroImage={bgImage}
          tag={"Technology"}
          body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim v..."
          author={"Test"}
          date={"01 January 2025"}
          basePath=""
          images={[]}
        />
        {/* Pass the fetched insights data to the FeaturedInsights component */}
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
