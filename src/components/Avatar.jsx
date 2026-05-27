import { Link } from 'react-router-dom'

const sizeMap = {
  sm: 20,
  md: 32,
  lg: 40,
  xl: 50,
  profile: 120,
}

function Avatar({ src, alt, initials, size = 'md', online, to, onClick }) {
  const px = sizeMap[size] ?? size

  const inner = src ? (
    <img
      src={src}
      alt={alt || ''}
      className="avatar-img"
      style={{ width: px, height: px }}
    />
  ) : (
    <div
      className="avatar-initials"
      style={{ width: px, height: px, fontSize: Math.max(10, px * 0.35) }}
    >
      {initials || alt?.[0] || '?'}
    </div>
  )

  const wrapped = to ? (
    <Link to={to} className={`avatar-wrapper${online ? ' avatar-online' : ''}`} onClick={onClick}>
      {inner}
      {online !== undefined && <span className={`avatar-dot ${online ? 'online' : 'offline'}`} />}
    </Link>
  ) : (
    <span className={`avatar-wrapper${online ? ' avatar-online' : ''}`} onClick={onClick} style={{ cursor: onClick ? 'pointer' : undefined }}>
      {inner}
      {online !== undefined && <span className={`avatar-dot ${online ? 'online' : 'offline'}`} />}
    </span>
  )

  return wrapped
}

export default Avatar
