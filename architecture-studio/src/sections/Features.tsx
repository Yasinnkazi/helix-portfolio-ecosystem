import ScrollReveal from '../components/ui/ScrollReveal'
import Section from '../components/ui/Section'
import { ScrollText, Mountain, Sun, Wind, Waves, KanbanSquare } from 'lucide-react'

const features = [
  {
    icon: <Sun size={20} />,
    label: 'Passive Solar Design',
    description: 'Optimised orientation and thermal mass for natural climate control.',
  },
  {
    icon: <Wind size={20} />,
    label: 'Natural Ventilation',
    description: 'Cross-ventilation strategy eliminates mechanical cooling for most of the year.',
  },
  {
    icon: <Waves size={20} />,
    label: 'Rainwater Harvesting',
    description: 'Integrated collection system supplying irrigation and greywater needs.',
  },
  {
    icon: <Mountain size={20} />,
    label: 'Local Stone Facade',
    description: 'Quarried within 50 miles, reducing embodied carbon and grounding the design.',
  },
  {
    icon: <KanbanSquare size={20} />,
    label: 'Modular Timber Structure',
    description: 'Cross-laminated timber frame for warmth, sustainability, and speed of construction.',
  },
  {
    icon: <ScrollText size={20} />,
    label: 'BREEAM Outstanding',
    description: 'Targeting the highest sustainability accreditation for building performance.',
  },
]

export default function Features() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-500/20 via-stone-800/20 to-ink-900 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-white/40 text-xs font-medium uppercase tracking-wider mb-1">
                  <span className="w-8 h-px bg-brand-500/50" />
                  Featured Project
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-1/2 aspect-square rounded-2xl bg-gradient-to-br from-brand-500/10 to-stone-800/10 -z-10" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <p className="text-brand-500 text-sm font-medium uppercase tracking-widest mb-4">
            Featured Project
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            Casa de Luz
          </h2>
          <div className="flex flex-wrap gap-4 text-sm text-white/40 mb-6">
            <span>Architect: Form + Space Studio</span>
            <span className="w-px h-4 bg-white/10" />
            <span>Year: 2024</span>
            <span className="w-px h-4 bg-white/10" />
            <span>Location: Algarve, Portugal</span>
          </div>
          <p className="text-white/50 leading-relaxed mb-8">
            Perched on a sun-drenched hillside overlooking the Atlantic, Casa de Luz is
            a study in deliberate simplicity. The design strips away the non-essential,
            leaving a sequence of pure volumes arranged around a central courtyard. Floor-to-ceiling
            glass blurs the boundary between inside and out, while deep overhangs provide
            shelter from the Mediterranean sun. Local stone, lime plaster, and natural
            oak create a palette that feels both ancient and utterly contemporary.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white/80 mb-0.5">{feature.label}</h4>
                  <p className="text-xs text-white/40 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
