declare global {
  type HeaderProps = {
    href: string;
    label?: string;
    scrolled?: boolean;
    isDark?: boolean;
    onClick?: () => void;
    overrideScrollStyle?: boolean;
    noAnimations?: boolean;
  };
  type DrawerToggleProps = {
    isDark: boolean;
    toggleDrawer: () => void;
  };

  type CardProps = {
    title: string;
    tag: string;
    body?: string;
    date: string;
    backgroundImage?: string;
    isDark?: boolean;
    isFocused?: boolean;
    onClick?: () => void;
  };

  type Insight = {
    title: string;
    subtitle: string;
    image?: string;
    body?: string;
    date: string;
  };

  type CardGridProps = {
    insights: Insight[];
    itemsToShow: number;
    isDark: boolean;
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
