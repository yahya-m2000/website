/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeroImage } from "@/components/ui";

export const renderHeroImage = ({
  title,
  subtitle,
  heroImage,
  tags,
  author,
  date,
  body,
  basePath,
}: InsightProps) => {
  return (
    <HeroImage
      title={title}
      subtitle={subtitle}
      heroImage={heroImage}
      tags={tags}
      author={author}
      date={date}
      body={body}
      basePath={basePath}
    />
  );
};
