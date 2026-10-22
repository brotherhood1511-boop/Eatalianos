// =============================================================================
// PHOTO  —  every picture or video box on the site goes through this
//
// It decides what to show:
//   - a `video` path is set  → plays it silently on a loop (like a moving photo)
//   - a `photo` path is set  → shows the picture
//   - neither yet            → shows a striped placeholder box that says
//                               "PHOTO: <label>" so you know what goes there
//
// You don't edit this file to add photos — set the `photo` / `video` paths in
// src/data/site.js instead (instructions at the top of that file).
// =============================================================================

export default function Photo({ photo, video, alt, label, className = '' }) {
  const classes = `photo ${className}`.trim()

  if (video) {
    return <video className={classes} src={video} autoPlay muted loop playsInline aria-label={alt} />
  }
  if (photo) {
    // loading="lazy" = don't download the picture until the visitor scrolls near it (faster page)
    return <img className={classes} src={photo} alt={alt} loading="lazy" />
  }
  return (
    <div className={`${classes} photo-placeholder`} role="img" aria-label={alt}>
      <span>{video === null ? 'Video' : 'Photo'}: {label ?? alt}</span>
    </div>
  )
}
