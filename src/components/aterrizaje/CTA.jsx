import '../../styles/pages/Landing.css'

export default function CTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-content">
          <h2>¿Listo para crear algo increíble?</h2>
          <p className="text-body-lg">
            Únete a miles de creadores usando Nashri AI para hacer realidad sus ideas. ¡Comienza gratis hoy!
          </p>
          <div className="cta-actions">
            <button className="btn btn-primary btn-lg">Comenzar Gratis</button>
            <button className="btn btn-secondary btn-lg">Ver Premium</button>
          </div>
        </div>
      </div>
    </section>
  )
}