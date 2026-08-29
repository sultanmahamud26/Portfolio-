# Nayeem — Personal Portfolio

A glassmorphism-style personal portfolio built with plain HTML5, CSS3, and
vanilla JavaScript. No frameworks, no build step.

## File structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── profile.jpg      ← add your photo here
│   ├── favicon.png      ← add a small icon here
│   └── projects/        ← optional project thumbnails
└── README.md
```

## 1. Add your profile photo

Drop a photo at `assets/profile.jpg` (square-ish photos work best, e.g.
800×800px). If the file is missing, the hero section falls back to a
gradient circle automatically, so the page never breaks.

Add a small icon at `assets/favicon.png` for the browser tab.

## 2. Update your name, bio, and links

Most personal details live in two places:

- **`index.html`** — search for these and replace them:
  - `Nayeem` (name, appears in hero, navbar logo, footer, `<title>`)
  - `your.email@example.com` (email — appears 3 times: hero mailto, contact
    section, footer)
  - `https://t.me/your_telegram` (Telegram link)
  - `https://facebook.com/your_facebook` (Facebook link)
  - `https://github.com/sultanmahamud26` (GitHub link — already set to your
    GitHub username; change it if that's not the right account)
  - The `<meta name="description">` and Open Graph tags near the top of
    `<head>`

- **`js/script.js`** — the `CONFIG` object at the top mirrors the same
  values (name, title, email, github, telegram, facebook, and the
  `projects` array). It's there so you have one place to see everything
  at a glance; the visible page content still comes from `index.html`, so
  if you change a project in `CONFIG.projects`, also update the matching
  `<article class="project-card">` block in `index.html`.

## 3. Update your projects

Each project is a `<article class="project-card">` block inside
`#projectsGrid` in `index.html`. Copy an existing block to add a new
project, and edit:

- The emoji/thumbnail (or swap the `<div class="project-card__thumb">`
  for an `<img>` pointing at `assets/projects/your-image.jpg`)
- Title, description, and the `<span class="tag">` list
- The GitHub / Live Demo button `href` values

## 4. Update education & institution

In the "Experience" section of `index.html`, find `.education-card` and
replace `[Your Institution]` and the passing year/result placeholders
with your real details.

## 5. Add a CV

Place your CV at `assets/cv.pdf` and update the "Download CV" link's
`href` in the About section (`id="downloadCv"`), then remove the
placeholder click handler in `js/script.js` (`initCvDownload`) since it
currently shows an alert instead of downloading a file.

## 6. Connect the contact form

The contact form in the Contact section is frontend-only right now — it
just shows a status message on submit (see `initContactForm()` in
`js/script.js`). To make it actually send messages, either:

- Point the `fetch()` call at a form backend like Formspree, Getform, or
  a serverless function, or
- Wire it to your own API endpoint

## Running locally

No build tools are required. Either:

- Open `index.html` directly in a browser, or
- Serve the folder locally for the most accurate behavior (some browsers
  restrict local file access):

  ```bash
  cd portfolio
  python3 -m http.server 8000
  ```

  then visit `http://localhost:8000`.

## External resources used

- Google Fonts (CDN): Space Grotesk, Inter, JetBrains Mono — loaded via
  `<link>` tags in `<head>`. No API key or local install needed.
- No other external dependencies — all icons are inline SVG or emoji, and
  all effects are plain CSS.

## Notes

- Fully responsive: desktop, laptop, tablet, and mobile (hamburger menu
  under 720px).
- Respects `prefers-reduced-motion` — animations are disabled for users
  who request it.
- Keyboard accessible with visible focus states; semantic headings and
  alt text throughout.
