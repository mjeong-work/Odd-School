# Odd-School Web App

A lightweight single-page application (SPA) template served by a minimal Node.js HTTP server.

## Prerequisites
- Node.js 18 or newer

## Install dependencies
No external dependencies are required. If you want to track scripts with npm, you can still run an install to create a lock file:
```bash
npm install
```

## Run the dev server
Start the HTTP server on port 5000:
```bash
npm start
```
Then open http://localhost:5000 in your browser. The server serves `index.html`, CSS, and ES module scripts with proper MIME types.

## Project structure
- `index.html` – main document and navigation
- `styles.css` – global styling
- `src/app.js` – app bootstrap and router wiring
- `src/router.js` – hash-based router
- `src/pages/` – individual page modules, including the React example scaffold
- `server.js` – static file server configured for local development

## Notes
- The server logs each request and falls back to `index.html` for non-file routes.
- Cache is disabled to make local development updates visible immediately.
