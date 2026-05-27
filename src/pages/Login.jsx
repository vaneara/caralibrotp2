import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'
import DatePicker from '../components/DatePicker'
import RadioGroup from '../components/RadioGroup'

const delays = [0.1, 0.4, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.3, 2.5, 2.7]

function rowStyle(index, visible) {
  return {
    opacity: visible >= index ? 1 : 0,
    transition: 'opacity 0.12s ease',
  }
}

function Login() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    document.body.style.cursor = 'wait'
    return () => { document.body.style.cursor = 'default' }
  }, [])

  useEffect(() => {
    if (visible >= delays.length) {
      document.body.style.cursor = 'default'
      return
    }
    const t = setTimeout(() => setVisible(v => v + 1), delays[visible] * 1000)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <div style={{ backgroundColor: '#e9ebee', minHeight: '100vh' }}>
      {/* 1 — Header */}
      <div style={rowStyle(0, visible)}>
        <div
          style={{
            backgroundColor: '#3b5998',
            backgroundImage: 'linear-gradient(#4c70ba, #3b5998)',
            borderBottom: '1px solid #29487d',
          }}
        >
          <div
            style={{
              maxWidth: '980px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 10px',
              height: '82px',
            }}
          >
            <div
              style={{
                color: 'white',
                fontSize: '36px',
                fontWeight: 'bold',
                letterSpacing: '-1px',
                fontFamily: 'Freight Sans, "Helvetica Neue", Arial, sans-serif',
                lineHeight: '82px',
              }}
            >
              caralibro
            </div>

            <form
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                paddingTop: '10px',
              }}
              onSubmit={e => { e.preventDefault(); navigate('/home') }}
            >
              <InputField label="Correo electrónico o teléfono" value="visitante@caralibro.com" disabled />
              <InputField label="Contraseña" type="password" value="visitante" disabled />

              <div style={{ paddingTop: '15px' }}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    marginRight: '6px',
                    backgroundColor: '#4267b2',
                    border: '1px solid #29487d',
                    borderRadius: '2px',
                    fontSize: '12px',
                    padding: '4px 12px',
                  }}
                >
                  Iniciar sesión
                </Button>
                <a
                  href="#"
                  style={{ color: '#9cb4d8', fontSize: '11px', fontWeight: 'normal' }}
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: '980px', margin: '0 auto', padding: '30px 10px',
          display: 'flex', gap: '40px',
        }}
      >
        {/* Left column */}
        <div style={{ flex: 1, paddingTop: '20px' }}>
          <div style={rowStyle(1, visible)}>
            <div
              style={{
                width: '100%', backgroundColor: '#dce1e8',
                borderRadius: '2px', overflow: 'hidden', marginBottom: '20px',
              }}
            >
              <img
                src="img/worldmap.png"
                alt="World Map - Friend Connections"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>

          <div style={rowStyle(2, visible)}>
            <p
              style={{
                fontSize: '20px', fontWeight: 'bold', color: '#1c1e21',
                lineHeight: '28px',
                fontFamily: 'Freight Sans, "Helvetica Neue", Arial, sans-serif',
              }}
            >
              Caralibro te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.
            </p>
            <p
              style={{
                fontSize: '12px', color: 'gray',
                lineHeight: '28px',
                fontFamily: 'Freight Sans, "Helvetica Neue", Arial, sans-serif',
              }}
            >
              La carga lenta está simulada para dar la sensación de que el internet anda mal (como en los viejos tiempos)
            </p>
          </div>
        </div>

        {/* Right column */}
        <div style={{ width: '400px' }}>
          <div style={rowStyle(3, visible)}>
            <h1
              style={{
                fontSize: '36px', fontWeight: 'bold', color: '#333',
                margin: '0 0 5px',
                fontFamily: 'Freight Sans, "Helvetica Neue", Arial, sans-serif',
              }}
            >
              Registrarse
            </h1>
            <p style={{ fontSize: '15px', color: '#1d2129', marginBottom: '15px' }}>
              Es gratis y siempre lo será.
            </p>
          </div>

          <form onSubmit={e => e.preventDefault()} style={{ maxWidth: '400px' }}>
            <div style={rowStyle(4, visible)}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                <input placeholder="Nombre" className="login-input" style={{ width: '185px' }} />
                <input placeholder="Apellido" className="login-input" style={{ width: '185px' }} />
              </div>
            </div>

            <div style={rowStyle(5, visible)}>
              <input
                placeholder="Número de teléfono o correo electrónico"
                className="login-input"
                style={{ width: '100%', marginBottom: '10px' }}
              />
            </div>

            <div style={rowStyle(6, visible)}>
              <input
                placeholder="Contraseña nueva"
                type="password"
                className="login-input"
                style={{ width: '100%', marginBottom: '10px' }}
              />
            </div>

            <div style={rowStyle(7, visible)}>
              <DatePicker />
            </div>

            <div style={rowStyle(8, visible)}>
              <RadioGroup name="sex" label="Sexo" options={['Mujer', 'Hombre']} />
            </div>

            <div style={rowStyle(9, visible)}>
              <p style={{ fontSize: '11px', color: '#777', marginBottom: '15px', lineHeight: '1.34' }}>
                Al hacer clic en "Registrarte", aceptas nuestras{' '}
                <a href="#" style={{ color: '#385898' }}>Condiciones</a>, la{' '}
                <a href="#" style={{ color: '#385898' }}>Política de datos</a> y la{' '}
                <a href="#" style={{ color: '#385898' }}>Política de cookies</a>.
                Es posible que recibas notificaciones de nuestra parte y puedes
                darte de baja en cualquier momento.
              </p>
            </div>

            <div style={rowStyle(10, visible)}>
              <button
                style={{
                  backgroundColor: '#609846', backgroundImage: 'linear-gradient(#67ae55, #578843)',
                  border: '1px solid #3b6e22', borderRadius: '3px', color: 'white',
                  fontWeight: 'bold', fontSize: '18px', padding: '8px 60px',
                  cursor: 'pointer', textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                  marginBottom: '20px',
                }}
                type="submit"
              >
                Registrarte
              </button>
            </div>

            <div style={rowStyle(11, visible)}>
              <div style={{ borderTop: '1px solid #dddfe2', paddingTop: '15px' }}>
                <a
                  href="#"
                  style={{ fontSize: '13px', fontWeight: 'bold', color: '#385898' }}
                >
                  Crear una página
                </a>
                {' '}
                <span style={{ fontSize: '13px', color: '#666' }}>
                  para una persona famosa, un grupo o una empresa.
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div style={rowStyle(12, visible)}>
        <div
          style={{
            backgroundColor: 'white', borderTop: '1px solid #dddfe2',
            padding: '20px 0', marginTop: '40px',
          }}
        >
          <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 10px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '11px', marginBottom: '10px' }}>
              <a href="#" style={{ color: '#385898' }}>Español</a>
              <a href="#" style={{ color: '#737373' }}>English (US)</a>
              <a href="#" style={{ color: '#737373' }}>Português (Brasil)</a>
              <a href="#" style={{ color: '#737373' }}>Français (France)</a>
              <a href="#" style={{ color: '#737373' }}>Deutsch</a>
            </div>

            <div style={{ borderTop: '1px solid #dddfe2', paddingTop: '10px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '11px', color: '#737373' }}>
                <a href="#" style={{ color: '#385898' }}>Registrarte</a>
                <a href="#" style={{ color: '#737373' }}>Iniciar sesión</a>
                <a href="#" style={{ color: '#737373' }}>Messenger</a>
                <a href="#" style={{ color: '#737373' }}>Facebook Lite</a>
                <a href="#" style={{ color: '#737373' }}>Watch</a>
                <a href="#" style={{ color: '#737373' }}>Lugares</a>
                <a href="#" style={{ color: '#737373' }}>Juegos</a>
                <a href="#" style={{ color: '#737373' }}>Marketplace</a>
                <a href="#" style={{ color: '#737373' }}>Meta Pay</a>
                <a href="#" style={{ color: '#737373' }}>Oculus</a>
                <a href="#" style={{ color: '#737373' }}>Portal</a>
                <a href="#" style={{ color: '#737373' }}>Instagram</a>
                <a href="#" style={{ color: '#737373' }}>Bulletin</a>
                <a href="#" style={{ color: '#737373' }}>Recaudaciones de fondos</a>
                <a href="#" style={{ color: '#737373' }}>Servicios</a>
                <a href="#" style={{ color: '#737373' }}>Centro de información de votación</a>
                <a href="#" style={{ color: '#737373' }}>Condiciones</a>
                <a href="#" style={{ color: '#737373' }}>Política de datos</a>
                <a href="#" style={{ color: '#737373' }}>Cookies</a>
                <a href="#" style={{ color: '#737373' }}>Opciones de anuncios</a>
                <a href="#" style={{ color: '#737373' }}>Accesibilidad</a>
              </div>
            </div>

            <div style={{ fontSize: '11px', color: '#737373', marginTop: '15px' }}>
              Caralibro © 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
