This is a [Next.js](https://nextjs.org/) project + Page Router bootstrapped with [`create-next-app`] and Clerk

I used the [Clerk Next.js Quickstart docs(https://clerk.com/docs/quickstarts/nextjs)], [Build your own sign-in and sign-up pages for your Next.js app with Clerk docs(https://clerk.com/docs/references/nextjs/custom-signup-signin-pages)], and [localization docs(https://clerk.com/docs/components/customization/localization)]

- add .env.local variables:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

- run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
