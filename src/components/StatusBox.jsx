import { useState, useRef } from 'react'
import Button from './Button'
import EmojiPicker from './EmojiPicker'

const emojis = [
  '😊', '😂', '😍', '😎', '😢', '😡', '😱', '🙈',
  '👍', '👎', '✌️', '💪', '👏', '🙌', '👉', '👈',
  '❤️', '💔', '💯', '🔥', '⭐', '🎉', '💀', '✅',
  '🍕', '🌮', '🍺', '☕', '🎵', '🎶', '📷', '💻',
  '😜', '🤔', '😴', '🤗', '😇', '🙄', '😏', '😬',
  '🎸', '⚽', '🏀', '🚗', '✈️', '🌈', '🍀', '👻',
]

function StatusBox({ onSubmit, placeholder = '¿Qué tenés en mente?', buttonText = 'Publicar' }) {
  const [text, setText] = useState('')
  const [images, setImages] = useState([])
  const [showEmojis, setShowEmojis] = useState(false)
  const fileRef = useRef(null)

  const handleSubmit = () => {
    if (!text.trim() && images.length === 0) return
    onSubmit?.({ text: text.trim(), images })
    setText('')
    setImages([])
    setShowEmojis(false)
  }

  const handleFiles = (e) => {
    const files = Array.from(e.target.files)
    const readers = files.map(file => new Promise(resolve => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.readAsDataURL(file)
    }))
    Promise.all(readers).then(results => {
      setImages(prev => [...prev, ...results])
    })
    e.target.value = ''
  }

  const removeImage = (idx) => {
    setImages(prev => prev.filter((_, i) => i !== idx))
  }

  const insertEmoji = (emoji) => {
    setText(prev => prev + emoji)
    setShowEmojis(false)
  }

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Actualizar estado</span>
      </div>

      <div className="status-input">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={placeholder}
        />
      </div>

      {images.length > 0 && (
        <div className="image-previews">
          {images.map((img, i) => (
            <div key={i} className="image-preview-item">
              <img src={img} alt={`Preview ${i + 1}`} />
              <button className="preview-remove" onClick={() => removeImage(i)}>✕</button>
            </div>
          ))}
        </div>
      )}

      <div className="card-footer">
        <div className="footer-actions">
          <button
            type="button"
            className="fb-button emoji-btn"
            onClick={() => setShowEmojis(v => !v)}
            title="Agregar emoji"
          >
            😊
          </button>

          <button
            type="button"
            className="fb-button camera-btn"
            onClick={() => fileRef.current?.click()}
            title="Agregar imágenes"
          >
            📷
          </button>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            onChange={handleFiles}
          />

          {images.length > 0 && (
            <span className="image-count">{images.length} imagen{images.length > 1 ? 'es' : ''}</span>
          )}
        </div>

        <Button variant="primary" onClick={handleSubmit}>
          {buttonText}
        </Button>
      </div>

      {showEmojis && (
        <EmojiPicker emojis={emojis} onSelect={insertEmoji} onClose={() => setShowEmojis(false)} />
      )}
    </div>
  )
}

export default StatusBox
