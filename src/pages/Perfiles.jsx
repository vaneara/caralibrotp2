import Header from "../components/Header";
import Footer from "../components/Footer";
import MemberCard from "../components/MemberCard";

import ferAvatar from "../assets/img/fer_avatar.jpg"
import avatarvane from "../assets/img/avatarvane.jpg"
import tomi from "../assets/img/tomi.png"

import "../styles/main.css"
import "../styles/responsive.css"

function Profiles() {
  return (
    <>
      <Header />

      <div className="app-container profile-container">

        <aside className="left-sidebar"></aside>

        <main>

          <div className="widget">

            <div className="widget-title">
              <span>PERSONAS QUE QUIZÁ CONOZCAS</span>

              <a href="#">Ver todo</a>
            </div>

            <div className="member-list">

              <MemberCard
                image={tomi}
                name="Tomi M."
                role="Frontend Dev"
                link="/perfil-tomi"
              />

              <MemberCard
                image={avatarvane}
                name="Vane Ara"
                role="Developer"
                link="/perfil-vane"
              />

              <MemberCard
                image={ferAvatar}
                name="Fernando Rodriguez"
                role="Backend Developer"
                link="/perfil-fer"
              />

            </div>

          </div>

        </main>

      </div>

      <Footer />

    </>
  );
}

export default Profiles;