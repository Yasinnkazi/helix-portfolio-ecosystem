import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../sections/Hero'
import Story from '../sections/Story'
import Menu from '../sections/Menu'
import Chef from '../sections/Chef'
import Gallery from '../sections/Gallery'
import Testimonials from '../sections/Testimonials'
import Events from '../sections/Events'
import Contact from '../sections/Contact'
import Reservation from '../sections/Reservation'

const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

export default function Home() {
  return (
    <main className="bg-ink-950 text-white overflow-hidden">
      <Navbar brandName="Aura" links={navLinks} cta={{ label: 'Reserve', href: '#reservation' }} />
      <Hero />
      <Story />
      <Menu />
      <Chef />
      <Gallery />
      <Testimonials />
      <Events />
      <Contact />
      <Reservation />
      <Footer
        brandName="Aura"
        tagline="Modern European Dining. Crafted with passion, served with elegance."
        columns={[
          { title: 'Dining', links: [{ label: 'Menu', href: '#menu' }, { label: 'Reservations', href: '#reservation' }, { label: 'Private Events', href: '#events' }, { label: 'Gift Cards', href: '#' }] },
          { title: 'Hours', links: [{ label: 'Mon–Thu: 5pm–11pm', href: '#' }, { label: 'Fri–Sat: 5pm–12am', href: '#' }, { label: 'Sun: 10am–10pm', href: '#' }] },
          { title: 'Contact', links: [{ label: '123 Gourmet Street', href: '#' }, { label: 'NYC, NY 10012', href: '#' }, { label: 'hello@aura.dining', href: '#' }, { label: '+1 (212) 555-0189', href: '#' }] },
          { title: 'Social', links: [{ label: 'Instagram', href: '#' }, { label: 'TikTok', href: '#' }, { label: 'Facebook', href: '#' }] },
        ]}
      />
    </main>
  )
}
