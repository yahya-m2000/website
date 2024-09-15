import { Footer, Header, HeroImage, Layout } from "@/components/ui";
import {
  fetchFAQS,
  fetchNavigation,
  fetchTextBlockBySlug,
} from "@/lib/api/src/contentful";
import { richTextRenderOptions } from "@/lib/common/src/ui/richTextRenderOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";
import React from "react";
import { Document } from "@contentful/rich-text-types";

type FAQ = {
  question: string;
  answer: Document;
  order: number;
  category: string;
};
type TextBlock = {
  title: string;
  subtitle: string;
  heroImage: string;
  date: string;
  body: Document;
  callToAction?: string;
  slug: string;
};

const FAQSection: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => (
  <div className="faq-section">
    {faqs.map((faqItem) => (
      <div key={faqItem.question} className="faq-item">
        <h3 className="font-inriaSerif text-3xl font-semibold mb-3">
          {faqItem.question}
        </h3>
        {documentToReactComponents(faqItem.answer, richTextRenderOptions)}
      </div>
    ))}
  </div>
);

export default async function Page({ params }: { params: Params }) {
  const { slug } = params;

  const navigationTabs = await fetchNavigation("navigation");

  let data: FAQ[] | TextBlock[] | null = null;
  let title: string, subtitle: string, heroImage: string;
  let body: Document | undefined;

  if (slug === "faq") {
    data = await fetchFAQS("faq");
    title = "Frequently Asked Questions";
    subtitle = "";
    heroImage = "/default-faq-hero.jpg";
  } else {
    const textBlockData = await fetchTextBlockBySlug("textBlock", slug);

    if (!textBlockData || textBlockData.length === 0) return notFound();

    const insight = textBlockData[0] as TextBlock;
    title = insight.title;
    subtitle = insight.subtitle;
    heroImage = insight.heroImage;
    body = insight.body;

    data = textBlockData;
  }

  if (!data) return notFound();

  return (
    <Layout>
      <Header navigationTabs={navigationTabs} isDark={true} />
      <HeroImage
        title={title}
        body={""}
        date={""}
        heroImage={heroImage}
        subtitle={subtitle}
        basePath={""}
      />
      <div className="main flex flex-1 flex-col-reverse md:flex-row bg-white border-b border-b-slate-300 border-[1px]">
        <div className="flex-[0.8] md:mr-[2vw] h-full">
          {slug === "faq" ? (
            <FAQSection faqs={data as FAQ[]} />
          ) : (
            <div className="textblock-section">
              {body && documentToReactComponents(body, richTextRenderOptions)}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
