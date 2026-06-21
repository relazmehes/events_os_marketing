# Event Planning OS — Marketing Website

Public marketing website for [Event Planning OS](https://eventplanningos.com) — the all-in-one platform for independent event planners.

Built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, and **shadcn/ui**. Deployed on **Vercel**.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home / Landing — hero, features, how it works, pricing, CTA |
| `/features` | Full module breakdown |
| `/pricing` | Pricing cards, feature comparison table, FAQ |
| `/about` | Mission and company story |
| `/blog` | Blog (stub — content coming soon) |
| `/contact` | Contact form (Resend integration) |

---

## Local setup

### Prerequisites

- Node.js 18+
- npm 9+

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/relazmehes/events_os_marketing.git
cd events_os_marketing

# 2. Install dependencies
npm install

# 3. Copy the environment file and fill in values
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment variables

See `.env.example` for all required and optional variables.

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | Yes | Railway production URL of the main app |
| `NEXT_PUBLIC_SITE_URL` | Yes | Public URL of this marketing site |
| `RESEND_API_KEY` | No | Resend API key for contact form emails |
| `CONTACT_EMAIL` | No | Email that receives contact form submissions |

---

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the repo in [vercel.com](https://vercel.com).
3. Set the environment variables in Vercel Project Settings → Environment Variables.
4. Vercel auto-deploys on every push to `main`.

---

## Tech stack

- **Framework:** Next.js 15 (App Router, SSG/SSR)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (Radix primitives)
- **Icons:** Lucide React
- **Fonts:** Inter (body) + Sora (headings) via `next/font/google`
- **Contact form:** Resend API (optional)
- **Deployment:** Vercel

---

## Git commit style

```
feat:   new feature
fix:    bug fix
style:  UI/copy changes
chore:  deps, config, tooling
```

---

## Related repos

- **App (Railway):** [events_os](https://github.com/relazmehes/events_os)
