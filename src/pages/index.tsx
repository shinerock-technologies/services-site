"use client";
import { GetStaticProps } from "next";
import { createClient } from "contentful";
import { ContentFulItem } from "../types/types";
import Card from "../components/ui-components/Card";
import EntryFilter from "../components/shared-components/EntryFilter";
import Hero from "../components/ui-components/Hero";
import Services from "../components/ui-components/Services";
import ProcessTimeline from "../components/ui-components/ProcessTimeline";
import ContactForm from "../components/ui-components/ContactForm";
import { config } from "../config";
import CustomMainPagesHead from "../components/shared-components/CustomMainPagesHead";
import data, { ContentData } from "../data/useData";
import { useModal } from "../contexts/ModalContext";

type Props = {
  mdx: Array<ContentFulItem>;
  data: ContentData;
};

/**
 * Function that fetches all the entries from Contentful
 * @param context
 * @returns Fetches all the entries from Contentful and returns them as props
 *
 */
export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = createClient({
    space: config.spaceId,
    accessToken: config.apiKey,
  });

  const res = await client.getEntries({ content_type: "mdx" });
  const mdx = (res?.items ?? []) as unknown as ContentFulItem[];
  return {
    props: {
      mdx,
      data,
    },
  };
};

export default function Home({ mdx, data: contentData }: Props) {
  // const filtered = mdx.filter((item) => item.fields.ux == true);
  const sorted = EntryFilter(mdx);
  const { openModal } = useModal();

  return (
    <>
      <CustomMainPagesHead
        name={contentData.pages.home.title}
        type={""}></CustomMainPagesHead>
      <main className="grid grid-cols-1 place-content-between gap-12">
        <Hero onBookingClick={openModal} />
        <Services />
        <ProcessTimeline onBookingClick={openModal} />
        {/* <section id="work" className="mt-12">
          <h2 className="text-3xl md:text-6xl font-semibold tracking-tight mb-4 text-customBlack dark:text-white">
            {contentData.pages.work.heading}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400">
            {contentData.pages.work.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sorted.map((item) => (
              <Card key={item.sys.id} item={item} />
            ))}
          </div>
        </section> */}

        <section id="contact" className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-6xl font-semibold tracking-tight mb-4 text-customBlack dark:text-white">
                {contentData.pages.contact.heading}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                {contentData.pages.contact.description}
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
