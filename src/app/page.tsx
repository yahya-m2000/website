import { Footer, Header, Layout, Paragraph } from "@/components/ui";
import FeaturedInsights from "./components/home/FeaturedInsights";
import HeroImage from "./components/home/HeroImage";
import bgImage from "@/assets/images/home_background.jpg"; // Ensure this path is correct

export default function Home() {
  return (
    <Layout>
      <main className="hide-scrollbar ">
        <Header />
        <HeroImage
          title={"Placeholder Featured Insight"}
          backgroundImage={bgImage}
          tag={"Technology"}
          body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim v..."
          author={"Test"}
          date={"01 January 2025"}
        />
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

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <p className="text-4xl">Test</p>
//     </div>
//   );
// }
