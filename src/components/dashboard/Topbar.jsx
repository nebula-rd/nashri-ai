import '../../styles/pages/Dashboard.css'

export default function Topbar({ user }) {
  return (
    <header className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <h1 className="topbar-title">Nashri AI</h1>
        </div>
        <div className="topbar-right">
          <div className="user-info">
            <span className="user-plan">⭐ {user.plan}</span>
            <div className="user-profile">
              <span className="user-avatar">{user.avatar}</span>
              <div className="user-details">
                <p className="user-name">{user.name}</p>
                <p className="user-email">usuario@nashri.ai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}