import { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import HamburgerMenu from './HamburgerMenu'
import { miembros } from '../data/miembros'
import { famosos } from '../data/famosos'

const personas = [...miembros.map(m => ({ nombre: m.nombre, slug: m.slug, imagen: m.imagen, rol: m.rol })), ...famosos]

function Header({ searchPlaceholder = 'Buscar personas, grupos y cosas' }) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const ref = useRef(null)

  const results = query.trim()
    ? personas.filter(p => p.nombre.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : []

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setFocused(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header>
      <div className="header-container">

        <div className="logo-search">
          <HamburgerMenu />

          <NavLink to="/home" end className="logo">
            caralibro
          </NavLink>

          <div className="search-wrapper" ref={ref}>
            <SearchBar
              placeholder={searchPlaceholder}
              value={query}
              onChange={e => { setQuery(e.target.value); setFocused(true) }}
              onFocus={() => setFocused(true)}
            />
            {focused && results.length > 0 && (
              <div className="search-dropdown">
                {results.map((p, i) => (
                  <Link
                    key={i}
                    to={p.slug ? `/perfiles/${p.slug}` : '#'}
                    className="search-result-item"
                    onClick={() => { setQuery(''); setFocused(false) }}
                  >
                    <img
                      src={p.imagen}
                      alt={p.nombre}
                      className="search-result-avatar"
                      onError={e => { e.target.style.display = 'none' }}
                    />
                    <div>
                      <div className="search-result-name">{p.nombre}</div>
                      {p.rol && <div className="search-result-rol">{p.rol}</div>}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <nav className="header-nav-desktop">
          <ul>
            <li>
              <NavLink to="/home" end>Inicio</NavLink>
            </li>

            <li>
              <NavLink to="/perfiles">Perfiles</NavLink>
            </li>

            <li>
              <NavLink to="/bitacora">Bitácora</NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header
