import Layout from '../components/Layout'

function Bitacora() {
  return (
    <Layout>
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
        <div className="note-header" style={{ marginBottom: '15px' }}>
          <h2
            style={{
              fontSize: '18px',
              color: '#1c1e21',
              marginBottom: '5px'
            }}
          >
            Log de Desarrollo: El cambio hacia el Brutalismo Orgánico
          </h2>

          <div style={{ color: '#606770', fontSize: '11px' }}>
            14 de abril de 2024 a las 10:24 AM · 🌎
          </div>
        </div>

        <div
          className="note-content"
          style={{ fontSize: '14px', lineHeight: '1.6' }}
        >
          <p style={{ marginBottom: '15px' }}>
            Hoy finalizamos la decisión de alejarnos del enfoque estándar de
            bordes redondeados en favor de una estética "Retro Facebook".
            El objetivo es recapturar la rigidez arquitectónica de principios
            de la década de 2010 mientras mantenemos estándares editoriales
            premium.
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>
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

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>
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

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>
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

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>
            Reflexión:
          </h3>

          <p style={{ marginBottom: '15px' }}>
            El proceso permitió comprender la importancia de iterar
            sobre el diseño y ajustar aspectos visuales y técnicos.
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>
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
        <div className="note-header" style={{ marginBottom: '15px' }}>
          <h2
            style={{
              fontSize: '18px',
              color: '#1c1e21',
              marginBottom: '5px'
            }}
          >
            Lógica de Navegación y Pivot Responsive
          </h2>

          <div style={{ color: '#606770', fontSize: '11px' }}>
            12 de abril de 2024 a las 3:15 PM · 🔒
          </div>
        </div>

        <div
          className="note-content"
          style={{ fontSize: '14px', lineHeight: '1.6' }}
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

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <a href="#" style={{ fontWeight: 'bold' }}>
          Ver más notas
        </a>
      </div>
    </Layout>
  )
}

export default Bitacora
