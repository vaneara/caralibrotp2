import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import NoteCard from '../components/NoteCard'
import Button from '../components/Button'

const STORAGE_KEY = 'caralibro_notas'

function Bitacora() {
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [notas, setNotas] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notas))
  }, [notas])

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return
    const now = new Date()
    const fecha = `${now.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })} a las ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} · 🔒`
    setNotas(prev => [{
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      date: fecha,
    }, ...prev])
    setTitle('')
    setContent('')
    setShowForm(false)
  }

  const handleCancel = () => {
    setTitle('')
    setContent('')
    setShowForm(false)
  }

  return (
    <Layout>
      <main>
        <div className="section-header">
          <h1>Notas</h1>
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancelar' : 'Escribir una nota'}
          </Button>
        </div>

        {showForm && (
          <div className="card note-form">
            <div className="card-header">
              <span className="card-title">Nueva nota</span>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <input
                className="login-input"
                placeholder="Título de la nota"
                value={title}
                onChange={e => setTitle(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>

            <div className="status-input" style={{ marginBottom: '10px' }}>
              <textarea
                placeholder="Escribí tu nota acá..."
                value={content}
                onChange={e => setContent(e.target.value)}
                style={{ minHeight: '120px' }}
              />
            </div>

            <div className="card-footer">
              <Button variant="primary" onClick={handleSave}>Guardar nota</Button>
              <Button onClick={handleCancel} style={{ marginLeft: '8px' }}>Cancelar</Button>
            </div>
          </div>
        )}

        {notas.map(n => (
          <NoteCard key={n.id} note={{ title: n.title, date: n.date }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
              {n.content}
            </p>
          </NoteCard>
        ))}

        <NoteCard
          note={{
            title: 'Animaciones: el sabor de la web de 2010',
            date: '28 de mayo de 2026 a las 6:00 PM · 🌎',
          }}
        >
          <p style={{ marginBottom: '15px', fontSize: '14px' }}>
            Facebook 2010 no tenía micro-interacciones rebotadas ni curvas de easing sofisticadas. Cuando pasabas el mouse por una tarjeta, apenas se oscurecía un toque. Cuando le daban like a algo, el texto cambiaba de color sin animación. Era simple, directo, y eso era justamente lo que lo hacía sentir auténtico.
          </p>

          <p style={{ marginBottom: '15px', fontSize: '14px' }}>
            Para Caralibro buscamos rescatar esa esencia — no se trataba de hacer animaciones llamativas, sino de lograr que la interfaz se sintiera <em>viva</em> sin romper la ilusión de estar en 2010. Cada transición es de 150 a 200 milisegundos, sin easing moderno (nada de cubic-bezier rebotado), apenas un cambio sutil que el ojo registra sin distraer.
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Qué animamos y por qué</h3>

          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li><strong>Tarjetas al hover:</strong> una sombra suave y un desplazamiento de 1px hacia arriba. Suficiente para indicar "esto es cliqueable", sin llamar la atención.</li>
            <li><strong>Like (Me gusta):</strong> un pequeño rebote de escala de 200ms que solo se ve cuando está likeado. Es la única animación con un mínimo de carácter — porque el like era el gesto más importante de la plataforma.</li>
            <li><strong>Mensajes entrantes:</strong> aparecen con un fade-up de 200ms. La idea era simular que el mensaje "llega" en vez de simplemente aparecer.</li>
            <li><strong>Transiciones entre pestañas de perfil:</strong> fade-in de 200ms para que el cambio de contenido no sea abrupto, pero tampoco lento.</li>
            <li><strong>Navegación entre páginas:</strong> un fade + translateY de 8px de 250ms. Es lo único que cruza el umbral de los 200ms, porque el cambio de página entera merecía un respiro visual.</li>
            <li><strong>Login progresivo:</strong> filas que aparecen una tras otra con delays crecientes, simulando la carga lenta del internet de la época. No es una animación funcional — es puramente atmosférica.</li>
          </ul>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Lo que evitamos a propósito</h3>
          <p style={{ marginBottom: '15px', fontSize: '14px' }}>
            Sin transiciones CSS tipo "slide" con rebote, sin rotaciones 3D, sin escalas gigantes al hover. Nada de sombras de neón ni brillos. Cada animación está pensada para pasar desapercibida — si alguien nota la animación, fallamos en nuestro objetivo.
          </p>

          <blockquote
            style={{
              borderLeft: '4px solid #dddfe2',
              paddingLeft: '15px',
              fontStyle: 'italic',
              color: '#606770',
              marginBottom: '15px',
              fontSize: '14px',
            }}
          >
            "La mejor animación es la que no se nota. La segunda mejor es la que dura menos de 200ms."
          </blockquote>
        </NoteCard>

        <NoteCard
          note={{
            title: 'Justificación de Migración: De HTML estático a React',
            date: '27 de mayo de 2026 a las 11:00 AM · 🌎',
          }}
        >
          <p style={{ marginBottom: '15px', fontSize: '14px' }}>
            Caralibro nació como un proyecto estático en HTML/CSS/JS plano. Cada página (<em>index.html</em>, <em>bitacora.html</em>, <em>perfiles.html</em>) tenía su propio header, sidebar y footer copiados y pegados — cualquier cambio de navegación requería editar N archivos.
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Problemas de la arquitectura anterior</h3>
          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li><strong>Código duplicado:</strong> Header, sidebar y footer repetidos en cada archivo HTML.</li>
            <li><strong>Sin estado compartido:</strong> No existía una forma limpia de pasar datos entre páginas.</li>
            <li><strong>CSS fragmentado:</strong> Mezcla de estilos inline, <em>main.css</em> y <em>responsive.css</em> sin cohesión.</li>
            <li><strong>Routing manual:</strong> Cada navegación implicaba recargar toda la página desde cero.</li>
          </ul>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Decisión de migrar a React</h3>
          <p style={{ marginBottom: '15px', fontSize: '14px' }}>
            Se optó por React 19 + Vite 8 por su ecosistema moderno, su modelo de componentes basado en funciones y hooks, y la facilidad para escalar sin frameworks pesados. La arquitectura se organizó siguiendo <strong>Atomic Design</strong>:
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li><strong>Átomos:</strong> <code>Avatar</code>, <code>Button</code>, <code>Input</code>, <code>Badge</code>, <code>Timestamp</code>, <code>Icon</code> — bloques fundamentales reutilizables en toda la app.</li>
            <li><strong>Moléculas:</strong> <code>SearchBar</code>, <code>MessageBubble</code>, <code>ChatInput</code>, <code>PostActions</code>, <code>CommentBubble</code>, <code>ConversationItem</code> — combinaciones de átomos con una función específica.</li>
            <li><strong>Organismos:</strong> <code>PostCard</code>, <code>NoteCard</code>, <code>StatusBox</code>, <code>ConversationList</code>, <code>MessageThread</code> — secciones complejas que combinan moléculas y átomos.</li>
          </ul>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Arquitectura resultante</h3>
          <p style={{ marginBottom: '15px', fontSize: '14px' }}>
            El proyecto pasó de tener archivos HTML sueltos a una SPA con <strong>react-router-dom</strong> para navegación declarativa, un <code>Layout</code> único que compone Header + Sidebar + Footer + FloatingChat, y ~38 componentes en <code>src/components/</code>. Los datos se centralizaron en <code>src/data/miembros.js</code> y los estilos se unificaron en <code>src/styles/main.css</code>.
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Beneficios concretos</h3>
          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li>El avatar, antes repetido inline en 7 archivos, ahora es un solo <code>&lt;Avatar&gt;</code> con props.</li>
            <li>Los botones usan <code>&lt;Button variant="primary"&gt;</code> en vez de clases CSS sueltas.</li>
            <li>Los posts y notas son dinámicos con estado React y persistencia en <code>localStorage</code>.</li>
            <li>El chat flotante, los mensajes y el muro interactúan en tiempo real mediante hooks.</li>
          </ul>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Desafíos y aprendizajes</h3>
          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li>Migrar ~200 estilos inline a componentes con CSS classes sin romper el diseño retro.</li>
            <li>Mantener fidelidad visual con Facebook 2010 mientras se refactorizaba toda la base de código.</li>
            <li>Coordinación en Git con merges y resolución de conflictos entre ramas divergentes.</li>
            <li>La componentización reveló patrones ocultos: el mismo <code>PostActions</code> aparecía en Home y Bitácora, <code>MessageBubble</code> en Mensajes y FloatingChat.</li>
          </ul>

          <blockquote
            style={{
              borderLeft: '4px solid #dddfe2',
              paddingLeft: '15px',
              fontStyle: 'italic',
              color: '#606770',
              marginBottom: '15px',
              fontSize: '14px',
            }}
          >
            "La migración no fue solo cambiar la sintaxis — fue repensar la arquitectura desde cero."
          </blockquote>
        </NoteCard>

        <NoteCard
          note={{
            title: 'Roles y Flujo de Trabajo',
            date: '27 de mayo de 2026 a las 11:30 AM · 🌎',
          }}
        >
          <p style={{ marginBottom: '15px', fontSize: '14px' }}>
            El equipo se organizó de forma orgánica, cada integrante aportando desde su fortaleza técnica. A medida que el proyecto crecía, los roles se definieron naturalmente:
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>👤 @Tomi M. — Estructura y nuevas páginas</h3>
          <p style={{ marginBottom: '15px', fontSize: '14px' }}>
            Tomi se encargó de reestructurar el proyecto desde cero: configuró React con Vite, definió la arquitectura de carpetas, migró el HTML estático a JSX, y agregó las páginas nuevas como <em>Login</em>, <em>Eventos</em> y el sistema de rutas con <code>react-router-dom</code>. También implementó el Layout único que unifica header, sidebar y footer en todas las vistas.
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>👤 @Vane Aracena — Componentización y migración</h3>
          <p style={{ marginBottom: '15px', fontSize: '14px' }}>
            Vane lideró la migración del HTML/JS a React, transformando los bloques visuales repetitivos en componentes reutilizables siguiendo Atomic Design. Creó los átomos base (<em>Avatar</em>, <em>Button</em>, <em>Input</em>, <em>Badge</em>) y los primeros organismos como <em>PostCard</em> y <em>StatusBox</em>. También se encargó de migrar los estilos inline a CSS classes manteniendo la fidelidad visual con Facebook 2010.
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>👤 @Fernando Rodriguez — Backend e integraciones</h3>
          <p style={{ marginBottom: '15px', fontSize: '14px' }}>
            Fer trabajó en la lógica de datos, creando <code>src/data/miembros.js</code> con los perfiles completos del equipo (incluyendo películas, habilidades y música), y el sistema de rutas dinámicas <code>/perfiles/:slug</code> para ver perfiles individuales. También integró los datos de miembros con <em>MemberList</em>, <em>MemberCard</em> y las secciones de perfil como <em>ProfileHeader</em>, <em>InfoBox</em> y <em>MovieItem</em>.
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Flujo de trabajo</h3>
          <p style={{ marginBottom: '15px', fontSize: '14px' }}>
            El desarrollo fue iterativo: primero se estableció la estructura base con React y las rutas, luego se componentizaron los elementos visuales, y finalmente se agregaron las interacciones dinámicas (posts con estado, chat con respuestas automáticas, notas persistidas en localStorage, RSVP en eventos). Cada cambio se fue mergeando con Git, resolviendo conflictos a medida que las ramas divergían.
          </p>

          <blockquote
            style={{
              borderLeft: '4px solid #dddfe2',
              paddingLeft: '15px',
              fontStyle: 'italic',
              color: '#606770',
              marginBottom: '15px',
              fontSize: '14px',
            }}
          >
            "Cada uno puso el foco donde más cómodo se sentía, y el proyecto creció solo."
          </blockquote>
        </NoteCard>

        <NoteCard
          note={{
            title: 'Integración de APIs Públicas en Noticias',
            date: '27 de mayo de 2026 a las 8:00 PM · 🌎',
          }}
        >
          <p style={{ marginBottom: '15px', fontSize: '14px' }}>
            Como parte de los requisitos del TP2, integramos <strong>consumo asíncrono de APIs públicas</strong> en una nueva página llamada <em>Noticias</em> (<code>/noticias</code>). La página consume tres endpoints de dos APIs distintas, manejando estados de carga, error y paginación.
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>APIs utilizadas</h3>

          <h4 style={{ fontSize: '13px', marginBottom: '5px' }}>🇦🇷 ArgentinaDatos API</h4>
          <p style={{ marginBottom: '10px', fontSize: '13px' }}>
            API pública no oficial que brinda información actualizada sobre Argentina. Sin API key, CORS abierto, licencia MIT.
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li><strong>Feriados 2026</strong> (<code>GET /v1/feriados/2026</code>): 19 feriados con fecha, nombre y tipo (inamovible, trasladable, puente). Paginación client-side de 5 items por página con botones "← Anterior · Página X de Y · Siguiente →".</li>
            <li><strong>Cotizaciones</strong> (<code>GET /v1/cotizaciones</code>): Histórico de cotizaciones USD, EUR, BRL, CLP, UYU. Filtramos las 3 principales mostrando compra/venta en grid.</li>
          </ul>

          <h4 style={{ fontSize: '13px', marginBottom: '5px' }}>🌤️ Open-Meteo API</h4>
          <p style={{ marginBottom: '10px', fontSize: '13px' }}>
            API de pronóstico del tiempo global, open-source, sin API key, 10.000 requests/día gratuitos. Usa modelos del ECMWF, NOAA, DWD.
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li><strong>Clima del equipo</strong> (<code>GET /v1/forecast</code>): Temperatura actual, código WMO y viento para San Juan, Mendoza, San Luis y Buenos Aires. Cada ciudad con tarjeta de color distintivo.</li>
            <li>Los códigos WMO se mapean a emojis y texto descriptivo (ej: 0→☀️ Despejado, 3→☁️ Nublado, 61→🌧️ Lluvia ligera).</li>
          </ul>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Arquitectura de consumo</h3>
          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li><strong>Fetch asíncrono</strong> con <code>Promise.all</code> para paralelizar las 5 requests (1 feriados + 1 cotizaciones + 3 clima).</li>
            <li><strong>Estados:</strong> <code>loading</code> (skeleton animado gris), <code>error</code> (cartel rojo + botón Reintentar con <code>window.location.reload()</code>), <code>data</code> (cards con estilo Facebook 2010).</li>
            <li><strong>Paginación:</strong> client-side con <code>page</code> state, <code>slice</code> del array de feriados, y botones deshabilitados en extremos.</li>
            <li><strong>Cleanup:</strong> flag <code>cancelled</code> en el <code>useEffect</code> para evitar setState en componentes desmontados.</li>
          </ul>

        </NoteCard>

        <NoteCard
          note={{
            title: 'Log de Desarrollo: El cambio hacia el Brutalismo Orgánico',
            date: '14 de abril de 2024 a las 10:24 AM · 🌎',
          }}
        >
          <p style={{ marginBottom: '15px' }}>
            Hoy finalizamos la decisión de alejarnos del enfoque estándar de bordes redondeados en favor de una estética "Retro Facebook".
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Desafíos clave:</h3>
          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li>Mantener jerarquía visual sin bordes fuertes.</li>
            <li>Responsive con breakpoints 400px, 900px, 1200px.</li>
            <li>Equilibrar estética y accesibilidad.</li>
          </ul>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Dificultades y resolución:</h3>
          <p style={{ marginBottom: '15px' }}>Problemas de adaptación de contenedores en comentarios.</p>
          <p style={{ marginBottom: '15px' }}>
            Se resolvió usando <strong>Flexbox</strong> y <strong>width: 100%</strong>.
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Cambios importantes:</h3>
          <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
            <li>Se redujo el uso de bordes redondeados.</li>
            <li>Mejor jerarquía visual.</li>
            <li>Mejora en comentarios.</li>
          </ul>

          <blockquote
            style={{
              borderLeft: '4px solid #dddfe2',
              paddingLeft: '15px',
              fontStyle: 'italic',
              color: '#606770',
              marginBottom: '15px',
            }}
          >
            "La jerarquía ahora se define por el espacio y el peso tipográfico."
          </blockquote>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Reflexión:</h3>
          <p style={{ marginBottom: '15px' }}>
            El proceso permitió mejorar la coherencia entre diseño y funcionalidad.
          </p>

          <h3 style={{ fontSize: '15px', marginBottom: '10px' }}>Aprendizajes:</h3>
          <ul style={{ marginLeft: '20px' }}>
            <li>Flexbox aplicado correctamente.</li>
            <li>Diseño responsive desde base.</li>
            <li>Trabajo en equipo con Git.</li>
          </ul>
        </NoteCard>

        <NoteCard
          note={{
            title: 'Lógica de Navegación y Pivot Responsive',
            date: '12 de abril de 2024 a las 3:15 PM · 🔒',
            actions: ['like', 'comment'],
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
            alt="Dev Setup"
            style={{
              width: '100%',
              marginBottom: '15px',
              border: '1px solid #dddfe2',
            }}
          />

          <p style={{ marginBottom: '15px' }}>
            Se eliminó la barra inferior y se centralizó la navegación en el header.
          </p>

          <p>Mejora del foco visual al reducir elementos innecesarios.</p>
        </NoteCard>

        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <a href="#" style={{ fontWeight: 'bold' }}>Ver más notas</a>
        </div>
      </main>
    </Layout>
  )
}

export default Bitacora
