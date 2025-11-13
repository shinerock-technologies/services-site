# Identity Data

This folder contains the centralized brand identity configuration for the portfolio.

## Files

- `identity.json` - Contains all brand identity data including personal info, social links, meta tags, hero content, and page titles
- `useIdentity.ts` - Utility to import and use the identity data in components

## Usage

### In Components (Client-Side)

Import the identity data in any component:

```tsx
import identity from "../../data/useIdentity";

// Access any property
const name = identity.personal.fullName;
const github = identity.social.github;
const heroGreeting = identity.hero.greeting;
```

### In Pages (Server-Side for SEO)

Pass identity through `getStaticProps` for better SEO:

```tsx
import identity, { Identity } from "../data/useIdentity";

type Props = {
  // ... other props
  identity: Identity;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      // ... other props
      identity,
    },
  };
};

export default function Page({ identity }: Props) {
  // Use identity from props
  return <h1>{identity.personal.fullName}</h1>;
}
```

## Structure

- `personal` - Name variations and domain
- `social` - Social media links (GitHub, LinkedIn, Twitter)
- `meta` - SEO and meta tag information
- `hero` - Main hero section content
- `heroDesign` - Design page hero content
- `pages` - Page-specific titles and content
- `footer` - Footer content
- `seo` - SEO keywords

## Benefits

- Single source of truth for all brand content
- Easy to update personal information across the entire site
- No hardcoded strings in components
- Type-safe with TypeScript
- **SEO Optimized**: Identity data is rendered server-side at build time for better search engine crawling
