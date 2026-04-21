# Nova Portfolio Website

A cinematic, high-interaction portfolio experience built with **vanilla HTML, CSS, and JavaScript** (no framework lock-in), designed as a polished base you can customize for your personal brand.

## Highlights

- Sticky glassmorphism navigation with active-section highlighting
- Theme toggle (dark/light) with persisted preference
- Command palette (`⌘/Ctrl + K`) for quick navigation/actions
- Animated hero with counters and a rotating typing line
- Scroll reveal animations for all major content blocks
- Custom cursor interactions (desktop)
- Scroll progress indicator
- Animated particle background canvas with connective lines
- Skill radar chart drawn in Canvas API
- Services section and interactive testimonials carousel
- Search/filter/sort project gallery with impact scoring
- Project detail modal dialog
- Timeline/journey section
- Contact form with validation, UX feedback, and toast notifications
- Fully responsive layout + reduced-motion support

## Project Structure

```text
.
├── index.html     # semantic structure and sections
├── styles.css     # visual system, components, and responsive behavior
├── app.js         # interactivity, rendering, and application state
└── README.md      # this guide
```

## Quick Start

```bash
python3 -m http.server 8000
```

Open: `http://localhost:8000`

## Customization Guide

- Update brand, copy, and section text in `index.html`.
- Update `projects`, `services`, `testimonials`, `milestones`, `tools`, and `skillData` in `app.js`.
- Adjust design tokens in `styles.css` under `:root` and `:root.light`.

## Next Expansion Ideas

- Real contact backend/API integration
- Real project case-study links and media previews
- Resume download + blog section from JSON/CMS
- Localization/i18n
- Analytics and conversion tracking
