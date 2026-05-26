import { Link } from "react-router-dom";

function MemberCard({ nombre, rol, imagen, slug }) {
  return (
    <Link
      to={`/perfiles/${slug}`}   
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px",
        textDecoration: "none",
        color: "black",
        borderBottom: "1px solid #ddd"
      }}
      className="member-card"
    >
      <img
        src={imagen}
        alt={nombre}
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "2px",
          border: "1px solid #999"
        }}
      />

      <div>
        <div style={{ fontSize: "11px", fontWeight: "bold" }}>
          {nombre}
        </div>
        <div style={{ fontSize: "10px", color: "#666" }}>
          {rol}
        </div>
      </div>
    </Link>
  );
}

export default MemberCard;