import { useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import { Users, Dumbbell, Calendar, Flame } from 'lucide-react'
import Section from '@/components/ui/Section'

function Counter({ value, suffix = '', label, icon }: { value: number; suffix?: string; label: string; icon: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2.5, ease: 'easeOut' })
    }
  }, [isInView, count, value])

  return (
    <motion.div
      ref={ref}
      className="text-center p-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex justify-center mb-4 text-brand-500">{icon}</div>
      <div className="text-4xl md:text-5xl font-black text-white mb-2">
        <motion.span>{rounded}</motion.span>
        <span className="text-brand-500">{suffix}</span>
      </div>
      <div className="text-white/50 text-sm uppercase tracking-widest">{label}</div>
    </motion.div>
  )
}

export default function Stats() {
  const stats = [
    { value: 5000, suffix: '+', label: 'Active Members', icon: <Users size={28} /> },
    { value: 50, suffix: '+', label: 'Elite Trainers', icon: <Dumbbell size={28} /> },
    { value: 120, suffix: '+', label: 'Weekly Classes', icon: <Calendar size={28} /> },
    { value: 2000, suffix: '+', label: 'Transformations', icon: <Flame size={28} /> },
  ]

  return (
    <Section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 via-transparent to-brand-500/5 pointer-events-none" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat) => (
          <Counter key={stat.label} {...stat} />
        ))}
      </div>
      <div className="mt-12 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
    </Section>
  )
}
