import { useState } from 'react'
import Layout from '../components/Layout'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import tomi from '../assets/img/tomi.png'
import avatarvane from '../assets/img/avatarvane.jpg'
import avatarfer from '../assets/img/fer_avatar.jpg'
import defaultImg from '../assets/img/default.png'

function Eventos() {
  const [rsvp, setRsvp] = useState(null)

  var asistentes = [
    { nombre: 'Tomi M.', avatar: tomi, rsvp: 'asistire' },
    { nombre: 'Vane Ara', avatar: avatarvane, rsvp: 'asistire' },
    { nombre: 'Fernando Rodriguez', avatar: avatarfer, rsvp: 'asistire' },
  ]
  if (rsvp !== null) {
    asistentes.push({ nombre: 'Visitante', avatar: defaultImg, rsvp: rsvp || 'asistire' })
  }

  return (
    <Layout>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {/* Event Banner */}
        <div
          style={{
            backgroundColor: '#3b5998',
            padding: '30px 20px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '36px', marginBottom: '5px' }}>📅</div>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 5px' }}>
            Entrega TP2 - Caralibro
          </h1>
          <p style={{ fontSize: '13px', opacity: 0.9 }}>
            Proyecto Final · Frontend · 2° Comisión E
          </p>
        </div>

        <div style={{ padding: '16px' }}>
          {/* Date & Info */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid #dddfe2',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                width: '50px',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  backgroundColor: '#f0f2f5',
                  borderRadius: '2px',
                  border: '1px solid #dddfe2',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#cc0000',
                    color: 'white',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    padding: '2px 0',
                  }}
                >
                  Jul
                </div>
                <div style={{ fontSize: '22px', fontWeight: 'bold', padding: '2px 0', color: '#1c1e21' }}>
                  1
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#1c1e21' }}>
                Miércoles, 1 de Julio de 2026
              </div>
              <div style={{ fontSize: '12px', color: '#606770' }}>
                🕐 23:59 · 📍 Entrega virtual por Campus
              </div>
            </div>
          </div>

          {/* Descripción */}
          <div style={{ marginBottom: '16px' }}>
            <h3
              style={{
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#4b4f56',
                marginBottom: '8px',
              }}
            >
              Descripción
            </h3>
            <p style={{ fontSize: '12px', color: '#1c1e21', lineHeight: '1.5' }}>
              Fecha límite de entrega del TP2 de Frontend. El proyecto consiste en
              el desarrollo de <strong>Caralibro</strong>, una réplica vintage de Facebook
              (estilo 2010) utilizando React + Vite.
            </p>
            <p style={{ fontSize: '12px', color: '#1c1e21', lineHeight: '1.5', marginTop: '8px' }}>
              El propósito de este trabajo es que, como equipo, desarrollen una página web utilizando React.
              Este proyecto representa una evolución y continuación del Trabajo Práctico 1 (desarrollado
              originalmente solo con HTML, CSS y JS), migrando su estructura hacia una arquitectura de
              componentes. La aplicación debe incluir una portada con la presentación del equipo y un listado
              de estudiantes, donde cada uno cuente con una página individual gestionada mediante React
              Router. Se deberán aplicar buenas prácticas de organización, diseño adaptable, gestión de
              código en GitHub y el despliegue en Vercel. Como evolución final, se deben implementar
              mejoras de interfaz, búsqueda y componentes interactivos avanzados
            </p>
          </div>

          {/* RSVP */}
          <div
            style={{
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid #dddfe2',
            }}
          >
            <div
              style={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#4b4f56',
                marginBottom: '10px',
              }}
            >
              ¿Vas a participar?
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button
                variant={rsvp === 'asistire' ? 'primary' : 'secondary'}
                onClick={() => setRsvp('asistire')}
              >
                ✅ Asistiré
              </Button>
              <Button
                variant={rsvp === 'talvez' ? 'primary' : 'secondary'}
                onClick={() => setRsvp('talvez')}>
                ❓ Tal vez
              </Button>
              <Button
                variant={rsvp === 'no' ? 'primary' : 'secondary'}
                onClick={() => setRsvp('no')}>
                ❌ No asistiré
              </Button>
            </div>
            {rsvp && (
              <div
                style={{
                  fontSize: '11px',
                  color: '#606770',
                  marginTop: '8px',
                }}
              >
                {rsvp === 'asistire' && 'Respondiste: Asistiré'}
                {rsvp === 'talvez' && 'Respondiste: Tal vez'}
                {rsvp === 'no' && 'Respondiste: No asistiré'}
                {' · '}
                <a
                  href="#"
                  onClick={e => { e.preventDefault(); setRsvp(null) }}
                  style={{ color: '#385898' }}
                >
                  Cancelar
                </a>
              </div>
            )}
          </div>

          {/* Asistentes */}
          <div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#4b4f56',
                marginBottom: '10px',
              }}
            >
              {asistentes.length} invitados
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {asistentes.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Avatar src={a.avatar} alt={a.nombre} size="md" />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '12px' }}>{a.nombre}</div>
                    <div style={{ fontSize: '10px', color: '#606770' }}>{a.rsvp === 'asistire' ? 'Confirmado' : a.rsvp === 'talvez' ? 'Tal vez' : 'No asistiré'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Eventos
