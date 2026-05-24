import { Palette, FileDigit, Printer, Sparkles, Truck } from 'lucide-react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedText from '@/components/ui/AnimatedText'

const steps = [
  {
    number: '01',
    icon: Palette,
    title: 'Design',
    desc: 'Share your artwork or brief. Our design team refines it for production with precise color separation and mockup proofs.',
  },
  {
    number: '02',
    icon: FileDigit,
    title: 'Prepare',
    desc: 'Screens are burned, digitizing is completed, and materials are prepped for the production floor.',
  },
  {
    number: '03',
    icon: Printer,
    title: 'Print',
    desc: 'Industrial-grade screen printing, DTG, or sublimation runs at scale with constant quality checks.',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Finish',
    desc: 'Curing, pressing, embroidery finishing, folding, and meticulous quality inspection on every unit.',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Ship',
    desc: 'Bulk packaging, branded tags, and global shipping with full order tracking and logistics support.',
  },
]

export default function Process() {
  return (
    <Section id="process" dark={false}>
      <div className="text-center mb-16 md:mb-20">
        <AnimatedText
          text="How We Create"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            A streamlined five-step process that takes your apparel from concept to delivery with uncompromising quality.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-px bg-gradient-to-r from-brand-500/0 via-brand-500/40 to-brand-500/0" />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={step.title} delay={i * 0.15} direction={i % 2 === 0 ? 'up' : 'down'}>
                <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:text-center">
                  <motion.div
                    className="relative flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center z-10 relative">
                      <Icon size={24} className="text-brand-400" />
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-brand-500/20"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                  </motion.div>

                  <div className="lg:mt-4">
                    <span className="text-xs font-mono text-brand-400 mb-1 block">{step.number}</span>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-[260px] lg:mx-auto">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
