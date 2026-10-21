import Header from '../components/Header.jsx'
import MenuItem from '../components/MenuItem.jsx'
import { Branch, Flourished, Divider, Corners, Grapes, Tricolore } from '../components/Ornaments.jsx'
import { site } from '../data/site.js'
import {
  lunch, dinner, addOns, desserts, cocktails, wine, beer, menuFinePrint,
} from '../data/menu.js'

const NAV = [
  { label: 'Lunch', to: '#lunch' },
  { label: 'Dinner', to: '#dinner' },
  { label: 'Desserts', to: '#desserts' },
  { label: 'Drinks', to: '#drinks' },
  { label: 'Home', to: '/' },
]

function Heading({ children, as: Tag = 'h3', className = '' }) {
  return (
    <Flourished className={`menu-heading ${className}`.trim()}>
      <Tag>{children}</Tag>
    </Flourished>
  )
}

export default function Menu() {
  return (
    <div className="menu-page">
      <Header links={NAV} navLabel="Menu sections" />

      <main>
        <div className="container menu-hero">
          <p className="eyebrow">Authentic Italian cuisine</p>
          <div className="menu-hero-title">
            <Branch className="branch flip" />
            <h1 className="metal-text">Menu</h1>
            <Branch className="branch" />
          </div>
          <Tricolore />
        </div>

        <section id="lunch" className="container menu-section">
          <div className="menu-frame">
            <Corners />
            <div className="menu-intro">
              <Heading as="h2" className="large">Lunch</Heading>
              <p className="note">{lunch.note}</p>
            </div>
            <div className="menu-cols">
              <div>
                <h3 className="subhead">PASTA</h3>
                <ul className="menu-list">
                  {lunch.pasta.map((i) => <MenuItem key={i.name} {...i} />)}
                </ul>
              </div>
              <div>
                <h3 className="subhead">LUNCH ENTRÉES</h3>
                <ul className="menu-list">
                  {lunch.entrees.map((i) => <MenuItem key={i.name} {...i} />)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="dinner" className="container menu-section">
          <div className="menu-title">
            <Divider />
            <h2>Dinner</h2>
          </div>
          <div className="menu-grid">
            {dinner.map((group) => (
              <div key={group.title}>
                <Heading>{group.title}</Heading>
                <ul className="menu-list">
                  {group.items.map((i) => <MenuItem key={i.name} {...i} />)}
                </ul>
              </div>
            ))}
          </div>
          <div className="addons">
            <span className="subhead">ADD TO ANY SALAD OR PASTA</span>
            {addOns.map(({ name, price }) => (
              <span key={name}>{name} <span className="price">{price}</span></span>
            ))}
          </div>
        </section>

        <section id="desserts" className="container menu-section">
          <div className="menu-frame raised">
            <Corners />
            <Divider />
            <h2 className="dolci-title">Dolci</h2>
            <ul className="menu-list dolci-list">
              {desserts.map((i) => <MenuItem key={i.name} {...i} />)}
            </ul>
          </div>
        </section>

        <section id="drinks" className="container menu-section drinks-section">
          <div className="menu-title">
            <Grapes className="grapes" />
            <p className="eyebrow">The bar</p>
            <h2>Drinks</h2>
          </div>
          <div className="menu-cols">
            <div>
              <Heading>Cocktails</Heading>
              <ul className="menu-list cocktails">
                {cocktails.map((i) => <MenuItem key={i.name} {...i} />)}
              </ul>
            </div>
            <div>
              <Heading>Wine</Heading>
              <p className="wine-note">Glass / Bottle</p>
              {wine.map((group) => (
                <div key={group.title} className="wine-group">
                  <h4 className="subhead">{group.title.toUpperCase()}</h4>
                  <ul className="menu-list">
                    {group.items.map((i) => <MenuItem key={i.name} {...i} />)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="beer">
            <Heading>Beer</Heading>
            <p>{beer.join(' · ')}</p>
          </div>
        </section>
      </main>

      <footer className="menu-footer">
        <div className="container">
          {menuFinePrint.map((line) => <span key={line}>{line}</span>)}
          <span>
            For catering or events: <a href={`mailto:${site.email}`}>{site.email}</a> ·{' '}
            <a href={site.phoneHref}>{site.phone}</a>
          </span>
          <span className="fine">Please drink responsibly.</span>
        </div>
      </footer>
    </div>
  )
}
