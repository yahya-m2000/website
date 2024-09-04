import Header from "./components/ui/Header";
import HeroImage from "./components/home/HeroImage";
import Layout from "./components/ui/Layout";
import WhoWeAre from "./components/home/WhoWeAre";
import OurMission from "./components/home/OurMission";
import LatestInsights from "./components/home/LatestInsights";
import Paragraph from "./components/ui/Paragraph";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
    <Layout>
      <main className="overflow-y-scroll hide-scrollbar">
        <Header />
        <HeroImage />
        <Paragraph
          title="Our Vision"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v"
          isCentered={true}
          buttonUrl="/aboutus"
        />
        <WhoWeAre />
        <OurMission />
        <LatestInsights />
        <Paragraph
          title="Let's Connect"
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim v"
          isCentered={true}
          buttonUrl="/contact"
        />
        <Footer />
      </main>
    </Layout>
  );
}
