import { Footer, Header, HeroImage, Layout } from "./components/ui";
import { fetchNavigation } from "@/lib/api/src/contentful";

export default async function NotFound() {
  const navigationTabs = await fetchNavigation("navigation");
  return (
    <Layout>
      <main>
        <Header isDark={true} navigationTabs={navigationTabs} />
        <HeroImage
          title={"404 Not Found"}
          subtitle=""
          heroImage={""}
          body={""}
          date={""}
          basePath={""}
          images={[]}
        />
        <Footer />
      </main>
    </Layout>
  );
}
