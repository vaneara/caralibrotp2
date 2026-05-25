import Header from "../components/Header";
import Footer from "../components/Footer";

import avatarvane from "../assets/img/avatarvane.jpg"
import doceanios from "../assets/img/doceaniosdeesclavitud.jpeg"
import la_ladrona_de_libros from "../assets/img/la_ladrona_de_libros.jpeg"
import seven from "../assets/img/seven.jpeg"

function PerfilVane() {
  return (
    <>
      <Header />

      <div className="app-container profile-container">

        {/* Sidebar izquierda */}
        <aside className="left-sidebar">

          <div className="profile-photo-container">
            <img
              src={avatarvane}
              alt="Vane Ara"
              className="profile-photo"
            />
          </div>

          <div className="sidebar-title">
            INFORMACIÓN
          </div>

          <ul className="profile-info-list">
            <li>
              <strong>Relación:</strong> Soltera
            </li>

            <li>
              <strong>Cumpleaños:</strong> 9 de Mayo
            </li>

            <li>
              <strong>Ciudad actual:</strong> San Juan, Argentina
            </li>

            <li>
              <strong>Edad:</strong> 39 años
            </li>
          </ul>

          <div className="sidebar-title">
            AMIGOS (325)
          </div>

          <div className="friends-grid">

            <img src="https://i.pravatar.cc/50?u=1" alt="friend" />
            <img src="https://i.pravatar.cc/50?u=2" alt="friend" />
            <img src="https://i.pravatar.cc/50?u=3" alt="friend" />
            <img src="https://i.pravatar.cc/50?u=4" alt="friend" />
            <img src="https://i.pravatar.cc/50?u=5" alt="friend" />
            <img src="https://i.pravatar.cc/50?u=6" alt="friend" />

          </div>

        </aside>

        {/* Main */}
        <main>

          <div className="profile-header-info">

            <div className="profile-header-top">

              <div className="profile-name-bio">

                <h1 className="profile-name">
                  Vane Ara
                </h1>

                <p className="profile-bio">
                  "Tu mente sueña, tus manos crean."
                </p>

              </div>

              <button className="fb-button fb-button-primary">
                + Añadir amigo
              </button>

            </div>

          </div>

          <div className="card">

            <div className="profile-nav">

              <a href="#" className="active">
                Muro
              </a>

              <a href="#">
                Información
              </a>

              <a href="#">
                Fotos
              </a>

              <a href="#">
                Más
              </a>

            </div>

            <div className="info-grid">

              {/* Habilidades */}
              <div className="info-section">

                <h3>Habilidades</h3>

                <div>

                  <span className="skill-tag">
                    Frontend Development
                  </span>

                  <span className="skill-tag">
                    HTML & CSS
                  </span>

                  <span className="skill-tag">
                    Cerámica
                  </span>

                  <span className="skill-tag">
                    Modelado de piezas
                  </span>

                </div>

              </div>

              {/* Películas */}
              <div className="info-section">

                <h3>Películas Favoritas</h3>

                <div className="movie-item">

                  <img
                    src={doceanios}
                    alt="12 años de esclavitud"
                    className="movie-thumb"
                  />

                  <div>

                    <div className="movie-title">
                      12 Años de esclavitud (2013)
                    </div>

                    <div className="movie-genre">
                      Drama / Biográfico
                    </div>

                  </div>

                </div>

                <div className="movie-item">

                  <img
                    src={seven}
                    alt="Seven"
                    className="movie-thumb"
                  />

                  <div>

                    <div className="movie-title">
                      Seven (1995)
                    </div>

                    <div className="movie-genre">
                      Thriller / Crimen
                    </div>

                  </div>

                </div>

                <div className="movie-item">

                  <img
                    src={la_ladrona_de_libros}
                    alt="La ladrona de libros"
                    className="movie-thumb"
                  />

                  <div>

                    <div className="movie-title">
                      La ladrona de libros (2013)
                    </div>

                    <div className="movie-genre">
                      Drama / Bélico
                    </div>

                  </div>

                </div>

              </div>

              {/* Música */}
              <div className="info-section">

                <h3>Música</h3>

                <div className="music-grid">

                  <div className="music-item">
                    <span>🎧</span>
                    <span>Dread Mar I</span>
                  </div>

                  <div className="music-item">
                    <span>🎧</span>
                    <span>No Te Va Gustar</span>
                  </div>

                  <div className="music-item">
                    <span>🎧</span>
                    <span>IKV</span>
                  </div>

                  <div className="music-item">
                    <span>🎧</span>
                    <span>El Plan de la Mariposa</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Muro */}
          <div className="card">

            <div className="card-header">
              <span className="card-title">
                Muro
              </span>
            </div>

            <div className="status-input">
              <textarea placeholder="Escribe algo..." />
            </div>

            <div className="share-button-container">
              <button className="fb-button fb-button-primary">
                Compartir
              </button>
            </div>

            {/* Comentario */}
            <div className="comments-container">

              <div className="comment-item">

                <img
                  src="https://i.pravatar.cc/32?u=mark"
                  alt="Martina"
                  className="comment-avatar"
                />

                <div>

                  <div className="comment-bubble">

                    <a href="#" className="comment-author">
                      Martina Contreras
                    </a>

                    <div className="comment-text">
                      Excelente proyecto Vane!
                    </div>

                  </div>

                  <div className="comment-meta">
                    Hace 2 horas · Me gusta · Responder
                  </div>

                </div>

              </div>

              <div className="comment-item">

                <img
                  src={tomi}
                  alt="Tomi"
                  className="comment-avatar"
                />

                <div>

                  <div className="comment-bubble">

                    <a href="#" className="comment-author">
                      Tomas Maldocena
                    </a>

                    <div className="comment-text">
                      Que buen perfil Vane! 😎
                    </div>

                  </div>

                  <div className="comment-meta">
                    Hace 2 horas · Te gusta · Responder
                  </div>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

      <Footer />

    </>
  );
}

export default PerfilVane;