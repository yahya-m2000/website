declare global {
  type NavLinkProps = {
    href: string;
    label: string;
    scrolled?: boolean;
    isDark?: boolean;
    onClick?: () => void;
    overrideScrollStyle?: boolean;
  };

  type EasternTradeGroupLogoProps = {
    scrolled: boolean;
    isDark?: boolean;
  };

  type CardProps = {
    title: string;
    tag: string;
    backgroundImage?: string;
    isDark?: boolean;
    isFocused?: boolean;
    onClick?: () => void;
  };
  type HeroImageProps = {
    title: string;
    backgroundImage: image;
    tag: string;
    body: string;
    author: string;
    date: string;
    url?: string;
    onClick?: () => void;
  };

  type HorizontalCarouselProps = {
    items: { title: string; subtitle: string; image: string }[];
    currentIndex: number;
    handlePrev: () => void;
    handleNext: () => void;
    getTranslateValue: (index: number) => number;
  };

  type ParagraphProps = {
    title: string;
    text: string;
    image?: string;
    buttonUrl?: string;
    isReversed?: boolean;
    isCentered?: boolean;
  };

  type TextProps = {
    fontWeight?: string | number;
    fontSize?: string;
    color?: string;
    textAlign?: "left" | "center" | "right" | "justify";
    margin?: string;
    padding?: string;
  };
}

export {};
