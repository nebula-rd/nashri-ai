import '../../styles/pages/Landing.css'
import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: '¿Qué es Nashri AI?',
    answer: 'Nashri AI es un estudio de inteligencia creativa impulsado por IA que te ayuda a generar imágenes, diseñar personajes y crear contenido visual impresionante.'
  },
  {
    id: 2,
    question: '¿Cuántas generaciones puedo hacer al día?',
    answer: 'Con el plan Free tienes 20 generaciones diarias, Premium 100, e Infinity Pass acciones ilimitadas.'
  },
  {
    id: 3,
    question: '¿Puedo usar mis creaciones comercialmente?',
    answer: 'Sí, con los planes Premium e Infinity Pass. El plan Free es solo para uso personal.'
  },
  {
    id: 4,
    question: '¿Se pierden mis generaciones si no las uso?',
    answer: 'No, tus generaciones no expiran. Se mantienen en tu cuenta hasta que las uses.'
  },
  {
    id: 5,
    question: '¿Puedo descargar mis proyectos?',
    answer: 'Sí, puedes exportar tus creaciones en varios formatos, desde calidad estándar hasta 4K con Premium e Infinity Pass.'
  },
  {
    id: 6,
    question: '¿Hay período de prueba gratuito?',
    answer: 'Sí, nuestro plan Free te da 20 generaciones diarias, suficientes para explorar todas las características de Nashri AI.'
  }
]

function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{item.question}</span>
        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <h2>Preguntas Frecuentes</h2>
          <p className="text-body-lg">Encuentra respuestas a preguntas comunes sobre Nashri AI</p>
        </div>
        <div className="faq-container">
          {faqs.map(item => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}