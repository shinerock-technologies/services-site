// pages/index.tsx (or pages/blog/index.tsx)
import { createClient } from "contentful";
import { GetStaticProps } from "next";
import { config } from "../config";
import { ContentFulItem } from "../types/types";
import CustomMainPagesHead from "../components/shared-components/CustomMainPagesHead";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "../components/ui-components/BlogCard";
import data, { ContentData } from "../data/useData";

type Props = {
  mdx: Array<ContentFulItem>;
  data: ContentData;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const client = createClient({
    space: config.spaceId,
    accessToken: config.apiKey,
  });

  const res = await client.getEntries<ContentFulItem>({
    content_type: "blogPosts",
  });
  return {
    props: {
      mdx: res.items as unknown as ContentFulItem[],
      data,
    },
  };
};

export default function Home({ mdx, data: contentData }: Props) {
  return (
    <>
      <CustomMainPagesHead name={contentData.pages.blog.title} type={""} />
      <main className="py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4 text-customBlack dark:text-white">
            {contentData.pages.blog.heading}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            {contentData.pages.blog.description}
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mdx.map((item) => (
            <BlogCard key={item.sys.id} item={item} />
          ))}
        </section>
      </main>
    </>
  );
}
