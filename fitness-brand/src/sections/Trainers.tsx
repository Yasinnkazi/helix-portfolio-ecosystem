import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Music2, Award, ChevronDown } from 'lucide-react'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GlassCard from '@/components/ui/GlassCard'

interface TrainerCardProps {
  name: string
  specialty: string
  credentials: string
  delay: number
}

function TrainerCard({ name, specialty, credentials, delay }: TrainerCardProps) {
  const [revealed, setRevealed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <GlassCard className="group text-center relative overflow-hidden" hover={false}>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/0 via-brand-500/0 to-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <div className="w-28 h-28 mx-auto mb-5 rounded-full bg-gradient-to-br from-brand-500/20 to-brand-500/5 border-2 border-brand-500/20 overflow-hidden flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-ink-800" />
          </div>

          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-brand-400 font-medium text-sm mb-4">{specialty}</p>

          <div className="flex justify-center gap-3 mb-4">
            <a href="#" className="p-2 rounded-full bg-white/5 text-white/40 hover:text-brand-500 hover:bg-brand-500/10 transition-all">
              <Instagram size={16} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 text-white/40 hover:text-brand-500 hover:bg-brand-500/10 transition-all">
              <Music2 size={16} />
            </a>
          </div>

          <motion.div
            animate={{ height: revealed ? 'auto' : 0, opacity: revealed ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-white/60 text-sm">
              <Award size={14} className="text-brand-500 shrink-0" />
              <span>{credentials}</span>
            </div>
          </motion.div>

          <button
            onClick={() => setRevealed(!revealed)}
            className="mt-3 text-white/30 hover:text-white/60 transition-colors"
          >
            <motion.span
              animate={{ rotate: revealed ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              <ChevronDown size={18} />
            </motion.span>
          </button>
        </div>
      </GlassCard>
    </motion.div>
  )
}

export default function Trainers() {
  const trainers = [
    { name: 'Alex Rivera', specialty: 'Strength & Conditioning', credentials: 'CSCS, 10+ Years Coaching, Former D1 Athlete' },
    { name: 'Maya Patel', specialty: 'HIIT & Cardio', credentials: 'NASM-CPT, HIIT Specialist, 8 Years Experience' },
    { name: 'Jordan Lee', specialty: 'Yoga & Mobility', credentials: 'E-RYT 500, Mobility Coach, Certified Nutritionist' },
    { name: 'Tasha Brooks', specialty: 'Nutrition & Recovery', credentials: 'MS Nutrition, Recovery Specialist, Pro Athlete Coach' },
  ]

  return (
    <Section id="trainers">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-brand-500 text-sm font-semibold uppercase tracking-[0.2em]">Expert Guidance</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
            Elite <span className="text-brand-500">Coaches</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            World-class trainers dedicated to unlocking your full potential.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainers.map((t, i) => (
          <TrainerCard key={t.name} {...t} delay={i * 0.12} />
        ))}
      </div>
    </Section>
  )
}
