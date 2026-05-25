import { useState, useRef, useEffect } from 'react'

const friends = [
  { id: 1, name: 'Vane Ara', avatar: 'img/avatarvane.jpg', online: true },
  { id: 2, name: 'Tomi M.', avatar: 'img/tomi.png', online: true },
  { id: 3, name: 'Fernando Rodríguez', avatar: 'img/default.png', online: false },
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
    { from: 'me', text: 'Dale, ahora la actualizo', time: '09:15' },
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

  const handleSend = (friendId) => {
    const text = inputText[friendId]
    if (!text || !text.trim()) return
    const msgs = messages[friendId] || []
    setMessages({
      ...messages,
      [friendId]: [...msgs, { from: 'me', text: text.trim(), time: 'Ahora' }]
    })
    setInputText(prev => ({ ...prev, [friendId]: '' }))
    scrollToBottom(friendId)
  }

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .floating-chat-wrapper { display: none !important; }
        }
      `}</style>

      <div className="floating-chat-wrapper" style={{
        position: 'fixed',
        bottom: 0,
        right: '20px',
        zIndex: 999,
        display: 'flex',
        alignItems: 'flex-end',
        gap: '8px',
      }}>
        {/* Chat Pop-ups */}
        {openChats.map(chat => {
          const msgs = messages[chat.id] || []
          return (
            <div
              key={chat.id}
              style={{
                width: '280px',
                backgroundColor: '#fff',
                border: '1px solid #dddfe2',
                borderBottom: 'none',
                borderRadius: '3px 3px 0 0',
                boxShadow: '0 -2px 8px rgba(0,0,0,0.15)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <div style={{
                backgroundColor: '#3b5998',
                color: 'white',
                padding: '6px 10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
              }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold' }}>
                  {chat.avatar ? (
                    <img src={chat.avatar} alt="" style={{
                      width: '18px', height: '18px', borderRadius: '2px',
                      marginRight: '6px', verticalAlign: 'middle'
                    }} />
                  ) : (
                    <span style={{
                      display: 'inline-block', width: '18px', height: '18px',
                      backgroundColor: '#fff', color: '#3b5998',
                      borderRadius: '2px', marginRight: '6px',
                      verticalAlign: 'middle', textAlign: 'center',
                      lineHeight: '18px', fontSize: '9px', fontWeight: 'bold'
                    }}>{chat.initial}</span>
                  )}
                  {chat.name}
                </span>
                <button
                  onClick={() => closeChat(chat.id)}
                  style={{
                    background: 'none', border: 'none', color: 'white',
                    cursor: 'pointer', fontSize: '14px', lineHeight: 1,
                    padding: '0 2px'
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Messages */}
              <div style={{
                height: '220px',
                overflowY: 'auto',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                backgroundColor: '#f6f7f9',
              }}>
                {msgs.map((msg, i) => (
                  <div
                    key={i}
                    ref={i === msgs.length - 1 ? el => chatEndRefs.current[chat.id] = el : null}
                    style={{
                      display: 'flex',
                      justifyContent: msg.from === 'me' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <div style={{
                      maxWidth: '85%',
                      backgroundColor: msg.from === 'me' ? '#3b5998' : '#fff',
                      color: msg.from === 'me' ? 'white' : '#1c1e21',
                      padding: '6px 10px',
                      borderRadius: '2px',
                      fontSize: '11px',
                      border: msg.from === 'me' ? 'none' : '1px solid #dddfe2',
                    }}>
                      <div>{msg.text}</div>
                      <div style={{
                        fontSize: '9px',
                        marginTop: '3px',
                        color: msg.from === 'me' ? 'rgba(255,255,255,0.7)' : '#606770',
                        textAlign: 'right',
                      }}>{msg.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div style={{
                display: 'flex',
                borderTop: '1px solid #dddfe2',
                padding: '6px',
                gap: '6px',
                backgroundColor: '#fff',
              }}>
                <input
                  value={inputText[chat.id] || ''}
                  onChange={e => setInputText(prev => ({ ...prev, [chat.id]: e.target.value }))}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      handleSend(chat.id)
                    }
                  }}
                  placeholder="Escribe..."
                  style={{
                    flex: 1,
                    padding: '4px 6px',
                    border: '1px solid #dddfe2',
                    borderRadius: '2px',
                    fontSize: '11px',
                    outline: 'none',
                  }}
                />
                <button
                  onClick={() => handleSend(chat.id)}
                  style={{
                    backgroundColor: '#3b5998',
                    color: 'white',
                    border: 'none',
                    borderRadius: '2px',
                    padding: '4px 10px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  Enviar
                </button>
              </div>
            </div>
          )
        })}

        {/* Chat Sidebar */}
        <div style={{
          width: '200px',
          backgroundColor: '#fff',
          border: '1px solid #dddfe2',
          borderBottom: 'none',
          borderRadius: '3px 3px 0 0',
          boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
          overflow: 'hidden',
        }}>
          {/* Toggle Header */}
          <div
            onClick={() => setChatExpanded(!chatExpanded)}
            style={{
              backgroundColor: '#f6f7f9',
              padding: '8px 10px',
              borderBottom: '1px solid #dddfe2',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#1c1e21' }}>
              💬 Chat ({friends.filter(f => f.online).length})
            </span>
            <span style={{ fontSize: '10px', color: '#606770' }}>
              {chatExpanded ? '▼' : '▲'}
            </span>
          </div>

          {chatExpanded && (
            <div>
              {/* Search */}
              <div style={{ padding: '6px 8px', borderBottom: '1px solid #e9ebee' }}>
                <input
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Buscar contactos..."
                  style={{
                    width: '100%',
                    padding: '4px 6px',
                    border: '1px solid #dddfe2',
                    borderRadius: '2px',
                    fontSize: '11px',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Online Friends */}
              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                <div style={{ padding: '6px 10px 2px', fontSize: '10px', color: '#606770', fontWeight: 'bold' }}>
                  EN LÍNEA
                </div>
                {filteredFriends.filter(f => f.online).map(friend => (
                  <div
                    key={friend.id}
                    onClick={() => openChat(friend)}
                    style={{
                      padding: '6px 10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontSize: '11px',
                      color: '#1c1e21',
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f0f2f5'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span style={{ color: '#42b72a', fontSize: '14px' }}>●</span>
                    {friend.avatar ? (
                      <img src={friend.avatar} alt="" style={{
                        width: '20px', height: '20px', borderRadius: '2px'
                      }} />
                    ) : (
                      <div style={{
                        width: '20px', height: '20px',
                        backgroundColor: '#3b5998', borderRadius: '2px',
                        color: 'white', fontSize: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 'bold',
                      }}>{friend.initial}</div>
                    )}
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {friend.name}
                    </span>
                  </div>
                ))}

                {filteredFriends.some(f => !f.online) && (
                  <>
                    <div style={{ padding: '6px 10px 2px', fontSize: '10px', color: '#606770', fontWeight: 'bold' }}>
                      DESCONECTADO
                    </div>
                    {filteredFriends.filter(f => !f.online).map(friend => (
                      <div
                        key={friend.id}
                        onClick={() => openChat(friend)}
                        style={{
                          padding: '6px 10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          fontSize: '11px',
                          color: '#606770',
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f0f2f5'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <span style={{ color: '#bec3c9', fontSize: '14px' }}>●</span>
                        {friend.avatar ? (
                          <img src={friend.avatar} alt="" style={{
                            width: '20px', height: '20px', borderRadius: '2px',
                            filter: 'grayscale(1)'
                          }} />
                        ) : (
                          <div style={{
                            width: '20px', height: '20px',
                            backgroundColor: '#bec3c9', borderRadius: '2px',
                            color: 'white', fontSize: '8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 'bold',
                          }}>{friend.initial}</div>
                        )}
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {friend.name}
                        </span>
                      </div>
                    ))}
                  </>
                )}

                {filteredFriends.length === 0 && (
                  <div style={{ padding: '20px 10px', textAlign: 'center', fontSize: '11px', color: '#606770' }}>
                    Sin resultados
                  </div>
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
