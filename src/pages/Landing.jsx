import Hero from '../components/landing/Hero'
import TrustedBy from '../components/landing/TrustedBy'
import AITools from '../components/landing/AITools'
import Features from '../components/landing/Features'
import GalleryPreview from '../components/landing/GalleryPreview'
import HowItWorks from '../components/landing/HowItWorks'
import Pricing from '../components/landing/Pricing'
import FAQ from '../components/landing/FAQ'
import Testimonials from '../components/landing/Testimonials'
import CTA from '../components/landing/CTA'
import Footer from '../components/landing/Footer'
import '../styles/pages/Landing.css'

export default function Landing() {
  return (
    <div className="landing-page">
      <Hero />
      <TrustedBy />
      <AITools />
      <Features />
      <GalleryPreview />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}