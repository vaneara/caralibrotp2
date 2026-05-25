import Layout from '../components/Layout'

function Home() {
  return (
    <Layout>
      {/* Cuadro de Estado */}
      <div className="card">
        <div className="card-header">
          <span className="card-title">Actualizar estado</span>
        </div>

        <div className="status-input">
          <textarea
            id="status-textarea"
            placeholder="¿Qué tienes en mente, Equipo?"
          ></textarea>
        </div>

        <div className="card-footer">
          <button
            className="fb-button fb-button-primary"
            id="post-button"
          >
            Publicar
          </button>
        </div>
      </div>

      {/* Post Principal */}
      <div className="card">
        <div
          className="post-header"
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '12px'
          }}
        >
          <div
            className="user-avatar"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#3b5998',
              borderRadius: '2px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}
          >
            AP
          </div>

          <div>
            <a
              href="#"
              style={{ fontWeight: 'bold', fontSize: '13px' }}
            >
              Desarrollo Cuyo - Grupo 4
            </a>

            <div style={{ color: '#606770', fontSize: '11px' }}>
              Hace 2 horas · Público
            </div>
          </div>
        </div>

        <div className="post-content">
          <p style={{ fontSize: '14px', marginBottom: '15px' }}>
            Bienvenidos a nuestro archivo digital! Somos un equipo apasionado
            por el desarrollo web y estamos trabajando alegremente para curar
            los mejores recuerdos de nuestro proyecto académico.
            <br />
            <br />
            Nuestro propósito es compartir sobre la evolución de las
            interfaces digitales mientras aprendemos las mejores prácticas de
            frontend. ¡Aquí está el equipo detrás de la magia! #Grupo4 #2026
            #Frontend
          </p>

          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
            alt="Team Photo"
            style={{
              width: '100%',
              borderRadius: '2px',
              border: '1px solid #dddfe2'
            }}
          />
        </div>

        <div className="post-actions">
          <a href="#" className="action-link" id="like-btn">
            Me gusta
          </a>

          <a href="#" className="action-link">
            Comentar
          </a>

          <a href="#" className="action-link">
            Compartir
          </a>
        </div>

        <div className="comments-section" style={{ marginTop: '15px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '10px'
            }}
          >
            <img
              src="img/avatarvane.jpg"
              alt="avatar"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '2px'
              }}
            />

            <div
              style={{
                backgroundColor: '#f0f2f5',
                padding: '8px 12px',
                borderRadius: '2px',
                width: '100%'
              }}
            >
              <a
                href="/perfil-vane"
                style={{ fontWeight: 'bold', fontSize: '11px' }}
              >
                Vane Ara
              </a>

              <p style={{ margin: '2px 0', fontSize: '13px' }}>
                💻 Integrantes del proyecto:
                <br />
                <br />
                Vanesa Aracena
                <br />
                Tomás Maldocena
                <br />
                Fernando Rodríguez
                <br />
                <br />
                2° comisión E- 🤓
              </p>
            </div>
          </div>

          <div
            className="post-feedback"
            style={{
              backgroundColor: '#f0f2f5',
              padding: '8px',
              marginTop: '10px',
              borderRadius: '2px'
            }}
          >
            <span
              id="like-counter"
              style={{ fontSize: '11px', color: '#65676b' }}
            >
              👍 Tomi M. y otras 14 personas
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
