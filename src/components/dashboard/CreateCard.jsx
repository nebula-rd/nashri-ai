import '../../styles/pages/Dashboard.css'

export default function CreateCard({ option }) {
  const handleClick = () => {
    console.log(`Abrir: ${option.action}`)
  }

  return (
    <div className="create-card card">
      <div className="create-card-icon">{option.icon}</div>
      <h3>{option.title}</h3>
      <p className="text-body-sm">{option.description}</p>
      <button className="btn btn-primary btn-sm" onClick={handleClick}>
        Comenzar
      </button>
    </div>
  )
}