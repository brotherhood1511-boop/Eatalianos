import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

// links: [{ label, to }] — `to` starting with '#' jumps within the page, otherwise it's a route.
export default function Header({ links, navLabel = 'Main' }) {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="brand">
          <span className="brand-name metal-text">Eataliano</span>
          <span className="brand-tag">ITALIAN KITCHEN &amp; BAR · BILOXI</span>
        </Link>
        <nav aria-label={navLabel} className="site-nav">
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
