import '../../styles/pages/Landing.css'

const companies = [
  { name: 'Creative Studio', logo: '🎨' },
  { name: 'Design Team', logo: '✨' },
  { name: 'AI Studios', logo: '🤖' },
  { name: 'Digital Creative', logo: '💫' },
  { name: 'Innovation Lab', logo: '🚀' },
  { name: 'Art Collective', logo: '🎭' }
]

export default function TrustedBy() {
  return (
    <section className="trusted-by">
      <div className="container">
        <p className="trusted-label">Trusted by over 50,000 creators worldwide</p>
        <div className="companies-grid">
          {companies.map((company, idx) => (
            <div key={idx} className="company-logo">
              <span className="logo-icon">{company.logo}</span>
              <span className="logo-text">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}