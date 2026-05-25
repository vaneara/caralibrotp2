import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <div className="widget">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '15px'
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
              src="img/default.png"
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
            <li>
              <span className="icon">🏠</span>
              <NavLink to="/" end>Noticias</NavLink>
            </li>
            <li>
              <span className="icon">💬</span>
              <NavLink to="/mensajes">Mensajes</NavLink>
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
              <NavLink to="/bitacora">Bitácora de Proyecto</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="widget">
        <div className="widget-title">
          <span>PERSONAS QUE QUIZÁ CONOZCAS</span>
          <a href="#">Ver todo</a>
        </div>

        <div className="member-list">
          <div
            className="member-item"
            style={{ display: 'flex', gap: '10px' }}
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
                src="img/tomi.png"
                alt="Tomi"
                style={{ width: '100%', borderRadius: '2px' }}
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

              <div style={{ color: '#606770', fontSize: '11px' }}>
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
    </>
  )
}

export default Sidebar
