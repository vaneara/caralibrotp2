import MemberCard from './MemberCard'

function MemberList() {

  const miembros = [
    {
      nombre: 'Tomi M.',
      rol: 'Frontend Dev',
      imagen: 'img/tomi.png'
    },

    {
      nombre: 'Vane Ara',
      rol: 'Developer',
      imagen: 'img/avatarvane.jpg'
    },

    {
      nombre: 'Fernando Rodriguez',
      rol: 'Backend Developer',
      imagen: 'img/fer_avatar.jpg'
    }
  ]

  return (
    <div className="member-list">

      {miembros.map((miembro, index) => (
        <MemberCard
          key={index}
          nombre={miembro.nombre}
          rol={miembro.rol}
          imagen={miembro.imagen}
        />
      ))}

    </div>
  )
}

export default MemberList