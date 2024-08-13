import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import HeroImage from "./components/home/HeroImage";
import Layout from "./layout";
import OurVision from "./components/home/OurVision";
import WhoWeAre from "./components/home/WhoWeAre";
import OurMission from "./components/home/OurMission";
import LatestInsights from "./components/home/LatestInsights";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Layout>
        <Header />
        <HeroImage />
        <OurVision />
        <WhoWeAre />
        <OurMission />
        <LatestInsights />
        <Footer />
      </Layout>
    </main>
  );
}
