import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Section from '../components/ui/Section'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'

const projects = [
  {
    title: 'Nova Platform',
    category: 'Product Design',
    description:
      'A next-gen design platform reimagining how creative teams collaborate in real-time with AI-powered workflows.',
    gradient: 'from-violet-600 to-indigo-600',
    accent: 'border-violet-500/30',
    metrics: '3x productivity increase',
  },
  {
    title: 'Aether Finance',
    category: 'Brand & Web',
    description:
      'Complete brand transformation and web experience for a fintech startup, combining trust with innovation.',
    gradient: 'from-brand-600 to-purple-600',
    accent: 'border-brand-500/30',
    metrics: '92% user satisfaction',
  },
  {
    title: 'Verdant Labs',
    category: 'UI/UX & Motion',
    description:
      'Immersive brand experience with cutting-edge motion design and interactive storytelling for a sustainability brand.',
    gradient: 'from-indigo-600 to-blue-600',
    accent: 'border-indigo-500/30',
    metrics: '2.5x engagement boost',
  },
]

export default function Showcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <Section id="work" className="bg-ink-950">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <p className="text-brand-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              Projects
            </h2>
          </div>
          <Button variant="secondary" icon={<ArrowRight size={16} />}>
            View All Projects
          </Button>
        </div>
      </ScrollReveal>

      <div className="space-y-8 md:space-y-12">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 0.15}>
            <motion.div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-3xl bg-ink-900/50 border border-white/5 cursor-pointer"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <p className="text-brand-400 text-sm font-medium uppercase tracking-wider mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed mb-6 max-w-md">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-white/30">—</span>
                    <span className="text-sm text-brand-400 font-medium">
                      {project.metrics}
                    </span>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-sm text-white/60 group-hover:text-white transition-colors duration-300">
                      View Project <ExternalLink size={14} />
                    </span>
                  </div>
                </div>

                <div className="relative min-h-[250px] md:min-h-[400px] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-[2px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl border ${project.accent} bg-white/5 flex items-center justify-center mx-auto mb-4`}
                      >
                        <span className="text-3xl md:text-4xl font-display font-bold text-white/30">
                          {project.title[0]}
                        </span>
                      </div>
                      <p className="text-white/20 text-sm font-display">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={
                      hoveredIndex === index
                        ? { opacity: 1 }
                        : { opacity: 0 }
                    }
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-t from-brand-500/10 to-transparent pointer-events-none"
                  />
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
