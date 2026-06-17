import "./HomeContent.css"

function HomeContent() {
  return (
    <section className="home-content">
      <h1 className="home-title">Controla tus finanzas como un profesional</h1>

      <p className="home-description">
        Gestiona gastos, ahorros e inversiones
        desde una sola plataforma.
      </p>

      <div className="home-buttons">
        <button className="home-button" aria-label="Comenzar prueba gratuita">Comenzar Gratis</button>
        <button className="demo-button" aria-label="Ver demostración">Ver Demo</button>
      </div>  
      <p className="hint-text">No se requiere tarjeta de crédito</p>
    </section>
  )
}

export default HomeContent