import '../../styles/pages/Landing.css'

const plans = [
  {
    id: 1,
    name: 'Free',
    description: 'Perfect for trying out Nashri AI',
    features: ['20 generaciones diarias', 'Generador de imágenes', 'Personajes básicos', 'Galería pública'],
    highlight: false,
    price: 'Free'
  },
  {
    id: 2,
    name: 'Premium',
    price: '$9.99',
    period: '/mes',
    description: 'For creative professionals',
    features: ['100 generaciones diarias', 'Sin marca de agua', 'Modelos avanzados', 'Personajes ilimitados', 'Mejor calidad'],
    highlight: false
  },
  {
    id: 3,
    name: 'Infinity Pass ⭐',
    price: 'Fundadores',
    period: '(Primeros 200)',
    description: 'Unlimited creative possibilities',
    features: ['Acciones ilimitadas', 'Insignia fundador', 'Acceso anticipado', 'Modelos exclusivos', 'Nombre en muro de fundadores'],
    highlight: true
  }
]

function PricingCard({ plan }) {
  const cardClass = plan.highlight ? 'pricing-card card card-infinity' : 'pricing-card card'
  const btnClass = plan.highlight ? 'btn btn-infinity' : 'btn btn-primary'
  
  return (
    <div className={cardClass}>
      {plan.highlight && <div className="badge badge-infinity">Limited Spots</div>}
      <h3>{plan.name}</h3>
      <div className="pricing-amount">
        <span className="price">{plan.price}</span>
        {plan.period && <span className="period">{plan.period}</span>}
      </div>
      <p className="text-body">{plan.description}</p>
      <ul className="features-list">
        {plan.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <button className={btnClass}>Get Started</button>
    </div>
  )
}

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p className="text-body-lg">Choose the perfect plan for your creative journey</p>
        </div>
        <div className="pricing-grid">
          {plans.map(plan => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}