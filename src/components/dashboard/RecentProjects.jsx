import '../../styles/pages/Dashboard.css'

const recentProjects = [
  { id: 1, name: 'Guerrero Cyberpunk', type: 'Generación IA', date: 'Hace 2 horas', image: '🖼' },
  { id: 2, name: 'Avatar Luna', type: 'Personaje', date: 'Hace 1 día', image: '👤' },
  { id: 3, name: 'Post Instagram', type: 'Diseño Social', date: 'Hace 3 días', image: '📱' }
]

export default function RecentProjects() {
  return (
    <div className="recent-projects">
      <div className="section-header-bar">
        <h2>Proyectos Recientes</h2>
        <a href="#" className="text-primary">Ver todos →</a>
      </div>
      <div className="projects-grid">
        {recentProjects.map(project => (
          <div key={project.id} className="project-card card">
            <div className="project-image">{project.image}</div>
            <div className="project-info">
              <h4>{project.name}</h4>
              <p className="text-body-sm text-muted">{project.type}</p>
              <p className="text-caption">{project.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}