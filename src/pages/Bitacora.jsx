import '../assets/css/main.css'
import '../assets/css/responsive.css'

function Bitacora() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo-search">
            <a href="/">
              <div className="logo">caralibro</div>
            </a>

            <div className="search-container">
              <input
                type="text"
                placeholder="Buscar notas y registros"
              />
            </div>
          </div>

          <nav>
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>

              <li>
                <a href="/perfiles">Perfiles</a>
              </li>

              <li className="active">
                <a href="/bitacora">Bitácora</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="app-container">
        {/* Sidebar Izquierda */}
        <aside className="left-sidebar">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#ccc',
                borderRadius: '2px'
              }}
            >
              <img
                src="img/default.png"
                alt="User"
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <div style={{ fontWeight: 'bold' }}>
                Visitante
              </div>

              <a
                href="#"
                style={{ fontSize: '11px' }}
              >
                Editar perfil
              </a>
            </div>
          </div>

          <nav>
            <ul>
              <li>
                <a href="/">🏠 Inicio</a>
              </li>

              <li>
                <a href="/perfil-template">👤 Perfil</a>
              </li>

              <li className="active">
                <a href="/bitacora">📝 Notas</a>
              </li>
            </ul>

            <div className="sidebar-title">
              BROWSE
            </div>

            <ul style={{ fontSize: '11px' }}>
              <li>
                <a href="#">Mis notas</a>
              </li>

              <li>
                <a href="#">Notas sobre mí</a>
              </li>

              <li>
                <a href="#">Borradores</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Contenido Central */}
        <main>
          <div className="section-header">
            <h1>Notas</h1>

            <button
              className="fb-button fb-button-primary"
              id="write-note-btn"
            >
              Escribir una nota
            </button>
          </div>

          {/* Entrada 1 */}
          <div className="card">
            <div
              className="note-header"
              style={{ marginBottom: '15px' }}
            >
              <h2
                style={{
                  fontSize: '18px',
                  color: '#1c1e21',
                  marginBottom: '5px'
                }}
              >
                Log de Desarrollo: El cambio hacia el Brutalismo Orgánico
              </h2>

              <div
                style={{
                  color: '#606770',
                  fontSize: '11px'
                }}
              >
                14 de abril de 2024 a las 10:24 AM · 🌎
              </div>
            </div>

            <div
              className="note-content"
              style={{
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              <p style={{ marginBottom: '15px' }}>
                Hoy finalizamos la decisión de alejarnos del enfoque estándar de
                bordes redondeados en favor de una estética "Retro Facebook".
                El objetivo es recapturar la rigidez arquitectónica de principios
                de la década de 2010 mientras mantenemos estándares editoriales
                premium.
              </p>

              <h3
                style={{
                  fontSize: '15px',
                  marginBottom: '10px'
                }}
              >
                Desafíos clave:
              </h3>

              <ul
                style={{
                  listStyle: 'disc',
                  marginLeft: '20px',
                  marginBottom: '15px'
                }}
              >
                <li>
                  Mantener la jerarquía visual sin el uso de bordes de alto contraste.
                </li>

                <li>
                  Asegurar que el diseño sea adaptable (responsive)
                  respetando los breakpoints de 400px, 900px y 1200px.
                </li>

                <li>
                  Equilibrar la estética heredada con la accesibilidad moderna.
                </li>
              </ul>

              <h3
                style={{
                  fontSize: '15px',
                  marginBottom: '10px'
                }}
              >
                Dificultades y resolución:
              </h3>

              <p style={{ marginBottom: '15px' }}>
                Durante la implementación del sistema de publicaciones y comentarios,
                surgieron inconvenientes relacionados con la adaptación del contenido
                dentro de los contenedores.
              </p>

              <p style={{ marginBottom: '15px' }}>
                Para resolverlo, se ajustó la estructura utilizando
                <strong> Flexbox </strong>
                junto con propiedades como
                <strong> max-width </strong>
                y
                <strong> width: 100% </strong>,
                permitiendo que los elementos se adapten correctamente.
              </p>

              <h3
                style={{
                  fontSize: '15px',
                  marginBottom: '10px'
                }}
              >
                Cambios importantes:
              </h3>

              <ul
                style={{
                  listStyle: 'disc',
                  marginLeft: '20px',
                  marginBottom: '15px'
                }}
              >
                <li>
                  Se eliminó el uso excesivo de bordes redondeados.
                </li>

                <li>
                  Se reorganizó la jerarquía visual utilizando márgenes,
                  tipografía y espaciado.
                </li>

                <li>
                  Se mejoró la estructura de comentarios.
                </li>
              </ul>

              <blockquote
                style={{
                  borderLeft: '4px solid #dddfe2',
                  paddingLeft: '15px',
                  fontStyle: 'italic',
                  color: '#606770',
                  marginBottom: '15px'
                }}
              >
                "La jerarquía ahora se impulsa por el espacio en blanco y el
                peso de la fuente."
              </blockquote>

              <h3
                style={{
                  fontSize: '15px',
                  marginBottom: '10px'
                }}
              >
                Reflexión:
              </h3>

              <p style={{ marginBottom: '15px' }}>
                El proceso permitió comprender la importancia de iterar
                sobre el diseño y ajustar aspectos visuales y técnicos.
              </p>

              <h3
                style={{
                  fontSize: '15px',
                  marginBottom: '10px'
                }}
              >
                Aprendizajes:
              </h3>

              <ul
                style={{
                  listStyle: 'disc',
                  marginLeft: '20px',
                  marginBottom: '15px'
                }}
              >
                <li>
                  Aplicación práctica de Flexbox.
                </li>

                <li>
                  Importancia del diseño responsive.
                </li>

                <li>
                  Mejor organización del trabajo en equipo y uso de Git.
                </li>
              </ul>
            </div>

            <div className="post-actions">
              <a href="#" className="action-link">
                👍 Me gusta
              </a>

              <a href="#" className="action-link">
                💬 Comentar
              </a>

              <a href="#" className="action-link">
                ↪️ Compartir
              </a>
            </div>
          </div>

          {/* Entrada 2 */}
          <div className="card">
            <div
              className="note-header"
              style={{ marginBottom: '15px' }}
            >
              <h2
                style={{
                  fontSize: '18px',
                  color: '#1c1e21',
                  marginBottom: '5px'
                }}
              >
                Lógica de Navegación y Pivot Responsive
              </h2>

              <div
                style={{
                  color: '#606770',
                  fontSize: '11px'
                }}
              >
                12 de abril de 2024 a las 3:15 PM · 🔒
              </div>
            </div>

            <div
              className="note-content"
              style={{
                fontSize: '14px',
                lineHeight: '1.6'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                alt="Dev Setup"
                style={{
                  width: '100%',
                  marginBottom: '15px',
                  border: '1px solid #dddfe2'
                }}
              />

              <p style={{ marginBottom: '15px' }}>
                La implementación de la regla de Pivot Responsive está completa.
                Hemos eliminado exitosamente la barra de navegación inferior.
              </p>

              <p>
                Estamos viendo mejoras significativas en el foco visual
                al reducir elementos innecesarios.
              </p>
            </div>

            <div className="post-actions">
              <a href="#" className="action-link">
                👍 Me gusta
              </a>

              <a href="#" className="action-link">
                💬 Comentar
              </a>
            </div>
          </div>

          <div
            style={{
              textAlign: 'center',
              margin: '20px 0'
            }}
          >
            <a
              href="#"
              style={{ fontWeight: 'bold' }}
            >
              Ver más notas
            </a>
          </div>
        </main>

        {/* Sidebar Derecha */}
        <aside className="right-sidebar">
          <div className="widget">
            <div className="widget-title">
              BORRADORES
            </div>

            <div
              style={{
                fontSize: '11px',
                color: '#606770'
              }}
            >
              Tienes 2 notas sin publicar.
              <br />
              <br />

              <a
                href="#"
                style={{ fontWeight: 'bold' }}
              >
                Ver borradores
              </a>
            </div>
          </div>

          <div className="widget">
            <div className="widget-title">
              ETIQUETAS POPULARES
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5px'
              }}
            >
              <span className="skill-tag">diseño_sistemas</span>
              <span className="skill-tag">frontend</span>
              <span className="skill-tag">ux_research</span>
              <span className="skill-tag">brutalismo</span>
            </div>
          </div>
        </aside>
      </div>

      <footer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px'
          }}
        >
          <a href="/" className="fb-button">
            Volver al Inicio
          </a>

          <a href="/perfil-template" className="fb-button">
            Ir al Perfil
          </a>
        </div>

        <div
          style={{
            marginTop: '20px',
            textAlign: 'center'
          }}
        >
          © 2010 School Project Archive
        </div>
      </footer>
    </>
  )
}

export default Bitacora