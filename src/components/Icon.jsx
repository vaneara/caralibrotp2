function Icon({ children, className = '' }) {
  return (
    <span className={`icon ${className}`.trim()} role="img" aria-hidden="true">
      {children}
    </span>
  )
}

export default Icon
