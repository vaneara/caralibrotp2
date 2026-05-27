import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'
import SidebarWidget from './SidebarWidget'
import Icon from './Icon'
import Button from './Button'

import defaultImg from '../assets/img/default.png'
import tomi from '../assets/img/tomi.png'
import avatarvane from '../assets/img/avatarvane.jpg'
import avatarfer from '../assets/img/fer_avatar.jpg'

function Sidebar() {
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
              <NavLink to="/" end>Noticias</NavLink>
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

      <SidebarWidget title="PERSONAS QUE QUIZÁ CONOZCAS" titleLink="Ver todo">
        <div className="member-list">
          <div className="member-item">
            <Avatar src={tomi} alt="Tomi M." size="xl" />

            <div>
              <a href="/perfiles/tomi-m" className="member-name">
                Tomi M.
              </a>

              <div className="member-role">Frontend Dev</div>

              <Button style={{ marginTop: '5px' }}>Añadir</Button>
            </div>
          </div>
          <div className="member-item">
            <Avatar src={avatarvane} alt="Vane A." size="xl" />

            <div>
              <a href="/perfiles/vane-ara" className="member-name">
                Vane A.
              </a>

              <div className="member-role">Dev</div>

              <Button style={{ marginTop: '5px' }}>Añadir</Button>
            </div>
          </div><div className="member-item">
            <Avatar src={avatarfer} alt="Fer R." size="xl" />

            <div>
              <a href="/perfiles/fernando-rodriguez" className="member-name">
                Fer R.
              </a>

              <div className="member-role">Backend Dev</div>

              <Button style={{ marginTop: '5px' }}>Añadir</Button>
            </div>
          </div>
        </div>
      </SidebarWidget>
    </>
  )
}

export default Sidebar
