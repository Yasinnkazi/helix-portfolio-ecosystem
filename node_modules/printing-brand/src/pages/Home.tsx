import { Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../sections/Hero'
import Showcase from '../sections/Showcase'
import Process from '../sections/Process'
import Embroidery from '../sections/Embroidery'
import Fabrics from '../sections/Fabrics'
import Catalog from '../sections/Catalog'
import Testimonials from '../sections/Testimonials'
import Clients from '../sections/Clients'
import FAQ from '../sections/FAQ'
import QuoteForm from '../sections/QuoteForm'
import Stats from '../sections/Stats'

const navLinks = [
  { label: 'Craft', href: '#craft' },
  { label: 'Process', href: '#process' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

const socialLinks = [
  { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
  { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
  { icon: <Youtube size={18} />, href: '#', label: 'YouTube' },
  { icon: <MessageCircle size={18} />, href: '#', label: 'WhatsApp' },
]

export default function Home() {
  return (
    <main className="bg-ink-950 text-white overflow-hidden">
      <Navbar brandName="ThreadForge" links={navLinks} cta={{ label: 'Get Quote', href: '#quote' }} />
      <Hero />
      <Stats />
      <Showcase />
      <Process />
      <Embroidery />
      <Fabrics />
      <Catalog />
      <Testimonials />
      <Clients />
      <FAQ />
      <QuoteForm />
      <Footer
        brandName="ThreadForge"
        tagline="Premium apparel manufacturing for brands that demand excellence."
        socialLinks={socialLinks}
        columns={[
          { title: 'Company', links: [{ label: 'About', href: '#' }, { label: 'Careers', href: '#' }, { label: 'Sustainability', href: '#' }] },
          { title: 'Services', links: [{ label: 'Screen Printing', href: '#' }, { label: 'Embroidery', href: '#' }, { label: 'DTG Printing', href: '#' }, { label: 'Custom Labels', href: '#' }] },
          { title: 'Support', links: [{ label: 'FAQ', href: '#faq' }, { label: 'Shipping', href: '#' }, { label: 'Samples', href: '#' }, { label: 'Contact', href: '#quote' }] },
          { title: 'Connect', links: [{ label: 'Instagram', href: '#' }, { label: 'LinkedIn', href: '#' }, { label: 'YouTube', href: '#' }] },
        ]}
      />
    </main>
  )
}
