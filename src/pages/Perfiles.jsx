import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import MemberList from "../components/MemberList";
import { miembros } from "../data/miembros";

function Perfiles() {
  const { slug } = useParams();
  const user = miembros.find((m) => m.slug === slug);

  return (
    <Layout>
      <main className="profile-wrapper">

        {/* LISTA DE PERSONAS */}
        {!slug && (
          <div className="profile-card">
            <div className="profile-title">
              Personas que quizá conozcas
            </div>

            <MemberList />
          </div>
        )}

        {/* PERFIL NO ENCONTRADO */}
        {slug && !user && (
          <div className="profile-card">
            <h3>Usuario no encontrado</h3>
          </div>
        )}

        {/* PERFIL COMPLETO */}
        {slug && user && (
          <div className="profile-card">

            {/* HEADER */}
            <div className="profile-header">
              <img
              src={user.imagen}
              alt={user.nombre}
              className="profile-photo"
              />

              <div>
                <h2>{user.nombre}</h2>
                <p>{user.rol}</p>
                <small>{user.perfilCompleto?.bio}</small>
              </div>
            </div>

            {/* MENU */}
            <div className="profile-menu">
              <span className="active">Muro</span>
              <span>Información</span>
              <span>Fotos</span>
              <span>Más</span>
            </div>

            {/* CONTENIDO */}
            <div className="profile-body">

              {/* INFO */}
              <div className="info-box">
                <b>Información</b>
                <p>Relación: {user.perfilCompleto?.info?.relacion}</p>
                <p>Cumpleaños: {user.perfilCompleto?.info?.cumpleaños}</p>
                <p>Ciudad: {user.perfilCompleto?.info?.ciudad}</p>
                <p>Edad: {user.perfilCompleto?.info?.edad}</p>
              </div>

              {/* HABILIDADES */}
              <div className="info-box">
                <b>Habilidades</b>
                {user.perfilCompleto?.habilidades?.map((h, i) => (
                  <div key={i}>• {h}</div>
                ))}
              </div>

              {/* PELICULAS */}
              <div className="info-box">
                <b>Películas favoritas</b>

                {user.perfilCompleto?.peliculas?.map((p, i) => (
                  <div key={i} className="movie-item">
                    <img src={p.img} alt={p.titulo} width={40} />
                    <div>
                      <div><b>{p.titulo}</b></div>
                      <small>{p.genero}</small>
                    </div>
                  </div>
                ))}
              </div>

              {/* MUSICA */}
              <div className="info-box">
                <b>Música</b>
                {user.perfilCompleto?.musica?.map((m, i) => (
                  <div key={i}>🎧 {m}</div>
                ))}
              </div>

              {/* AMIGOS */}
              <div className="info-box">
                <b>Amigos</b>
                <p>{user.perfilCompleto?.amigos} amigos</p>
              </div>

            </div>
          </div>
        )}

      </main>
    </Layout>
  );
}

export default Perfiles;