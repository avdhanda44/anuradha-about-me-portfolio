# Anuradha About Me Portfolio

This is my simple, professional, one-page portfolio website. I built it to introduce myself as an AI/ML job seeker in a clean, recruiter-friendly way.

The site is intentionally focused. It only includes my About Me section, contact links, and footer.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- uv project setup

## Setup with uv

I added a `pyproject.toml` so I can initialize/sync the project environment with uv:

```bash
uv sync
```

Note: this is still a React/Vite frontend project, so Node/npm is required for the website dependencies and build.

## Install Frontend Dependencies

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

The production-ready files will be generated in the `dist/` folder.

## Deploy to Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com).
3. Click **Add New Project**.
4. Import the GitHub repository.
5. Keep the default Vite settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**.

## Commands

```bash
uv sync
npm install
npm run dev
npm run build
```
