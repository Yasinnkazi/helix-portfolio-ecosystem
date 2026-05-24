import { motion } from 'framer-motion'
import { Smartphone, Dumbbell, Calendar, BarChart3, Apple, PlaySquare } from 'lucide-react'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'

const appFeatures = [
  { icon: <Dumbbell size={20} />, label: 'Track Workouts' },
  { icon: <Calendar size={20} />, label: 'Book Classes' },
  { icon: <BarChart3 size={20} />, label: 'Monitor Progress' },
  { icon: <Apple size={20} />, label: 'Nutrition Tracking' },
]

function PhoneMockup() {
  return (
    <motion.div
      className="relative mx-auto w-[280px] h-[560px] rounded-[3rem] border-4 border-white/10 bg-ink-900 shadow-2xl shadow-brand-500/10 overflow-hidden"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-ink-950 rounded-b-xl z-10" />
      <div className="h-full p-6 pt-10">
        <div className="text-center mb-6">
          <div className="text-brand-500 text-lg font-black tracking-tight">APEX</div>
          <div className="text-white/30 text-xs mt-1">Elite Fitness</div>
        </div>
        <div className="space-y-3">
          {[
            { label: 'Today\'s Workout', sub: 'Upper Body Push', color: 'brand' },
            { label: 'Next Class', sub: 'HIIT - 5:00 PM', color: 'white' },
            { label: 'Weekly Streak', sub: '5 days 🔥', color: 'brand' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`p-4 rounded-2xl ${item.color === 'brand' ? 'bg-brand-500/10 border border-brand-500/20' : 'bg-white/5 border border-white/10'}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
            >
              <div className="text-xs text-white/40">{item.label}</div>
              <div className="text-sm font-semibold text-white mt-0.5">{item.sub}</div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-brand-600/20 to-brand-800/20 border border-brand-500/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-white/40">Calories</span>
            <span className="text-xs text-brand-400">+12%</span>
          </div>
          <div className="flex items-end gap-1 h-16">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-sm bg-brand-500/40"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.08 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function AppSection() {
  return (
    <Section id="app" dark>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <ScrollReveal>
            <span className="text-brand-500 text-sm font-semibold uppercase tracking-[0.2em]">Mobile App</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
              Your Journey, <br />
              <span className="text-brand-500">On Your Terms</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/50 text-lg mt-4 max-w-lg leading-relaxed">
              Track every rep, book classes instantly, and monitor your progress — all from the palm of your hand.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {appFeatures.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-brand-500 shrink-0">{feature.icon}</span>
                  <span className="text-white/80 text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-ink-950 rounded-xl hover:bg-white/90 transition-all font-semibold">
                <Apple size={24} />
                <div className="text-left">
                  <div className="text-xs opacity-60">Download on the</div>
                  <div className="text-sm">App Store</div>
                </div>
              </button>
              <button className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all font-semibold border border-white/10">
                <PlaySquare size={24} />
                <div className="text-left">
                  <div className="text-xs text-white/60">Get it on</div>
                  <div className="text-sm">Google Play</div>
                </div>
              </button>
            </div>
          </ScrollReveal>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </Section>
  )
}
