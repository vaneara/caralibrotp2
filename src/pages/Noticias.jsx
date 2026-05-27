import { useState, useEffect } from 'react'
import Layout from '../components/Layout'

const FERIADOS_URL = 'https://api.argentinadatos.com/v1/feriados/2026'
const COTIZACIONES_URL = 'https://api.argentinadatos.com/v1/cotizaciones'
const ITEMS_PER_PAGE = 5

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const ciudades = [
  { nombre: 'San Juan', lat: -31.5375, lon: -68.5364, color: '#e8f5e9' },
  { nombre: 'Mendoza', lat: -32.89, lon: -68.84, color: '#fce4ec' },
  { nombre: 'San Luis', lat: -33.3, lon: -66.35, color: '#fff3e0' },
  { nombre: 'Buenos Aires', lat: -34.6, lon: -58.4, color: '#e3f2fd' },
]

const wmoMap = {
  0: { emoji: '☀️', texto: 'Despejado' },
  1: { emoji: '🌤️', texto: 'Mayormente despejado' },
  2: { emoji: '⛅', texto: 'Parcialmente nublado' },
  3: { emoji: '☁️', texto: 'Nublado' },
  45: { emoji: '🌫️', texto: 'Niebla' },
  48: { emoji: '🌫️', texto: 'Niebla con escarcha' },
  51: { emoji: '🌦️', texto: 'Llovizna fina' },
  53: { emoji: '🌦️', texto: 'Llovizna moderada' },
  55: { emoji: '🌦️', texto: 'Llovizna densa' },
  61: { emoji: '🌧️', texto: 'Lluvia ligera' },
  63: { emoji: '🌧️', texto: 'Lluvia moderada' },
  65: { emoji: '🌧️', texto: 'Lluvia fuerte' },
  80: { emoji: '🌦️', texto: 'Chubascos ligeros' },
  81: { emoji: '🌧️', texto: 'Chubascos moderados' },
  82: { emoji: '🌧️', texto: 'Chubascos fuertes' },
  95: { emoji: '⛈️', texto: 'Tormenta' },
  96: { emoji: '⛈️', texto: 'Tormenta con granizo' },
  99: { emoji: '⛈️', texto: 'Tormenta fuerte con granizo' },
}

function formatearFecha(fechaStr) {
  const [y, m, d] = fechaStr.split('-')
  return `${parseInt(d)} de ${meses[parseInt(m) - 1]} de ${y}`
}

function armarUrlClima(lat, lon) {
  return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m&timezone=auto`
}

function Noticias() {
  const [feriados, setFeriados] = useState([])
  const [cotizaciones, setCotizaciones] = useState([])
  const [clima, setClima] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    const climaPromises = ciudades.map(c =>
      fetch(armarUrlClima(c.lat, c.lon)).then(r => r.json())
    )

    Promise.all([
      fetch(FERIADOS_URL).then(r => r.json()),
      fetch(COTIZACIONES_URL).then(r => r.json()),
      ...climaPromises,
    ])
      .then(([feriadosData, cotizacionesData, ...climaData]) => {
        if (cancelled) return
        setFeriados(feriadosData)
        const ultimos = {}
        cotizacionesData.forEach(item => {
          ultimos[item.moneda] = item
        })
        setCotizaciones(Object.values(ultimos))
        setClima(climaData.map((d, i) => ({
          ciudad: ciudades[i].nombre,
          bg: ciudades[i].color,
          temp: d.current?.temperature_2m,
          code: d.current?.weathercode,
          wind: d.current?.windspeed_10m,
        })))
        setLoading(false)
      })
      .catch(err => {
        if (cancelled) return
        setError(err.message || 'Error al cargar datos')
        setLoading(false)
      })

    return () => { cancelled = true }
  }, [])

  const totalPages = Math.ceil(feriados.length / ITEMS_PER_PAGE)
  const paginated = feriados.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const tipoLabel = {
    inamovible: 'Inamovible',
    trasladable: 'Trasladable',
    puente: 'Puente',
  }

  const tipoClass = {
    inamovible: 'feriado-tag-inamovible',
    trasladable: 'feriado-tag-trasladable',
    puente: 'feriado-tag-puente',
  }

  return (
    <Layout>
      <div className="card">
        <div className="noticias-header">
          <div style={{ fontSize: '24px', marginBottom: '5px' }}>🇦🇷</div>
          <h1 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1c1e21' }}>
            Noticias de Argentina
          </h1>
          <p style={{ fontSize: '11px', color: '#606770' }}>
            Datos proporcionados por ArgentinaDatos API
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="noticias-error">
            <p>Error: {error}</p>
            <button
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              Reintentar
            </button>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="noticias-loading">
            <div className="noticias-skeleton" style={{ height: '60px' }} />
            <div className="noticias-skeleton" style={{ height: '60px' }} />
            <div className="noticias-skeleton" style={{ height: '60px' }} />
            <div className="noticias-skeleton" style={{ height: '60px' }} />
          </div>
        )}

        {/* Feriados */}
        {!loading && !error && (
          <div className="noticias-section">
            <h2 className="noticias-section-title">🗓️ Feriados 2026</h2>

            <div className="feriados-list">
              {paginated.map((f, i) => (
                <div key={i} className="feriado-item">
                  <div className="feriado-date">
                    <span className="feriado-day">{f.fecha.split('-')[2]}</span>
                    <span className="feriado-month">{meses[parseInt(f.fecha.split('-')[1]) - 1].substring(0, 3)}</span>
                  </div>
                  <div className="feriado-info">
                    <div className="feriado-name">{f.nombre}</div>
                    <div className="feriado-meta">
                      {formatearFecha(f.fecha)}
                    </div>
                  </div>
                  <span className={`feriado-tag ${tipoClass[f.tipo] || ''}`}>
                    {tipoLabel[f.tipo] || f.tipo}
                  </span>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="noticias-pagination">
              <button
                className="btn btn-secondary"
                disabled={page <= 1}
                onClick={() => setPage(p => p - 1)}
              >
                ← Anterior
              </button>
              <span className="noticias-page-indicator">
                Página <strong>{page}</strong> de <strong>{totalPages}</strong>
              </span>
              <button
                className="btn btn-secondary"
                disabled={page >= totalPages}
                onClick={() => setPage(p => p + 1)}
              >
                Siguiente →
              </button>
            </div>
          </div>
        )}

        {/* Cotizaciones */}
        {!loading && !error && cotizaciones.length > 0 && (
          <div className="noticias-section" style={{ borderTop: '1px solid #dddfe2', marginTop: 0, paddingTop: '16px' }}>
            <h2 className="noticias-section-title">💱 Cotizaciones</h2>

            <div className="cotizaciones-grid">
              {cotizaciones.filter(c => ['USD', 'EUR', 'BRL'].includes(c.moneda)).map((c, i) => (
                <div key={i} className="cotizacion-card">
                  <div className="cotizacion-moneda">
                    {c.moneda === 'USD' ? '💵' : c.moneda === 'EUR' ? '💶' : '💷'} {c.moneda}
                  </div>
                  <div className="cotizacion-valores">
                    <div className="cotizacion-valor">
                      <span className="cotizacion-label">Compra</span>
                      <span className="cotizacion-number">${c.compra?.toFixed(2)}</span>
                    </div>
                    <div className="cotizacion-valor">
                      <span className="cotizacion-label">Venta</span>
                      <span className="cotizacion-number">${c.venta?.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="cotizacion-fecha">{c.fecha}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clima */}
        {!loading && !error && clima.length > 0 && (
          <div className="noticias-section" style={{ borderTop: '1px solid #dddfe2', marginTop: 0, paddingTop: '16px' }}>
            <h2 className="noticias-section-title">🌤️ Clima del equipo</h2>

            <div className="clima-grid">
              {clima.map((c, i) => {
                const wmo = wmoMap[c.code] || { emoji: '🌡️', texto: `Código ${c.code}` }
                return (
                  <div key={i} className="clima-card" style={{ backgroundColor: c.bg }}>
                    <div className="clima-ciudad">{c.ciudad}</div>
                    <div className="clima-temp">
                      <span className="clima-emoji">{wmo.emoji}</span>
                      <span className="clima-grados">{c.temp != null ? `${Math.round(c.temp)}°` : '—'}</span>
                    </div>
                    <div className="clima-desc">{wmo.texto}</div>
                    <div className="clima-viento">💨 {c.wind != null ? `${c.wind} km/h` : '—'}</div>
                  </div>
                )
              })}
            </div>

            <p style={{ fontSize: '10px', color: '#90949c', textAlign: 'center', marginTop: '10px' }}>
              Datos: Open-Meteo · {new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Noticias
