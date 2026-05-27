function SearchBar({ placeholder = 'Buscar...', value, onChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="input-search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label="Buscar"
      />
    </div>
  )
}

export default SearchBar
