import Layout from "../components/Layout";



function Bitacora() {
  return (
    <Layout>
      <main>

        {/* HEADER DE NOTAS */}
        <div className="section-header">
          <h1>Notas</h1>

          <button className="fb-button fb-button-primary">
            Escribir una nota
          </button>
        </div>

        {/* NOTA 1  */}
        <div className="card">

          <div className="note-header" style={{ marginBottom: "15px" }}>
            <h2 style={{ fontSize: "18px", color: "#1c1e21", marginBottom: "5px" }}>
              Log de Desarrollo: El cambio hacia el Brutalismo Orgánico
            </h2>

            <div style={{ color: "#606770", fontSize: "11px" }}>
              14 de abril de 2024 a las 10:24 AM · 🌎
            </div>
          </div>

          <div style={{ fontSize: "14px", lineHeight: "1.6" }}>
            <p style={{ marginBottom: "15px" }}>
              Hoy finalizamos la decisión de alejarnos del enfoque estándar de bordes redondeados en favor de una estética "Retro Facebook".
            </p>

            <h3 style={{ fontSize: "15px", marginBottom: "10px" }}>
              Desafíos clave:
            </h3>

            <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
              <li>Mantener jerarquía visual sin bordes fuertes.</li>
              <li>Responsive con breakpoints 400px, 900px, 1200px.</li>
              <li>Equilibrar estética y accesibilidad.</li>
            </ul>

            <h3 style={{ fontSize: "15px", marginBottom: "10px" }}>
              Dificultades y resolución:
            </h3>

            <p style={{ marginBottom: "15px" }}>
              Problemas de adaptación de contenedores en comentarios.
            </p>

            <p style={{ marginBottom: "15px" }}>
              Se resolvió usando <strong>Flexbox</strong> y <strong>width: 100%</strong>.
            </p>

            <h3 style={{ fontSize: "15px", marginBottom: "10px" }}>
              Cambios importantes:
            </h3>

            <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
              <li>Se redujo el uso de bordes redondeados.</li>
              <li>Mejor jerarquía visual.</li>
              <li>Mejora en comentarios.</li>
            </ul>

            <blockquote
              style={{
                borderLeft: "4px solid #dddfe2",
                paddingLeft: "15px",
                fontStyle: "italic",
                color: "#606770",
                marginBottom: "15px"
              }}
            >
              "La jerarquía ahora se define por el espacio y el peso tipográfico."
            </blockquote>

            <h3 style={{ fontSize: "15px", marginBottom: "10px" }}>
              Reflexión:
            </h3>

            <p style={{ marginBottom: "15px" }}>
              El proceso permitió mejorar la coherencia entre diseño y funcionalidad.
            </p>

            <h3 style={{ fontSize: "15px", marginBottom: "10px" }}>
              Aprendizajes:
            </h3>

            <ul style={{ marginLeft: "20px" }}>
              <li>Flexbox aplicado correctamente.</li>
              <li>Diseño responsive desde base.</li>
              <li>Trabajo en equipo con Git.</li>
            </ul>
          </div>

          <div className="post-actions">
            <a href="#" className="action-link">👍 Me gusta</a>
            <a href="#" className="action-link">💬 Comentar</a>
            <a href="#" className="action-link">↪️ Compartir</a>
          </div>
        </div>

        {/* NOTA 2 */}
        <div className="card">

          <div className="note-header" style={{ marginBottom: "15px" }}>
            <h2 style={{ fontSize: "18px", color: "#1c1e21", marginBottom: "5px" }}>
              Lógica de Navegación y Pivot Responsive
            </h2>

            <div style={{ color: "#606770", fontSize: "11px" }}>
              12 de abril de 2024 a las 3:15 PM · 🔒
            </div>
          </div>

          <div style={{ fontSize: "14px", lineHeight: "1.6" }}>

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
              alt="Dev Setup"
              style={{
                width: "100%",
                marginBottom: "15px",
                border: "1px solid #dddfe2"
              }}
            />

            <p style={{ marginBottom: "15px" }}>
              Se eliminó la barra inferior y se centralizó la navegación en el header.
            </p>

            <p>
              Mejora del foco visual al reducir elementos innecesarios.
            </p>

          </div>

          <div className="post-actions">
            <a href="#" className="action-link">👍 Me gusta</a>
            <a href="#" className="action-link">💬 Comentar</a>
          </div>

        </div>

        {/* FOOTER LINK */}
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <a href="#" style={{ fontWeight: "bold" }}>
            Ver más notas
          </a>
        </div>

      </main>
    </Layout>
  );
}

export default Bitacora;