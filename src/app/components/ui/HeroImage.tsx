import Image from "next/image";

const HeroImage: React.FC<InsightProps> = ({
  title,
  subtitle,
  heroImage,
  author,
  date,
  tags,
}) => {
  const fallbackImage = "/path/to/default-image.jpg";

  return (
    <div className="relative min-h-[60vh]">
      {/* Background Image */}
      <Image
        src={heroImage || fallbackImage}
        layout="fill"
        objectFit="cover"
        alt={title || "Background"}
        className="absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-500 to-transparent z-10  backdrop-brightness-50" />

      <div className="main flex absolute min-h-[60vh] items-end lg:w-[75vw]  z-20">
        <div className="">
          <p className="base text-white uppercase font-bold">
            {Array.isArray(tags) ? tags.join(", ") : tags}
          </p>
          <h1 className="title text-white ">{title}</h1>
          <p className="text-xl font-assistant text-white">{subtitle}</p>
          <div className="flex space-x-4 mt-2">
            <p className="base text-white">{author}</p>
            <p className="base text-white">
              {new Date(date).toLocaleDateString("en-UK")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
