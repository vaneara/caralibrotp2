import { Link } from 'react-router-dom'
import Avatar from './Avatar'

function MemberCard({ nombre, rol, imagen, slug }) {
  return (
    <Link to={`/perfiles/${slug}`} className="member-card">
      <Avatar src={imagen} alt={nombre} size="md" />
      <div>
        <div className="member-name">{nombre}</div>
        <div className="member-role">{rol}</div>
      </div>
    </Link>
  )
}

export default MemberCard
