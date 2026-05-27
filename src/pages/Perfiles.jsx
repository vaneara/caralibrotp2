import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import MemberList from '../components/MemberList'
import ProfileHeader from '../components/ProfileHeader'
import ProfileMenu from '../components/ProfileMenu'
import InfoBox from '../components/InfoBox'
import MovieItem from '../components/MovieItem'
import { miembros } from '../data/miembros'

function Perfiles() {
  const { slug } = useParams()
  const user = miembros.find(m => m.slug === slug)

  return (
    <Layout>
      <main className="profile-wrapper">
        {!slug && (
          <div className="profile-card">
            <div className="profile-title">Personas que quizá conozcas</div>
            <MemberList members={miembros} />
          </div>
        )}

        {slug && !user && (
          <div className="profile-card">
            <h3>Usuario no encontrado</h3>
          </div>
        )}

        {slug && user && (
          <div className="profile-card">
            <ProfileHeader
              image={user.imagen}
              name={user.nombre}
              role={user.rol}
              bio={user.perfilCompleto?.bio}
            />

            <ProfileMenu tabs={['Muro', 'Información', 'Fotos', 'Más']} activeTab="Muro" />

            <div className="profile-body">
              <InfoBox title="Información">
                <p>Relación: {user.perfilCompleto?.info?.relacion}</p>
                <p>Cumpleaños: {user.perfilCompleto?.info?.cumpleaños}</p>
                <p>Ciudad: {user.perfilCompleto?.info?.ciudad}</p>
                <p>Edad: {user.perfilCompleto?.info?.edad}</p>
              </InfoBox>

              <InfoBox title="Habilidades">
                {user.perfilCompleto?.habilidades?.map((h, i) => (
                  <div key={i}>• {h}</div>
                ))}
              </InfoBox>

              <InfoBox title="Películas favoritas">
                {user.perfilCompleto?.peliculas?.map((p, i) => (
                  <MovieItem key={i} image={p.img} title={p.titulo} genre={p.genero} />
                ))}
              </InfoBox>

              <InfoBox title="Música">
                {user.perfilCompleto?.musica?.map((m, i) => (
                  <div key={i}>🎧 {m}</div>
                ))}
              </InfoBox>

              <InfoBox title="Amigos">
                <p>{user.perfilCompleto?.amigos} amigos</p>
              </InfoBox>
            </div>
          </div>
        )}
      </main>
    </Layout>
  )
}

export default Perfiles
