import '../../styles/pages/Landing.css'

const features = [
  {
    id: 1,
    title: 'Lightning Fast',
    description: 'Generate images in seconds with our optimized AI models',
    icon: '⚡'
  },
  {
    id: 2,
    title: 'Unlimited Variations',
    description: 'Create countless variations of your designs instantly',
    icon: '♾️'
  },
  {
    id: 3,
    title: 'High Quality Output',
    description: 'Export in HD and 4K resolution for professional use',
    icon: '🎬'
  },
  {
    id: 4,
    title: 'Smart Suggestions',
    description: 'AI-powered recommendations to improve your designs',
    icon: '🧠'
  },
  {
    id: 5,
    title: 'Cloud Storage',
    description: 'Access your projects anywhere, anytime',
    icon: '☁️'
  },
  {
    id: 6,
    title: 'Community Gallery',
    description: 'Share and discover creations from other artists',
    icon: '🌍'
  }
]

function FeatureCard({ feature }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{feature.icon}</div>
      <h4>{feature.title}</h4>
      <p className="text-body-sm">{feature.description}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Nashri AI?</h2>
          <p className="text-body-lg">Packed with features designed for creative professionals</p>
        </div>
        <div className="features-grid">
          {features.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}