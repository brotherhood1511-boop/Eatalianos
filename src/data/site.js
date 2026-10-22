// =============================================================================
// SITE CONTENT  —  the text, links and photos used on the HOME page
//
// This is the main file to edit when something about the restaurant changes.
// The home page (src/pages/Home.jsx) reads everything from here.
//
// How to read this file:
//   - Each `export const something = ...` is one chunk of content.
//   - { ... } is one item with named fields, e.g. { label: 'Lunch', time: '11 AM – 3 PM' }
//   - [ ... ] is a list of items. Add an item to a list and it appears on the page;
//     delete one and it disappears. Keep the commas between items.
//   - Text goes inside quotes: 'like this'. If the text has an apostrophe,
//     use the curly one (’) or switch to double quotes: "Chef's Salad".
//
// Anything in [BRACKETS] is still a placeholder waiting for real info.
//
// PHOTOS: every `photo: null` (or `video: null`) shows a labeled placeholder box.
// To add the real picture:
//   1. Put the file in the  public/photos/  folder (e.g. public/photos/restaurant.jpg)
//   2. Change  photo: null  to  photo: '/photos/restaurant.jpg'
//   `alt` is the description read aloud to blind visitors — describe the picture.
//   `label` is only the text shown on the placeholder box.
// =============================================================================

// Contact info and links, used in the header, hero, visit section and footer.
export const site = {
  name: 'Eataliano',
  street: '1036 W Howard Ave',
  cityStateZip: 'Biloxi, MS 39530',
  phone: '(228) 967-7055',
  phoneHref: 'tel:2289677055', // digits only — this makes the number tap-to-call on phones
  email: 'info@eatalianobiloxi.com',
  orderOnlineUrl: '#', // TODO: Toast online ordering link
  directionsUrl: 'https://maps.google.com/?q=1036+W+Howard+Ave,+Biloxi,+MS+39530', // "Get Directions" button
  mapEmbedUrl: 'https://www.google.com/maps?q=1036+W+Howard+Ave,+Biloxi,+MS+39530&output=embed', // the map in the Visit section
  social: '[INSTAGRAM] · [FACEBOOK]', // shown in the footer
}

// Big photo at the top of the home page, next to the headline.
export const heroPhoto = {
  photo: null,
  label: 'The restaurant',
  alt: 'Eataliano on Howard Avenue',
}

// Photo beside the "Our Story" text.
export const familyPhoto = {
  photo: null,
  label: 'The family',
  alt: 'The family behind Eataliano',
}

// The four boxes in the Hours strip. `note` is optional (small grey line under the time).
export const hours = [
  { label: 'Coffee', time: '10 – 11 AM' },
  { label: 'Lunch', time: '11 AM – 3 PM' },
  { label: 'Afternoon', time: '3 – 5 PM', note: 'Food still served' },
  { label: 'Dinner', time: '5 – 9 PM' },
]

// The three cards in "Happy hour & live music".
// A card uses either `photo` or `video` (a short looping clip with no sound).
export const happenings = [
  {
    when: 'Monday – Friday · 3 – 6 PM',
    title: 'Happy Hour',
    text: '[HAPPY HOUR SPECIALS — drinks and bites]',
    photo: null,
    label: 'Happy hour',
    alt: 'Happy hour bites and drinks',
  },
  {
    when: 'Every Monday · [TIME]',
    title: 'Motown Mondays',
    text: 'Motown classics on saxophone and keys with Gracie Darling to start the week right.',
    photo: null,
    label: 'Gracie Darling',
    alt: 'Gracie Darling with her saxophone and keyboard in the dining room',
  },
  {
    when: 'Friday & Saturday · 6 – 8 PM',
    title: 'Live Music',
    text: 'Gracie Darling is back on Friday and Saturday evenings with sax, keys and vocals.',
    video: null,
    label: 'Live music video',
    alt: 'Gracie Darling playing live in the dining room',
  },
]

// The six dishes in "House favorites". Keep prices in step with menu.js.
export const favorites = [
  { name: 'Rigatoni Bolognese', price: '$23', photo: null, alt: 'Rigatoni with meat sauce' },
  { name: 'Burrata e Prosciutto', price: '$18', photo: null, alt: 'Burrata with prosciutto, arugula and balsamic' },
  { name: 'Fried Calamari', price: '$17', photo: null, alt: 'Fried calamari with marinara and lemon' },
  { name: 'Veal Florentine', price: '$29', photo: null, alt: 'Veal with mushrooms and spinach cream sauce over spaghetti' },
  { name: 'Meatballs al Forno', price: '$15', photo: null, alt: 'Meatballs baked with marinara and mozzarella' },
  { name: 'Spaghetti al Pomodoro', price: '$24', photo: null, alt: 'Spaghetti with marinara' },
]

// Photo on the left of "The Bar" section.
export const barPhoto = {
  photo: null,
  label: 'Bartender',
  alt: 'Our bartender behind the bar',
}

// The four highlights under the bar text (each has a thin gold line above it).
export const barFeatures = [
  { title: 'High-end bourbon', text: 'Penelope Wheated in our Old Fashioned; The Macallan 12 Double Cask in The Don' },
  { title: 'Italian wine', text: 'Chianti Classico & Riserva, Gavi, Vermentino, Tuscan reds and Prosecco' },
  { title: 'Craft cocktails', text: 'Limoncello Martini, Coffee Negroni, Italian Margarita, Espresso Martini' },
  { title: 'Beer list', text: 'Peroni, Stella Artois, Yuengling, Abita, Modelo and more' },
]

// "In the news" section. Add as many as you like; the grid wraps.
// `url` is the link to the full article (opens in a new tab). '#' = no link yet.
export const newsArticles = [
  { outlet: '[NEWS OUTLET]', date: '[DATE]', headline: '[ARTICLE HEADLINE]', excerpt: '[A line or two from the article]', url: '#' },
  { outlet: '[NEWS OUTLET]', date: '[DATE]', headline: '[ARTICLE HEADLINE]', excerpt: '[A line or two from the article]', url: '#' },
  { outlet: '[NEWS OUTLET]', date: '[DATE]', headline: '[ARTICLE HEADLINE]', excerpt: '[A line or two from the article]', url: '#' },
]

// Featured Facebook posts, shown under the news articles.
// `url` is the link to the post on Facebook.
export const facebookPosts = [
  { date: '[DATE]', text: '[FACEBOOK POST TEXT]', photo: null, label: 'Facebook post', alt: 'Photo from a Facebook post', url: '#' },
  { date: '[DATE]', text: '[FACEBOOK POST TEXT]', photo: null, label: 'Facebook post', alt: 'Photo from a Facebook post', url: '#' },
  { date: '[DATE]', text: '[FACEBOOK POST TEXT]', photo: null, label: 'Facebook post', alt: 'Photo from a Facebook post', url: '#' },
]

// The row of three pictures in the Events section.
// `wide: true` makes that one take up twice the space of the others.
export const eventGallery = [
  { video: null, wide: true, label: 'Patio video', alt: 'Our courtyard patio under the shade sails' },
  { photo: null, label: 'Party table', alt: 'A long table set for a party on the patio' },
  { photo: null, label: 'Event buffet', alt: 'Buffet and drink stations set up for an event' },
]
