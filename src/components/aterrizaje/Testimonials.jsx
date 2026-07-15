import '../../styles/pages/Landing.css'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Digital Artist',
    content: 'Nashri AI ha revolucionado mi flujo de trabajo creativo. Ahora puedo crear 10x más contenido en la mitad del tiempo.',
    avatar: '👩‍🎨'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Game Developer',
    content: 'El creador de personajes es increíblemente intuitivo. Me ahorra mucho tiempo en la creación de assets para mis juegos indie.',
    avatar: '👨‍💻'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Content Creator',
    content: 'Como creadora de contenido, Nashri AI me ayuda a mantenerme al día con las tendencias y producir visuales únicos de alta calidad.',
    avatar: '👩‍🎬'
  },
  {
    id: 4,
    name: 'Alex Thompson',
    role: 'Studio Owner',
    content: 'Integramos Nashri AI en nuestro flujo de trabajo y se ha convertido en una herramienta esencial para nuestro equipo de diseño.',
    avatar: '👨‍🎓'
  }
]

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card card">
      <div className="testimonial-header">
        <span className="avatar">{testimonial.avatar}</span>
        <div className="testimonial-info">
          <h4>{testimonial.name}</h4>
          <p className="text-caption">{testimonial.role}</p>
        </div>
      </div>
      <p className="testimonial-content">"{testimonial.content}"</p>
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="star">⭐</span>
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Lo que dicen los creadores</h2>
          <p className="text-body-lg">Únete a miles de creadores satisfechos usando Nashri AI</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}