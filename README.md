## Boro's Portfolio (v3)

My previous portfolio was built with Gatsby and I had used it for sometime now. But I decided to switch from Gatsby to Next.js recently due to some attributable Next.js features out-of-the-box. The portfolio also contains my blogs which makes it very easy for me to manage my content. Overall, the portfolio is built with Next.js, MDX, Tailwind, Chakra UI and is deployed in Vercel.

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chakra UI](https://chakra-ui.com)
- [MDX](https://mdxjs.com)
- [Vercel](https://vercel.com)

## Features

- Easy styling customization with [Tailwind 2.0](https://blog.tailwindcss.com/tailwindcss-v2)
- Near perfect lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/210111_DiC1_08f3670c3430bf4a9b76fc3b927716c5/)
- Lightweight, 43kB first load JS, uses Preact in production build
- Mobile-friendly view
- Light and dark theme
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Server-side syntax highlighting with [rehype-prism](https://github.com/mapbox/rehype-prism)
- Math display supported via [KaTeX](https://katex.org/)
- Automatic image optimization via [next/image](https://nextjs.org/docs/basic-features/image-optimization)
- Flexible data retrieval with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- Support for tags - each unique tag will be its own page
- Projects page
- SEO friendly with RSS feed, sitemaps and more!

## Content Breakdown

- `pages/api/` - Contains all the API routes. On my portfolio, I only have two API routes, namely `now-playing` and `top-tracks`.
- `data/blog/` - All the static blogs are within this directory. Written using MDX.
- `pages/` - Static pages like `Home`, `Blog`, `Projects` and `About`.
- `styles/` - All the styles related files can be found here.

## Quick Start Guide

1. Fork this project
2. Rename the project to <yourusername>.github.io
3. Personalize `siteMetadata.json`
4. Modify `projectsData.js`
5. Modify `headerNavLinks.js` to customize navigation links
6. Add blog posts
7. Deploy on Vercel

## Development

First, run the development server:

```bash
npm start
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Extend / Customize

`data/siteMetadata.json` - contains most of the site related information which should be modified for a user's need.

`data/projectsData.js` - data used to generate styled card in projects page.

`data/headerNavLinks.js` - navigation links.

`data/logo.svg` - replace with your own logo.

`data/blog` - replace with your own blog posts.

`public/static` - store assets such as images and favicons.

`css/tailwind.css` - contains the tailwind stylesheet which can be modified to change the overall look and feel of the site.

`components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons uses [heroicons](https://heroicons.com/).

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information

## Post

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 7 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
---
```

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Netlify / Github Pages / Firebase etc.**  
As the template uses `next/image` for image optimization, additional configurations has to be made to deploy on other popular static hosting websites like [Netlify](https://www.netlify.com/) or [Github Pages](https://pages.github.com/). An alternative image optimization provider such as Imgix, Cloudinary or Akamai has to be used. Alternatively, replace the `next/image` component with a standard `<img>` tag. See [`next/image` documentation](https://nextjs.org/docs/basic-features/image-optimization) for more details.
