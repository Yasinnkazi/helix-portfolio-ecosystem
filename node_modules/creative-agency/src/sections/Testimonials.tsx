import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'
import Section from '../components/ui/Section'
import ScrollReveal from '../components/ui/ScrollReveal'
import GlassCard from '../components/ui/GlassCard'

const testimonials = [
  {
    quote:
      'Helix Digital transformed our digital presence completely. Their strategic approach and design excellence exceeded every expectation. The results speak for themselves.',
    client: 'Sarah Chen',
    position: 'CEO',
    company: 'Nova Platform',
    initial: 'S',
  },
  {
    quote:
      'Working with Helix was a masterclass in digital craftsmanship. Their attention to detail and user-centered approach set a new standard for what we thought was possible.',
    client: 'Marcus Rivera',
    position: 'Head of Product',
    company: 'Aether Finance',
    initial: 'M',
  },
  {
    quote:
      'The team at Helix brought an incredible blend of creativity and technical rigor to our project. They didn\'t just build a product—they built an experience our users love.',
    client: 'Emily Watson',
    position: 'Creative Director',
    company: 'Verdant Labs',
    initial: 'E',
  },
  {
    quote:
      'From strategy to execution, Helix Digital demonstrated why they\'re one of the best in the business. Our engagement metrics improved dramatically across the board.',
    client: 'James Park',
    position: 'VP Design',
    company: 'Lumina Health',
    initial: 'J',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Section id="testimonials">
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <p className="text-brand-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Client Voices
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            Testimonials
          </h2>
        </div>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-[320px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0"
            >
              <GlassCard
                hover={false}
                className="text-center h-full flex flex-col items-center justify-center"
              >
                <Quote
                  size={40}
                  className="text-brand-500/30 mb-6 flex-shrink-0"
                />
                <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
                    <span className="text-sm font-display font-bold text-brand-400">
                      {testimonials[current].initial}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-medium">
                      {testimonials[current].client}
                    </p>
                    <p className="text-sm text-white/40">
                      {testimonials[current].position},{' '}
                      {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === current
                  ? 'w-8 bg-brand-500'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
