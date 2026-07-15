import '../../styles/pages/Landing.css'
import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'What is Nashri AI?',
    answer: 'Nashri AI is a creative intelligence studio powered by artificial intelligence that helps you generate images, design characters, and create stunning visual content.'
  },
  {
    id: 2,
    question: 'How many credits do I need per creation?',
    answer: 'Credit usage varies by tool and resolution. Typically, generating a standard image uses 5-10 credits, while high-resolution exports use more.'
  },
  {
    id: 3,
    question: 'Can I use my creations commercially?',
    answer: 'Commercial use is available with our Premium and Infinity Pass plans. Free plan creations are for personal use only.'
  },
  {
    id: 4,
    question: 'Do unused credits expire?',
    answer: 'No, your credits never expire. They will remain in your account until you use them, even if you cancel your subscription.'
  },
  {
    id: 5,
    question: 'Can I download my projects?',
    answer: 'Yes! You can export your creations in various formats and resolutions, from standard quality up to 8K with Infinity Pass.'
  },
  {
    id: 6,
    question: 'Is there a free trial?',
    answer: 'Yes! Our Free plan comes with 50 credits per month, giving you plenty of time to explore all the features of Nashri AI.'
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
          <h2>Frequently Asked Questions</h2>
          <p className="text-body-lg">Find answers to common questions about Nashri AI</p>
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