function InputField({ label, type = 'text', value, onChange, placeholder, disabled, style }) {
  return (
    <div>
      {label && (
        <label
          style={{
            color: 'white', fontSize: '11px', fontWeight: 'normal',
            display: 'block', marginBottom: '3px', cursor: 'pointer',
          }}
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          border: '1px solid #1d2a5b', padding: '3px 5px',
          fontSize: '12px', width: '150px', outline: 'none', opacity: disabled ? '0.7' : 1,
          ...style,
        }}
      />
    </div>
  )
}

export default InputField
