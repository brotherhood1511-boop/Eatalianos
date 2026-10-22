// =============================================================================
// APP  —  decides which page to show based on the web address
//
//   yoursite.com/       → Home page  (src/pages/Home.jsx)
//   yoursite.com/menu   → Menu page  (src/pages/Menu.jsx)
//   anything else       → Home page
//
// To add a new page later: make a file in src/pages/, import it below, and add
// another <Route path="/whatever" element={<NewPage />} /> line.
// =============================================================================

import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'

// When you switch pages, start at the top of the new page — unless the link
// pointed at a section (like /#visit), in which case scroll to that section.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
