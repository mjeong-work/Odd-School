# Odd-School Web App Template

## Overview
A lightweight single-page application (SPA) template built with vanilla HTML, CSS, and JavaScript (ES Modules). Features hash-based routing for client-side navigation and a clean, minimal design ready for Figma UI integration.

## Project Architecture

### Folder Structure
```
.
├── index.html              # Main HTML file with navigation bar
├── styles.css              # Global styles with minimal design
├── server.js               # Node.js HTTP server with proper MIME types
├── package.json            # Node.js project configuration
├── src/
│   ├── app.js             # Application entry point
│   ├── router.js          # Hash-based router implementation
│   └── pages/             # Page modules
│       ├── community.js   # Community page (default)
│       ├── events.js      # Events page
│       ├── marketplace.js # Marketplace page
│       ├── admin.js       # Admin page
│       ├── profile.js     # Profile page
│       └── messages.js    # Messages page
```

### Navigation Structure
- **Logo/Home**: Odd-School (links to Community)
- **Main Menu**: Community, Events, Marketplace, Admin, Profile
- **Right Side**: Messages (💬), Logout (↪)

### Routing
- Hash-based routing using `window.location.hash`
- Default route: `#/community`
- Available routes:
  - `#/community` - Community page
  - `#/events` - Events page
  - `#/marketplace` - Marketplace page
  - `#/admin` - Admin page
  - `#/profile` - Profile page
  - `#/messages` - Messages page

### Styling
- Clean, minimal design
- White background
- Gray navigation links (#666)
- Blue active state (#1a73e8)
- Responsive navigation bar with box shadow
- Fade-in animation for page transitions

## Technology Stack
- **Frontend**: Vanilla JavaScript (ES6 Modules), HTML5, CSS3
- **Server**: Node.js HTTP server (development)
- **No frameworks or libraries** - Pure vanilla JavaScript

## Development

### Running the App
The app starts automatically when you click "Run" in Replit. The workflow is configured to:
- Run `node server.js`
- Serve on port 5000
- Auto-restart on file changes

### Adding New Pages
1. Create a new page module in `src/pages/` (e.g., `newpage.js`)
2. Export a `render()` function that returns HTML string
3. Import the page in `src/app.js`
4. Add a route in `src/app.js`
5. Add navigation link in `index.html`

### Modifying Styles
- Global styles: Edit `styles.css`
- Page-specific styles: Add inline styles or create new CSS files

## Recent Changes
- **2025-11-06**: Initial project setup
  - Created SPA structure with hash-based routing
  - Implemented 6 placeholder pages
  - Set up Node.js server with proper MIME types for ES modules
  - Configured Replit workflow for instant preview
  - Added cache control headers to prevent caching issues

## Next Steps
- Replace placeholder pages with Figma-designed UI
- Add page transition animations (optional)
- Implement logout functionality
- Add responsive mobile navigation
- Integrate backend APIs as needed
