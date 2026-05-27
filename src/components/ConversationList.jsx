import SearchBar from './SearchBar'
import ConversationItem from './ConversationItem'

function ConversationList({ conversations, activeId, onSelect, search, onSearchChange }) {
  const filtered = conversations.filter(c =>
    c.name.toLowerCase().includes((search || '').toLowerCase())
  )

  return (
    <div className="conv-list">
      <div className="card-header conv-list-header">
        <span className="card-title">Mensajes</span>
      </div>

      <div className="conv-list-search">
        <SearchBar
          placeholder="Buscar conversaciones..."
          value={search}
          onChange={onSearchChange}
        />
      </div>

      <div className="conv-list-items">
        {filtered.map(conv => (
          <ConversationItem
            key={conv.id}
            conversation={conv}
            isActive={activeId === conv.id}
            onClick={() => onSelect(conv)}
          />
        ))}
      </div>
    </div>
  )
}

export default ConversationList
