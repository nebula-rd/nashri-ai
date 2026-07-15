import '../../styles/pages/Landing.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Nashri AI</h4>
            <p className="text-body-sm">Turn imagination into reality with AI.</p>
            <div className="social-links">
              <a href="#" title="Twitter">𝕏</a>
              <a href="#" title="Instagram">📷</a>
              <a href="#" title="Discord">💬</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Producto</h5>
            <ul>
              <li><a href="#features" className="text-secondary">Características</a></li>
              <li><a href="#pricing" className="text-secondary">Precios</a></li>
              <li><a href="#gallery" className="text-secondary">Galería</a></li>
              <li><a href="#" className="text-secondary">Changelog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Recursos</h5>
            <ul>
              <li><a href="#" className="text-secondary">Documentación</a></li>
              <li><a href="#" className="text-secondary">Blog</a></li>
              <li><a href="#" className="text-secondary">Tutoriales</a></li>
              <li><a href="#" className="text-secondary">Comunidad</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#" className="text-secondary">Política de Privacidad</a></li>
              <li><a href="#" className="text-secondary">Términos de Servicio</a></li>
              <li><a href="#" className="text-secondary">Política de Cookies</a></li>
              <li><a href="#" className="text-secondary">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-body-sm">&copy; {currentYear} Nashri AI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}