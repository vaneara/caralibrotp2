function SearchBar({ placeholder = 'Buscar...', value, onChange, onFocus }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="input-search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        aria-label="Buscar"
      />
    </div>
  )
}

export default SearchBar
