import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bitacora from './pages/Bitacora'
import Perfiles from './pages/Perfiles'
import Mensajes from './pages/Mensajes'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bitacora" element={<Bitacora />} />
      <Route path="/perfiles" element={<Perfiles />} />
      <Route path="/perfiles/:slug" element={<Perfiles />} />
      <Route path="/mensajes" element={<Mensajes />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App