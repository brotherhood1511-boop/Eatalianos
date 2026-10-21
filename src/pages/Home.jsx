import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Photo from '../components/Photo.jsx'
import { Branch, Flourished, EyebrowRow, Divider, Tricolore, CoastlineArt } from '../components/Ornaments.jsx'
import {
  site, heroPhoto, hours, happenings, favorites, barPhoto, barFeatures, eventGallery,
} from '../data/site.js'

const NAV = [
  { label: 'Menu', to: '/menu' },
  { label: 'Happy Hour & Music', to: '#happenings' },
  { label: 'The Bar', to: '#bar' },
  { label: 'Events', to: '#events' },
  { label: 'Our Story', to: '#story' },
  { label: 'Visit', to: '#visit' },
]

export default function Home() {
  return (
    <>
      <Header links={NAV} />

      <main>
        <section id="top">
          <div className="container hero-mark">
            <div className="hero-wordmark">
              <Branch className="branch left" />
              <span className="wordmark metal-text">Eataliano</span>
              <Branch className="branch right" />
            </div>
            <Flourished className="hero-subtitle">
              <p>AUTHENTIC ITALIAN CUISINE</p>
            </Flourished>
            <Tricolore />
          </div>

          <div className="container hero">
            <div className="hero-copy">
              <p className="eyebrow">{site.street} · {site.cityStateZip.replace(' 39530', '')}</p>
              <h1>
                Casual dining.<br />
                <em className="metal-text">Elevated service.</em>
              </h1>
              <p className="lede">
                Morning coffee, Italian lunch and dinner, a serious bourbon and wine list, and live
                music on the weekends — all under one roof on Howard Avenue.
              </p>
              <div className="actions">
                <a className="btn btn-metal" href={site.orderOnlineUrl}>Order Online</a>
                <Link className="btn btn-outline" to="/menu">View the Menu</Link>
                <a className="btn btn-plain" href={site.phoneHref}>{site.phone}</a>
              </div>
            </div>
            <div className="hero-photo framed">
              <Photo {...heroPhoto} />
            </div>
          </div>
        </section>

        <section aria-label="Hours" className="band">
          <div className="container hours">
            <div className="hours-head">
              <h2>Open daily, 10 AM – 9 PM</h2>
              <p>Every day · The kitchen stays open between lunch and dinner</p>
            </div>
            <div className="hours-grid">
              {hours.map(({ label, time, note }) => (
                <div key={label}>
                  <p className="label">{label.toUpperCase()}</p>
                  <p className="time">{time}</p>
                  {note && <p className="note">{note}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="happenings">
          <div className="container section">
            <EyebrowRow>Every week</EyebrowRow>
            <h2 className="section-title">Happy hour &amp; live music</h2>
            <div className="card-grid">
              {happenings.map(({ when, title, text, ...media }) => (
                <article key={title} className="card">
                  <Photo {...media} />
                  <div className="card-body">
                    <p className="when">{when.toUpperCase()}</p>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="favorites" className="band">
          <div className="container section">
            <div className="favorites-head">
              <div>
                <EyebrowRow>From the kitchen</EyebrowRow>
                <h2 className="section-title">House favorites</h2>
              </div>
              <Link to="/menu">See the full menu →</Link>
            </div>
            <div className="dish-grid">
              {favorites.map(({ name, price, photo, alt }) => (
                <div key={name} className="dish">
                  <Photo photo={photo} alt={alt} label={name} />
                  <div className="dish-name">
                    <h3>{name}</h3>
                    <span>{price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="bar">
          <div className="container section split">
            <div className="framed">
              <Photo {...barPhoto} />
            </div>
            <div className="split-copy">
              <EyebrowRow>The bar</EyebrowRow>
              <h2 className="section-title">Pour something good</h2>
              <p className="lede">
                Pull up a seat at the bar for a top-shelf pour, a glass of something from Italy, or
                a cocktail made with our housemade limoncello.
              </p>
              <div className="feature-grid">
                {barFeatures.map(({ title, text }) => (
                  <div key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="band">
          <div className="container section">
            <EyebrowRow>Gather with us</EyebrowRow>
            <h2 className="section-title">Events &amp; large parties welcome</h2>
            <div className="gallery">
              {eventGallery.map(({ wide, ...media }) => (
                <Photo key={media.label} {...media} className={wide ? 'wide' : ''} />
              ))}
            </div>
            <div className="panel-grid">
              <div className="panel">
                <h3>Birthdays, showers, team dinners</h3>
                <p>
                  Bring the whole group, inside or out on the patio. Tell us the date, headcount and
                  occasion, and we&rsquo;ll take care of the rest. Catering available too.
                </p>
                <a className="btn btn-metal" href={`mailto:${site.email}?subject=Event%20inquiry`}>Plan an Event</a>
              </div>
              <div className="panel dashed">
                <p className="when">THE PATIO · SEATS 60</p>
                <h3>Dine under the sails</h3>
                <p>
                  Our courtyard seats up to 60 guests under the shade sails and string lights.
                  Coming soon: an outdoor bar and a play area for the kids.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="story">
          <div className="story">
            <Divider />
            <p className="eyebrow">Our story</p>
            <h2 className="section-title">[STORY HEADLINE]</h2>
            <p>
              [OWNER&rsquo;S BACK STORY — who started Eataliano, why Biloxi, what the food means to the
              family. Two or three short paragraphs.]
            </p>
          </div>
        </section>

        <section id="visit" className="band">
          <div className="container section visit">
            <div className="visit-info">
              <div>
                <EyebrowRow>Visit</EyebrowRow>
                <h2 className="section-title">Find us on Howard</h2>
              </div>
              <p>{site.street}<br />{site.cityStateZip}</p>
              <p>
                <a href={site.phoneHref}>{site.phone}</a><br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <div className="actions">
                <a className="btn btn-outline" href={site.directionsUrl} target="_blank" rel="noreferrer">Get Directions</a>
                <a className="btn btn-metal" href={site.orderOnlineUrl}>Order Online</a>
              </div>
            </div>
            <div className="visit-map">
              <iframe
                title={`Map to Eataliano, ${site.street}, ${site.cityStateZip}`}
                src={site.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <CoastlineArt />
        <div className="container footer-row">
          <span className="wordmark metal-text">Eataliano</span>
          <span>{site.social}</span>
          <span>© {new Date().getFullYear()} Eataliano · Biloxi, Mississippi</span>
        </div>
      </footer>
    </>
  )
}
