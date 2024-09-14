import { Header, Layout, HeroImage, Footer } from "@/components/ui";
import TrendingCarousel from "@/components/home/TrendingCarousel";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Node, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import { fetchEntryBySlug, fetchNavigation } from "@/lib/contentful";
import SocialMediaLinks from "@/components/insights/SocialMediaLinks";

const richTextRenderOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_node: Node, children: React.ReactNode) => (
      <h1 className="font-assistant text-4xl font-bold mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_node: Node, children: React.ReactNode) => (
      <h2 className="font-inriaSerif text-3xl font-semibold mb-3">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_node: Node, children: React.ReactNode) => (
      <h2 className="font-inriaSerif text-2xl font-semibold mb-3">
        {children}
      </h2>
    ),
    [BLOCKS.PARAGRAPH]: (_node: Node, children: React.ReactNode) => (
      <p className="font-inriaSerif text-lg leading-relaxed mb-4">{children}</p>
    ),
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => {
      const { uri } = node.data;
      return (
        <a
          href={uri}
          className="relative text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left z-30"
        >
          {children}
        </a>
      );
    },
    [BLOCKS.QUOTE]: (_node: Node, children: React.ReactNode) => (
      <blockquote className="text-primary font-semibold border-l-4 border-primary pl-4 md:w-1/2 float-start  pr-[2vh] ">
        {children}
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      const { file, title } = (node.data.target as any).fields;
      return (
        <div className="py-[1vh] flex md:w-[27vw] md:h-auto w-full h-[30vh] ">
          <Image
            src={`https:${file.url}`}
            alt={title}
            width={1000}
            height={1000}
            className="rounded-md  object-cover"
          />
        </div>
      );
    },
  },
};

type Params = {
  slug: string;
};
// Server-side fetching for the InsightPage
export default async function InsightPage({ params }: { params: Params }) {
  const { slug } = params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const currentUrl = `${baseUrl}insights/${slug}`;

  const navigationTabs = await fetchNavigation("navigation");
  const data = await fetchEntryBySlug("article", slug);

  if (!data || data.length === 0) {
    return notFound();
  }

  const insight = data[0];
  const { title, subtitle, author, date, body, heroImage, tags } = insight;

  const imageUrl = heroImage
    ? `https:${heroImage}`
    : "https://via.placeholder.com/300"; // Fallback image

  return (
    <Layout>
      <Header isDark={true} navigationTabs={navigationTabs} />
      <HeroImage
        title={title}
        subtitle={subtitle}
        heroImage={imageUrl}
        tags={tags}
        author={author}
        date={date}
        body={body}
        images={undefined}
        slug={slug}
        basePath=""
      />
      <div className="main flex flex-1 flex-col-reverse md:flex-row bg-white border-b border-b-slate-300 border-[1px]">
        <div className="flex-[0.8] md:mr-[2vw] h-full">
          {documentToReactComponents(body, richTextRenderOptions)}
        </div>
        <div className="flex-[0.2]">
          <div className="sticky md:top-[10vh] flex flex-col justify-left items-start md:min-h-[20vh]  transition-all duration-300">
            <SocialMediaLinks
              title={title}
              heroImage={imageUrl}
              currentUrl={currentUrl}
            />
          </div>
        </div>
      </div>
      <TrendingCarousel />
      <Footer />
    </Layout>
  );
}
