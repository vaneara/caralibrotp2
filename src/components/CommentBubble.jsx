import Avatar from './Avatar'

function CommentBubble({ avatarSrc, avatarInitials, name, profileLink, text, timestamp }) {
  return (
    <div
      className="comment-bubble"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '10px',
        gap: '10px',
      }}
    >
      <Avatar src={avatarSrc} initials={avatarInitials} alt={name} size="md" to={profileLink} />

      <div
        style={{
          backgroundColor: '#f0f2f5',
          padding: '8px 12px',
          borderRadius: '2px',
          width: '100%',
        }}
      >
        <a
          href={profileLink}
          style={{
            fontWeight: 'bold',
            fontSize: '11px',
            textDecoration: 'none',
            color: '#3b5998',
            display: 'block',
            marginBottom: '2px',
          }}
        >
          {name}
        </a>

        <p style={{ margin: 0, fontSize: '13px', whiteSpace: 'pre-wrap' }}>{text}</p>
      </div>
    </div>
  )
}

export default CommentBubble
