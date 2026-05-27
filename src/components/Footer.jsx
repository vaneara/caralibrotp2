import { useNavigate } from 'react-router-dom'
import Button from './Button'

function Footer() {
  const navigate = useNavigate()

  return (
    <footer>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Button onClick={() => navigate('/')}>Volver al Inicio</Button>
        <Button onClick={() => navigate('/bitacora')}>Ir a Bitácora</Button>
      </div>

      <div className="footer-links">
        <span>Español</span>
        <span>English (US)</span>
        <span>Português (Brasil)</span>
        <span>Français (France)</span>
        <span>Deutsch</span>
        <span>Italiano</span>
      </div>

      <hr style={{ border: '1px solid #dddfe2', margin: '10px 0' }} />

      <div style={{ textAlign: 'center' }}>
        © 2010 School Project Archive · About · Privacy · Terms · Help
      </div>
    </footer>
  )
}

export default Footer
