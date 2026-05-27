import Timestamp from './Timestamp'

function NoteHeader({ title, date }) {
  return (
    <div className="note-header" style={{ marginBottom: '15px' }}>
      <h2 style={{ fontSize: '18px', color: '#1c1e21', marginBottom: '5px' }}>
        {title}
      </h2>
      <Timestamp text={date} />
    </div>
  )
}

export default NoteHeader
