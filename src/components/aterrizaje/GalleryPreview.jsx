import '../../styles/pages/Landing.css'

const galleryItems = [
  { id: 1, title: 'Cyberpunk City', image: '🌃' },
  { id: 2, title: 'Fantasy Dragon', image: '🐉' },
  { id: 3, title: 'Underwater World', image: '🌊' },
  { id: 4, title: 'Space Station', image: '🚀' },
  { id: 5, title: 'Magic Forest', image: '🌲' },
  { id: 6, title: 'Neon Lights', image: '💡' }
]

function GalleryItem({ item }) {
  return (
    <div className="gallery-item card">
      <div className="gallery-image">{item.image}</div>
      <h4>{item.title}</h4>
      <p className="text-body-sm text-muted">Community Creation</p>
    </div>
  )
}

export default function GalleryPreview() {
  return (
    <section className="gallery-preview">
      <div className="container">
        <div className="section-header">
          <h2>Gallery Preview</h2>
          <p className="text-body-lg">Discover incredible creations from our community</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
        <div className="gallery-cta">
          <button className="btn btn-primary">Explore Full Gallery</button>
        </div>
      </div>
    </section>
  )
}