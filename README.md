# React deployment guide

## Local development

Install dependencies once and start the local development server with Vite:

```bash
npm install
npm run dev
```

## Production build

Create an optimized production bundle in the `dist` directory:

```bash
npm run build
```

## Preview locally

```bash
npm run preview
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

The deploy script publishes the contents of the `dist` directory to the `gh-pages` branch using the [`gh-pages`](https://www.npmjs.com/package/gh-pages) CLI.

## Live site

Once the GitHub Pages workflow has run, the app will be available at:

```
https://mjeong-work.github.io/Odd-School/#/
```
