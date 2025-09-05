# Deploy to Vercel (Vite + API)

## What changed
- Converted the Node/Express server into **Vercel Serverless API routes** under `/api`.
- `package.json` `build` now runs only `vite build` (client output to `dist/public`).
- Added `vercel.json` with:
  - `@vercel/static-build` (dist dir: `dist/public`)
  - `@vercel/node` for API (`api/**/*.ts`)
  - SPA fallback route to `/index.html`

## One-time setup
1. Push this project to a Git repo (GitHub works best), or upload the folder directly on Vercel.
2. On Vercel:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`

## Deploy
- Connect the repo and click **Deploy** (or drag-and-drop the folder).
- Vercel will build the client and compile the API functions automatically.

## Local test (optional)
```bash
npm install
npm run build
npm run preview
```

## Notes
- API endpoints available:
  - `GET /api/experiences`
  - `GET /api/skills`
  - `GET /api/projects/featured`
  - `GET /api/contacts`
  - `POST /api/contact` (body: `{ firstName, lastName, email, subject, message }`)
- Data is stored **in-memory**; it resets on cold starts (good for a portfolio).