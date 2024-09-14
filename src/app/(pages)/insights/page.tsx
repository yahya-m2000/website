import { Footer, Header, Layout } from "@/components/ui";
import HeroImage from "@/components/ui/HeroImage";
import CardGrid from "@/components/ui/CardGrid";
import bgImage from "@/assets/images/projects_background.png";
import { fetchEntries, fetchNavigation } from "@/lib/contentful";
import SearchBar from "@/components/ui/SearchBar";

// This page is fully server-rendered without "use client"
export default async function Projects({
  searchParams,
}: {
  searchParams: { term?: string; tag?: string };
}) {
  const navigationTabs = await fetchNavigation("navigation");

  // Fetch insights with optional search/filter criteria
  const allInsights = await fetchEntries("article");

  // Filtering based on the searchParams passed via URL
  const filteredInsights = allInsights.filter((insight) => {
    const matchesTerm = searchParams.term
      ? insight.title.toLowerCase().includes(searchParams.term.toLowerCase())
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
        <HeroImage
          title={"Projects"}
          heroImage={bgImage}
          tag={"Technology"}
          body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          author={"Test"}
          date={"01 January 2025"}
          basePath={""}
          images={[]}
        />
        <div className="main">
          <h3 className="font-assistant text-white text-3xl md:w-[40vw] justify-start">
            We at the Eastern Trade Group believe in
            <span className="font-extrabold"> innovation</span> and, more
            importantly, the
            <span className="font-extrabold"> innovators themselves.</span>
          </h3>
          <h3 className="pt-[4vh] font-extrabold font-assistant text-white text-3xl md:w-[40vw] justify-start">
            Browse the work of our clients
          </h3>
        </div>

        {/* SearchBar Component */}
        <SearchBar
          initialSearchTerm={searchParams.term || ""}
          initialTag={searchParams.tag || ""}
        />

        {/* Display the filtered insights */}
        <div className="main min-h-[20vh]">
          {filteredInsights.length > 0 ? (
            <CardGrid
              data={filteredInsights}
              itemsToShow={filteredInsights.length}
              isDark={false}
            />
          ) : (
            <p className="text-white text-lg">No results found.</p>
          )}
        </div>
        <Footer isDark={false} />
      </main>
    </Layout>
  );
}
