# Al Majid Exim — Company Website

A premium, production-ready marketing website for **Al Majid Exim**, an Indian
import-export company. Built with Next.js 14 (App Router), TypeScript, Tailwind
CSS and Framer Motion.

---

## 1. Tech stack

- **Next.js 14** (App Router, React Server + Client Components)
- **TypeScript**
- **Tailwind CSS** (custom dark-green / gold / ivory design system)
- **Framer Motion** (scroll reveals, hero animation, micro-interactions)
- **Lucide React** (icons)
- SEO: metadata API, `sitemap.ts`, `robots.ts`, Open Graph tags
- Two working API routes (`/api/contact`, `/api/quote`) ready to be wired to an
  email provider

## 2. Project structure

```
al-majid-exim/
├─ app/
│  ├─ api/
│  │  ├─ contact/route.ts      # General enquiry form handler
│  │  └─ quote/route.ts        # Request-a-quote form handler
│  ├─ globals.css
│  ├─ layout.tsx                # Fonts, SEO metadata, page chrome
│  ├─ page.tsx                  # Assembles all homepage sections
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ About.tsx
│  ├─ Contact.tsx               # Contact form + Request Quote form
│  ├─ ExportCountries.tsx
│  ├─ ExportProcess.tsx
│  ├─ FAQ.tsx
│  ├─ Footer.tsx
│  ├─ Gallery.tsx
│  ├─ Hero.tsx
│  ├─ Logo.tsx                  # "AM" globe-inspired logo (SVG)
│  ├─ Navbar.tsx
│  ├─ PackagingQuality.tsx
│  ├─ PageLoader.tsx            # Loading animation
│  ├─ Products.tsx
│  ├─ ScrollReveal.tsx          # Reusable scroll-reveal wrapper
│  ├─ Stats.tsx
│  ├─ TradeRouteMap.tsx         # Animated world map used in the Hero
│  ├─ WhatsAppButton.tsx        # Floating WhatsApp button
│  └─ WhyChooseUs.tsx
├─ lib/
│  └─ data.ts                   # All site copy/content in one place
├─ public/
│  ├─ favicon.svg
│  └─ site.webmanifest
├─ next.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
├─ package.json
└─ postcss.config.js
```

All company details (phone, email, address, products, export markets, FAQs)
live in **`lib/data.ts`** — edit that one file to update content across the
whole site.

---

## Step-by-step: from zero to a live website

### 1. Install Node.js

The project needs **Node.js 18.18 or newer** (Node 20 LTS recommended).

- **Windows / macOS:** download the LTS installer from
  [nodejs.org](https://nodejs.org) and run it.
- **macOS (Homebrew):** `brew install node`
- **Linux (Ubuntu/Debian):** 
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```
- Verify the install:
  ```bash
  node -v      # should print v18.18+ or v20+
  npm -v
  ```

### 2. Install VS Code extensions

Open the project folder in VS Code and install:

1. **ESLint** (`dbaeumer.vscode-eslint`) — lint errors inline
2. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) — class autocomplete
3. **Prettier – Code formatter** (`esbenp.prettier-vscode`) — consistent formatting
4. **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`) — optional, speeds up component authoring

You can install them from the Extensions panel (`Ctrl/Cmd+Shift+X`) by
searching each name, or from the terminal:

```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension dsznajder.es7-react-js-snippets
```

### 3. Install project dependencies

From the project root:

```bash
cd al-majid-exim
npm install
```

This installs Next.js, React, Tailwind, Framer Motion, Lucide and all dev
dependencies listed in `package.json`.

### 4. Run the site locally

```bash
npm run dev
```

Open **http://localhost:3000** in your browser. The dev server supports hot
reload — save any file and the browser updates automatically.

To test a production build locally:

```bash
npm run build
npm run start
```

### 5. Push the project to GitHub

```bash
cd al-majid-exim
git init
git add .
git commit -m "Initial commit: Al Majid Exim website"
```

Then, on [github.com](https://github.com):

1. Click **New repository**, name it e.g. `al-majid-exim-website`, keep it
   **without** a README/gitignore (you already have them), and click **Create repository**.
2. Copy the commands GitHub shows you (or use these, replacing the URL):
   ```bash
   git remote add origin https://github.com/<your-username>/al-majid-exim-website.git
   git branch -M main
   git push -u origin main
   ```

### 6. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up / log in (you can sign
   in directly with your GitHub account).
2. Click **Add New… → Project**.
3. Select the `al-majid-exim-website` repository you just pushed and click **Import**.
4. Vercel auto-detects Next.js — leave the default build settings
   (Build Command: `next build`, Output: `.next`) and click **Deploy**.
5. Wait ~1–2 minutes. You'll get a live URL like
   `https://al-majid-exim-website.vercel.app`.

Every future `git push` to `main` will automatically redeploy the site.

### 7. Connect a custom domain (e.g. almajidexim.com)

1. Buy a domain from any registrar (GoDaddy, Namecheap, Google Domains, etc.)
   if you don't already have one.
2. In your Vercel project, go to **Settings → Domains** and enter your domain
   (e.g. `almajidexim.com`), then click **Add**.
3. Vercel will show DNS records to add at your domain registrar — typically:
   - An **A record** for the root domain pointing to Vercel's IP, or
   - A **CNAME record** for `www` pointing to `cname.vercel-dns.com`
4. Log in to your registrar's DNS settings and add the exact records Vercel
   shows you.
5. Wait for DNS to propagate (a few minutes up to 24–48 hours). Vercel will
   show a green "Valid Configuration" once it's live, and automatically
   issues a free SSL certificate (https).

### 8. Making the website fully live — final checklist

- [ ] Update `siteUrl` in `app/layout.tsx` and the URLs in `app/sitemap.ts` /
      `app/robots.ts` to your real domain once you have one.
- [ ] Wire up the contact & quote forms to an email provider (see below) so
      submissions actually reach your inbox.
- [ ] Replace placeholder Unsplash images in `lib/data.ts` with your own
      product/warehouse photography for a fully original site.
- [ ] Submit your sitemap (`https://yourdomain.com/sitemap.xml`) to
      [Google Search Console](https://search.google.com/search-console) for
      faster indexing.
- [ ] Test the site on a real phone, and run it through
      [PageSpeed Insights](https://pagespeed.web.dev) for a final performance check.

---

## Wiring up the contact & quote forms

Out of the box, `/api/contact` and `/api/quote` validate submissions and log
them to the server console (so the site deploys and runs with zero errors
without any extra setup). To actually receive emails, pick one option:

**Option A — Resend (recommended, simplest)**

```bash
npm install resend
```

In `app/api/contact/route.ts` (and `quote/route.ts`), add:

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Al Majid Exim Website <no-reply@yourdomain.com>",
  to: "almajidexim6786@gmail.com",
  subject: `New enquiry from ${name}`,
  text: `${name} (${email}, ${phone ?? "no phone"}) wrote:\n\n${message}`,
});
```

Then add `RESEND_API_KEY=your_key_here` to a `.env.local` file locally, and
to **Vercel → Settings → Environment Variables** for production.

**Option B — Formspree / Web3Forms (no backend code needed)**

Point the `<form>` submission in `components/Contact.tsx` directly at a
Formspree or Web3Forms endpoint instead of `/api/contact`.

---

## Notes on images

All product, gallery and hero images use royalty-free Unsplash URLs (loaded
via Next's `<Image>` component). Swap any `image:` field in `lib/data.ts`
with your own hosted photos when you have them — no other code changes are
required.
