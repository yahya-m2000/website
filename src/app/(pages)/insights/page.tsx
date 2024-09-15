import { Footer, Header, Layout } from "@/components/ui";
import HeroImage from "@/components/ui/HeroImage";
import CardGrid from "@/components/ui/card/CardGrid";
import { fetchInsights, fetchNavigation } from "@/lib/api/src/contentful";
import SearchBar from "@/components/ui/SearchBar";

export default async function Projects({
  searchParams,
}: {
  searchParams: { term?: string; tag?: string };
}) {
  const navigationTabs = await fetchNavigation("navigation");
  const allInsights = (await fetchInsights("article")) || [];

  const filteredInsights = allInsights.filter((insight) => {
    const matchesTerm = searchParams.term
      ? insight.title
          .toLowerCase()
          .includes(searchParams.term.toLowerCase().trim())
      : true;

    const matchesTag = searchParams.tag
      ? insight.tags?.includes(searchParams.tag)
      : true;

    return matchesTerm && matchesTag;
  });

  return (
    <Layout>
      <main className="hide-scrollbar">
        <Header isDark={true} navigationTabs={navigationTabs} />
        <HeroImage title={""} body={""} date={""} basePath={""} />
        <div className="main">
          <h3 className="font-assistant text-black text-3xl md:w-[40vw] justify-start">
            We at the Eastern Trade Group believe in
            <span className="font-extrabold"> innovation</span> and, more
            importantly, the
            <span className="font-extrabold"> innovators themselves.</span>
          </h3>
          <h3 className="pt-[4vh] font-extrabold font-assistant text-black text-3xl md:w-[40vw] justify-start">
            Browse the work of our clients
          </h3>

          <SearchBar
            initialSearchTerm={searchParams.term || ""}
            initialTag={searchParams.tag || ""}
            insights={allInsights}
            onSearch={function (): void {
              throw new Error("Function not implemented.");
            }}
          />

          <div className="">
            {filteredInsights.length > 0 ? (
              <CardGrid
                data={filteredInsights}
                itemsToShow={filteredInsights.length}
                isDark={false}
              />
            ) : (
              <p className="text-black text-lg">No results found.</p>
            )}
          </div>
        </div>

        <Footer isDark={false} />
      </main>
    </Layout>
  );
}
