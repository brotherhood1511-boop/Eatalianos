import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

// =============================================================================
// HEADER  —  the bar across the top of every page
//
// Left: the "Eataliano" logo (click it to go back to the home page).
// Right: the navigation links, then the gold "Order Online" button.
//
// Each page passes in its own list of links (see NAV at the top of Home.jsx and
// Menu.jsx). A link whose `to` starts with '#' scrolls down the same page;
// anything else (like '/menu') goes to a different page.
// =============================================================================

export default function Header({ links, navLabel = 'Main' }) {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="brand">
          <span className="brand-name metal-text">Eataliano</span>
          <span className="brand-tag">ITALIAN KITCHEN &amp; BAR · BILOXI</span>
        </Link>
        <nav aria-label={navLabel} className="site-nav">
          {/* <a> for same-page jumps, <Link> for other pages (Link switches pages without reloading) */}
          {links.map(({ label, to }) =>
            to.startsWith('#') ? (
              <a key={label} href={to}>{label}</a>
            ) : (
              <Link key={label} to={to}>{label}</Link>
            ),
          )}
          <a className="btn btn-metal" href={site.orderOnlineUrl}>Order Online</a>
        </nav>
      </div>
    </header>
  )
}
