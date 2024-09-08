"use client";
import Image from "next/image";
import clsx from "clsx";
import { useScroll } from "@/context/ScrollContext";

// Reusable SectionText and SectionTitle Components using TailwindCSS
const SectionText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`xl:text-lg lg:text-lg md:text-lg sm:text-base text-base font-light font-assistant text-white justify-start ${className}`}
  >
    {children}
  </p>
);

const SectionTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1
    className={`xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl font-extrabold font-assistant text-white leading-tight hover:underline " ${className}`}
  >
    {children}
  </h1>
);

const HeroImage: React.FC<HeroImageProps> = ({
  title,
  tag,
  backgroundImage,
  body,
  author,
  date,
  // url,
  // onClick,
}) => {
  const { scrolled } = useScroll();

  return (
    <>
      <div className="relative h-[90vh] flex items-center">
        <Image
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full z-0"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1" />

        {/* Content */}
        <div
          className={clsx(
            "z-20 xl:w-[50vw] lg:w-[50vw] transition-all duration-300 ease-in-out",
            { "mt-[5vh]": !scrolled, "mt-[2vh]": scrolled }
          )}
        >
          <SectionText>{tag}</SectionText>
          <SectionTitle>{title}</SectionTitle>
          <SectionText className="mb-[1vh] md:w-[50vw]">{body}</SectionText>
          <div className="flex p-0">
            <SectionText className="mr-[4vw]">{author}</SectionText>
            <SectionText>{date}</SectionText>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
