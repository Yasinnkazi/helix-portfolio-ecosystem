import ScrollReveal from '../components/ui/ScrollReveal'
import Section from '../components/ui/Section'
import { Sun, Mountain, Square, Compass } from 'lucide-react'

const principles = [
  {
    icon: <Sun size={24} />,
    title: 'Light',
    description: 'Natural light as a primary material — shaping spaces through illumination, shadow, and the rhythm of the day.',
  },
  {
    icon: <Mountain size={24} />,
    title: 'Material',
    description: 'Honest, sustainable materials chosen for their texture, patina, and enduring beauty over time.',
  },
  {
    icon: <Square size={24} />,
    title: 'Proportion',
    description: 'The golden thread of great design — harmonious relationships between scale, form, and human experience.',
  },
  {
    icon: <Compass size={24} />,
    title: 'Context',
    description: 'Every site tells a story. We design in dialogue with landscape, climate, culture, and community.',
  },
]

export default function Philosophy() {
  return (
    <Section id="philosophy">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <ScrollReveal>
          <div className="sticky top-28">
            <p className="text-brand-500 text-sm font-medium uppercase tracking-widest mb-4">
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Architecture as
              <br />
              <span className="text-white/50">an act of care.</span>
            </h2>
            <div className="space-y-6 text-white/50 text-base leading-relaxed">
              <p>
                We believe architecture is not about making a statement — it is about creating
                a sense of belonging. Every space we design begins with listening: to the land,
                to the light, to the people who will inhabit it.
              </p>
              <p>
                Our practice is rooted in the belief that the best buildings feel inevitable —
                as if they have always been part of their landscape. We pursue clarity of
                concept, rigor of detail, and a deep respect for craft.
              </p>
              <p>
                Sustainability is not an add-on; it is foundational. From material selection
                to passive design strategies, every decision is made with the long view in mind.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {principles.map((principle, index) => (
            <ScrollReveal key={principle.title} delay={index * 0.1}>
              <div className="group flex gap-6 p-6 rounded-2xl transition-colors duration-500 hover:bg-white/[0.02]">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors duration-500">
                  {principle.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{principle.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{principle.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
