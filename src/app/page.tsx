import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Adjust the import path as necessary
import Header from "./components/Header";
import HeroImage from "./components/home/HeroImage";
import Layout from "./components/Layout";
import OurVision from "./components/home/OurVision";
import WhoWeAre from "./components/home/WhoWeAre";
import OurMission from "./components/home/OurMission";
import LatestInsights from "./components/home/LatestInsights";
import Footer from "./components/Footer";
import LetsConnect from "./components/home/LetsConnect";

export default function Home() {
  return (

        <Layout>
      <main>
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
