import { useState, useEffect, useCallback } from 'react'
import Layout from '../components/Layout'
import StatusBox from '../components/StatusBox'
import PostCard from '../components/PostCard'
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

const welcomePost = {
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
}

function Home() {
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : [welcomePost]
    } catch {
      return [welcomePost]
    }
  })

  const [now, setNow] = useState(Date.now())

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

  const handlePost = (text) => {
    const member = randomItem(team)
    const comment = randomItem(member.comments)

    const newPost = {
      id: Date.now(),
      author: 'Visitante',
      avatarSrc: defaultImg,
      createdAt: Date.now(),
      visibility: 'Público',
      content: text,
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
        />
      ))}
    </Layout>
  )
}

export default Home
