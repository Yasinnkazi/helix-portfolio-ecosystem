import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const classTypes: Record<string, { label: string; color: string }> = {
  HIIT: { label: 'HIIT', color: 'bg-brand-500/20 text-brand-400 border-brand-500/30' },
  Yoga: { label: 'Yoga', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  Strength: { label: 'Strength', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  Boxing: { label: 'Boxing', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  Pilates: { label: 'Pilates', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  Spin: { label: 'Spin', color: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
}

const schedule: Record<string, { time: string; type: string }[]> = {
  Monday: [
    { time: '06:00', type: 'HIIT' },
    { time: '07:30', type: 'Yoga' },
    { time: '09:00', type: 'Strength' },
    { time: '12:00', type: 'Pilates' },
    { time: '17:00', type: 'Boxing' },
    { time: '18:30', type: 'Spin' },
  ],
  Tuesday: [
    { time: '06:00', type: 'Strength' },
    { time: '08:00', type: 'HIIT' },
    { time: '10:00', type: 'Yoga' },
    { time: '12:00', type: 'Spin' },
    { time: '17:00', type: 'Pilates' },
    { time: '19:00', type: 'Boxing' },
  ],
  Wednesday: [
    { time: '06:00', type: 'HIIT' },
    { time: '07:30', type: 'Yoga' },
    { time: '09:00', type: 'Strength' },
    { time: '12:00', type: 'Boxing' },
    { time: '17:00', type: 'Spin' },
    { time: '18:30', type: 'Pilates' },
  ],
  Thursday: [
    { time: '06:00', type: 'Spin' },
    { time: '08:00', type: 'Strength' },
    { time: '10:00', type: 'Yoga' },
    { time: '12:00', type: 'HIIT' },
    { time: '17:00', type: 'Pilates' },
    { time: '18:30', type: 'Boxing' },
  ],
  Friday: [
    { time: '06:00', type: 'HIIT' },
    { time: '07:30', type: 'Pilates' },
    { time: '09:00', type: 'Strength' },
    { time: '12:00', type: 'Yoga' },
    { time: '17:00', type: 'Boxing' },
    { time: '18:30', type: 'Spin' },
  ],
  Saturday: [
    { time: '08:00', type: 'HIIT' },
    { time: '09:30', type: 'Yoga' },
    { time: '11:00', type: 'Strength' },
    { time: '12:30', type: 'Spin' },
  ],
  Sunday: [
    { time: '09:00', type: 'Yoga' },
    { time: '10:30', type: 'Pilates' },
    { time: '12:00', type: 'Strength' },
  ],
}

export default function Schedule() {
  return (
    <Section id="schedule">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-brand-500 text-sm font-semibold uppercase tracking-[0.2em]">Class Schedule</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
            Weekly <span className="text-brand-500">Schedule</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            120+ classes every week. There is always time to train.
          </p>
        </div>
      </ScrollReveal>

      <div className="overflow-x-auto pb-4 -mx-6 md:-mx-12 lg:-mx-24">
        <div className="flex gap-4 px-6 md:px-12 lg:px-24 min-w-max">
          {days.map((day, dayIdx) => (
            <motion.div
              key={day}
              className="w-64 shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: dayIdx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                <div className="px-5 py-4 border-b border-white/10">
                  <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider">{day}</h3>
                </div>
                <div className="p-4 space-y-3">
                  {schedule[day]?.map((cls, i) => {
                    const typeInfo = classTypes[cls.type]
                    return (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center gap-1.5 text-white/40 text-xs shrink-0">
                          <Clock size={12} />
                          <span>{cls.time}</span>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold border ${typeInfo.color}`}>
                          {typeInfo.label}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ScrollReveal delay={0.5}>
        <div className="text-center mt-12">
          <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
            Book a Class
          </Button>
        </div>
      </ScrollReveal>
    </Section>
  )
}
