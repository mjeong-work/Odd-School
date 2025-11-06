import Router from './router.js';
import * as CommunityPage from './pages/community.js';
import * as EventsPage from './pages/events.js';
import * as MarketplacePage from './pages/marketplace.js';
import * as AdminPage from './pages/admin.js';
import * as ProfilePage from './pages/profile.js';
import * as MessagesPage from './pages/messages.js';

const app = document.getElementById('app');
const router = new Router();

function renderPage(pageModule) {
    app.innerHTML = pageModule.render();
}

router.addRoute('/community', () => renderPage(CommunityPage));
router.addRoute('/events', () => renderPage(EventsPage));
router.addRoute('/marketplace', () => renderPage(MarketplacePage));
router.addRoute('/admin', () => renderPage(AdminPage));
router.addRoute('/profile', () => renderPage(ProfilePage));
router.addRoute('/messages', () => renderPage(MessagesPage));

router.init();
