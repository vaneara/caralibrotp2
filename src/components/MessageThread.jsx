import MessageBubble from './MessageBubble'
import ChatInput from './ChatInput'

function MessageThread({ activeConversation, onSendMessage }) {
  const messages = activeConversation?.messages || []

  return (
    <div className="msg-thread">
      <div className="card-header msg-thread-header">
        <span className="card-title">{activeConversation?.name}</span>
      </div>

      <div className="msg-thread-body">
        {messages.map((msg, i) => (
          <MessageBubble
            key={i}
            text={msg.text}
            time={msg.time}
            fromMe={msg.from === 'me'}
          />
        ))}
      </div>

      <ChatInput onSend={onSendMessage} />
    </div>
  )
}

export default MessageThread
