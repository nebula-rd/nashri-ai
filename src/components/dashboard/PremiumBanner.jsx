import '../../styles/pages/Dashboard.css'

export default function PremiumBanner({ user }) {
  const usagePercent = (user.creditsUsed / user.creditsLimit) * 100
  
  return (
    <div className="premium-banner card">
      <div className="banner-left">
        <h3>⭐ Nashri Premium</h3>
        <p className="text-body-sm">{user.creditsUsed}/{user.creditsLimit} acciones usadas hoy</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${usagePercent}%` }}></div>
        </div>
      </div>
      <div className="banner-right">
        <button className="btn btn-primary btn-sm">Actualizar Plan</button>
        <button className="btn btn-secondary btn-sm">Ver Infinity Pass</button>
      </div>
    </div>
  )
}