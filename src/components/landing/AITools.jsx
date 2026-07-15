import '../../styles/pages/Landing.css'

const tools = [
  {
    id: 1,
    title: 'AI Image Generator',
    description: 'Generate stunning, unique images from text descriptions using advanced AI technology.'
  },
  {
    id: 2,
    title: 'Character Creator',
    description: 'Design and customize characters with intelligent AI-powered design suggestions.'
  },
  {
    id: 3,
    title: 'Design Studio',
    description: 'Create professional designs with AI-assisted layouts, colors, and compositions.'
  },
  {
    id: 4,
    title: 'Image Enhancer',
    description: 'Upscale and enhance your images with AI-powered enhancement technology.'
  }
]

function ToolCard({ tool }) {
  return (
    <div className="tool-card card">
      <div className="tool-icon">
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="rgba(124, 92, 255, 0.15)" stroke="var(--color-primary)" strokeWidth="2"/>
          <text x="32" y="36" textAnchor="middle" fill="var(--color-primary)" fontSize="20" fontWeight="700">✨</text>
        </svg>
      </div>
      <h3>{tool.title}</h3>
      <p className="text-body-sm">{tool.description}</p>
    </div>
  )
}

export default function AITools() {
  return (
    <section className="ai-tools">
      <div className="container">
        <div className="section-header">
          <h2>Powerful AI Tools</h2>
          <p className="text-body-lg">Everything you need to create amazing content with AI assistance</p>
        </div>
        <div className="tools-grid">
          {tools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  )
}