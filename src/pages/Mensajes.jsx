import { useState } from 'react'
import Layout from '../components/Layout'
import ConversationList from '../components/ConversationList'
import MessageThread from '../components/MessageThread'

const emojis = ['😊', '👍', '🔥', '💪', '😄', '🎉', '👌', '✅', '❤️', '😂', '🤩', '🙌', '✨', '👀']

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
    ],
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
    ],
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
    ],
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
    ],
  },
]

function Mensajes() {
  const [activeConv, setActiveConv] = useState(conversations[0])
  const [search, setSearch] = useState('')

  return (
    <Layout>
      <div className="card messages-panel" style={{ height: 'calc(100vh - 180px)' }}>
        <ConversationList
          conversations={conversations}
          activeId={activeConv.id}
          onSelect={setActiveConv}
          search={search}
          onSearchChange={e => setSearch(e.target.value)}
        />

        <MessageThread
          activeConversation={activeConv}
          onSendMessage={(text) => {
            const emoji = emojis[Math.floor(Math.random() * emojis.length)]
            setActiveConv(prev => ({
              ...prev,
              messages: [...prev.messages, { from: 'me', text, time: 'Ahora' }],
            }))
            setTimeout(() => {
              setActiveConv(prev => ({
                ...prev,
                messages: [...prev.messages, { from: 'them', text: emoji, time: 'Ahora' }],
              }))
            }, 1000 + Math.random() * 2000)
          }}
        />
      </div>
    </Layout>
  )
}

export default Mensajes
