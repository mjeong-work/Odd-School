import { useEffect, useState } from 'react'
import FeedPage from './pages/FeedPage/FeedPage'
import './App.css'

const FEED_ROUTE = '/feed'
const ALLOWED_ROUTES = new Set([FEED_ROUTE])

function getHashPath() {
  if (typeof window === 'undefined') {
    return FEED_ROUTE
  }

  const hash = window.location.hash || '#/'
  const normalized = hash.startsWith('#') ? hash.slice(1) : hash
  return normalized || '/'
}

function useHashPath() {
  const [path, setPath] = useState(getHashPath)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const handleHashChange = () => {
      setPath(getHashPath())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return path
}

function App() {
  const path = useHashPath()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!ALLOWED_ROUTES.has(path)) {
      window.location.hash = `#${FEED_ROUTE}`
    }
  }, [path])

  const activePath = ALLOWED_ROUTES.has(path) ? path : FEED_ROUTE

  return (
    <div className="app-shell">
      <div className="app-shell__content">
        {activePath === FEED_ROUTE && <FeedPage />}
      </div>
    </div>
  )
}

export default App
