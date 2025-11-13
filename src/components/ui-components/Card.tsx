import Image from "next/image";
import Link from "next/link";
import { ContentFulItem, CSSattributeTypes } from "../../types/types";
import GithubIcon from "./GithubIcon";
import LinkIcon from "./LinkIcon";

// box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.03125rem,
//     rgb(0 0 0 / 7%) 0px 0px 1rem 0px;

type Props = {
  item: ContentFulItem;
};

const Card = ({ item }: Props) => {
  const { name, description, tags, thumbnail } = item.fields;
  return (
    <div className="w-full">
      <div className="border border-zinc-500 bg-white dark:bg-zinc-900 overflow-hidden h-full flex flex-col">
        <Link href={`/work/${item.fields.name}`}>
          <Image
            className="w-full"
            src={`https:${thumbnail.fields.file.url}`}
            alt={`${name} thumbnail image`}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            priority
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADDCAYAAAA4GCyWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7dQBDQAgEAAhtX9aP4DmuA1CsO/MWwABZwFECAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvI+B7+BV1lZwUWAAAAAElFTkSuQmCC"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </Link>
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-semibold text-lg text-customBlack dark:text-white">
            {name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>

          <div className="flex flex-wrap flex-row gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={`${Date.now() + index}`}
                className="text-xs text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-700 px-3 py-1 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
