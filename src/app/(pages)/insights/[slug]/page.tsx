"use client";
import React, { useState, useEffect } from "react";
import { Header, Layout, HeroImage, Footer, Card } from "@/components/ui";
import TrendingCarousel from "@/components/home/TrendingCarousel";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Node, INLINES, Document } from "@contentful/rich-text-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const SocialMediaLinks = ({
  title,
  heroImage,
}: {
  title: string;
  heroImage: string;
}) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const socialMediaLinks = [
    {
      platform: "Twitter",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${title}`
      )}&url=${encodeURIComponent(currentUrl)}&image=${encodeURIComponent(
        heroImage
      )}`,
      icon: faTwitter,
      color: "text-blue-400",
    },
    {
      platform: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}&quote=${encodeURIComponent(title)}&picture=${encodeURIComponent(
        heroImage
      )}`,
      icon: faFacebook,
      color: "text-blue-600",
    },
    {
      platform: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        currentUrl
      )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
        title
      )}&source=${encodeURIComponent(heroImage)}`,
      icon: faLinkedin,
      color: "text-blue-700",
    },
    {
      platform: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${title} - ${currentUrl}`
      )}&image=${encodeURIComponent(heroImage)}`,
      icon: faWhatsapp,
      color: "text-green-500",
    },
  ];

  return (
    <div className="border-b-[1px] border-slate-400">
      <p className="uppercase font-bold text-base font-assistant">Share</p>
      <div className="flex flex-row">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} hover:underline md:mr-[1vw] my-[2vh] mr-[4vw]`}
          >
            <FontAwesomeIcon icon={link.icon} size="2x" />
          </a>
        ))}
      </div>
    </div>
  );
};

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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { file, title } = (node.data.target as any).fields;

      return (
        <div className="py-[1vh] flex md:w-[27vw] md:h-auto w-full h-[30vh] ">
          <Image
            src={`https:${file.url}`} // Ensure the URL has https:// prefix
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
  params: {
    slug: string;
  };
};

export default function InsightPage({ params }: Params) {
  const { slug } = params;
  const [insight, setInsight] = useState<InsightProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}insights/${slug}`
        );
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data) && data.length > 0) {
          setInsight(data[0]); // Set the first object from the array as the insight
        } else {
          throw new Error("No data found");
        }
      } catch (error) {
        setError("Failed to fetch the insight");
      } finally {
        setLoading(false);
      }
    };

    fetchInsight();
  }, [slug]);

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!insight) {
    return notFound();
  }

  const { title, subtitle, author, date, body, heroImage, tags, images } =
    insight;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isValidBody = (body: any): body is Document =>
    body && body.nodeType === BLOCKS.DOCUMENT;
  const imageUrl =
    typeof heroImage === "string" && heroImage.startsWith("//")
      ? `https:${heroImage}`
      : heroImage;

  return (
    <Layout>
      <Header isDark={true} />
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

      <div className="main flex flex-1 flex-col-reverse md:flex-row  bg-white   border-b border-b-slate-300 border-[1px]">
        <div className="flex-[0.8] md:mr-[2vw] h-full ">
          {isValidBody(body)
            ? documentToReactComponents(body, richTextRenderOptions)
            : "No content available"}
        </div>
        <div className="flex-[0.2]">
          <div className="sticky md:top-[10vh] flex flex-col justify-left items-start md:min-h-[20vh]  transition-all duration-300">
            <SocialMediaLinks title={title} heroImage={imageUrl} />

            {/* <p className="uppercase font-bold text-base font-assistant">
              Related Insights
            </p>
            <Card title={""} body={""} date={""} basePath={""} /> */}
          </div>
        </div>
      </div>

      <TrendingCarousel />
      <Footer />
    </Layout>
  );
}

{
}
