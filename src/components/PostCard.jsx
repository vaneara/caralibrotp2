import PostHeader from './PostHeader'
import PostActions from './PostActions'
import CommentBubble from './CommentBubble'
import PostFeedback from './PostFeedback'

function PostCard({ post }) {
  const { author, avatarSrc, avatarInitials, timestamp, visibility, content, image, feedback, comments, profileLink } = post

  return (
    <div className="card">
      <PostHeader
        avatarSrc={avatarSrc}
        avatarInitials={avatarInitials}
        name={author}
        profileLink={profileLink || '/perfiles/vane-ara'}
        timestamp={timestamp}
        visibility={visibility}
      />

      <div className="post-content">
        <p style={{ fontSize: '14px', marginBottom: image ? '15px' : 0, whiteSpace: 'pre-wrap' }}>
          {content}
        </p>

        {image && (
          <img
            src={image}
            alt="Post"
            style={{
              width: '100%',
              borderRadius: '2px',
              border: '1px solid #dddfe2',
            }}
          />
        )}
      </div>

      <PostActions />

      {comments && comments.length > 0 && (
        <div className="comments-section" style={{ marginTop: '15px' }}>
          {comments.map((c, i) => (
            <CommentBubble key={i} {...c} />
          ))}
        </div>
      )}

      {feedback && <PostFeedback summary={feedback} />}
    </div>
  )
}

export default PostCard
