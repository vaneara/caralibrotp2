function MemberCard({ nombre, rol, imagen }) {

  return (
    <div className="member-item">

      <div className="member-avatar">
        <img src={imagen} alt={nombre} />
      </div>

      <div>

        <a href="#" className="member-name">
          {nombre}
        </a>

        <div className="member-role">
          {rol}
        </div>

        <button className="fb-button">
          Añadir
        </button>

      </div>

    </div>
  )
}

export default MemberCard