import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const socialMediaLinks = ({
  title,
  heroImage,
  currentUrl,
}: {
  title: string;
  heroImage: string;
  currentUrl: string;
}): {
  platform: string;
  url: string;
  icon: IconDefinition;
  color: string;
}[] => [
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
