function Header() {
  return (
    <header>

      <div className="header-container">

        <div className="logo-search">

          <div className="logo">
            caralibro
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar personas, grupos y cosas"
            />
          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;
