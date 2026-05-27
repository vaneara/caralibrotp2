import { useState } from 'react'

function PostActions({ actions = ['like', 'comment', 'share'] }) {
  const [liked, setLiked] = useState(false)

  const labels = {
    like: liked ? 'Ya no me gusta' : '👍 Me gusta',
    comment: '💬 Comentar',
    share: '↪️ Compartir',
  }

  return (
    <div className="post-actions">
      {actions.map(action => (
        <a
          key={action}
          href="#"
          className={`action-link${action === 'like' && liked ? ' liked' : ''}`}
          onClick={e => {
            e.preventDefault()
            if (action === 'like') setLiked(!liked)
          }}
        >
          {labels[action] || action}
        </a>
      ))}
    </div>
  )
}

export default PostActions
