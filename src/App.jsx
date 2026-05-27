import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bitacora from './pages/Bitacora'
import Perfiles from './pages/Perfiles'
import Mensajes from './pages/Mensajes'
import Eventos from './pages/Eventos'
import Noticias from './pages/Noticias'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/bitacora" element={<Bitacora />} />
      <Route path="/perfiles" element={<Perfiles />} />
      <Route path="/perfiles/:slug" element={<Perfiles />} />
      <Route path="/mensajes" element={<Mensajes />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App