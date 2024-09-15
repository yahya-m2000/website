import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { socialMediaLinks } from "@/assets/data/socialMediaLinks";

const SocialMediaLinks = ({
  title,
  heroImage,
  currentUrl,
}: {
  title: string;
  heroImage: string;
  currentUrl: string;
}) => {
  const links = socialMediaLinks({ title, heroImage, currentUrl });

  return (
    <div className="border-b-[1px] w-full border-slate-400 mb-[2vh]">
      <p className="uppercase font-bold text-base font-assistant">Share</p>
      <div className="flex flex-row">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} hover:underline w-[50px] md:mr-[1vw] my-[2vh] mr-[4vw]`}
          >
            <FontAwesomeIcon icon={link.icon} size="2x" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaLinks;
