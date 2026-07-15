import '../../styles/pages/Landing.css'

const steps = [
  {
    id: 1,
    title: 'Get Credits',
    description: 'Choose a plan and get credits to start creating'
  },
  {
    id: 2,
    title: 'Create',
    description: 'Use AI tools to generate your unique creations'
  },
  {
    id: 3,
    title: 'Save',
    description: 'Store your projects in your personal gallery'
  },
  {
    id: 4,
    title: 'Share',
    description: 'Share your creations with the Nashri community'
  }
]

function StepItem({ step, index }) {
  return (
    <div className="step-item">
      <div className="step-number">{index + 1}</div>
      <div className="step-content">
        <h4>{step.title}</h4>
        <p className="text-body-sm">{step.description}</p>
      </div>
      {index < steps.length - 1 && <div className="step-arrow">→</div>}
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p className="text-body-lg">Get started with Nashri AI in just 4 simple steps</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <StepItem key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}