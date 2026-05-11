function MemberCard({ nombre, rol, imagen }) {

  return (
    <div
      className="member-item"
      style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '15px'
      }}
    >

      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: '#ccc',
          borderRadius: '2px'
        }}
      >
        <img
          src={imagen}
          alt={nombre}
          style={{
            width: '100%',
            borderRadius: '2px'
          }}
        />
      </div>

      <div>
        <a
          href="#"
          style={{
            fontWeight: 'bold',
            fontSize: '12px',
            display: 'block'
          }}
        >
          {nombre}
        </a>

        <div
          style={{
            color: '#606770',
            fontSize: '11px'
          }}
        >
          {rol}
        </div>

        <button
          className="fb-button"
          style={{ marginTop: '5px' }}
        >
          Añadir
        </button>
      </div>

    </div>
  )
}

export default MemberCard
