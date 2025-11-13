// pages/blog/[slug].tsx
import Link from "next/link";
import { createClient } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { config } from "../../config";
import { ContentFulItem } from "../../types/types";
import CustomMainPagesHead from "../../components/shared-components/CustomMainPagesHead";
import { renderOptionsForContentful } from "../../components/utils/renderOptions";

type Props = {
  post: ContentFulItem;
};

const client = createClient({
  space: config.spaceId,
  accessToken: config.apiKey
});

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries<ContentFulItem>({
    content_type: "blogPosts",
    select: "fields.name" // no need to select body here
  });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.name! }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const { items } = await client.getEntries<ContentFulItem>({
    content_type: "blogPosts",
    "fields.name": slug,
    limit: 1
  });

  if (!items.length) {
    return { notFound: true };
  }

  return { props: { post: items[0] } };
};

export default function BlogPost({ post }: Props) {
  const { name, body /* <-- pull in your rich-text doc here */ } =
    post.fields as { name: string; body: any };

  return (
    <>
      <CustomMainPagesHead name={name} type="Blog Post" />

      {/* Next.js v13+ Link with new API */}
      <Link
        href="/blog"
        className="inline-block mb-8 text-sm font-medium text-blue-600 hover:underline">
        ← Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mb-6">{name}</h1>

      {/* render your Contentful rich‐text document */}
      <div className="prose ">
        {documentToReactComponents(body, renderOptionsForContentful)}
      </div>
    </>
  );
}
