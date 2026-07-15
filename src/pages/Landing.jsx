import Hero from '../components/aterrizaje/Hero'
import TrustedBy from '../components/aterrizaje/TrustedBy'
import AITools from '../components/aterrizaje/AITools'
import Features from '../components/aterrizaje/Features'
import GalleryPreview from '../components/aterrizaje/GalleryPreview'
import HowItWorks from '../components/aterrizaje/HowItWorks'
import Pricing from '../components/aterrizaje/Pricing'
import FAQ from '../components/aterrizaje/FAQ'
import Testimonials from '../components/aterrizaje/Testimonials'
import CTA from '../components/aterrizaje/CTA'
import Footer from '../components/aterrizaje/Footer'
import '../styles/pages/Landing.css'

export default function Landing() {
  return (
    <>
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
    </>
  )
}