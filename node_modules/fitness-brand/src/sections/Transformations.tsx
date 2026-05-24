import { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

interface TransformationCardProps {
  name: string
  quote: string
  achievement: string
  delay: number
}

function TransformationCard({ name, quote, achievement, delay }: TransformationCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      className="relative h-[400px] perspective-1000"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ink-800 to-ink-900">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 bg-gradient-to-br from-brand-500/10 to-transparent" />
              <div className="w-1/2 bg-gradient-to-bl from-brand-500/5 to-transparent" />
            </div>
          </div>
          <div className="relative h-full p-6 flex flex-col justify-between">
            <div className="flex gap-2">
              <span className="px-3 py-1 text-xs font-semibold text-brand-500 bg-brand-500/10 rounded-full border border-brand-500/20">
                Before
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-white/70 bg-white/5 rounded-full border border-white/10">
                After
              </span>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-white/10 mb-2">B/A</div>
              <div className="h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden bg-gradient-to-br from-brand-600 to-brand-800 p-6 flex flex-col justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <Quote className="text-white/30 mb-4" size={32} />
          <p className="text-white/90 text-lg leading-relaxed mb-6 italic">{quote}</p>
          <div>
            <h4 className="text-white font-bold text-xl">{name}</h4>
            <p className="text-white/60 text-sm mt-1">{achievement}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Transformations() {
  const transformations = [
    {
      name: 'Marcus Johnson',
      quote: 'I lost 45 pounds in 6 months. Apex changed my life — the trainers pushed me beyond what I thought was possible.',
      achievement: '-45 lbs | 6 Months',
    },
    {
      name: 'Sarah Chen',
      quote: 'After my second child, I thought I would never get my strength back. The women\'s strength program rebuilt me from the ground up.',
      achievement: 'Strength Rebuilt | 8 Months',
    },
    {
      name: 'Derek Williams',
      quote: 'From never stepping foot in a gym to completing my first Spartan race. The community at Apex is unlike anything I have experienced.',
      achievement: 'First Race | 10 Months',
    },
  ]

  return (
    <Section id="results" dark>
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-brand-500 text-sm font-semibold uppercase tracking-[0.2em]">Real People, Real Change</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
            Real <span className="text-brand-500">Results</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            Every transformation is unique. Here are just a few of the thousands of success stories.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
        {transformations.map((t, i) => (
          <TransformationCard key={t.name} {...t} delay={i * 0.15} />
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="text-center">
          <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
            Start Your Transformation
          </Button>
        </div>
      </ScrollReveal>
    </Section>
  )
}
