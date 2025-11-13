import React from "react";
import Head from "next/head";
import { ContentFulItem } from "../../types/types";
import identity from "../../data/useIdentity";

type Props = {
  item: ContentFulItem;
};

const CustomHead = ({ item }: Props) => {
  const { name, description, thumbnail } = item.fields;
  return (
    <Head>
      <title>{`${name} | ${identity.company.brandName}`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={identity.meta.favicon} />
      <meta
        property="og:title"
        content={`${name} | ${identity.company.brandName}`}
      />
      <meta property="og:description" content={description} />
      {/* <meta
        property="og:image:secure_url"
        content={`https:${thumbnail.fields.file.url}`}
      /> */}
      <meta
        property="og:image"
        content={`https:${thumbnail.fields.file.url}`}
      />
      <meta
        property="og:image:alt"
        content={`Selected User Interface screenshot from  ${name}`}
      />
      <meta
        property="og:url"
        content={`${identity.meta.siteUrl}/work/${name}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={identity.meta.siteName} />
      <meta name="keywords" content={identity.seo.keywords} />

      <meta name="twitter:card" content={description} />
      <meta property="twitter:domain" content={identity.meta.siteUrl} />
      <meta
        property="twitter:url"
        content={`${identity.meta.siteUrl}/work/${name}`}
      />
      <meta
        name="twitter:title"
        content={`${name} | ${identity.company.brandName}`}
      />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https:${thumbnail.fields.file.url}`}
      />
    </Head>
  );
};

export default CustomHead;
