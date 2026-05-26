import { useState } from 'react'
import Layout from '../components/Layout'

const conversations = [
  {
    id: 1,
    name: 'Vane Ara',
    avatar: 'img/avatarvane.jpg',
    lastMessage: 'Perfecto, entonces quedamos así!',
    time: '11:32',
    unread: 2,
    messages: [
      { from: 'them', text: 'Hola! Cómo va el TP?', time: '10:15' },
      { from: 'me', text: 'Yendo bien, ya casi terminamos la maqueta', time: '10:18' },
      { from: 'them', text: 'Genial, yo estoy con la parte de responsive', time: '10:22' },
      { from: 'me', text: 'Dale, cualquier cosa me avisas', time: '10:25' },
      { from: 'them', text: 'Perfecto, entonces quedamos así!', time: '11:32' },
    ]
  },
  {
    id: 2,
    name: 'Fernando Rodríguez',
    avatar: 'img/default.png',
    lastMessage: 'Subí los cambios al repo',
    time: 'Ayer',
    unread: 0,
    messages: [
      { from: 'them', text: 'Che, viste mi último commit?', time: 'Ayer 14:20' },
      { from: 'me', text: 'Todavía no, ahora lo veo', time: 'Ayer 14:25' },
      { from: 'them', text: 'Ahí subí los cambios al repo', time: 'Ayer 15:10' },
    ]
  },
  {
    id: 3,
    name: 'Desarrollo Cuyo - Grupo 4',
    avatar: null,
    initial: 'DC',
    lastMessage: 'Tomi: Listo, ya quedó',
    time: 'Mar 20',
    unread: 5,
    messages: [
      { from: 'them', text: 'Vane: Chicos, actualicen la rama main', time: 'Mar 20 09:00' },
      { from: 'me', text: 'Dale, ahora la actualizo', time: 'Mar 20 09:15' },
      { from: 'them', text: 'Fer: Ya hice merge de mi branch', time: 'Mar 20 10:30' },
      { from: 'me', text: 'Listo, ya quedó', time: 'Mar 20 11:00' },
    ]
  },
  {
    id: 4,
    name: 'Tomi M.',
    avatar: 'img/tomi.png',
    lastMessage: 'Jajajaja tal cual',
    time: 'Lun',
    unread: 0,
    messages: [
      { from: 'them', text: 'Viste el diseño retro que hicimos?', time: 'Lun 16:40' },
      { from: 'me', text: 'Sí, quedó muy vintage jaja', time: 'Lun 16:42' },
      { from: 'them', text: 'Jajajaja tal cual', time: 'Lun 16:45' },
    ]
  },
]

function Mensajes() {
  const [activeConv, setActiveConv] = useState(conversations[0])
  const [inputText, setInputText] = useState('')

  const handleSend = () => {
    if (!inputText.trim()) return
    setActiveConv(prev => ({
      ...prev,
      messages: [...prev.messages, { from: 'me', text: inputText, time: 'Ahora' }]
    }))
    setInputText('')
  }

  const thread = activeConv.messages

  return (
    <Layout>
      <div
        className="card"
        style={{
          display: 'flex',
          height: 'calc(100vh - 180px)',
          padding: 0,
          overflow: 'hidden'
        }}
      >
        {/* Conversation List */}
        <div
          style={{
            width: '300px',
            borderRight: '1px solid #dddfe2',
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0
          }}
        >
          <div
            className="card-header"
            style={{
              padding: '10px 12px',
              margin: 0,
              borderBottom: '1px solid #dddfe2'
            }}
          >
            <span className="card-title">Mensajes</span>
          </div>

          <div style={{ padding: '8px', borderBottom: '1px solid #e9ebee' }}>
            <input
              placeholder="Buscar conversaciones..."
              style={{
                width: '100%',
                padding: '6px 8px',
                border: '1px solid #dddfe2',
                borderRadius: '2px',
                fontSize: '11px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {conversations.map(conv => (
              <div
                key={conv.id}
                onClick={() => setActiveConv(conv)}
                style={{
                  display: 'flex',
                  gap: '10px',
                  padding: '10px 12px',
                  cursor: 'pointer',
                  backgroundColor:
                    activeConv.id === conv.id ? '#d8dfea' : 'transparent',
                  borderBottom: '1px solid #e9ebee'
                }}
              >
                {conv.avatar ? (
                  <img
                    src={conv.avatar}
                    alt={conv.name}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '2px',
                      flexShrink: 0
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#3b5998',
                      borderRadius: '2px',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '11px',
                      flexShrink: 0
                    }}
                  >
                    {conv.initial}
                  </div>
                )}

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span
                      style={{
                        fontWeight: conv.unread > 0 ? 'bold' : 'normal',
                        fontSize: '12px',
                        color: '#1c1e21'
                      }}
                    >
                      {conv.name}
                    </span>
                    <span style={{ fontSize: '10px', color: '#606770' }}>
                      {conv.time}
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '2px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        color: '#606770',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        flex: 1
                      }}
                    >
                      {conv.lastMessage}
                    </span>

                    {conv.unread > 0 && (
                      <span
                        style={{
                          backgroundColor: '#fa3e3e',
                          color: 'white',
                          borderRadius: '10px',
                          padding: '1px 6px',
                          fontSize: '10px',
                          fontWeight: 'bold',
                          marginLeft: '4px',
                          flexShrink: 0
                        }}
                      >
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Thread */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div
            className="card-header"
            style={{
              padding: '10px 12px',
              margin: 0,
              borderBottom: '1px solid #dddfe2'
            }}
          >
            <span className="card-title">{activeConv.name}</span>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px 12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            {thread.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent:
                    msg.from === 'me' ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    maxWidth: '70%',
                    backgroundColor:
                      msg.from === 'me' ? '#3b5998' : '#f0f2f5',
                    color: msg.from === 'me' ? 'white' : '#1c1e21',
                    padding: '8px 12px',
                    borderRadius: '2px',
                    fontSize: '12px'
                  }}
                >
                  <div>{msg.text}</div>
                  <div
                    style={{
                      fontSize: '9px',
                      marginTop: '4px',
                      color: msg.from === 'me' ? 'rgba(255,255,255,0.7)' : '#606770',
                      textAlign: 'right'
                    }}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: '1px solid #dddfe2',
              padding: '10px 12px',
              display: 'flex',
              gap: '10px',
              alignItems: 'center'
            }}
          >
            <textarea
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
              placeholder="Escribe un mensaje..."
              rows={1}
              style={{
                flex: 1,
                padding: '8px',
                border: '1px solid #dddfe2',
                borderRadius: '2px',
                fontSize: '12px',
                fontFamily: 'inherit',
                resize: 'none',
                outline: 'none'
              }}
            />

            <button
              className="fb-button fb-button-primary"
              onClick={handleSend}
              style={{ flexShrink: 0 }}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Mensajes
