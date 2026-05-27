function DatePicker() {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label style={{ fontSize: '13px', fontWeight: 'bold', color: '#606770', display: 'block', marginBottom: '5px' }}>
        Fecha de nacimiento
      </label>
      <div style={{ display: 'flex', gap: '6px' }}>
        <select className="login-select">
          <option>Día</option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1}>{i + 1}</option>
          ))}
        </select>
        <select className="login-select">
          <option>Mes</option>
          {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(m => (
            <option key={m}>{m}</option>
          ))}
        </select>
        <select className="login-select">
          <option>Año</option>
          {Array.from({ length: 60 }, (_, i) => (
            <option key={i}>{2026 - i}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default DatePicker
