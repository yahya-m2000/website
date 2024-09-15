import { StaticImageData } from "next/image";

declare global {
  type SearchProps = {
    initialSearchTerm: string;
    initialTag: string;
    onSearch: (term: string) => void;
    onFilterByTag?: (tag: string) => void;
  };

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

  type Params = {
    slug: string;
  };

  //
  export type RichTextBody = {
    data: Record<string, unknown>;
    content: Array<{
      data: Record<string, unknown>;
      content: Array<{
        data: Record<string, unknown>;
        marks: unknown[];
        value: string;
        nodeType: string;
      }>;
      nodeType: string;
    }>;
    nodeType: string;
  };

  export type InsightProps = {
    title: string;
    subtitle?: string;
    tag?: string;
    body: string | RichTextBody;
    date: string;
    basePath: string;
    author?: string;
    tags?: string[];
    heroImage?: string | StaticImageData;
    images?: string[];
    isFeatured?: boolean;
    slug?: string;
  };

  export type CardProps = InsightProps & {
    backgroundImage?: string; // Specific to Card
    isDark?: boolean; // Specific to Card
    isFocused?: boolean;
    onClick?: () => void;
  };

  type CardGridProps = {
    insights: Insight[];
    itemsToShow: number;
    isDark: boolean;
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
}

export {};
