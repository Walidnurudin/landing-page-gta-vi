This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Netlify

The site is configured for Netlify in `netlify.toml` (`npm run build`, publish `.next`, Node 24). Netlify's OpenNext adapter handles Next.js 16 routing, images and caching automatically — no extra plugin or build flags.

Connect `Walidnurudin/landing-page-gta-vi` in the Netlify dashboard and deploy the `master` branch. Every push to `master` then triggers a production deploy; other branches get deploy previews.

To deploy from the CLI instead:

```bash
npx netlify-cli link    # link this checkout to a Netlify site
npx netlify-cli deploy --build --prod
```

Check out the [Netlify Next.js docs](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/) for details.
