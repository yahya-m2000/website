import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Adjust the import path as necessary
import Header from "./components/ui/Header";
import HeroImage from "./components/home/HeroImage";
import Layout from "./components/ui/Layout";
import OurVision from "./components/home/OurVision";
import WhoWeAre from "./components/home/WhoWeAre";
import OurMission from "./components/home/OurMission";
import LatestInsights from "./components/home/LatestInsights";
import Footer from "./components/ui/Footer";
import LetsConnect from "./components/home/LetsConnect";

export default function Home() {
  return (
    <Layout>
      <main className="overflow-y-scroll hide-scrollbar">
        <Header />
        <HeroImage />
        <OurVision />
        <WhoWeAre />
        <OurMission />
        <LatestInsights />
        <LetsConnect />
        <Footer />
      </main>
    </Layout>
  );
}
