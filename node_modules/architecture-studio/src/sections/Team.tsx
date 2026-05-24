import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'
import Section from '../components/ui/Section'

const team = [
  {
    name: 'Elena Voss',
    role: 'Founding Partner',
    bio: 'With over 25 years of experience across Europe and Asia, Elena leads the studio\'s vision. Her work has been published in Wallpaper*, Dezeen, and Architectural Digest.',
    gradient: 'from-amber-700/40 via-stone-700/20 to-ink-950',
  },
  {
    name: 'James Calder',
    role: 'Partner, Technical Director',
    bio: 'James brings 20 years of expertise in complex structural design and sustainable construction methodologies, overseeing all technical aspects of the studio\'s output.',
    gradient: 'from-blue-700/40 via-slate-700/20 to-ink-950',
  },
  {
    name: 'Sofia Rivera',
    role: 'Senior Architect',
    bio: 'Sofia\'s work focuses on residential and cultural projects. She is passionate about material research and the intersection of traditional craft with modern fabrication.',
    gradient: 'from-emerald-700/40 via-stone-700/20 to-ink-950',
  },
  {
    name: 'Marcus Chen',
    role: 'Design Lead, Interiors',
    bio: 'Marcus leads the interior design practice, creating layered, tactile spaces that balance aesthetic refinement with human comfort and functionality.',
    gradient: 'from-violet-700/40 via-slate-700/20 to-ink-950',
  },
  {
    name: 'Aria Patel',
    role: 'Urban Designer',
    bio: 'Aria specialises in master planning and public realm design, bringing a deep understanding of how buildings shape communities and urban ecosystems.',
    gradient: 'from-rose-700/40 via-stone-700/20 to-ink-950',
  },
]

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <Section id="studio">
      <ScrollReveal>
        <p className="text-brand-500 text-sm font-medium uppercase tracking-widest mb-4 text-center">
          Our Studio
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
          The People
          <br />
          <span className="text-white/50">Behind the Work</span>
        </h2>
        <p className="text-white/40 text-center max-w-lg mx-auto mb-16 text-base">
          A collaborative team of architects, designers, and thinkers united by a shared
          commitment to design excellence.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {team.map((member, index) => (
          <ScrollReveal key={member.name} delay={index * 0.08}>
            <motion.div
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-ink-800 to-ink-900 border border-white/5">
                <div
                  className={`w-full h-full bg-gradient-to-br ${member.gradient} transition-all duration-700 group-hover:scale-105`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3 className="text-sm md:text-base font-semibold text-white mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-xs text-white/50">{member.role}</p>
                </div>
              </div>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -bottom-2 left-0 right-0 z-20 p-4 rounded-xl bg-ink-900 border border-white/10 shadow-xl"
                  >
                    <p className="text-xs text-white/60 leading-relaxed">{member.bio}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
