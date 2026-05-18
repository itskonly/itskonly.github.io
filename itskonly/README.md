# itskonly — Personal Portfolio & Blog

> Kaustubh Swami | Aspiring Web Application Penetration Tester

Built with **Next.js 14**, **Tailwind CSS**, and **Contentlayer** (MDX).

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## 📁 Project Structure

```
itskonly/
├── app/                    # Next.js 14 App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── writeups/           # All write-ups + [slug] detail
│   ├── projects/           # Projects page
│   ├── certs/              # Certifications page
│   └── log/                # Daily log
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections (Hero, About, Skills...)
│   └── ui/                 # Reusable UI (Tags, Badges)
├── content/
│   ├── writeups/           # ✏️ Add your write-ups here (.mdx)
│   └── log/                # ✏️ Add your daily logs here (.md)
├── data/
│   ├── projects.ts         # ✏️ Edit your projects here
│   └── certs.ts            # ✏️ Edit your certifications here
└── public/                 # Static assets
```

---

## ✏️ Adding Content

### New Write-up

Create a file in `content/writeups/your-title.mdx`:

```mdx
---
title: "My HTB Machine Write-up"
date: 2025-05-20
category: htb          # htb | ctf | web | note
difficulty: medium     # easy | medium | hard | info
tags: ["nmap", "SQLi", "PrivEsc"]
summary: "Short description shown in the card."
published: true
---

## Recon

Your content here...
```

### New Daily Log

Create a file in `content/log/YYYY-MM-DD.md`:

```md
---
date: 2025-05-20
mood: "Focused"
hours: 2
entries:
  - type: study       # study | lab | build | read
    content: "Studied XSS payloads"
  - type: lab
    content: "Solved 2 PortSwigger labs"
---
```

### New Project

Edit `data/projects.ts` and add to the array:

```ts
{
  title:       "My Tool",
  description: "What it does.",
  status:      "wip",     // wip | done | planned
  stack:       ["Python", "Bash"],
  github:      "https://github.com/itskonly/my-tool",
}
```

---

## 🌐 Deploy to Vercel (Free)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "init"
git remote add origin https://github.com/itskonly/portfolio.git
git push -u origin main

# 2. Go to vercel.com → Import GitHub repo → Deploy
# That's it. Auto-deploys on every push.
```

---

## 🔧 Customise

| What | Where |
|------|-------|
| Your email / socials | `components/sections/ContactSection.tsx` |
| Nav links | `components/layout/Navbar.tsx` |
| Hero stats | `components/sections/HeroSection.tsx` |
| Site metadata / SEO | `app/layout.tsx` |
| Colors & fonts | `tailwind.config.ts` + `app/globals.css` |

---

Built for the grind. One commit at a time.
