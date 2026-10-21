# Eataliano

Website for Eataliano, Italian Kitchen & Bar, 1036 W Howard Ave, Biloxi, MS.

Built with Vite + React + react-router. Two pages:

| Page | Route | Source |
|---|---|---|
| Home | `/` | `src/pages/Home.jsx` |
| Menu | `/menu` | `src/pages/Menu.jsx` |

Design reference: the "Eataliano Website" canvas (https://claude.ai/artifact/MiG8xYa25XF2ASnKHmjniH); a saved copy of the home page is in `example/`.

## Run it

```
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

## Editing content

- **Restaurant info, hours, events, house favorites:** `src/data/site.js`
- **The full menu (lunch, dinner, desserts, drinks):** `src/data/menu.js`
- **Colors and layout:** `src/index.css` (colors are variables at the top)

## Adding photos

Every photo spot shows a labeled placeholder until a photo is set. To add one:

1. Put the file in `public/photos/` (create the folder the first time).
2. In `src/data/site.js`, set that spot's `photo` (or `video`) to the path, e.g. `photo: '/photos/hero.jpg'`.

## Still to fill in

- Toast online ordering link (`orderOnlineUrl` in `src/data/site.js`)
- Happy hour specials
- Motown Mondays start time
- Our Story headline and the owner's back story
- Instagram and Facebook links
- All photos and the two videos
