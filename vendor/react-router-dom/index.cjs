const React = require('react')

const DEFAULT_HASH = '#/'

function ensureDefaultHash() {
  if (typeof window === 'undefined') return
  if (!window.location.hash) {
    window.location.hash = DEFAULT_HASH
  }
}

function HashRouter({ children }) {
  const [, setHash] = React.useState(() => {
    if (typeof window === 'undefined') return DEFAULT_HASH
    ensureDefaultHash()
    return window.location.hash || DEFAULT_HASH
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return undefined
    ensureDefaultHash()
    const handler = () => setHash(window.location.hash || DEFAULT_HASH)
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  React.useEffect(() => {
    ensureDefaultHash()
  }, [])

  return React.createElement(React.Fragment, null, children)
}

module.exports = {
  HashRouter,
  BrowserRouter: HashRouter,
}
