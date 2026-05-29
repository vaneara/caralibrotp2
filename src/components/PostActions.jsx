import { useState } from 'react'

function PostActions({ actions = ['like', 'comment', 'share'], onCommentClick }) {
  const [liked, setLiked] = useState(false)
  const [shared, setShared] = useState(false)

  const labels = {
    like: liked ? 'Ya no me gusta' : '👍 Me gusta',
    comment: '💬 Comentar',
    share: shared ? '↪️ Compartido' : '↪️ Compartir',
  }

  return (
    <div className="post-actions">
      {actions.map(action => (
        <a
          key={action}
          href="#"
          className={`action-link${action === 'like' && liked ? ' liked' : ''}${action === 'share' && shared ? ' shared' : ''}`}
          onClick={e => {
            e.preventDefault()
            if (action === 'like') setLiked(!liked)
            else if (action === 'share') setShared(!shared)
            else if (action === 'comment') onCommentClick?.()
          }}
        >
          {labels[action] || action}
        </a>
      ))}
    </div>
  )
}

export default PostActions
