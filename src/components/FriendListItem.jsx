import Avatar from './Avatar'

function FriendListItem({ friend, onClick }) {
  return (
    <div
      onClick={onClick}
      className="friend-item"
      style={{
        padding: '6px 10px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        fontSize: '11px',
        color: friend.online ? '#1c1e21' : '#606770',
      }}
      onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f0f2f5' }}
      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent' }}
    >
      <Avatar
        src={friend.avatar}
        initials={friend.initial}
        alt={friend.name}
        size="sm"
        online={friend.online}
      />
      <span
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {friend.name}
      </span>
    </div>
  )
}

export default FriendListItem
