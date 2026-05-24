import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../sections/Hero'
import Showcase from '../sections/Showcase'
import Services from '../sections/Services'
import Process from '../sections/Process'
import CaseStudies from '../sections/CaseStudies'
import Testimonials from '../sections/Testimonials'
import Clients from '../sections/Clients'
import Timeline from '../sections/Timeline'
import Contact from '../sections/Contact'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Studio', href: '#studio' },
  { label: 'Contact', href: '#contact' },
]

export default function Home() {
  return (
    <main className="bg-ink-950 text-white overflow-hidden">
      <Navbar brandName="Helix Digital" links={navLinks} cta={{ label: 'Start a Project', href: '#contact' }} />
      <Hero />
      <Showcase />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Clients />
      <Timeline />
      <Contact />
      <Footer
        brandName="Helix Digital"
        tagline="A creative studio crafting premium digital experiences for ambitious brands."
        columns={[
          { title: 'Studio', links: [{ label: 'Work', href: '#work' }, { label: 'Services', href: '#services' }, { label: 'About', href: '#studio' }, { label: 'Careers', href: '#' }] },
          { title: 'Services', links: [{ label: 'Brand Strategy', href: '#' }, { label: 'UI/UX Design', href: '#' }, { label: 'Development', href: '#' }, { label: 'Motion Design', href: '#' }] },
          { title: 'Contact', links: [{ label: 'hello@helixdigital.com', href: '#' }, { label: '+1 (415) 555-0192', href: '#' }, { label: 'San Francisco, CA', href: '#' }] },
          { title: 'Social', links: [{ label: 'Dribbble', href: '#' }, { label: 'Behance', href: '#' }, { label: 'GitHub', href: '#' }, { label: 'LinkedIn', href: '#' }] },
        ]}
      />
    </main>
  )
}
