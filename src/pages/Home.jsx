import "../styles/main.css"
import "../styles/responsive.css"

import tomi from "../assets/img/tomi.png"
import avatarvane from "../assets/img/avatarvane.jpg"
import defaultImg from "../assets/img/default.png"

function Home() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo-search">
            <a href="/">
              <div className="logo">caralibro</div>
            </a>

            <div className="search-container">
              <input
                type="text"
                id="global-search"
                placeholder="Buscar personas, grupos y cosas"
              />
            </div>
          </div>

          <nav>
            <ul>
              <li className="active">
                <a href="/">Inicio</a>
              </li>

              <li>
                <a href="/perfiles">Perfiles</a>
              </li>

              <li>
                <a href="/bitacora">Bitácora</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="app-container">
        {/* Sidebar Izquierda */}
        <aside className="left-sidebar">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#ccc',
                borderRadius: '2px'
              }}
            >
              <img
                src={defaultImg}
                alt="User"
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <div style={{ fontWeight: 'bold' }}>Visitante</div>

              <a href="#" style={{ fontSize: '11px' }}>
                Editar perfil
              </a>
            </div>
          </div>

          <nav>
            <ul>
              <li className="active">
                <span className="icon">🏠</span>
                <a href="/">Noticias</a>
              </li>

              <li>
                <span className="icon">💬</span>
                <a href="#">Mensajes</a>
              </li>

              <li>
                <span className="icon">📅</span>
                <a href="#">Eventos</a>
              </li>
            </ul>

            <div className="sidebar-title">Favoritos</div>

            <ul>
              <li>
                <span className="icon">📝</span>
                <a href="/bitacora">Bitácora de Proyecto</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Contenido Central */}
        <main>
          {/* Cuadro de Estado */}
          <div className="card">
            <div className="card-header">
              <span className="card-title">Actualizar estado</span>
            </div>

            <div className="status-input">
              <textarea
                id="status-textarea"
                placeholder="¿Qué tienes en mente, Equipo?"
              ></textarea>
            </div>

            <div className="card-footer">
              <button
                className="fb-button fb-button-primary"
                id="post-button"
              >
                Publicar
              </button>
            </div>
          </div>

          {/* Post Principal */}
          <div className="card">
            <div
              className="post-header"
              style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '12px'
              }}
            >
              <div
                className="user-avatar"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#3b5998',
                  borderRadius: '2px',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}
              >
                AP
              </div>

              <div>
                <a
                  href="#"
                  style={{
                    fontWeight: 'bold',
                    fontSize: '13px'
                  }}
                >
                  Desarrollo Cuyo - Grupo 4
                </a>

                <div
                  style={{
                    color: '#606770',
                    fontSize: '11px'
                  }}
                >
                  Hace 2 horas · Público
                </div>
              </div>
            </div>

            <div className="post-content">
              <p
                style={{
                  fontSize: '14px',
                  marginBottom: '15px'
                }}
              >
                Bienvenidos a nuestro archivo digital! Somos un equipo apasionado
                por el desarrollo web y estamos trabajando alegremente para curar
                los mejores recuerdos de nuestro proyecto académico.
                <br />
                <br />
                Nuestro propósito es compartir sobre la evolución de las
                interfaces digitales mientras aprendemos las mejores prácticas de
                frontend. ¡Aquí está el equipo detrás de la magia! #Grupo4 #2026
                #Frontend
              </p>

              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Team Photo"
                style={{
                  width: '100%',
                  borderRadius: '2px',
                  border: '1px solid #dddfe2'
                }}
              />
            </div>

            <div className="post-actions">
              <a href="#" className="action-link" id="like-btn">
                Me gusta
              </a>

              <a href="#" className="action-link">
                Comentar
              </a>

              <a href="#" className="action-link">
                Compartir
              </a>
            </div>

            <div
              className="comments-section"
              style={{ marginTop: '15px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '10px'
                }}
              >
                <img
                  src={avatarvane}
                  alt="avatar"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '2px'
                  }}
                />

                <div
                  style={{
                    backgroundColor: '#f0f2f5',
                    padding: '8px 12px',
                    borderRadius: '2px',
                    width: '100%'
                  }}
                >
                  <a
                    href="/perfil-vane"
                    style={{
                      fontWeight: 'bold',
                      fontSize: '11px'
                    }}
                  >
                    Vane Ara
                  </a>

                  <p
                    style={{
                      margin: '2px 0',
                      fontSize: '13px'
                    }}
                  >
                    💻 Integrantes del proyecto:
                    <br />
                    <br />
                    Vanesa Aracena
                    <br />
                    Tomás Maldocena
                    <br />
                    Fernando Rodríguez
                    <br />
                    <br />
                    2° comisión E- 🤓
                  </p>
                </div>
              </div>

              <div
                className="post-feedback"
                style={{
                  backgroundColor: '#f0f2f5',
                  padding: '8px',
                  marginTop: '10px',
                  borderRadius: '2px'
                }}
              >
                <span
                  id="like-counter"
                  style={{
                    fontSize: '11px',
                    color: '#65676b'
                  }}
                >
                  👍 Tomi M. y otras 14 personas
                </span>
              </div>
            </div>
          </div>
        </main>

        {/* Sidebar Derecha */}
        <aside className="right-sidebar">
          <div className="widget">
            <div className="widget-title">
              <span>PERSONAS QUE QUIZÁ CONOZCAS</span>
              <a href="#">Ver todo</a>
            </div>

            <div className="member-list">
              <div
                className="member-item"
                style={{
                  display: 'flex',
                  gap: '10px'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#ccc',
                    borderRadius: '2px'
                  }}
                >
                  <img
                    src={tomi}
                    alt="Tomi"
                    style={{
                      width: '100%',
                      borderRadius: '2px'
                    }}
                  />
                </div>

                <div>
                  <a
                    href="/perfil-tomi"
                    style={{
                      fontWeight: 'bold',
                      fontSize: '12px',
                      display: 'block'
                    }}
                  >
                    Tomi M.
                  </a>

                  <div
                    style={{
                      color: '#606770',
                      fontSize: '11px'
                    }}
                  >
                    Frontend Dev
                  </div>

                  <button
                    className="fb-button"
                    style={{ marginTop: '5px' }}
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <footer>
        <div className="footer-links">
          <a href="#">Español</a>
          <a href="#">English (US)</a>
          <a href="#">Português (Brasil)</a>
          <a href="#">Français (France)</a>
          <a href="#">Deutsch</a>
          <a href="#">Italiano</a>
        </div>

        <div
          style={{
            margin: '10px 0',
            borderTop: '1px solid #dddfe2',
            paddingTop: '10px'
          }}
        >
          © 2010 School Project Archive · About · Privacy · Terms · Help
        </div>
      </footer>
    </>
  )
}

export default Home