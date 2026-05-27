function Badge({ count, variant = 'danger' }) {
  if (!count || count <= 0) return null

  const colors = {
    danger: { bg: '#fa3e3e', text: 'white' },
    warning: { bg: '#f0ad4e', text: 'white' },
    info: { bg: '#5bc0de', text: 'white' },
  }

  const c = colors[variant] || colors.danger

  return (
    <span
      className="badge"
      style={{
        backgroundColor: c.bg,
        color: c.text,
        borderRadius: '10px',
        padding: '1px 6px',
        fontSize: '10px',
        fontWeight: 'bold',
        marginLeft: '4px',
        flexShrink: 0,
        lineHeight: 1.4,
      }}
    >
      {count > 99 ? '99+' : count}
    </span>
  )
}

export default Badge
