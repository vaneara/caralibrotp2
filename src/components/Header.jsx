import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

function Header({ searchPlaceholder = 'Buscar personas, grupos y cosas' }) {
  return (
    <header>
      <div className="header-container">

        <div className="logo-search">
          <NavLink to="/home" end className="logo">
            caralibro
          </NavLink>

          <SearchBar placeholder={searchPlaceholder} />
        </div>

        <nav>
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
