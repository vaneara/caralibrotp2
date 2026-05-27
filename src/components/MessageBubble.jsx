import Timestamp from './Timestamp'

function MessageBubble({ text, time, fromMe, variant = 'page' }) {
  const isPage = variant === 'page'

  return (
    <div
      className="msg-row"
      style={{
        display: 'flex',
        justifyContent: fromMe ? 'flex-end' : 'flex-start',
      }}
    >
      <div
        className={`msg-bubble ${fromMe ? 'own' : 'other'}`}
        style={{
          maxWidth: isPage ? '70%' : '85%',
          backgroundColor: fromMe ? '#3b5998' : isPage ? '#f0f2f5' : '#fff',
          color: fromMe ? 'white' : '#1c1e21',
          padding: isPage ? '8px 12px' : '6px 10px',
          borderRadius: '2px',
          fontSize: isPage ? '12px' : '11px',
          border: !fromMe && !isPage ? '1px solid #dddfe2' : 'none',
        }}
      >
        <div>{text}</div>
        <Timestamp
          text={time}
          size="sm"
          color={fromMe ? 'rgba(255,255,255,0.7)' : '#606770'}
        />
      </div>
    </div>
  )
}

export default MessageBubble
