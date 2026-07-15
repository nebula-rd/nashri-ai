import '../../styles/pages/Dashboard.css'

const menuItems = [
  { id: 'home', label: 'Inicio', icon: '🏠', action: 'home' },
  { id: 'create', label: 'Crear', icon: '✨', action: 'create' },
  { id: 'projects', label: 'Proyectos', icon: '📁', action: 'projects' },
  { id: 'gallery', label: 'Galería', icon: '🖼', action: 'gallery' },
  { id: 'characters', label: 'Personajes', icon: '👤', action: 'characters' },
  { id: 'templates', label: 'Plantillas', icon: '🎨', action: 'templates' },
  { id: 'community', label: 'Comunidad', icon: '🌎', action: 'community' },
  { id: 'premium', label: 'Premium', icon: '⭐', action: 'premium' },
  { id: 'settings', label: 'Configuración', icon: '⚙', action: 'settings' }
]

export default function Sidebar({ currentPage, setCurrentPage }) {
  return (
    <aside className="sidebar-dashboard">
      <div className="sidebar-header">
        <h2 className="sidebar-logo">Nashri</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-nav-item ${currentPage === item.action ? 'active' : ''}`}
            onClick={() => setCurrentPage(item.action)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}