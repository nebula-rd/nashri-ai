import '../../styles/pages/Landing.css'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Digital Artist',
    content: 'Nashri AI has revolutionized my creative workflow. I can now create 10x more content in half the time!',
    avatar: '👩‍🎨'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Game Developer',
    content: 'The character creator is incredibly intuitive. It saves me so much time on asset creation for my indie games.',
    avatar: '👨‍💻'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Content Creator',
    content: 'As a content creator, Nashri AI helps me stay ahead of trends and produce unique, high-quality visuals consistently.',
    avatar: '👩‍🎬'
  },
  {
    id: 4,
    name: 'Alex Thompson',
    role: 'Design Studio Owner',
    content: 'We integrated Nashri AI into our workflow and it has become an essential tool for our design team.',
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
          <h2>What Creators Say</h2>
          <p className="text-body-lg">Join thousands of satisfied creators using Nashri AI</p>
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