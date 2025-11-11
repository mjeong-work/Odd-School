import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

const DEFAULT_HASH = '#/'

function ensureDefaultHash() {
  if (typeof window === 'undefined') return
  if (!window.location.hash) {
    window.location.hash = DEFAULT_HASH
  }
}

function normalizePath(pathname) {
  if (!pathname) return '/'
  return pathname.startsWith('/') ? pathname : `/${pathname}`
}

function getPathname() {
  if (typeof window === 'undefined') return '/'
  ensureDefaultHash()
  const hash = window.location.hash || DEFAULT_HASH
  const normalized = hash.startsWith('#') ? hash.slice(1) : hash
  return normalizePath(normalized || '/')
}

const RouterContext = createContext({
  pathname: '/',
  navigate: () => {},
})

export function HashRouter({ children }) {
  const [pathname, setPathname] = useState(() => getPathname())
  const isNavigatingRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    ensureDefaultHash()
    const handler = () => {
      const nextPath = getPathname()
      setPathname((current) => {
        if (current !== nextPath) {
          return nextPath
        }
        return current
      })
      isNavigatingRef.current = false
    }
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  useEffect(() => {
    ensureDefaultHash()
  }, [])

  const navigate = (to, options = {}) => {
    if (typeof window === 'undefined') return
    const target = normalizePath(to)
    const hash = `#${target}`
    isNavigatingRef.current = true
    if (options.replace && window.location.replace) {
      const { origin, pathname: currentPathname, search } = window.location
      window.location.replace(`${origin}${currentPathname}${search}${hash}`)
    } else {
      window.location.hash = hash
    }
    setPathname(target)
  }

  const value = useMemo(
    () => ({
      pathname,
      navigate,
    }),
    [pathname],
  )

  return React.createElement(RouterContext.Provider, { value }, children)
}

export const BrowserRouter = HashRouter

function matchPath(routePath, pathname) {
  if (routePath === '*') return true
  return normalizePath(routePath) === normalizePath(pathname)
}

export function Routes({ children }) {
  const { pathname } = useContext(RouterContext)
  let matchedElement = null
  let fallbackElement = null

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return
    const { path, element } = child.props
    if (path === '*') {
      fallbackElement = element
      return
    }
    if (matchedElement == null && matchPath(path, pathname)) {
      matchedElement = element
    }
  })

  return matchedElement ?? fallbackElement ?? null
}

export function Route() {
  return null
}

export function Navigate({ to, replace }) {
  const { navigate } = useContext(RouterContext)
  useEffect(() => {
    navigate(to, { replace })
  }, [navigate, replace, to])
  return null
}

export function NavLink({ to, className, children, ...rest }) {
  const { pathname, navigate } = useContext(RouterContext)
  const target = normalizePath(to)
  const isActive = matchPath(target, pathname)
  const href = `#${target}`

  const computedClassName =
    typeof className === 'function' ? className({ isActive, isPending: false }) : className

  const handleClick = (event) => {
    if (rest.onClick) {
      rest.onClick(event)
    }
    if (!event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)) {
      event.preventDefault()
      navigate(target)
    }
  }

  return React.createElement(
    'a',
    {
      ...rest,
      href,
      className: computedClassName,
      'aria-current': isActive ? 'page' : undefined,
      onClick: handleClick,
    },
    children,
  )
}
