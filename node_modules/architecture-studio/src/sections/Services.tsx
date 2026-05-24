import ScrollReveal from '../components/ui/ScrollReveal'
import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import { Building2, Paintbrush, Compass, Landmark } from 'lucide-react'

const services = [
  {
    icon: <Building2 size={28} />,
    title: 'Architecture',
    description:
      'From intimate residences to large-scale commercial developments, we deliver architecture that responds to site, climate, and purpose. Our full-service offering spans concept design through to construction administration.',
    highlights: ['Residential & Commercial', 'Cultural & Civic', 'Master Planning', 'Feasibility Studies'],
  },
  {
    icon: <Paintbrush size={28} />,
    title: 'Interiors',
    description:
      'We create interior environments that feel as good as they look. Every finish, fixture, and furnishing is selected to support the architectural narrative while enhancing comfort and functionality.',
    highlights: ['Workplace Design', 'Hospitality & Retail', 'Residential Interiors', 'Custom Joinery & FF&E'],
  },
  {
    icon: <Compass size={28} />,
    title: 'Urban Planning',
    description:
      'Our urban design practice works at the scale of neighbourhoods and districts. We create frameworks for growth that prioritise walkability, biodiversity, and community wellbeing.',
    highlights: ['Site Master Planning', 'Public Realm Design', 'Transport Integration', 'Sustainability Strategy'],
  },
  {
    icon: <Landmark size={28} />,
    title: 'Conservation',
    description:
      'We bring sensitivity and rigour to historic buildings and listed structures. Our conservation work respects the past while introducing contemporary interventions that ensure a viable future.',
    highlights: ['Heritage Assessments', 'Listed Building Consent', 'Restoration & Repair', 'Adaptive Reuse'],
  },
]

export default function Services() {
  return (
    <Section id="services">
      <ScrollReveal>
        <p className="text-brand-500 text-sm font-medium uppercase tracking-widest mb-4 text-center">
          What We Offer
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
          Our Services
        </h2>
        <p className="text-white/40 text-center max-w-lg mx-auto mb-16 text-base">
          Comprehensive design services delivered with a consistent philosophy —
          from first sketch to final handover.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 0.1}>
            <GlassCard className="h-full" delay={index * 0.1}>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs text-white/40 bg-white/5 px-2.5 py-1 rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
