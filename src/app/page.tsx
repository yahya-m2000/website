import HeroImage from "./components/home/HeroImage";
import FeaturedInsights from "./components/home/FeaturedInsights";

import { Card, Footer, Header, Layout, Paragraph } from "./components/ui";

export default function Home() {
  return (
    <Layout>
      <main className="overflow-y-scroll hide-scrollbar">
        <Header />
        <HeroImage />
        <FeaturedInsights />
        <Paragraph
          title="Let's Connect"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v"
          buttonUrl="/contact"
          image="https://via.placeholder.com/600x400"
          isReversed={true}
        />
        <Footer />
      </main>
    </Layout>
  );
}
