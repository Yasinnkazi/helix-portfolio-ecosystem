import { Users, DollarSign, PartyPopper, ArrowRight } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import ScrollReveal from '../components/ui/ScrollReveal'

const packages = [
  {
    title: 'Intimate Dinner',
    capacity: '2–12 guests',
    price: '$150–$250 per person',
    features: [
      'Private dining room',
      'Customized tasting menu',
      'Wine pairing consultation',
      'Personal sommelier',
      'Dedicated service team',
    ],
    icon: Users,
  },
  {
    title: 'Corporate Event',
    capacity: '12–40 guests',
    price: '$200–$350 per person',
    features: [
      'Semi-private or full buyout',
      'Business lunch or dinner',
      'AV equipment provided',
      'Customizable menu & bar',
      'Event coordination included',
    ],
    icon: PartyPopper,
  },
  {
    title: 'Celebration',
    capacity: '6–30 guests',
    price: '$180–$300 per person',
    features: [
      'Anniversary, birthday, or engagement',
      'Champagne toast on arrival',
      'Custom cake & dessert selection',
      'Floral arrangements included',
      'Private lounge access',
    ],
    icon: DollarSign,
  },
]

export default function Events() {
  return (
    <section id="events" className="py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-24 bg-ink-900">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <p className="text-brand-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-center font-medium">
            Private Dining
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white text-center mb-4">
            Celebrate with{' '}
            <span className="bg-gradient-to-r from-brand-300 to-amber-200 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-white/50 text-center max-w-3xl mx-auto mb-16 text-lg">
            Whether an intimate gathering or a grand celebration, our private dining spaces
            provide an unforgettable backdrop for your most memorable moments. Our events team
            works closely with you to craft a bespoke experience.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon
            return (
              <GlassCard key={pkg.title} delay={i * 0.1} className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{pkg.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Users size={14} />
                    <span>{pkg.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <DollarSign size={14} />
                    <span>{pkg.price}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500/60 mt-1.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )
          })}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center bg-gradient-to-r from-brand-500/10 via-amber-500/5 to-transparent border border-white/5 rounded-3xl p-10 md:p-14">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Ready to Plan Your Event?
            </h3>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">
              Our events team will respond within 24 hours to begin crafting your bespoke
              dining experience.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40"
            >
              Inquire About Events
              <ArrowRight size={18} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
