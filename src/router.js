class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
    }

    addRoute(path, handler) {
        this.routes[path] = handler;
    }

    navigate(path) {
        const handler = this.routes[path];
        if (handler) {
            this.currentRoute = path;
            handler();
            this.updateActiveNav(path);
        } else {
            this.navigate('/community');
        }
    }

    updateActiveNav(path) {
        const navLinks = document.querySelectorAll('.nav-link, .nav-icon');
        navLinks.forEach(link => {
            link.classList.remove('active');
            const route = link.getAttribute('data-route');
            if (route && `/${route}` === path) {
                link.classList.add('active');
            }
        });
    }

    init() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1) || '/community';
            this.navigate(hash);
        });

        const initialHash = window.location.hash.slice(1) || '/community';
        this.navigate(initialHash);
    }
}

export default Router;
