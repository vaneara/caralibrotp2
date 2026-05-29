import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import defaultImg from '../assets/img/default.png'

const links = [
  { to: '/home', icon: '🏠', label: 'Inicio' },
  { to: '/mensajes', icon: '💬', label: 'Mensajes' },
  { to: '/perfiles', icon: '👥', label: 'Perfiles' },
  { to: '/bitacora', icon: '📝', label: 'Bitácora' },
  { to: '/eventos', icon: '📅', label: 'Eventos' },
  { to: '/noticias', icon: '🇦🇷', label: 'Noticias' },
]

function HamburgerMenu() {
  const [open, setOpen] = useState(false)
  const [statusText, setStatusText] = useState('')
  const navigate = useNavigate()

  const handlePost = () => {
    if (statusText.trim()) {
      setStatusText('')
      setOpen(false)
      navigate('/home')
    }
  }

  return (
    <>
      <button
        className="hamburger-btn"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {open && <div className="hamburger-overlay" onClick={() => setOpen(false)} />}

      <div className={`hamburger-panel${open ? ' open' : ''}`}>
        <div className="hamburger-header">
          <span className="hamburger-title">Caralibro</span>
          <button
            className="hamburger-close"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        {/* Status row: avatar | input | post button */}
        <div className="hamburger-status">
          <img src={defaultImg} alt="Visitante" className="hamburger-avatar" />
          <input
            className="hamburger-input"
            type="text"
            placeholder="¿Qué estás pensando?"
            value={statusText}
            onChange={e => setStatusText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handlePost()}
          />
          <button
            className="hamburger-post-btn"
            onClick={handlePost}
            disabled={!statusText.trim()}
          >
            Post
          </button>
        </div>

        <nav className="hamburger-nav">
          <div className="hamburger-grid-label">Secciones</div>
          <div className="hamburger-grid">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/home'}
                className="hamburger-item"
                onClick={() => setOpen(false)}
              >
                <span className="hamburger-icon">{l.icon}</span>
                <span className="hamburger-label">{l.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="hamburger-footer">
          <NavLink to="/" onClick={() => setOpen(false)}>
            Cerrar sesión
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default HamburgerMenu
