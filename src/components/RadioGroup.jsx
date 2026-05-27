function RadioGroup({ name, options, label }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      {label && (
        <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#606770', display: 'block', marginBottom: '5px' }}>
          {label}
        </label>
      )}
      <div style={{ display: 'flex', gap: '20px' }}>
        {options.map(opt => (
          <label key={opt} style={{ fontSize: '13px', color: '#1d2129', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <input type="radio" name={name} /> {opt}
          </label>
        ))}
      </div>
    </div>
  )
}

export default RadioGroup
