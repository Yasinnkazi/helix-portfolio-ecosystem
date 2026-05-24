import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../sections/Hero'
import Stats from '../sections/Stats'
import Transformations from '../sections/Transformations'
import Trainers from '../sections/Trainers'
import Membership from '../sections/Membership'
import Schedule from '../sections/Schedule'
import AppSection from '../sections/AppSection'
import Testimonials from '../sections/Testimonials'
import CTA from '../sections/CTA'

const navLinks = [
  { label: 'Results', href: '#results' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Plans', href: '#plans' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'App', href: '#app' },
]

export default function Home() {
  return (
    <main className="bg-ink-950 text-white overflow-hidden">
      <Navbar brandName="APEX" links={navLinks} cta={{ label: 'Join Free', href: '#plans' }} />
      <Hero />
      <Stats />
      <Transformations />
      <Trainers />
      <Membership />
      <Schedule />
      <AppSection />
      <Testimonials />
      <CTA />
      <Footer
        brandName="APEX"
        tagline="Elite fitness for those who demand more."
        columns={[
          { title: 'Training', links: [{ label: 'Programs', href: '#' }, { label: 'Schedule', href: '#schedule' }, { label: 'Personal Training', href: '#' }, { label: 'On-Demand', href: '#' }] },
          { title: 'Membership', links: [{ label: 'Plans', href: '#plans' }, { label: 'Free Trial', href: '#' }, { label: 'Refer a Friend', href: '#' }, { label: 'Corporate', href: '#' }] },
          { title: 'Location', links: [{ label: '456 Athletic Ave', href: '#' }, { label: 'Los Angeles, CA', href: '#' }, { label: 'Open 24/7', href: '#' }, { label: 'info@apexfitness.com', href: '#' }] },
          { title: 'Follow', links: [{ label: 'Instagram', href: '#' }, { label: 'TikTok', href: '#' }, { label: 'YouTube', href: '#' }] },
        ]}
      />
    </main>
  )
}
