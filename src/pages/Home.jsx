import Layout from '../components/Layout'
import StatusBox from '../components/StatusBox'
import PostCard from '../components/PostCard'

import avatarvane from '../assets/img/avatarvane.jpg'

function Home() {
  const post = {
    author: 'Desarrollo Cuyo - Grupo 4',
    avatarInitials: 'AP',
    timestamp: 'Hace 2 horas',
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

  return (
    <Layout>
      <StatusBox />
      <PostCard post={post} />
    </Layout>
  )
}

export default Home
