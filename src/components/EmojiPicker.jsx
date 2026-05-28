import { useEffect, useRef } from 'react'

function EmojiPicker({ emojis, onSelect, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [onClose])

  return (
    <div className="emoji-picker" ref={ref}>
      {emojis.map((emoji, i) => (
        <button key={i} className="emoji-item" onClick={() => onSelect(emoji)}>
          {emoji}
        </button>
      ))}
    </div>
  )
}

export default EmojiPicker
