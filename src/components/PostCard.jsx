import { useState, useRef } from 'react'
import PostHeader from './PostHeader'
import PostActions from './PostActions'
import CommentBubble from './CommentBubble'
import PostFeedback from './PostFeedback'

function PostCard({ post, onOpenViewer, onComment }) {
  const { id, author, avatarSrc, avatarInitials, timestamp, visibility, content, image, images, feedback, comments, profileLink } = post

  const allImages = images && images.length > 0 ? images : (image ? [image] : [])
  const hasMultiple = allImages.length > 1
  const [commentText, setCommentText] = useState('')
  const commentRef = useRef(null)

  const handleCommentSubmit = () => {
    if (!commentText.trim()) return
    onComment?.(id, commentText.trim())
    setCommentText('')
  }

  return (
    <div className="card">
      <PostHeader
        avatarSrc={avatarSrc}
        avatarInitials={avatarInitials}
        name={author}
        profileLink={profileLink || '/perfiles'}
        timestamp={timestamp}
        visibility={visibility}
      />

      <div className="post-content">
        {content && (
          <p style={{ fontSize: '14px', marginBottom: allImages.length > 0 ? '15px' : 0, whiteSpace: 'pre-wrap' }}>
            {content}
          </p>
        )}

        {allImages.length > 0 && (
          <div
            className={`post-images${hasMultiple ? ' post-images-carousel' : ''}`}
            onClick={() => onOpenViewer && onOpenViewer(allImages, 0)}
          >
            <div className="post-images-main">
              <img
                src={allImages[0]}
                alt="Post"
                style={{
                  width: '100%',
                  borderRadius: '2px',
                  border: '1px solid #dddfe2',
                  cursor: onOpenViewer ? 'pointer' : 'default',
                  display: 'block',
                }}
              />
              {hasMultiple && (
                <div className="post-images-overlay">
                  +{allImages.length - 1} más
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <PostActions onCommentClick={() => commentRef.current?.focus()} />

      {comments && comments.length > 0 && (
        <div className="comments-section" style={{ marginTop: '15px' }}>
          {comments.map((c, i) => (
            <CommentBubble key={i} {...c} />
          ))}
        </div>
      )}

      <div className="comment-input-row">
        <input
          ref={commentRef}
          className="comment-input"
          type="text"
          placeholder="Escribe un comentario..."
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleCommentSubmit() }}
        />
        <button className="fb-button comment-submit" onClick={handleCommentSubmit}>
          Comentar
        </button>
      </div>

      {feedback && <PostFeedback summary={feedback} />}
    </div>
  )
}

export default PostCard
