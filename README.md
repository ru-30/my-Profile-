# Mugisha Espoir — Portfolio

🌐 **Live site:** [https://my-profile-espoir.vercel.app/](https://my-profile-espoir.vercel.app/)

A modern, responsive personal portfolio built with **React + Vite + Tailwind CSS**.

## Project structure

```
portfolio/
├── index.html                # SEO meta tags, fonts, page title
├── public/
│   └── favicon.svg           # "ME" monogram favicon
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Composes all sections
│   ├── index.css              # Tailwind import + design tokens (colors, fonts)
│   ├── data/
│   │   └── portfolioData.js   # ALL editable content: name, skills, projects, links, etc.
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Services.jsx
│       ├── Education.jsx      # education timeline + "My Journey" experience timeline
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── BrandIcons.jsx     # GitHub / LinkedIn marks (not in the icon library used)
│       └── Reveal.jsx         # scroll-reveal animation wrapper
├── package.json
└── vite.config.js
```

## 1. Install & run

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

To build a production bundle:

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally to double-check it
```

## 2. Editing your content

Almost everything on the page — your name, tagline, skills, projects, services, education, and social
links — lives in **`src/data/portfolioData.js`**. Edit that one file for day-to-day content changes; you
shouldn't need to touch the components themselves.

### Replacing your email, GitHub, and LinkedIn links

In `src/data/portfolioData.js`, update the `profile` object:

```js
export const profile = {
  ...
  email: "your.real.email@example.com",
  github: "https://github.com/your-real-username",
  linkedin: "https://linkedin.com/in/your-real-username",
  ...
};
```

### Replacing project GitHub / demo links

Each entry in the `projects` array has `github` and `demo` fields marked `// TODO: replace` — swap in your
real repository and live-demo URLs (or remove the "Live Demo" button in `Projects.jsx` for any project
that doesn't have a hosted demo).

### Replacing project images

Each project card currently shows a styled placeholder (dark panel with an icon and a small "image
placeholder — replace me" label) instead of a screenshot, so nothing looks like a broken image link.
To use a real screenshot:

1. Add your image to `src/assets/` (create the folder if it doesn't exist), e.g. `src/assets/securebank.png`.
2. In `Projects.jsx`, import it: `import securebankImg from "../assets/securebank.png";`
3. Replace the placeholder `<div>` block for that card with an `<img src={securebankImg} alt="..." className="h-40 w-full object-cover" />`.

### Adding certifications

`education` in `portfolioData.js` is an array — add another object in the same shape (`degree`,
`institution`, `status`, `period`) and it will appear automatically in the Education timeline.

### Adding/removing skills, services, or timeline steps

`skillGroups`, `services`, and `journey` are also plain arrays in the same file — add, remove, or reorder
items directly.

## 3. The contact form

The contact form currently has no backend: submitting it opens the visitor's email client with the message
pre-filled (via a `mailto:` link), addressed to whatever email you set in `profile.email`. This works
immediately with zero setup, but depends on the visitor having an email client configured.

For a form that submits without leaving the page, wire it up to a service like
[Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/), or your own backend endpoint, and
replace the `handleSubmit` function in `src/components/Contact.jsx`.

## 4. Deployment

This is a static site after `npm run build` (output in `dist/`), so any static host works.

**Vercel** (recommended, zero-config for Vite):
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Drag-and-drop the dist/ folder onto https://app.netlify.com/drop
# — or connect the repo and set Build command: npm run build, Publish directory: dist
```

**GitHub Pages:**
```bash
npm install -D gh-pages
# add to package.json "scripts": { "deploy": "gh-pages -d dist" }
npm run build
npm run deploy
```

## 5. Notes on the design

- **Colors**: defined once as CSS variables in `src/index.css` under `@theme` — deep navy (`--color-navy-900`),
  an electric cyan accent (`--color-cyan`), and a soft off-white for light sections (`--color-paper`). Change
  them there to re-theme the whole site.
- **Fonts**: Space Grotesk for headings, IBM Plex Sans for body text, IBM Plex Mono for code-like elements
  (the hero's editor mockup and technology tags) — loaded via Google Fonts in `index.html`.
- **Animations**: a single staggered reveal-on-scroll (see `Reveal.jsx`) is used consistently, plus hover
  states on interactive elements. Motion is disabled automatically for visitors with
  `prefers-reduced-motion` set.
