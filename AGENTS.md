# Repository Guidelines

## Project Structure & Module Organization

This repository is a Hugo site. Edit pages in `content/`: `portfolio/`, `research/`, `events/`, `contact/`, and `about/` correspond to site sections. Portfolio projects use a Markdown page such as `content/portfolio/2025_summer.md` with related photos in the matching `content/portfolio/2025_summer/` bundle. Shared images and JavaScript live in `static/`. Templates and theme CSS are under `themes/hugo-creative-portfolio-theme/`; site settings and navigation are in `hugo.toml`. `public/` contains generated site files, so review generated changes separately from source edits.

## Build, Test, and Development Commands

- `hugo server -D`: preview the site locally, including draft pages.
- `hugo`: build the production site into `public/`.
- `hugo --minify`: build as the GitHub Pages workflow does.

Install Hugo before running these commands. Check `.github/workflows/hugo.yaml` for the version and deployment build settings used in CI.

## Coding Style & Naming Conventions

Use TOML front matter (`+++`) in content pages and retain existing fields such as `title`, `date`, `image`, `weight`, and `draft` where relevant. Keep section and asset paths aligned; for example, a portfolio entry and its photo directory should share the same stem. Follow surrounding template indentation and use four spaces in hand-written JavaScript. There is no configured formatter or linter; avoid reformatting vendored theme libraries or unrelated files.

## Testing Guidelines

There is no automated test suite or coverage target. Run `hugo --minify` after changes and inspect the relevant pages with `hugo server -D`, checking navigation, images, responsive layout, and browser console errors. For content changes, verify front matter and image paths; for template or script changes, also check another page using the same layout.

## Commit & Pull Request Guidelines

Recent commits use brief, descriptive subjects (for example, `added_teaching_content` and `closeButton`); keep new subjects short and specific to the change. In pull requests, summarize affected pages or components, note how the site was checked, and include screenshots for visible layout changes. Call out any intended changes to generated `public/` files so reviewers can distinguish them from source edits.
