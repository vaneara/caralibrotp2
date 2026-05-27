import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import MemberList from '../components/MemberList'
import ProfileHeader from '../components/ProfileHeader'
import ProfileMenu from '../components/ProfileMenu'
import InfoBox from '../components/InfoBox'
import MovieItem from '../components/MovieItem'
import PostCard from '../components/PostCard'
import Avatar from '../components/Avatar'

import { miembros } from '../data/miembros'
import { famosos } from '../data/famosos'

function Perfiles() {
  const { slug } = useParams()
  const user = miembros.find(m => m.slug === slug)
  const [activeTab, setActiveTab] = useState('Muro')
  const [searchTerm, setSearchTerm] = useState('')
  const [filtroCategoria, setFiltroCategoria] = useState('')

  const categorias = useMemo(() => [...new Set(famosos.map(f => f.categoria))], [])
  const filtrados = useMemo(() => {
    return famosos.filter(f => {
      const matchNombre = f.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      const matchCategoria = !filtroCategoria || f.categoria === filtroCategoria
      return matchNombre && matchCategoria
    })
  }, [searchTerm, filtroCategoria])

  return (
    <Layout>
      <main className="profile-wrapper">
        {!slug && (
          <div className="profile-card">
            <div className="widget-title">Personas que quizá conozcas</div>
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

            <ProfileMenu
              tabs={['Muro', 'Información', 'Fotos', 'Más']}
              activeTab={activeTab}
              onTabClick={setActiveTab}
            />

            <div className="profile-body">

              {activeTab === 'Muro' && (
                <>
                  <PostCard
                    post={{
                      author: user.nombre,
                      avatarSrc: user.imagen,
                      profileLink: `/perfiles/${user.slug}`,
                      timestamp: '25 de mayo de 2026',
                      visibility: 'Público',
                      content: user.perfilCompleto?.bio || `${user.nombre.split(' ')[0]} está trabajando en Caralibro.`,
                    }}
                  />
                  <PostCard
                    post={{
                      author: user.nombre,
                      avatarSrc: user.imagen,
                      profileLink: `/perfiles/${user.slug}`,
                      timestamp: '20 de mayo de 2026',
                      visibility: 'Público',
                      content: `🎵 Escuchando ${user.perfilCompleto?.musica?.[0] || 'música'} todo el día`,
                    }}
                  />
                </>
              )}

              {activeTab === 'Información' && (
                <>
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
                </>
              )}

              {activeTab === 'Fotos' && (
                <div className="profile-photos">
                  <p style={{ fontSize: '12px', color: '#606770', marginBottom: '10px' }}>
                    {user.perfilCompleto?.peliculas?.length + 1 || 1} foto
                  </p>
                  <div className="profile-photos-grid">
                    <div className="profile-photo-item">
                      <img src={user.imagen} alt="Foto de perfil" />
                      <span>Foto de perfil</span>
                    </div>
                    {user.perfilCompleto?.peliculas?.map((p, i) => (
                      <div key={i} className="profile-photo-item">
                        <img src={p.img} alt={p.titulo} />
                        <span>{p.titulo.split('(')[0].trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Más' && (
                <div className="profile-extra">
                  {user.perfilCompleto?.extra?.frase && (
                    <InfoBox title="Frase favorita">
                      <p style={{ fontStyle: 'italic', fontSize: '13px' }}>
                        &ldquo;{user.perfilCompleto.extra.frase}&rdquo;
                      </p>
                    </InfoBox>
                  )}
                  {user.perfilCompleto?.extra?.intereses && (
                    <InfoBox title="Intereses">
                      {user.perfilCompleto.extra.intereses.map((i, idx) => (
                        <div key={idx}>• {i}</div>
                      ))}
                    </InfoBox>
                  )}
                  {user.perfilCompleto?.extra?.cita && (
                    <InfoBox title="Cita célebre">
                      <p style={{ fontStyle: 'italic', fontSize: '13px', color: '#606770' }}>
                        &ldquo;{user.perfilCompleto.extra.cita}&rdquo;
                      </p>
                    </InfoBox>
                  )}
                  <InfoBox title="Detalles">
                    <p>Se unió a Caralibro en 2026</p>
                    <p>Última vez activo hoy</p>
                  </InfoBox>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Buscar Amigos */}
        <div className="profile-card" style={{ marginTop: '16px' }}>
          <div className="widget-title">🔍 Buscar Amigos</div>

          <div className="amigos-search-bar">
            <input
              className="amigos-search-input"
              type="text"
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <select
              className="amigos-search-select"
              value={filtroCategoria}
              onChange={e => setFiltroCategoria(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              {categorias.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="amigos-count">
            {filtrados.length} de {famosos.length} personas
          </div>

          <div className="amigos-grid">
            {filtrados.map((f, i) => (
              <div key={i} className="amigo-card">
                <Avatar src={f.imagen} alt={f.nombre} size="xl" />
                <div className="amigo-nombre">{f.nombre}</div>
                <div className="amigo-rol">{f.rol}</div>
                <div className="amigo-ciudad">{f.ciudad}</div>
              </div>
            ))}
          </div>

          {filtrados.length === 0 && (
            <div className="amigos-empty">
              No se encontraron personas para &ldquo;{searchTerm}&rdquo;
            </div>
          )}
        </div>
      </main>
    </Layout>
  )
}

export default Perfiles
