import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import Timestamp from './Timestamp'

function PostHeader({ avatarSrc, avatarInitials, name, profileLink, timestamp, visibility }) {
  return (
    <div
      className="post-header"
      style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '12px',
      }}
    >
      <Avatar src={avatarSrc} initials={avatarInitials} alt={name} size="lg" to={profileLink} />

      <div>
        <Link
          to={profileLink}
          style={{ fontWeight: 'bold', fontSize: '13px', textDecoration: 'none', color: '#3b5998' }}
        >
          {name}
        </Link>

        <Timestamp text={`${timestamp} · ${visibility || 'Público'}`} />
      </div>
    </div>
  )
}

export default PostHeader
