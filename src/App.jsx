import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bitacora from './pages/Bitacora'
import Perfiles from './pages/Perfiles'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bitacora" element={<Bitacora />} />
      <Route path="/perfiles" element={<Perfiles />} />
    </Routes>
  )
}

export default App
