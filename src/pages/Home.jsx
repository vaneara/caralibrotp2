import { useState, useEffect, useCallback } from 'react'
import Layout from '../components/Layout'
import StatusBox from '../components/StatusBox'
import PostCard from '../components/PostCard'
import PhotoViewer from '../components/PhotoViewer'
import defaultImg from '../assets/img/default.png'
import tomi from '../assets/img/tomi.png'
import avatarvane from '../assets/img/avatarvane.jpg'
import avatarfer from '../assets/img/fer_avatar.jpg'

const STORAGE_KEY = 'caralibro_posts'

const team = [
  {
    name: 'Tomi M.',
    avatar: tomi,
    slug: 'tomi-m',
    comments: [
      'Hola, mucho gusto visitante! soy Tomi M.!',
      'Bienvenido! Soy Tomi, laburo en frontend.',
      'Que onda! Tomi acá, frontend dev.',
      'Holis! Soy Tomi, encantado!',
    ],
  },
  {
    name: 'Vane Ara',
    avatar: avatarvane,
    slug: 'vane-ara',
    comments: [
      'Hola! mucho gusto! soy Vane Ara',
      'Un placer conocerte! Me llamo Vane.',
      'Holis! Vane acá, bienvenido!',
      'Que alegría tenerte por acá! Soy Vane.',
    ],
  },
  {
    name: 'Fernando Rodriguez',
    avatar: avatarfer,
    slug: 'fernando-rodriguez',
    comments: [
      'Hola! gusto conocerte, soy Fernando Rodriguez',
      'Bienvenido! Fer, backend dev.',
      'Que tal! Soy Fer, un gusto!',
      'Holis! Fer acá, backend developer.',
    ],
  },
]

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getRelativeTime(createdAt) {
  const diff = Date.now() - createdAt
  const seg = Math.floor(diff / 1000)
  if (seg < 10) return 'Ahora mismo'
  if (seg < 60) return `Hace ${seg} seg`
  const min = Math.floor(seg / 60)
  if (min === 1) return 'Hace 1 min'
  if (min < 60) return `Hace ${min} min`
  const hrs = Math.floor(min / 60)
  if (hrs === 1) return 'Hace 1 hora'
  if (hrs < 24) return `Hace ${hrs} horas`
  const days = Math.floor(hrs / 24)
  return `Hace ${days} día${days > 1 ? 's' : ''}`
}

const seedPosts = [
  {
    id: -1,
    author: 'Desarrollo Cuyo - Grupo 4',
    avatarInitials: 'GC',
    createdAt: Date.now() - 100000,
    visibility: 'Público',
    content: `✨ ¡Todo es interactivo! ✨

Nos aseguramos de que el sitio esté (o parezca) vivo, como si fuera una cápsula del tiempo donde Facebook se ve igual que en 2010.

Cada pequeño botón o link es interactivo, así que da rienda suelta a tu curiosidad para recorrer el sitio. Probá comentar, dar like, compartir, chatear, buscar personas, o explorar las noticias con datos reales.

👉 Iniciá sesión con las credenciales de "Visitante" para empezar`,
    feedback: 'Tomi M., Vane Ara y Fer. Rodriguez',
    image: '/img/clickable.jpg',
    comments: [
      {
        avatarSrc: avatarvane,
        name: 'Vane Ara',
        profileLink: '/perfiles/vane-ara',
        text: 'Todo esto con React + Atomic Design! Está buenísimo 😍',
      },
      {
        avatarSrc: tomi,
        name: 'Tomi M.',
        profileLink: '/perfiles/tomi-m',
        text: 'Hasta el último botón es cliqueable. Dale like a algo! 👍',
      },
      {
        avatarSrc: avatarfer,
        name: 'Fernando Rodriguez',
        profileLink: '/perfiles/fernando-rodriguez',
        text: 'Y las APIs funcionan de verdad — feriados, cotizaciones y clima en vivo 📡',
      },
    ],
  },
  {
    id: 0,
    author: 'Desarrollo Cuyo - Grupo 4',
    avatarInitials: 'AP',
    createdAt: Date.now() - 7200000,
    visibility: 'Público',
    content: `Bienvenidos a nuestro archivo digital! Somos un equipo apasionado por el desarrollo web y estamos trabajando alegremente para curar los mejores recuerdos de nuestro proyecto académico.

Nuestro propósito es compartir sobre la evolución de las interfaces digitales mientras aprendemos las mejores prácticas de frontend. #Grupo4 #2026`,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    feedback: 'Tomi M. y otras 14 personas',
    comments: [
      {
        avatarSrc: avatarvane,
        name: 'Vane Ara',
        profileLink: '/perfiles/vane-ara',
        text: '💻 Integrantes del proyecto:\n\nVanesa Aracena\nTomas Maldocena\nFernando Rodriguez\n\n2° comisión E- 🤓',
      },
    ],
  },
  {
    id: 1,
    author: 'Tomi M.',
    avatarSrc: tomi,
    profileLink: '/perfiles/tomi-m',
    createdAt: Date.now() - 86400000,
    visibility: 'Público',
    content: 'Recién terminamos de estructurar toda la navegación del sitio. Header, sidebar, footer y layouts listos. Próximo paso: empezar con los posts interactivos.',
    feedback: 'Vane Ara y otras 4 personas',
    comments: [
      {
        avatarSrc: avatarvane,
        name: 'Vane Ara',
        profileLink: '/perfiles/vane-ara',
        text: 'Buenísimo Tomi! Ya voy a comenzar con los componentes.',
      },
      {
        avatarSrc: avatarfer,
        name: 'Fernando Rodriguez',
        profileLink: '/perfiles/fernando-rodriguez',
        text: 'Perfecto, mientras configuro las APIs 💪',
      },
    ],
  },
  {
    id: 2,
    author: 'Vane Ara',
    avatarSrc: avatarvane,
    profileLink: '/perfiles/vane-ara',
    createdAt: Date.now() - 43200000,
    visibility: 'Amigos',
    content: 'La verdad que Atomic Design está siendo un viaje de ida. Tener todo separado en atoms, molecules y organisms nos está salvando de mil quilombos. Recomendadísimo para proyectos grandes.',
    feedback: 'Tomi M. y otras 2 personas',
    comments: [
      {
        avatarSrc: tomi,
        name: 'Tomi M.',
        profileLink: '/perfiles/tomi-m',
        text: 'Tal cual! Después lo subo a mi blog personal, es un re enfoque.',
      },
    ],
  },
  {
    id: 3,
    author: 'Fernando Rodriguez',
    avatarSrc: avatarfer,
    profileLink: '/perfiles/fernando-rodriguez',
    createdAt: Date.now() - 18000000,
    visibility: 'Público',
    content: 'API de feriados y cotizaciones funcionando sin keys! ArgentinaDatos + Open-Meteo andan joya. En un rato subo la página de Noticias con todo integrado.',
    feedback: 'Tomi M., Vane Ara y otras 1 personas',
    comments: [
      {
        avatarSrc: avatarvane,
        name: 'Vane Ara',
        profileLink: '/perfiles/vane-ara',
        text: 'Genial Fer! Así da gusto 👏',
      },
    ],
  },
  {
    id: 4,
    author: 'Desarrollo Cuyo - Grupo 4',
    avatarInitials: 'AP',
    createdAt: Date.now() - 3600000,
    visibility: 'Público',
    content: 'Hoy arrancamos con las animaciones vintage. Nada de easing moderno, todo transiciones sutiles de 150-200ms como en 2010. El fade-in entre páginas ya está andando.',
    feedback: 'Vane Ara y otras 3 personas',
    comments: [
      {
        avatarSrc: avatarfer,
        name: 'Fernando Rodriguez',
        profileLink: '/perfiles/fernando-rodriguez',
        text: 'Se nota el detalle! muy vintage todo 🔥',
      },
    ],
  },
]

function Home() {
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        const hasSeed = parsed.some(p => p.id === -1)
        if (hasSeed) {
          const fresh = seedPosts.find(s => s.id === -1)
          if (fresh) {
            const idx = parsed.findIndex(p => p.id === -1)
            if (idx !== -1) parsed[idx] = { ...fresh, comments: parsed[idx].comments || fresh.comments }
          }
          return parsed
        }
        const existingIds = new Set(parsed.map(p => p.id))
        const missing = seedPosts.filter(p => !existingIds.has(p.id))
        return [...missing, ...parsed]
      }
      return seedPosts
    } catch {
      return seedPosts
    }
  })

  const [now, setNow] = useState(Date.now())
  const [viewerData, setViewerData] = useState(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  }, [posts])

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30000)
    return () => clearInterval(id)
  }, [])

  const refreshTimestamps = useCallback(() => {
    setPosts(prev => prev.map(p => ({
      ...p,
      timestamp: getRelativeTime(p.createdAt),
    })))
  }, [])

  useEffect(() => {
    refreshTimestamps()
  }, [now, refreshTimestamps])

  const handlePost = ({ text, images }) => {
    const member = randomItem(team)
    const comment = randomItem(member.comments)

    const newPost = {
      id: Date.now(),
      author: 'Visitante',
      avatarSrc: defaultImg,
      createdAt: Date.now(),
      visibility: 'Público',
      content: text,
      images: images && images.length > 0 ? images : undefined,
      comments: [
        {
          avatarSrc: member.avatar,
          name: member.name,
          profileLink: `/perfiles/${member.slug}`,
          text: comment,
        },
      ],
    }

    setPosts(prev => [newPost, ...prev])
  }

  const handleComment = (postId, text) => {
    setPosts(prev => prev.map(p => {
      if (p.id !== postId) return p
      return {
        ...p,
        comments: [...(p.comments || []), { avatarSrc: defaultImg, name: 'Visitante', text }],
      }
    }))
  }

  return (
    <Layout>
      <StatusBox onSubmit={handlePost} />

      {posts.map(p => (
        <PostCard
          key={p.id}
          post={{
            ...p,
            timestamp: getRelativeTime(p.createdAt),
          }}
          onOpenViewer={(imgs, idx) => setViewerData({ images: imgs, index: idx })}
          onComment={handleComment}
        />
      ))}

      {viewerData && (
        <PhotoViewer
          photos={viewerData.images.map(img => ({ img, titulo: '' }))}
          initialIndex={viewerData.index}
          onClose={() => setViewerData(null)}
        />
      )}
    </Layout>
  )
}

export default Home
