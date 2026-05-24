import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import { ChevronRight, MapPin } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Casa de Luz',
    location: 'Algarve, Portugal',
    category: 'Residential',
    year: '2024',
    description: 'A hillside retreat that merges indoor and outdoor living through layered terraces and natural stone.',
    gradient: 'from-amber-900/40 via-stone-800/30 to-ink-950',
  },
  {
    id: 2,
    name: 'The Atrium',
    location: 'London, UK',
    category: 'Commercial',
    year: '2023',
    description: 'A workplace designed around a central light-filled courtyard, promoting collaboration and wellbeing.',
    gradient: 'from-blue-900/40 via-slate-800/30 to-ink-950',
  },
  {
    id: 3,
    name: 'Stone & Water House',
    location: 'Cornwall, UK',
    category: 'Residential',
    year: '2024',
    description: 'A coastal dwelling defined by raw textures, exposed concrete, and uninterrupted sea views.',
    gradient: 'from-teal-900/40 via-stone-800/30 to-ink-950',
  },
  {
    id: 4,
    name: 'Gallery K',
    location: 'Berlin, Germany',
    category: 'Interior',
    year: '2023',
    description: 'Minimalist gallery spaces with adaptive lighting systems and fluid circulation.',
    gradient: 'from-violet-900/40 via-slate-800/30 to-ink-950',
  },
  {
    id: 5,
    name: 'Harbour Offices',
    location: 'Rotterdam, Netherlands',
    category: 'Commercial',
    year: '2025',
    description: 'A timber-framed office block redefining sustainable workplace design in a former docklands.',
    gradient: 'from-emerald-900/40 via-stone-800/30 to-ink-950',
  },
  {
    id: 6,
    name: 'Penthouse M',
    location: 'Milan, Italy',
    category: 'Interior',
    year: '2024',
    description: 'An urban penthouse with bespoke joinery, warm materials, and panoramic city vistas.',
    gradient: 'from-rose-900/40 via-slate-800/30 to-ink-950',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const getGridClass = (index: number) => {
    const patterns = [
      'md:col-span-2 md:row-span-2',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-2',
      'md:col-span-1 md:row-span-1',
      'md:col-span-2 md:row-span-1',
      'md:col-span-1 md:row-span-1',
    ]
    return patterns[index] || 'md:col-span-1 md:row-span-1'
  }

  return (
    <Section id="projects">
      <ScrollReveal>
        <p className="text-brand-500 text-sm font-medium uppercase tracking-widest mb-4 text-center">
          Our Work
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
          Selected Works
        </h2>
        <p className="text-white/40 text-center max-w-md mx-auto mb-16 text-base">
          A carefully curated selection of projects that represent our finest work.
        </p>
      </ScrollReveal>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[280px]"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl ${getGridClass(index)}`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-all duration-700`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent opacity-80" />
            </div>

            <div className="absolute top-4 left-4 z-10">
              <span className="text-xs font-medium text-white/60 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {project.category}
              </span>
            </div>

            <AnimatePresence>
              {hoveredId === project.id ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-ink-950/95 via-ink-950/60 to-transparent"
                >
                  <p className="text-white/60 text-sm mb-2">
                    {project.year}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <span className="text-brand-400 text-sm font-medium inline-flex items-center gap-1">
                    View Project <ChevronRight size={14} />
                  </span>
                </motion.div>
              ) : (
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/50 text-sm">
                    <MapPin size={12} />
                    {project.location}
                  </div>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      <ScrollReveal className="text-center mt-12">
        <Button variant="outline" icon={<ChevronRight size={16} />}>
          View All Projects
        </Button>
      </ScrollReveal>
    </Section>
  )
}
