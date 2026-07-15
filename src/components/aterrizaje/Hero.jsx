import '../../styles/pages/Landing.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-headline">Turn imagination into reality with AI.</h1>
          <p className="hero-subtitle">
            Nashri AI is your creative intelligence studio. Generate stunning images, design characters, 
            enhance photos, and bring your wildest ideas to life with cutting-edge AI technology.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg">Start Creating Free</button>
            <button className="btn btn-secondary btn-lg">Watch Demo</button>
          </div>
        </div>
        <div className="hero-illustration">
          <div className="illustration-placeholder">
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
              <rect width="500" height="400" fill="rgba(139, 92, 246, 0.05)" rx="20"/>
              <text x="250" y="200" textAnchor="middle" fill="var(--color-text-secondary)" fontSize="24" fontWeight="600">
                Nashri Dashboard
              </text>
              <text x="250" y="240" textAnchor="middle" fill="var(--color-text-secondary)" fontSize="16" opacity="0.6">
                Dashboard Preview
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}