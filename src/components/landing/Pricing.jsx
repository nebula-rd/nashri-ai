import '../../styles/pages/Landing.css'

const plans = [
  {
    id: 1,
    name: 'Free',
    price: '0',
    description: 'Perfect for trying out Nashri AI',
    features: ['50 credits/month', '1 project', 'Community access'],
    highlight: false
  },
  {
    id: 2,
    name: 'Premium',
    price: '9.99',
    description: 'For creative professionals',
    features: ['500 credits/month', 'Unlimited projects', 'Priority support', '4K exports'],
    highlight: false
  },
  {
    id: 3,
    name: 'Infinity Pass',
    price: '29.99',
    description: 'Unlimited creative possibilities',
    features: ['Unlimited credits', 'Unlimited projects', '24/7 support', '8K exports', 'Commercial use'],
    highlight: true
  }
]

function PricingCard({ plan }) {
  const cardClass = plan.highlight ? 'pricing-card card card-infinity' : 'pricing-card card'
  const btnClass = plan.highlight ? 'btn btn-infinity' : 'btn btn-primary'
  
  return (
    <div className={cardClass}>
      {plan.highlight && <div className="badge badge-infinity">Most Popular</div>}
      <h3>{plan.name}</h3>
      <div className="pricing-amount">
        <span className="currency">$</span>
        <span className="price">{plan.price}</span>
        <span className="period">/month</span>
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