import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const SocialMediaLinks = ({
  title,
  heroImage,
  currentUrl,
}: {
  title: string;
  heroImage: string;
  currentUrl: string; // Accept the current URL as a prop
}) => {
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
    <div className="border-b-[1px] w-full border-slate-400 mb-[2vh]">
      <p className="uppercase font-bold text-base font-assistant">Share</p>
      <div className="flex flex-row">
        {socialMediaLinks.map((link, index) => (
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
