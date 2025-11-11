import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand">Odd School</div>
        <nav className="site-header__nav" aria-label="Main navigation">
          <NavLink
            to="/feed"
            className={({ isActive }) =>
              isActive ? 'site-header__nav-link site-header__nav-link--active' : 'site-header__nav-link'
            }
          >
            Feed
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? 'site-header__nav-link site-header__nav-link--active' : 'site-header__nav-link'
            }
          >
            Events
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
