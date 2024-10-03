import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextRenderOptions } from "@/lib/common/src/ui/richTextRenderOptions";
import Image from "next/image";

type SectionProps = {
  section: {
    title: string;
    subtitle: string;
    body: any; // Adjust this type according to your actual data
    quote?: string;
    author?: string;
    image?: string;
  };
  isReversed: boolean;
};

const Section: React.FC<SectionProps> = ({ section, isReversed }) => {
  return (
    <div
      className={`section flex flex-wrap my-[6vh] flex-col items-center justify-between md:items-center ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Section Image */}
      {section.image && (
        <div
          className={`w-full md:w-1/2 mb-4 md:mb-0 ${
            isReversed ? "md:pl-[6vw]" : "md:pr-[6vw]"
          }`} // Adjust left or right margin for image
        >
          <Image
            src={section.image}
            alt={section.title}
            width={2000}
            height={2000}
          />
        </div>
      )}

      {/* Section Content */}
      <div
        className={`w-full md:w-1/2 min-w-0 ${
          isReversed ? "md:pr-[6vw]" : "md:px-[6vw]"
        }`} // Adjust left or right margin for text and ensure it wraps
      >
        {/* Section Title and Subtitle */}
        <h2 className="font-assistant text-4xl font-bold mb-4">
          {section.title}
        </h2>

        {/* Section Body */}
        <div className="section-body">
          {documentToReactComponents(section.body, richTextRenderOptions)}
        </div>

        {/* Section Quote */}
        {section.quote && (
          <blockquote className="font-assistant italic text-gray-600 mt-4">
            {section.quote}
          </blockquote>
        )}

        {/* Author */}
        {section.author && (
          <p className="mt-4 text-right text-gray-700">{section.author}</p>
        )}
      </div>
    </div>
  );
};

export default Section;
