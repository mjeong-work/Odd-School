import React, { useEffect, useState } from 'react'

const DEFAULT_HASH = '#/'

function ensureDefaultHash() {
  if (typeof window === 'undefined') return
  if (!window.location.hash) {
    window.location.hash = DEFAULT_HASH
  }
}

export function HashRouter({ children }) {
  const [, setHash] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_HASH
    ensureDefaultHash()
    return window.location.hash || DEFAULT_HASH
  })

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    ensureDefaultHash()
    const handler = () => setHash(window.location.hash || DEFAULT_HASH)
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  useEffect(() => {
    ensureDefaultHash()
  }, [])

  return React.createElement(React.Fragment, null, children)
}

export const BrowserRouter = HashRouter
