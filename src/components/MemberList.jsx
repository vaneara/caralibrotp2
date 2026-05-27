import MemberCard from "./MemberCard";

import tomi from "../assets/img/tomi.png";
import avatarvane from "../assets/img/avatarvane.jpg";
import ferAvatar from "../assets/img/fer_avatar.jpg";

function MemberList() {
  const miembros = [
    {
      nombre: "Tomi M.",
      rol: "Frontend Dev",
      imagen: tomi,
      slug: "tomi-m"
    },
    {
      nombre: "Vane Ara",
      rol: "Developer",
      imagen: avatarvane,
      slug: "vane-ara"
    },
    {
      nombre: "Fernando Rodriguez",
      rol: "Backend Developer",
      imagen: ferAvatar,
      slug: "fernando-rodriguez"
    }
  ];

  return (
    <div className="member-list">
      {miembros.map((miembro, index) => (
        <MemberCard
          key={index}
          nombre={miembro.nombre}
          rol={miembro.rol}
          imagen={miembro.imagen}
          slug={miembro.slug}
        />
      ))}
    </div>
  );
}

export default MemberList;