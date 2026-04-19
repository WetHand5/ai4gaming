# AI Gaming Strategies

A chapter-structured learning site for AI strategies in planning, games, and decision-making.

## What This Repo Does

This repository serves two roles:

1. **Learning Notes Website** — A Starlight-powered static site that organizes notes by chapter and topic, each with its own page.
2. **Code Example Index** — The `code/` directory holds runnable example code, linked from the corresponding topic pages.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321/ai-gaming-strategies/` in your browser.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

Pushing to `main` triggers GitHub Actions, which builds and deploys to GitHub Pages automatically.

## If Your Repo Is Not a User/Organization Page

If the repo is not `<username>.github.io`, you need to set `base` in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://<username>.github.io',
  base: '/<repo-name>',
});
```

If it _is_ `<username>.github.io`, remove the `base` line and set `site` to `https://<username>.github.io`.

## Content Structure

- `src/content/docs/` — All documentation pages (MDX)
- `public/assets/` — Static images, diagrams, GIFs
- `code/` — Example code organized by topic
- `src/components/` — Homepage Astro components
- `src/styles/custom.css` — Global style overrides

## Adding Content

Each topic page follows a standard template. See `src/content/docs/templates/` for reference.
