import '../../styles/pages/Dashboard.css'

export default function QuickActions({ options }) {
  return (
    <div className="quick-actions">
      <div className="quick-actions-grid">
        {options.map(option => (
          <button key={option.id} className="quick-action-card" title={option.title}>
            <span className="action-icon">{option.icon}</span>
            <span className="action-label">{option.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}