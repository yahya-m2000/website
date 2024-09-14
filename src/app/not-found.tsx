import { Footer, Header, HeroImage, Layout } from "./components/ui";

export default function NotFound() {
  return (
    <Layout>
      <main>
        <Header isDark={true} />
        <HeroImage
          title={"404 Not Found"}
          subtitle=""
          heroImage={""}
          body={""}
          date={""}
          basePath={""}
        />
        <Footer />
      </main>
    </Layout>
  );
}
