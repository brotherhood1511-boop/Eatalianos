// Restaurant details used across the site.
// Anything in [BRACKETS] is still a placeholder from the design.
//
// Photos: every `photo` below is null until the real pictures are chosen.
// Drop the file in public/photos/ and set e.g. photo: '/photos/hero.jpg'.

export const site = {
  name: 'Eataliano',
  street: '1036 W Howard Ave',
  cityStateZip: 'Biloxi, MS 39530',
  phone: '(228) 967-7055',
  phoneHref: 'tel:2289677055',
  email: 'info@eatalianobiloxi.com',
  orderOnlineUrl: '#', // TODO: Toast online ordering link
  directionsUrl: 'https://maps.google.com/?q=1036+W+Howard+Ave,+Biloxi,+MS+39530',
  mapEmbedUrl: 'https://www.google.com/maps?q=1036+W+Howard+Ave,+Biloxi,+MS+39530&output=embed',
  social: '[INSTAGRAM] · [FACEBOOK]',
}

export const heroPhoto = {
  photo: null,
  label: 'Hero dish',
  alt: 'Linguine with clams, lemon and parsley',
}

export const hours = [
  { label: 'Coffee', time: '10 – 11 AM' },
  { label: 'Lunch', time: '11 AM – 3 PM' },
  { label: 'Afternoon', time: '3 – 5 PM', note: 'Food still served' },
  { label: 'Dinner', time: '5 – 9 PM' },
]

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

export const favorites = [
  { name: 'Rigatoni Bolognese', price: '$23', photo: null, alt: 'Rigatoni with meat sauce' },
  { name: 'Burrata e Prosciutto', price: '$18', photo: null, alt: 'Burrata with prosciutto, arugula and balsamic' },
  { name: 'Fried Calamari', price: '$17', photo: null, alt: 'Fried calamari with marinara and lemon' },
  { name: 'Veal Florentine', price: '$29', photo: null, alt: 'Veal with mushrooms and spinach cream sauce over spaghetti' },
  { name: 'Meatballs al Forno', price: '$15', photo: null, alt: 'Meatballs baked with marinara and mozzarella' },
  { name: 'Spaghetti al Pomodoro', price: '$24', photo: null, alt: 'Spaghetti with marinara' },
]

export const barPhoto = {
  photo: null,
  label: 'Bartender',
  alt: 'Our bartender behind the bar',
}

export const barFeatures = [
  { title: 'High-end bourbon', text: 'Penelope Wheated in our Old Fashioned; The Macallan 12 Double Cask in The Don' },
  { title: 'Italian wine', text: 'Chianti Classico & Riserva, Gavi, Vermentino, Tuscan reds and Prosecco' },
  { title: 'Craft cocktails', text: 'Limoncello Martini, Coffee Negroni, Italian Margarita, Espresso Martini' },
  { title: 'Beer list', text: 'Peroni, Stella Artois, Yuengling, Abita, Modelo and more' },
]

export const eventGallery = [
  { video: null, wide: true, label: 'Patio video', alt: 'Our courtyard patio under the shade sails' },
  { photo: null, label: 'Party table', alt: 'A long table set for a party on the patio' },
  { photo: null, label: 'Event buffet', alt: 'Buffet and drink stations set up for an event' },
]
