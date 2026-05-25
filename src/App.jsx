import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Bitacora from "./pages/Bitacora";
import Perfiles from "./pages/Perfiles";
import PerfilVane from "./pages/PerfilVane";
import Perfiltomi from "./pages/Perfiltomi";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/bitacora" element={<Bitacora />} />

        <Route path="/perfiles" element={<Perfiles />} />

        <Route path="/perfil-vane" element={<PerfilVane />} />

        <Route path="/perfil-tomi" element={<Perfiltomi />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;