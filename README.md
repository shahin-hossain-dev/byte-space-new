# ByteSpace

An online-course marketplace built with Next.js (App Router), React 19, TypeScript and Tailwind CSS. It includes a landing page, course listing and details, search, login/signup and a dashboard.

## Prerequisites

- [Node.js](https://nodejs.org/) 20.9 or newer
- npm (comes with Node.js)
- Git

## Run locally

```bash
# 1. Clone the repository
git clone https://github.com/shahin-hossain-dev/byte-space-new.git
cd byte-space-new

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files.

## Environment variables

Optional. Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs, Open Graph / Twitter images. It defaults to `http://localhost:3000`; set it to your real domain in production.

## Scripts

| Command         | Description                                    |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Start the dev server with hot reload           |
| `npm run build` | Create an optimized production build           |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint`  | Lint the code with ESLint                      |

### Try the production build locally

```bash
npm run build
npm run start
```

## Project structure

```
src/
├── app/            # Routes, layouts, metadata, Open Graph image
├── components/     # Reusable UI, layout and section components
├── constants/      # Site config, routes, course data and copy
├── lib/            # Helpers (formatting, search, course lookup, OG image)
└── types/          # Shared TypeScript types
public/assets/      # Images and fonts
```

## Notes

- Colors are defined only as tokens in `src/app/globals.css`; hardcoded colors are blocked by ESLint. Use theme utilities such as `bg-primary` or `text-foreground`.
- Open Graph banner: `src/app/opengraph-image.tsx` (shared renderer in `src/lib/og.tsx`).

## Troubleshooting

- **Port 3000 is in use:** run `npm run dev -- -p 3001`.
- **Stale or odd build errors:** delete the `.next` folder and restart the dev server.
- **Install problems:** make sure `node -v` is 20.9 or newer, then delete `node_modules` and run `npm install` again.
