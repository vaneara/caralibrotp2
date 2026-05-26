import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bitacora from './pages/Bitacora'
import Perfiles from './pages/Perfiles'
import Mensajes from './pages/Mensajes'

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/bitacora" element={<Bitacora />} />
      
      <Route path="/perfiles" element={<Perfiles />} />

      <Route path="/perfiles/:slug" element={<Perfiles />} />

      
      <Route path="/mensajes" element={<Mensajes />} />

    </Routes>
  )
}

export default App