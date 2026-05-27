import { useState, useRef, useEffect } from 'react'
import FriendListItem from './FriendListItem'
import MessageBubble from './MessageBubble'
import ChatInput from './ChatInput'
import Avatar from './Avatar'
import fer_avatar from '../assets/img/fer_avatar.jpg'
import vane_avatar from '../assets/img/avatarvane.jpg'
import tomi_avatar from '../assets/img/tomi.png'

const emojis = ['😊', '👍', '🔥', '💪', '😄', '🎉', '👌', '✅', '❤️', '😂', '🤩', '🙌', '✨', '👀']

const friends = [
  { id: 1, name: 'Vane Ara', avatar: vane_avatar, online: true },
  { id: 2, name: 'Tomi M.', avatar: tomi_avatar, online: true },
  { id: 3, name: 'Fernando Rodríguez', avatar: fer_avatar, online: false },
  { id: 4, name: 'Desarrollo Cuyo - Grupo 4', avatar: null, initial: 'DC', online: true },
]

const initialMessages = {
  1: [
    { from: 'them', text: 'Hola! Cómo va el TP?', time: '10:15' },
    { from: 'me', text: 'Yendo bien, ya casi terminamos la maqueta', time: '10:18' },
    { from: 'them', text: 'Genial!', time: '10:22' },
  ],
  2: [
    { from: 'them', text: 'Viste el diseño retro que hicimos?', time: 'Lun 16:40' },
    { from: 'me', text: 'Sí, quedó muy vintage jaja', time: 'Lun 16:42' },
    { from: 'them', text: 'Jajajaja tal cual', time: 'Lun 16:45' },
  ],
  4: [
    { from: 'them', text: 'Vane: Chicos, actualicen la rama main', time: '09:00' },
    { from: 'them', text: 'Tomi: Ya la actualicé, ya está lista para usar', time: '09:05' },
    { from: 'them', text: 'Fer: Listo, ya está la maqueta, ahora a subirla', time: '09:15' },
    { from: 'them', text: 'Desarrollo Cuyo - Grupo 4: ¡Feliz Día de la Ingeniería!', time: '09:30' },
  ],
}

function FloatingChat() {
  const [chatExpanded, setChatExpanded] = useState(false)
  const [openChats, setOpenChats] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [inputText, setInputText] = useState({})
  const [messages, setMessages] = useState(initialMessages)
  const chatEndRefs = useRef({})

  const scrollToBottom = (id) => {
    setTimeout(() => {
      chatEndRefs.current[id]?.scrollIntoView({ behavior: 'smooth' })
    }, 10)
  }

  const filteredFriends = friends.filter(f =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const openChat = (friend) => {
    if (!openChats.find(c => c.id === friend.id)) {
      setOpenChats([...openChats, { ...friend }])
      setTimeout(() => scrollToBottom(friend.id), 50)
    }
    setChatExpanded(false)
  }

  const closeChat = (id) => {
    setOpenChats(openChats.filter(c => c.id !== id))
  }

  const sendMessage = (friendId, text) => {
    if (!text || !text.trim()) return
    const emoji = emojis[Math.floor(Math.random() * emojis.length)]
    const msgs = messages[friendId] || []
    setMessages({
      ...messages,
      [friendId]: [...msgs, { from: 'me', text: text.trim(), time: 'Ahora' }],
    })
    setInputText(prev => ({ ...prev, [friendId]: '' }))
    scrollToBottom(friendId)

    setTimeout(() => {
      setMessages(prev => {
        const current = prev[friendId] || []
        return {
          ...prev,
          [friendId]: [...current, { from: 'them', text: emoji, time: 'Ahora' }],
        }
      })
      scrollToBottom(friendId)
    }, 1000 + Math.random() * 2000)
  }

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .floating-chat-wrapper { display: none !important; }
        }
      `}</style>

      <div className="floating-chat-wrapper">
        {openChats.map(chat => {
          const msgs = messages[chat.id] || []
          return (
            <div key={chat.id} className="chat-popup">
              <div className="chat-popup-header">
                <span className="chat-popup-header-name">
                  <Avatar src={chat.avatar} initials={chat.initial} alt={chat.name} size="sm" />
                  {' '}{chat.name}
                </span>
                <button className="chat-popup-close" onClick={() => closeChat(chat.id)}>✕</button>
              </div>

              <div className="chat-popup-body">
                {msgs.map((msg, i) => (
                  <div key={i} ref={i === msgs.length - 1 ? el => chatEndRefs.current[chat.id] = el : null}>
                    <MessageBubble
                      text={msg.text}
                      time={msg.time}
                      fromMe={msg.from === 'me'}
                      variant="float"
                    />
                  </div>
                ))}
              </div>

              <ChatInput
                value={inputText[chat.id] || ''}
                onChange={v => setInputText(prev => ({ ...prev, [chat.id]: v }))}
                onSend={(text) => sendMessage(chat.id, text)}
                placeholder="Escribe..."
                variant="float"
              />
            </div>
          )
        })}

        <div className="chat-sidebar">
          <div className="chat-sidebar-toggle" onClick={() => setChatExpanded(!chatExpanded)}>
            <span className="chat-sidebar-toggle-title">
              💬 Chat ({friends.filter(f => f.online).length})
            </span>
            <span className="chat-sidebar-toggle-arrow">
              {chatExpanded ? '▼' : '▲'}
            </span>
          </div>

          {chatExpanded && (
            <div>
              <div className="chat-sidebar-search">
                <input
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Buscar contactos..."
                  className="input-search"
                />
              </div>

              <div className="chat-sidebar-list">
                <div className="chat-section-label">EN LÍNEA</div>
                {filteredFriends.filter(f => f.online).map(friend => (
                  <FriendListItem key={friend.id} friend={friend} onClick={() => openChat(friend)} />
                ))}

                {filteredFriends.some(f => !f.online) && (
                  <>
                    <div className="chat-section-label">DESCONECTADO</div>
                    {filteredFriends.filter(f => !f.online).map(friend => (
                      <FriendListItem key={friend.id} friend={friend} onClick={() => openChat(friend)} />
                    ))}
                  </>
                )}

                {filteredFriends.length === 0 && (
                  <div className="chat-empty">Sin resultados</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FloatingChat
