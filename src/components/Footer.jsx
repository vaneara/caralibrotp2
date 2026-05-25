function Footer() {
  return (
    <footer>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button className="fb-button">
          Volver al Inicio
        </button>

        <button className="fb-button">
          Ir a Bitácora
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        © 2010 School Project Archive
      </div>

    </footer>
  );
}

export default Footer;