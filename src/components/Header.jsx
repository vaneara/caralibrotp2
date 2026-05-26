import { NavLink } from 'react-router-dom'

function Header({ searchPlaceholder = 'Buscar personas, grupos y cosas' }) {
  return (
    <header>
      <div className="header-container">

        <div className="logo-search">
          <NavLink to="/" end className="logo">
            caralibro
          </NavLink>

          <div className="search-container">
            <input
              type="text"
              id="global-search"
              placeholder={searchPlaceholder}
              aria-label="Buscar"
            />
          </div>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/" end>
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink to="/perfiles">
                Perfiles
              </NavLink>
            </li>

            <li>
              <NavLink to="/bitacora">
                Bitácora
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header