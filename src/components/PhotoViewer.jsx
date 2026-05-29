import { useState, useEffect, useCallback } from 'react'

function PhotoViewer({ photos, initialIndex = 0, onClose }) {
  const [idx, setIdx] = useState(initialIndex)

  const goPrev = useCallback(() => {
    setIdx(i => (i === 0 ? photos.length - 1 : i - 1))
  }, [photos.length])

  const goNext = useCallback(() => {
    setIdx(i => (i === photos.length - 1 ? 0 : i + 1))
  }, [photos.length])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose, goPrev, goNext])

  if (!photos || photos.length === 0) return null

  const current = photos[idx]

  return (
    <div className="photo-modal">
      <button className="close-btn" onClick={onClose}>✕</button>

      {photos.length > 1 && (
        <button className="nav-btn left" onClick={goPrev}>‹</button>
      )}

      <img className="modal-image" src={current.img} alt={current.titulo || ''} />

      {photos.length > 1 && (
        <button className="nav-btn right" onClick={goNext}>›</button>
      )}

      {current.titulo && <p className="modal-title">{current.titulo}</p>}
    </div>
  )
}

export default PhotoViewer
