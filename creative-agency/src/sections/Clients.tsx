import { motion } from 'framer-motion'
import Section from '../components/ui/Section'
import ScrollReveal from '../components/ui/ScrollReveal'

const clients = [
  'Nova Platform',
  'Aether Finance',
  'Verdant Labs',
  'Lumina Health',
  'Titan Robotics',
  'Atlas Creative',
  'Pulse Media',
  'Cascade Digital',
  'Ember Studio',
  'Drift Commerce',
  'Prism Analytics',
  'Void Interactive',
]

export default function Clients() {
  const duplicated = [...clients, ...clients]

  return (
    <Section id="clients" className="bg-ink-950">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-brand-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Trusted By
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Clients
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-ink-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ink-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 md:gap-24 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicated.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 py-4 rounded-xl border border-white/5 bg-white/[0.02] min-w-[160px]"
            >
              <span className="text-lg font-display font-medium text-white/20 whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
