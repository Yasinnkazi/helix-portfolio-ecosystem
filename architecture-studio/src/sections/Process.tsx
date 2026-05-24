import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'
import Section from '../components/ui/Section'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We begin by listening. Understanding your vision, site constraints, budget, and aspirations. Research into context, climate, and local materials informs the foundation of every project.',
  },
  {
    number: '02',
    title: 'Concept',
    description:
      'Ideas take form through sketches, models, and iterative design studies. We explore multiple directions before converging on the concept that best serves the project\'s unique narrative.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'The chosen concept is developed into detailed architectural drawings, specifications, and 3D models. Materials are selected, systems are engineered, and every detail is resolved.',
  },
  {
    number: '04',
    title: 'Construction',
    description:
      'We work alongside contractors through the build phase, providing site supervision, answering queries, and ensuring the design intent is realized to the highest standard.',
  },
  {
    number: '05',
    title: 'Handover',
    description:
      'A seamless transition from construction to occupation. We oversee snagging, commissioning, and provide comprehensive documentation to ensure your space performs as designed.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <Section>
      <ScrollReveal>
        <p className="text-brand-500 text-sm font-medium uppercase tracking-widest mb-4 text-center">
          How We Work
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
          Our Process
        </h2>
        <p className="text-white/40 text-center max-w-md mx-auto mb-16 md:mb-20 text-base">
          A proven methodology refined over two decades and hundreds of projects.
        </p>
      </ScrollReveal>

      <div ref={ref} className="relative max-w-3xl mx-auto">
        <div className="absolute left-[23px] md:left-8 top-0 bottom-0 w-px bg-white/10">
          <motion.div
            className="w-full bg-brand-500/60"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-16 md:space-y-20">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.1} direction="left" distance={40}>
              <div className="relative pl-14 md:pl-20">
                <div className="absolute left-[10px] md:left-[17px] top-1 w-[28px] h-[28px] md:w-9 md:h-9 rounded-full bg-ink-900 border-2 border-white/10 flex items-center justify-center">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-brand-500" />
                </div>

                <div>
                  <span className="text-brand-500/60 text-xs font-mono font-medium mb-1 block">
                    Step {step.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/45 leading-relaxed max-w-xl">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
