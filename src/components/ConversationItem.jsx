import Avatar from './Avatar'
import Badge from './Badge'

function ConversationItem({ conversation, isActive, onClick }) {
  const { name, avatar, initial, lastMessage, time, unread } = conversation

  return (
    <div
      onClick={onClick}
      className="conv-item"
      style={{
        display: 'flex',
        gap: '10px',
        padding: '10px 12px',
        cursor: 'pointer',
        backgroundColor: isActive ? '#d8dfea' : 'transparent',
        borderBottom: '1px solid #e9ebee',
      }}
    >
      <Avatar src={avatar} initials={initial} alt={name} size="lg" />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontWeight: unread > 0 ? 'bold' : 'normal',
              fontSize: '12px',
              color: '#1c1e21',
            }}
          >
            {name}
          </span>
          <span style={{ fontSize: '10px', color: '#606770' }}>{time}</span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2px',
          }}
        >
          <span
            style={{
              fontSize: '11px',
              color: '#606770',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flex: 1,
            }}
          >
            {lastMessage}
          </span>

          <Badge count={unread} />
        </div>
      </div>
    </div>
  )
}

export default ConversationItem
