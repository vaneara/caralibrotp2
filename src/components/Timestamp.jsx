function Timestamp({ text, size = 'md', color }) {
  const sizeMap = { sm: 9, md: 11, lg: 13 }
  const px = sizeMap[size] ?? size

  return (
    <div
      className="timestamp"
      style={{
        fontSize: px,
        color: color || '#606770',
        lineHeight: 1.34,
      }}
    >
      {text}
    </div>
  )
}

export default Timestamp
