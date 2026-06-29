# Nadav & Hannah — Save the Date

[![website](https://img.shields.io/website?label=website&url=https%3A%2F%2Fruschor.com%2F)](https://ruschor.com/)

My brother is getting married — and the wedding industry is very costly. Fortunately for him, he has a brother who codes...

## [ruschor.com](https://ruschor.com/)

An interactive save-the-date site where guests receive an animated envelope that opens to reveal the wedding details, and can submit their contact info via an embedded form to receive an official invitation.

## Tech Stack

- React 19 + Vite
- Framer Motion (envelope/card animations)
- Embedded Google Form for guest info collection
- Deployed to GitHub Pages via GitHub Actions

## Development

```bash
cd save-the-date
npm install
npm run dev
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
