// components/ui-components/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ContentFulItem } from "../../types/types";

type Props = {
  item: ContentFulItem;
};

export default function BlogCard({ item }: Props) {
  console.log(item);
  const { name, thumbnail, description } = item.fields;
  // Generate a slug from the name (replace with your real slug field if you add one)
  const slug = encodeURIComponent(
    name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
  );
  const imgUrl = thumbnail ? `https:${thumbnail.fields.file.url}` : null;
  const { width, height } = thumbnail?.fields.file.details.image || {
    width: 0,
    height: 0
  };

  return (
    <div className="flex flex-col">
      <Link
        href={`/blog/${slug}`}
        className="block overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt={name}
            width={width}
            height={height}
            className="w-full object-cover h-80"
            priority
          />
        )}
      </Link>
      <h2 className="p-4 text-lg font-semibold">{name}</h2>
      <p className="pl-4 truncate text-sm">{description}</p>
    </div>
  );
}
