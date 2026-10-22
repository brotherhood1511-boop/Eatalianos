// =============================================================================
// MAIN  —  the starting point. You shouldn't need to touch this file.
//
// It finds the empty <div id="root"> in index.html and fills it with the app.
// BrowserRouter is what lets the site have more than one page (/ and /menu).
// It also loads index.css, which holds all the colors, fonts and layout.
// =============================================================================

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
