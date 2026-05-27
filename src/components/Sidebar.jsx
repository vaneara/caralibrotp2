import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'
import SidebarWidget from './SidebarWidget'
import Icon from './Icon'
import Button from './Button'

import defaultImg from '../assets/img/default.png'
import tomi from '../assets/img/tomi.png'
import avatarvane from '../assets/img/avatarvane.jpg'
import avatarfer from '../assets/img/fer_avatar.jpg'
import { useState } from 'react'

function Sidebar() {
  const [add1, setAdd1] = useState(false)
  const [add2, setAdd2] = useState(false)
  const [add3, setAdd3] = useState(false)

  return (
    <>
      <SidebarWidget>
        <div className="member-item">
          <Avatar src={defaultImg} alt="Visitante" size="lg" />

          <div>
            <div className="member-name">Visitante</div>
            <a href="#" style={{ fontSize: '11px' }}>Editar perfil</a>
          </div>
        </div>

        <nav>
          <ul>
            <li>
              <Icon>🏠</Icon>
              <NavLink to="/noticias">Noticias</NavLink>
            </li>
            <li>
              <Icon>💬</Icon>
              <NavLink to="/mensajes">Mensajes</NavLink>
            </li>
            <li>
              <Icon>📅</Icon>
              <NavLink to="/eventos">Eventos</NavLink>
            </li>
          </ul>

          <div className="sidebar-title">Favoritos</div>

          <ul>
            <li>
              <Icon>📝</Icon>
              <NavLink to="/bitacora">Bitácora de Proyecto</NavLink>
            </li>
          </ul>
        </nav>
      </SidebarWidget>

      <SidebarWidget title="PERSONAS QUE QUIZÁ CONOZCAS" titleLink="Ver todo" slug="perfiles">
        <div className="member-list">
          <div className="member-item">
            <Avatar src={tomi} alt="Tomi M." size="xl" />

            <div>
              <NavLink to="/perfiles/tomi-m" className="member-name">
                Tomi M.
              </NavLink>

              <div className="member-role">Frontend Dev</div>

              <Button style={{ marginTop: '5px' }} onClick={() => setAdd1(!add1)}>{add1 ? 'Añadido' : 'Añadir'}</Button>
            </div>
          </div>
          <div className="member-item">
            <Avatar src={avatarvane} alt="Vane A." size="xl" />

            <div>
              <NavLink to="/perfiles/vane-ara" className="member-name">
                Vane A.
              </NavLink>

              <div className="member-role">Dev</div>

              <Button style={{ marginTop: '5px' }} onClick={() => setAdd2(!add2)}>{add2 ? 'Añadido' : 'Añadir'}</Button>
            </div>
          </div><div className="member-item">
            <Avatar src={avatarfer} alt="Fer R." size="xl" />

            <div>
              <NavLink to="/perfiles/fernando-rodriguez" className="member-name">
                Fer R.
              </NavLink>

              <div className="member-role">Backend Dev</div>

              <Button style={{ marginTop: '5px' }} onClick={() => setAdd3(!add3)}>{add3 ? 'Añadido' : 'Añadir'}</Button>
            </div>
          </div>
        </div>
      </SidebarWidget>
    </>
  )
}

export default Sidebar
