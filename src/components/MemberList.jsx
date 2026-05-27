import MemberCard from './MemberCard'
import { miembros as defaultMiembros } from '../data/miembros'

function MemberList({ members }) {
  const data = members || defaultMiembros

  return (
    <div className="member-list">
      {data.map((miembro, index) => (
        <MemberCard
          key={miembro.slug || index}
          nombre={miembro.nombre}
          rol={miembro.rol}
          imagen={miembro.imagen}
          slug={miembro.slug}
        />
      ))}
    </div>
  )
}

export default MemberList
