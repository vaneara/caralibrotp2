function Input({
  placeholder,
  value,
  onChange,
  onKeyDown,
  type = 'text',
  disabled,
  variant = 'default',
  rows,
  className = '',
  ...rest
}) {
  if (variant === 'textarea') {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        rows={rows}
        className={`input-field input-textarea ${className}`.trim()}
        {...rest}
      />
    )
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={disabled}
      className={`input-field input-${variant} ${className}`.trim()}
      {...rest}
    />
  )
}

export default Input
