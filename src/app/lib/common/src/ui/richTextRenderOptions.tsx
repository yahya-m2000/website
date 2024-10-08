import { BLOCKS, Node, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import React from "react";

export const richTextRenderOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_node: Node, children: React.ReactNode) => (
      <h1 className="font-assistant text-4xl font-bold mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_node: Node, children: React.ReactNode) => (
      <h2 className="font-assistant text-3xl font-semibold mb-3">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: Node, children: React.ReactNode) => (
      <h2 className="font-assistant text-2xl font-semibold mb-3">{children}</h2>
    ),
    [BLOCKS.PARAGRAPH]: (_node: Node, children: React.ReactNode) => (
      <p className="font-assistant lg:text-lg text-base leading-relaxed mb-4">
        {children}
      </p>
    ),
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => {
      const { uri } = node.data;
      return (
        <a
          href={uri}
          className="relative text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left z-30"
        >
          {children}
        </a>
      );
    },
    [BLOCKS.QUOTE]: (_node: Node, children: React.ReactNode) => (
      <blockquote className="text-pink-700 font-semibold border-l-4 border-pink-700 pl-4 md:w-1/2 float-start  pr-[2vh] ">
        {children}
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { file, title } = (node.data.target as any).fields;
      return (
        <div className="py-[1vh] flex md:w-[27vw] md:h-auto w-full h-[30vh] ">
          <Image
            src={`https:${file.url}`}
            alt={title}
            width={1000}
            height={1000}
            className="rounded-md  object-cover"
          />
        </div>
      );
    },
  },
};
