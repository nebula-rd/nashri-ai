import '../../styles/pages/Landing.css'

export default function CTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Create Something Amazing?</h2>
          <p className="text-body-lg">
            Join thousands of creators using Nashri AI to bring their ideas to life. Start free today!
          </p>
          <div className="cta-actions">
            <button className="btn btn-primary btn-lg">Start Free</button>
            <button className="btn btn-secondary btn-lg">View Premium</button>
          </div>
        </div>
      </div>
    </section>
  )
}