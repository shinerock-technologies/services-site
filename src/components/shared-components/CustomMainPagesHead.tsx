import React from "react";
import Head from "next/head";
import identity from "../../data/useIdentity";
import data from "../../data/useData";

type CustomMainPagesHeadProps = {
  name: string;
  type: string;
};

const CustomMainPagesHead = ({ name, type }: CustomMainPagesHeadProps) => {
  const title = type ? `${name} ${type}` : name;
  const description = data.hero.subtitle;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={identity.seo.keywords} />
      <link rel="icon" href={identity.meta.favicon} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={identity.meta.ogImage} />
      <meta property="og:image:alt" content={identity.meta.logoAlt} />
      <meta property="og:url" content={identity.meta.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={identity.meta.siteName} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={identity.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={identity.meta.ogImage} />
    </Head>
  );
};

export default CustomMainPagesHead;
