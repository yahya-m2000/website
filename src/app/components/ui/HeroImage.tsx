"use client";
import Image from "next/image";

const HeroImage: React.FC<HeroImageProps> = ({
  title,
  backgroundImage,
  body,
  author,
  date,
}) => {
  return (
    <div className="relative min-h-[70vh]">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        alt="Background"
        className="absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-600 to-transparent z-10 backdrop-blur-sm backdrop-brightness-50" />

      <div className="main py-[10vh] flex absolute min-h-[70vh] items-end lg:w-[66vw] z-20">
        <div className="">
          <h1 className="title text-white ">{title}</h1>
          <p className="base text-white text-xl my-[2vh]">{body}</p>

          <div className="flex space-x-4 mt-2">
            <p className="base text-white">{author}</p>
            <p className="base text-white">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
