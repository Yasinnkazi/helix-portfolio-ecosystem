import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/ui/Section'
import ScrollReveal from '../components/ui/ScrollReveal'
import { useMediaQuery } from '../hooks/useMediaQuery'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We immerse ourselves in your brand, market, and audience. Through deep research and collaborative workshops, we uncover insights that inform every decision.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Translating strategy into stunning visual experiences. Our design phase explores multiple directions, refining until every pixel serves a purpose.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'With precision engineering, we bring designs to life. Clean code, optimized performance, and meticulous attention to detail define our development process.',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'Launch is just the beginning. We optimize, iterate, and evolve your digital presence to ensure lasting impact and continuous growth.',
  },
]

export default function Process() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const total = rect.height + rect.top - window.innerHeight
      const progress = Math.min(Math.max((-rect.top / total) * 100, 0), 100)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Section id="process">
      <div ref={sectionRef}>
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <p className="text-brand-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Our Approach
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            Process
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative max-w-4xl mx-auto">
        {isDesktop ? (
          <div className="relative">
            <div className="absolute left-0 right-0 top-12 h-px bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-500 to-purple-500"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <div className="text-center">
                    <motion.div
                      className="w-24 h-24 rounded-full bg-ink-900 border border-white/10 flex items-center justify-center mx-auto mb-6 relative z-10"
                      whileHover={{ scale: 1.05, borderColor: 'rgba(124,66,255,0.5)' }}
                    >
                      <span className="text-2xl font-display font-bold text-brand-400">
                        {step.number}
                      </span>
                    </motion.div>
                    <h3 className="text-xl font-display font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative pl-12">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10">
              <motion.div
                className="w-full bg-gradient-to-b from-brand-500 to-purple-500"
                style={{ height: `${scrollProgress}%` }}
              />
            </div>

            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="relative pb-16 last:pb-0">
                  <motion.div
                    className="absolute left-5 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-ink-900 border border-white/10 flex items-center justify-center z-10"
                    whileHover={{ borderColor: 'rgba(124,66,255,0.5)' }}
                  >
                    <span className="text-sm font-display font-bold text-brand-400">
                      {step.number}
                    </span>
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-xl font-display font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
      </div>
    </Section>
  )
}
