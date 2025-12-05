export function render() {
    return `
        <div class="page react-example">
            <h1>React Example Scaffold</h1>
            <p class="lede">A quick, copy-pasteable starting point for converting this project into a React-driven experience.</p>

            <section class="card">
                <h2>Folder layout</h2>
                <p>Create a minimal React structure inside <code>/src</code> to keep experiments organized.</p>
                <ul class="checklist">
                    <li><strong>src/react-app.jsx</strong> &mdash; entry point with a root component.</li>
                    <li><strong>src/components/</strong> &mdash; shared UI pieces (Button, Card, Layout).</li>
                    <li><strong>src/pages/</strong> &mdash; feature pages; mirror the routes you already have.</li>
                </ul>
            </section>

            <section class="card">
                <h2>Starter code</h2>
                <p>Drop this into <code>src/react-app.jsx</code> and load it with your preferred bundler (Vite, Parcel, or a lightweight esbuild script).</p>
                <pre class="code-block"><code>import React from 'react';
import { createRoot } from 'react-dom/client';

function Layout({ children }) {
    return (
        <div className="react-shell">
            <header>
                <h1>Odd-School React</h1>
                <p className="muted">Use this shell to port each static page into components.</p>
            </header>
            <main>{children}</main>
        </div>
    );
}

function Home() {
    return (
        <section className="card">
            <h2>Hello, React!</h2>
            <p>Edit <code>Home</code> to experiment with hooks, API calls, and UI components.</p>
        </section>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(
    <Layout>
        <Home />
    </Layout>
);</code></pre>
            </section>

            <section class="card">
                <h2>Build tips</h2>
                <ul class="checklist">
                    <li>Use <code>npm create vite@latest . -- --template react</code> in a scratch branch to generate config files you can cherry-pick.</li>
                    <li>Keep the existing hash router until you fully swap navigation to React Router.</li>
                    <li>Wrap legacy HTML pages by rendering React into the existing <code>#app</code> node.</li>
                    <li>Ship small, reusable components first (buttons, inputs, cards) to avoid repetitive markup.</li>
                </ul>
            </section>
        </div>
    `;
}
