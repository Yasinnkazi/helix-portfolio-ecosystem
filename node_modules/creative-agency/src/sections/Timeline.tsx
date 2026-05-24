import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/ui/Section'
import ScrollReveal from '../components/ui/ScrollReveal'

const milestones = [
  {
    year: '2019',
    title: 'Founded in San Francisco',
    description:
      'Helix Digital was born from a vision to bridge the gap between strategic thinking and digital craftsmanship. Started by a team of three, we set out to redefine what a creative agency could be.',
  },
  {
    year: '2020',
    title: 'First Major Client',
    description:
      'Partnered with Nova Platform on a complete product redesign. The project garnered industry attention and set the stage for our reputation in product design.',
  },
  {
    year: '2021',
    title: 'Team Growth & Expansion',
    description:
      'Grew to a team of 15, bringing on world-class talent in design, development, and strategy. Moved to our flagship studio in the Mission District.',
  },
  {
    year: '2022',
    title: 'Industry Recognition',
    description:
      'Received multiple design awards including Awwwards Site of the Day and CSS Design Awards. Featured in leading design publications worldwide.',
  },
  {
    year: '2023',
    title: 'Global Reach',
    description:
      'Expanded our client base internationally, working with brands across North America, Europe, and Asia. Launched our dedicated motion design division.',
  },
  {
    year: '2024',
    title: 'Innovation Lab',
    description:
      'Established our R&D lab exploring AI-assisted design workflows, WebGL experiences, and the future of human-computer interaction.',
  },
]

export default function Timeline() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const total =
        sectionRef.current.scrollHeight + rect.top - window.innerHeight
      const progress = Math.min(Math.max((-rect.top / total) * 100, 0), 100)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Section id="studio">
      <div ref={sectionRef}>
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <p className="text-brand-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            Timeline
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px">
          <motion.div
            className="w-full bg-gradient-to-b from-brand-500 via-purple-500 to-brand-400"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {milestones.map((milestone, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 pb-16 last:pb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <span className="text-sm font-display font-bold text-brand-400">
                  {milestone.year}
                </span>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-white mt-2 mb-3">
                  {milestone.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              <div className="flex-shrink-0 relative z-10">
                <motion.div
                  className="w-[62px] h-[62px] rounded-full bg-ink-900 border-2 border-white/10 flex items-center justify-center"
                  whileHover={{
                    borderColor: 'rgba(124,66,255,0.6)',
                    scale: 1.05,
                  }}
                >
                  <span className="text-lg font-display font-bold text-brand-400">
                    {milestone.year.slice(2)}
                  </span>
                </motion.div>
              </div>

              <div className="flex-1 hidden md:block" />
            </div>
          </ScrollReveal>
        ))}
      </div>
      </div>
    </Section>
  )
}
