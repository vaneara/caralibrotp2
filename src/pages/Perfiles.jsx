import { useState, useMemo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import MemberList from '../components/MemberList'
import ProfileHeader from '../components/ProfileHeader'
import ProfileMenu from '../components/ProfileMenu'
import InfoBox from '../components/InfoBox'
import MovieItem from '../components/MovieItem'
import PostCard from '../components/PostCard'
import Avatar from '../components/Avatar'
import PhotoViewer from '../components/PhotoViewer'

import { miembros } from '../data/miembros'
import { famosos } from '../data/famosos'
import { proyectos } from '../data/proyectos'

function Perfiles() {
  const { slug } = useParams()
  const user = miembros.find(m => m.slug === slug)
  const famoso = !user && slug ? famosos.find(f => f.slug === slug) : null
  const [activeTab, setActiveTab] = useState('Muro')
  const [searchTerm, setSearchTerm] = useState('')
  const [filtroCategoria, setFiltroCategoria] = useState('')
  const [, forceUpdate] = useState(0)

  const STORAGE_KEY = `perfil-posts-${slug}`

  const defaultPosts = user ? [
  {
    id: 1,
    author: user.nombre,
    avatarSrc: user.imagen,
    profileLink: `/perfiles/${user.slug}`,
    timestamp: '25 de mayo de 2026',
    visibility: 'Público',
    content:
      user.perfilCompleto?.bio ||
      `${user.nombre.split(' ')[0]} está trabajando en Caralibro.`,
    comments: [],
  },
  {
    id: 2,
    author: user.nombre,
    avatarSrc: user.imagen,
    profileLink: `/perfiles/${user.slug}`,
    timestamp: '20 de mayo de 2026',
    visibility: 'Público',
    content: `🎵 Escuchando ${
      user.perfilCompleto?.musica?.[0] || 'música'
    } todo el día`,
    comments: [],
  },
] : []

  const [posts, setPosts] = useState(() => {
  const saved = localStorage.getItem(STORAGE_KEY)

  if (saved) {
    return JSON.parse(saved)
  }
  return defaultPosts
})

useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
}, [posts, STORAGE_KEY])

const handleComment = (postId, text) => {setPosts(prev => prev.map(p => {
      if (p.id !== postId) return p
      return {
        ...p,
        comments: [
          ...(p.comments || []),
          {
            name: 'Visitante',
            avatarSrc: '/img/default.png',
            text,
          },
        ],
      }
    })
  )
}

  const [fotoActual, setFotoActual] = useState(null);
  const fotos = user ? [
    {img: user.imagen, titulo: 'Foto de perfil'},
    ...(user.perfilCompleto?.peliculas || []).map(p => ({img: p.img, titulo: p.titulo})),
    ...proyectos
  ] : [];

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
          <>
            <div className="profile-card">
              <div className="widget-title">Personas que quizá conozcas</div>
              <MemberList members={miembros} />
            </div>

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
                  <Link key={i} to={`/perfiles/${f.slug}`} className="amigo-card">
                    <Avatar src={f.imagen} alt={f.nombre} size="xl" />
                    <div className="amigo-nombre">{f.nombre}</div>
                    <div className="amigo-rol">{f.rol}</div>
                    <div className="amigo-ciudad">{f.ciudad}</div>
                  </Link>
                ))}
              </div>

              {filtrados.length === 0 && (
                <div className="amigos-empty">
                  No se encontraron personas para &ldquo;{searchTerm}&rdquo;
                </div>
              )}
            </div>
          </>
        )}

        {slug && !user && !famoso && (
          <div className="profile-card">
            <h3>Usuario no encontrado</h3>
          </div>
        )}

        {slug && famoso && (
          <div className="profile-card">
            <ProfileHeader
              image={famoso.imagen}
              name={famoso.nombre}
              role={famoso.rol}
              bio={famoso.ciudad ? `Vive en ${famoso.ciudad}` : ''}
            />

            <ProfileMenu
              tabs={['Muro', 'Información']}
              activeTab={activeTab}
              onTabClick={setActiveTab}
            />

            <div className="profile-body">
              {activeTab === 'Muro' && (
                <PostCard
                  post={{
                    author: famoso.nombre,
                    avatarSrc: famoso.imagen,
                    profileLink: `/perfiles/${famoso.slug}`,
                    timestamp: 'Hoy',
                    visibility: 'Público',
                    content: `${famoso.nombre.split(' ')[0]} está disfrutando de un gran día en Caralibro.`,
                  }}
                />
              )}

              {activeTab === 'Información' && (
                <>
                  <InfoBox title="Información">
                    <p>Rol: {famoso.rol}</p>
                    <p>Categoría: {famoso.categoria}</p>
                    <p>Ciudad: {famoso.ciudad || '—'}</p>
                  </InfoBox>

                  <InfoBox title="Detalles">
                    <p>Se unió a Caralibro en 2026</p>
                    <p>Última vez activo hoy</p>
                    <p>
                      <a
                        href={`https://es.wikipedia.org/wiki/${famoso.nombre.replace(/ /g, '_')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#3b5998', fontSize: '12px' }}
                      >
                        Ver en Wikipedia
                      </a>
                    </p>
                  </InfoBox>
                </>
              )}
            </div>
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
                 {posts.map(post => (
                  <PostCard
                   key={post.id}
                   post={post}
                   onComment={handleComment}
                  />
                ))}
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
                  <div key={i} className="skill-item">

                  <div className="skill-header">
                    <span>{h.nombre}</span>
                    <span>{h.nivel}%</span>
                  </div>

                  <div className="skill-bar" onClick={(e) => {
               const rect = e.currentTarget.getBoundingClientRect()
               const porcentaje = ((e.clientX - rect.left) / rect.width) * 100
                 h.nivel = Math.round(porcentaje)
                 forceUpdate(n => n + 1)
              }}
              >
             <div className="skill-progress" style={{ width: `${h.nivel}%` }}
             />
              </div>
              </div>
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
                    {user.perfilCompleto?.peliculas?.length + 1 || 1} fotos
                  </p>
                  <div className="profile-photos-grid">
                    <div className="profile-photo-item"
                       onClick={() => setFotoActual(0)}>
                      <img src={user.imagen} alt="Foto de perfil" />
                      <span>Foto de perfil</span>
                    </div>
                    {user.perfilCompleto?.peliculas?.map((p, i) => (
                      <div key={i} className="profile-photo-item"
                        onClick={() => setFotoActual(i + 1)}>
                        <img src={p.img} alt={p.titulo} />
                        <span>{p.titulo.split('(')[0].trim()}</span>
                      </div>
                    ))}

                    {proyectos.map((p, i) => (
                      <div key={`proyecto-${i}`} className="profile-photo-item"
                      onClick={() =>   setFotoActual(
                     (user.perfilCompleto?.peliculas?.length || 0) + i + 1
                     )
                    }
                   >
                   <img src={p.img} alt={p.titulo} />
                   <span>{p.titulo}</span>
                   </div>
                   ))}
                  </div>
                </div>
              )}

              {fotoActual !== null && (
                <PhotoViewer
                  photos={fotos}
                  initialIndex={fotoActual}
                  onClose={() => setFotoActual(null)}
                />
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


      </main>
    </Layout>
  )
}

export default Perfiles
