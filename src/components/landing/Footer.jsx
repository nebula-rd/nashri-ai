import '../../styles/pages/Landing.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Nashri AI</h4>
            <p className="text-body-sm">Creative Intelligence Studio powered by artificial intelligence.</p>
            <div className="social-links">
              <a href="#" title="Twitter">𝕏</a>
              <a href="#" title="Instagram">📷</a>
              <a href="#" title="Discord">💬</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              <li><a href="#features" className="text-secondary">Features</a></li>
              <li><a href="#pricing" className="text-secondary">Pricing</a></li>
              <li><a href="#gallery" className="text-secondary">Gallery</a></li>
              <li><a href="#" className="text-secondary">Changelog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#" className="text-secondary">Documentation</a></li>
              <li><a href="#" className="text-secondary">Blog</a></li>
              <li><a href="#" className="text-secondary">Tutorials</a></li>
              <li><a href="#" className="text-secondary">Community</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#" className="text-secondary">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary">Terms of Service</a></li>
              <li><a href="#" className="text-secondary">Cookie Policy</a></li>
              <li><a href="#" className="text-secondary">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-body-sm">&copy; {currentYear} Nashri AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}