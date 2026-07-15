import '../../styles/pages/Dashboard.css'
import { useState } from 'react'
import Sidebar from '../dashboard/Sidebar'
import Topbar from '../dashboard/Topbar'
import CreateCard from '../dashboard/CreateCard'
import RecentProjects from '../dashboard/RecentProjects'
import QuickActions from '../dashboard/QuickActions'
import PremiumBanner from '../dashboard/PremiumBanner'

const createOptions = [
  { id: 1, title: 'Generador de Imágenes', icon: '🖼', description: 'Crea imágenes únicas con IA', action: 'image-generator' },
  { id: 2, title: 'Creador de Personajes', icon: '👤', description: 'Diseña personajes IA increíbles', action: 'character-creator' },
  { id: 3, title: 'Diseño Social', icon: '📱', description: 'Posts, banners y más', action: 'social-design' },
  { id: 4, title: 'Mejorador de Imágenes', icon: '✨', description: 'Upscale y mejora tu arte', action: 'image-enhancer' },
  { id: 5, title: 'Crear Avatar', icon: '🧑', description: 'Avatar IA personalizado', action: 'avatar-creator' },
  { id: 6, title: 'Explorar Estilos', icon: '🎨', description: 'Descubre nuevos estilos', action: 'styles' }
]

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState('home')
  const [user] = useState({
    name: 'Alex Creator',
    plan: 'Premium',
    creditsUsed: 60,
    creditsLimit: 100,
    avatar: '👤'
  })

  return (
    <div className="dashboard-container">
      <Topbar user={user} />
      <div className="dashboard-main">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="dashboard-content">
          {currentPage === 'home' && (
            <>
              <PremiumBanner user={user} />
              <section className="dashboard-section">
                <h1>¿Qué quieres crear hoy?</h1>
                <QuickActions options={createOptions} />
              </section>
              <section className="dashboard-section">
                <RecentProjects />
              </section>
            </>
          )}
          {currentPage === 'create' && (
            <section className="dashboard-section">
              <h1>Herramientas de Creación</h1>
              <div className="create-tools-grid">
                {createOptions.map(option => (
                  <CreateCard key={option.id} option={option} />
                ))}
              </div>
            </section>
          )}
          {currentPage === 'projects' && (
            <section className="dashboard-section">
              <h1>Mis Proyectos</h1>
              <div className="empty-state">
                <p className="text-body-lg">Aún no tienes proyectos. ¡Crea tu primer proyecto!</p>
                <button className="btn btn-primary" onClick={() => setCurrentPage('create')}>Comenzar</button>
              </div>
            </section>
          )}
          {currentPage === 'gallery' && (
            <section className="dashboard-section">
              <h1>Mi Galería</h1>
              <div className="empty-state">
                <p className="text-body-lg">Tu galería está vacía. Genera o sube tu primer arte.</p>
                <button className="btn btn-primary" onClick={() => setCurrentPage('create')}>Crear Ahora</button>
              </div>
            </section>
          )}
          {currentPage === 'characters' && (
            <section className="dashboard-section">
              <h1>Mis Personajes</h1>
              <div className="empty-state">
                <p className="text-body-lg">No tienes personajes aún. Crea tu primer personaje IA.</p>
                <button className="btn btn-primary" onClick={() => setCurrentPage('create')}>Crear Personaje</button>
              </div>
            </section>
          )}
          {currentPage === 'templates' && (
            <section className="dashboard-section">
              <h1>Plantillas</h1>
              <div className="templates-grid">
                {['Redes Sociales', 'Marketing', 'Arte', 'Historias', 'Presentaciones'].map((cat, idx) => (
                  <div key={idx} className="template-card card">
                    <div className="template-icon">📋</div>
                    <h4>{cat}</h4>
                    <p className="text-body-sm">Múltiples plantillas disponibles</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {currentPage === 'community' && (
            <section className="dashboard-section">
              <h1>Comunidad</h1>
              <div className="empty-state">
                <p className="text-body-lg">Próximamente: Comparte y descubre creaciones de la comunidad.</p>
              </div>
            </section>
          )}
          {currentPage === 'premium' && (
            <section className="dashboard-section">
              <h1>Premium & Infinity Pass</h1>
              <div className="premium-grid">
                <div className="premium-card card">
                  <h3>Premium Plan</h3>
                  <p className="text-body">$9.99/mes</p>
                  <ul className="features-list">
                    <li>100 generaciones diarias</li>
                    <li>Sin marca de agua</li>
                    <li>Modelos avanzados</li>
                    <li>Personajes ilimitados</li>
                  </ul>
                  <button className="btn btn-primary" disabled>Plan Actual</button>
                </div>
                <div className="premium-card card card-infinity">
                  <div className="badge badge-infinity">Limited Spots</div>
                  <h3>Infinity Pass ⭐</h3>
                  <p className="text-body">Fundadores (Primeros 200)</p>
                  <ul className="features-list">
                    <li>Acciones ilimitadas</li>
                    <li>Insignia fundador</li>
                    <li>Acceso anticipado</li>
                    <li>Modelos exclusivos</li>
                    <li>Nombre en muro</li>
                  </ul>
                  <button className="btn btn-infinity">Convertirme en Fundador</button>
                </div>
              </div>
            </section>
          )}
          {currentPage === 'settings' && (
            <section className="dashboard-section">
              <h1>Configuración</h1>
              <div className="empty-state">
                <p className="text-body-lg">Próximamente: Configuración de cuenta, privacidad y notificaciones.</p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}