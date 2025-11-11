import type { AnchorHTMLAttributes, ReactNode } from 'react'

export interface HashRouterProps {
  children?: ReactNode
}

export interface RoutesProps {
  children?: ReactNode
}

export interface RouteProps {
  path: string
  element: ReactNode
}

export interface NavigateProps {
  to: string
  replace?: boolean
}

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string | undefined)
  children?: ReactNode
}

export declare function HashRouter(props: HashRouterProps): JSX.Element
export declare function Routes(props: RoutesProps): JSX.Element | null
export declare function Route(props: RouteProps): null
export declare function Navigate(props: NavigateProps): null
export declare function NavLink(props: NavLinkProps): JSX.Element
export { HashRouter as BrowserRouter }
