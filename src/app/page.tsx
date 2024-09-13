import { Footer, Header, Layout, Paragraph } from "@/components/ui";
import FeaturedInsights from "./components/home/FeaturedInsights";
import HeroImage from "./components/ui/HeroImage";
import bgImage from "@/assets/images/home_background.jpg";
import TrendingCarousel from "./components/home/TrendingCarousel";

export default function Home() {
  return (
    <Layout>
      <main>
        <Header isDark={true} />
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
        />
        <FeaturedInsights />
        <Paragraph
          title="About us"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v"
          buttonUrl="/contact"
          image="https://via.placeholder.com/600x400"
          // isReversed={true}
        />
        <TrendingCarousel />
        <Footer isDark={false} />
      </main>
    </Layout>
  );
}
