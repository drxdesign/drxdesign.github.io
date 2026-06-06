# < DRXDESIGN /> — Portfolio Website

A modern, animated personal portfolio built with **Astro.js** + **Tailwind CSS**.

## ✨ Features
- Pixel-perfect recreation of the KIWI design
- Typing animation in the hero section
- Scroll-reveal animations on all sections
- Animated skill progress bars
- Floating particle effect
- Fully responsive (mobile + desktop)
- Working contact form with loading state
- Sticky navbar with active section highlighting
- Mobile slide-in menu

## 🚀 Getting Started

### Prerequisites
- Node.js **v18+**
- npm or pnpm

### Install & Run

```bash
# 1 — Install dependencies
npm install

# 2 — Start the dev server
npm run dev
# → http://localhost:4321

# 3 — Build for production
npm run build

# 4 — Preview the production build
npm run preview
```

## 📁 Project Structure

```
kiwi-portfolio/
├── public/
│   ├── favicon.svg
│   └── cv.pdf           ← add your CV here
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Work.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── SocialLinks.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   └── scrollReveal.ts
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Customisation

| What                   | Where                                              |
|------------------------|----------------------------------------------------|
| Your name / tagline    | `src/components/Hero.astro`                        |
| Profile photo          | Replace the SVG in `Hero.astro` with an `<img>`    |
| Skills & percentages   | `src/components/About.astro` — `skills` array      |
| Projects               | `src/components/Work.astro` — `projects` array     |
| Social links           | `src/components/SocialLinks.astro` — `links` array |
| Contact info           | `src/components/Contact.astro` — `contactInfo`     |
| Brand colour           | `tailwind.config.mjs` → `accent: '#9FE45A'`        |

## 📬 Contact Form

The form currently **simulates** a send. To wire it up for real, replace the `setTimeout` mock in `Contact.astro` with a `fetch` call to any of:
- [Formspree](https://formspree.io) (free tier available)
- [EmailJS](https://emailjs.com)
- Your own API route (`src/pages/api/contact.ts`)

## 📄 License
MIT — use it however you like.
