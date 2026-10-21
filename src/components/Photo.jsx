// Shows the photo (or looping video) once one is set; until then, a labeled placeholder
// so it's clear what picture belongs in that spot.
export default function Photo({ photo, video, alt, label, className = '' }) {
  const classes = `photo ${className}`.trim()

  if (video) {
    return <video className={classes} src={video} autoPlay muted loop playsInline aria-label={alt} />
  }
  if (photo) {
    return <img className={classes} src={photo} alt={alt} loading="lazy" />
  }
  return (
    <div className={`${classes} photo-placeholder`} role="img" aria-label={alt}>
      <span>{video === null ? 'Video' : 'Photo'}: {label ?? alt}</span>
    </div>
  )
}
