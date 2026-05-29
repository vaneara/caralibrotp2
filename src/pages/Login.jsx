import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'

const delays = [0.1, 0.4, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9]

function rowStyle(index, visible) {
  return { opacity: visible >= index ? 1 : 0, transition: 'opacity 0.12s ease' }
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
      {/* Header */}
      <div style={rowStyle(0, visible)} className="login-header-row">
        <div className="login-header">
          <div className="login-header-inner">
            <div className="login-logo">caralibro</div>

            <form
              className="login-form"
              onSubmit={e => { e.preventDefault(); navigate('/home') }}
            >
              <InputField label="Correo electrónico" value="visitante@caralibro.com" disabled />
              <InputField label="Contraseña" type="password" value="visitante" disabled />

              <div style={{ paddingTop: '15px', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: '#4267b2', border: '1px solid #29487d',
                    borderRadius: '2px', fontSize: '12px', padding: '4px 12px',
                  }}
                >
                  Iniciar sesión
                </Button>
                <a href="#" style={{ color: '#9cb4d8', fontSize: '11px', fontWeight: 'normal', whiteSpace: 'nowrap' }}>
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="login-main" style={{ maxWidth: '980px', margin: '0 auto', padding: '30px 10px', display: 'flex', gap: '40px' }}>
        <div style={{ flex: 1, paddingTop: '20px' }}>
          <div style={rowStyle(1, visible)}>
            <div className="login-hero-image" style={{ width: '100%', backgroundColor: '#dce1e8', borderRadius: '2px', overflow: 'hidden', marginBottom: '20px' }}>
              <img src="img/worldmap.png" alt="World Map" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
          <div style={rowStyle(2, visible)}>
            <p className="login-hero-text">
              Caralibro te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.
            </p>
            <p className="login-hero-note">
              La carga lenta está simulada para dar la sensación de que el internet anda mal (como en los viejos tiempos)
            </p>
          </div>
        </div>

        <div style={{ width: '400px', flexShrink: 0 }} className="login-right-col">
          <div style={rowStyle(3, visible)}>
            <h1 className="login-register-title">Bienvenido de vuelta</h1>
            <p className="login-register-sub">Hacé clic en "Iniciar sesión" para continuar a Caralibro.</p>
            <Button
              variant="primary"
              onClick={() => navigate('/home')}
              style={{ fontSize: '14px', padding: '8px 24px', marginTop: '10px' }}
            >
              Ir a Caralibro
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={rowStyle(4, visible)}>
        <div className="login-footer">
          <div className="login-footer-inner">
            <div className="login-footer-langs">
              <a href="#">Español</a>
              <a href="#">English (US)</a>
              <a href="#">Português (Brasil)</a>
              <a href="#">Français (France)</a>
              <a href="#">Deutsch</a>
            </div>
            <div className="login-footer-links">
              <a href="#">Registrarte</a>
              <a href="#">Iniciar sesión</a>
              <a href="#">Messenger</a>
              <a href="#">Facebook Lite</a>
              <a href="#">Watch</a>
              <a href="#">Lugares</a>
              <a href="#">Juegos</a>
              <a href="#">Marketplace</a>
              <a href="#">Meta Pay</a>
              <a href="#">Oculus</a>
              <a href="#">Portal</a>
              <a href="#">Instagram</a>
              <a href="#">Bulletin</a>
              <a href="#">Recaudaciones de fondos</a>
              <a href="#">Servicios</a>
              <a href="#">Centro de información de votación</a>
              <a href="#">Condiciones</a>
              <a href="#">Política de datos</a>
              <a href="#">Cookies</a>
              <a href="#">Opciones de anuncios</a>
              <a href="#">Accesibilidad</a>
            </div>
            <div className="login-footer-copy">Caralibro © 2026</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
