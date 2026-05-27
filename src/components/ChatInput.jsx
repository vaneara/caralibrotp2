import { useState } from 'react'

function ChatInput({ value, onChange, onSend, placeholder = 'Escribe un mensaje...', variant = 'page' }) {
  const isControlled = value !== undefined
  const [internalText, setInternalText] = useState('')
  const text = isControlled ? value : internalText

  const setText = (v) => {
    if (isControlled) onChange?.(v)
    else setInternalText(v)
  }

  const handleSend = () => {
    if (!text.trim()) return
    onSend?.(text.trim())
    if (!isControlled) setText('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const inputProps = {
    value: text,
    onChange: e => setText(e.target.value),
    onKeyDown: handleKeyDown,
    placeholder,
    className: 'input-field input-chat',
  }

  return (
    <div
      className="chat-input-row"
      style={{
        display: 'flex',
        gap: variant === 'page' ? '10px' : '6px',
        padding: variant === 'page' ? '10px 12px' : '6px',
        borderTop: '1px solid #dddfe2',
        alignItems: 'center',
        backgroundColor: variant === 'page' ? 'transparent' : '#fff',
      }}
    >
      {variant === 'page' ? (
        <textarea {...inputProps} rows={1} />
      ) : (
        <input {...inputProps} type="text" />
      )}
      <button
        onClick={handleSend}
        style={{
          backgroundColor: '#3b5998',
          color: 'white',
          border: 'none',
          borderRadius: '2px',
          padding: variant === 'page' ? '8px 16px' : '4px 10px',
          fontSize: variant === 'page' ? '11px' : '10px',
          fontWeight: 'bold',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        Enviar
      </button>
    </div>
  )
}

export default ChatInput
