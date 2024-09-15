import React from "react";
import { Card } from "..";

type CardGridProps = {
  data: CardProps[];
  itemsToShow: number;
  isDark: boolean;
};

const getGridClasses = (index: number, totalItems: number) => {
  // Define how the grid should look depending on the number of items
  if (totalItems === 1) {
    return "md:col-span-6 md:row-span-1"; // Full-width single card
  } else if (totalItems === 2) {
    return "md:col-span-3 md:row-span-1"; // Two equally spaced cards
  } else if (totalItems === 3) {
    return index === 0
      ? "md:col-span-6" // First card takes full width
      : "md:col-span-3"; // Next two cards split the row
  } else if (totalItems >= 4) {
    // For 4 or more cards, create dynamic grid
    if (index === 0) {
      return "md:col-span-3 md:row-span-2"; // Featured card spans two rows
    } else if (index === 1 || index === 2) {
      return "md:col-span-3"; // Two cards on the side
    } else {
      return "md:col-span-2"; // Any remaining cards
    }
  }
  return "";
};

const CardGrid: React.FC<CardGridProps> = ({
  data = [],
  itemsToShow,
  isDark,
}) => {
  const items = data.slice(0, itemsToShow);
  const totalItems = items.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-[2vw] w-full">
      {items.map((card, index) => {
        const {
          title,
          subtitle,
          tags,
          body,
          heroImage,
          date,
          images,
          slug,
          basePath,
          author,
        } = card;

        const gridClass = getGridClasses(index, totalItems);

        return (
          <div className={gridClass} key={index}>
            <Card
              title={title}
              subtitle={subtitle}
              tags={tags}
              body={body}
              date={new Date(date).toLocaleDateString("en-UK")}
              heroImage={heroImage}
              isDark={isDark}
              basePath={basePath}
              slug={slug}
              author={author}
              images={images || []}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
