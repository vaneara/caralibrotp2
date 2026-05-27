function Button({ variant = 'secondary', children, onClick, type, disabled, className = '', ...rest }) {
  const cls = `fb-button${variant === 'primary' ? ' fb-button-primary' : ''} ${className}`.trim()

  return (
    <button className={cls} onClick={onClick} type={type} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}

export default Button
