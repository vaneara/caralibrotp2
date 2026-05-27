function InfoBox({ title, children, variant }) {
  return (
    <div className={`info-box${variant ? ` info-box-${variant}` : ''}`}>
      <b>{title}</b>
      {children}
    </div>
  )
}

export default InfoBox
