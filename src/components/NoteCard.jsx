import NoteHeader from './NoteHeader'
import PostActions from './PostActions'

function NoteCard({ note, children }) {
  const { title, date, actions } = note

  return (
    <div className="card">
      <NoteHeader title={title} date={date} />

      <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
        {children}
      </div>

      {actions !== false && <PostActions actions={actions || ['like', 'comment', 'share']} />}
    </div>
  )
}

export default NoteCard
