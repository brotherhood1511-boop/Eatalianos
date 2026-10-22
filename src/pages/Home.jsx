// =============================================================================
// HOME PAGE  —  the page at  /
//
// This file is the layout of the home page, top to bottom. Each <section> below
// is one band of the page, in the same order you see it in the browser.
//
// Most of the words, prices and photos are NOT typed here — they come from
// src/data/site.js so you can change them in one place. Anything typed directly
// in this file (headlines, paragraphs) can be edited right here.
//
// Quick JSX primer (JSX = the HTML-looking code React uses):
//   className="..."         → same as class="..." in HTML; the styles live in src/index.css
//   {something}             → "insert this value here" (e.g. {site.phone} prints the phone number)
//   {list.map((x) => ...)}  → "repeat this block once for every item in the list"
//   <Photo ... />           → our photo box (shows a placeholder until a photo is set)
// =============================================================================

import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Photo from '../components/Photo.jsx'
import { Branch, Flourished, EyebrowRow, Divider, Tricolore, CoastlineArt } from '../components/Ornaments.jsx'
import {
  site, heroPhoto, familyPhoto, hours, happenings, favorites, barPhoto, barFeatures, eventGallery,
  newsArticles, facebookPosts,
} from '../data/site.js'

// Links in the top navigation bar, left to right.
// `to` starting with '#' scrolls to the section with that id on this page
// (e.g. '#bar' → <section id="bar">). '/menu' goes to the menu page.
const NAV = [
  { label: 'Menu', to: '/menu' },
  { label: 'Happy Hour & Music', to: '#happenings' },
  { label: 'The Bar', to: '#bar' },
  { label: 'Events', to: '#events' },
  { label: 'Our Story', to: '#story' },
  { label: 'In the News', to: '#news' },
  { label: 'Visit', to: '#visit' },
]

export default function Home() {
  return (
    <>
      {/* Top bar: logo on the left, navigation links + "Order Online" on the right */}
      <Header links={NAV} />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────
            The first thing visitors see. Two parts:
            1) The big gold "Eataliano" script between two olive branches,
               "AUTHENTIC ITALIAN CUISINE", and the green/white/red stripe.
            2) The headline, intro paragraph, buttons, and the restaurant photo. */}
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
            {/* Left side: address line, headline, intro, buttons */}
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
            {/* Right side: photo of the restaurant (set `heroPhoto` in site.js) */}
            <div className="hero-photo framed">
              <Photo {...heroPhoto} />
            </div>
          </div>
        </section>

        {/* ── HOURS ────────────────────────────────────────────────────────
            The strip with Coffee / Lunch / Afternoon / Dinner times.
            The four boxes come from `hours` in site.js. */}
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
                  {/* The small grey line under a time only shows if that entry has a `note` */}
                  {note && <p className="note">{note}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HAPPY HOUR & LIVE MUSIC ──────────────────────────────────────
            Three tall cards (Happy Hour, Motown Mondays, Live Music).
            Card text, times and photos come from `happenings` in site.js. */}
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

        {/* ── HOUSE FAVORITES ──────────────────────────────────────────────
            Grid of six dishes with photo, name and price.
            The dishes come from `favorites` in site.js. */}
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

        {/* ── THE BAR ──────────────────────────────────────────────────────
            Bartender photo on the left; text and the four bar highlights
            (bourbon, wine, cocktails, beer) on the right.
            Photo = `barPhoto`, highlights = `barFeatures`, both in site.js. */}
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

        {/* ── EVENTS & PATIO ───────────────────────────────────────────────
            A row of three photos/videos (`eventGallery` in site.js), then two
            boxes: "Plan an Event" (emails the restaurant) and the patio info. */}
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
                {/* "mailto:" opens the visitor's email app with the subject already filled in */}
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

        {/* ── OUR STORY ────────────────────────────────────────────────────
            The family's story on the left, family photo on the right.
            Replace the [BRACKETED] text below with the real story.
            Photo = `familyPhoto` in site.js. */}
        <section id="story">
          <div className="container section split story">
            <div className="split-copy">
              <EyebrowRow>Our story</EyebrowRow>
              <h2 className="section-title">[STORY HEADLINE]</h2>
              <p className="lede">
                [OWNER&rsquo;S BACK STORY — who started Eataliano, why Biloxi, what the food means to
                the family. Two or three short paragraphs.]
              </p>
            </div>
            <div className="framed">
              <Photo {...familyPhoto} />
            </div>
          </div>
        </section>

        {/* ── IN THE NEWS ──────────────────────────────────────────────────
            Two rows of cards:
            1) News articles  → from `newsArticles` in site.js
            2) Facebook posts → from `facebookPosts` in site.js
            Each card links out to the original article/post in a new tab. */}
        <section id="news" className="band">
          <div className="container section">
            <EyebrowRow>As seen in</EyebrowRow>
            <h2 className="section-title">In the news</h2>
            <div className="press-grid">
              {newsArticles.map(({ outlet, date, headline, excerpt, url }, i) => (
                <article key={i} className="press-card">
                  <p className="when">{outlet} · {date}</p>
                  <h3>{headline}</h3>
                  <p>{excerpt}</p>
                  <a href={url} target="_blank" rel="noreferrer">Read the article →</a>
                </article>
              ))}
            </div>

            {/* Gold ornament line between the news cards and the Facebook cards */}
            <Divider />
            <h3 className="press-subtitle">On Facebook</h3>
            <div className="press-grid">
              {facebookPosts.map(({ date, text, url, ...media }, i) => (
                <article key={i} className="press-card post">
                  <Photo {...media} />
                  <div className="post-body">
                    <p className="when">Eataliano · {date}</p>
                    <p>{text}</p>
                    <a href={url} target="_blank" rel="noreferrer">View on Facebook →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── VISIT ────────────────────────────────────────────────────────
            Address, phone, email and buttons on the left; Google map on the right.
            All details come from `site` in site.js. */}
        <section id="visit">
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
            {/* The live Google map. It's an embedded Google page, so no API key is needed. */}
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

      {/* ── FOOTER ─────────────────────────────────────────────────────────
          The gold coastline drawing (lighthouse, olive branch, wine glass),
          then the logo, social links and copyright. The year updates itself. */}
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
