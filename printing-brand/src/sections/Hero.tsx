import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Button from '@/components/ui/Button'

const stats = [
  { value: '500K+', label: 'Garments Printed' },
  { value: '98%', label: 'Satisfaction' },
  { value: '250+', label: 'Brand Partners' },
]

const floatingItems = [
  { x: '15%', y: '20%', delay: 0, duration: 6, rotate: -8 },
  { x: '75%', y: '15%', delay: 1.5, duration: 7, rotate: 5 },
  { x: '85%', y: '55%', delay: 0.8, duration: 5.5, rotate: -3 },
  { x: '10%', y: '60%', delay: 2, duration: 6.5, rotate: 10 },
]

const words = ['Premium', 'Apparel', 'Manufacturing']

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-ink-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/20 via-ink-950 to-ink-950" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: 'radial-gradient(circle, rgba(12,130,240,0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [item.rotate, item.rotate + 5, item.rotate],
          }}
          transition={{ duration: item.duration, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
        >
          <div className="w-28 h-36 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-brand-300 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            Industrial-scale apparel production
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
            {words.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed"
          >
            From concept to creation. Industrial-scale printing and embroidery for brands that demand excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="lg" href="#quote" icon={<ArrowRight size={18} />}>
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" href="#craft" icon={<Play size={18} />} iconPosition="left">
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pb-8 md:pb-12">
          <div className="grid grid-cols-3 gap-8 md:gap-16 py-6 md:py-8 border-t border-white/5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
