function PostFeedback({ summary }) {
  return (
    <div
      className="post-feedback"
      style={{
        backgroundColor: '#f0f2f5',
        padding: '8px',
        marginTop: '10px',
        borderRadius: '2px',
      }}
    >
      <span style={{ fontSize: '11px', color: '#65676b' }}>
        👍 {summary}
      </span>
    </div>
  )
}

export default PostFeedback
