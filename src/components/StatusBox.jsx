import { useState } from 'react'
import Button from './Button'

function StatusBox({ onSubmit, placeholder = '¿Qué tienes en mente, Equipo?', buttonText = 'Publicar' }) {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    if (!text.trim()) return
    onSubmit?.(text.trim())
    setText('')
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

      <div className="card-footer">
        <Button variant="primary" onClick={handleSubmit}>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default StatusBox
