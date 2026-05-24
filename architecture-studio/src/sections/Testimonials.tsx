import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'
import Section from '../components/ui/Section'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Form + Space brought a level of thoughtfulness and precision that transformed our brief into something far more beautiful than we imagined. They listened deeply and delivered a home that feels like it was always meant to be.',
    client: 'Sarah & Thomas Blake',
    project: 'Casa de Luz, Algarve',
  },
  {
    quote: 'Working with this studio was a masterclass in collaboration. Their ability to balance aesthetic ambition with practical constraints made our commercial project a resounding success — on time and on budget.',
    client: 'Marcus Devereux',
    project: 'The Atrium, London',
  },
  {
    quote: 'The restoration of our Georgian townhouse required a rare blend of historical sensitivity and contemporary vision. Form + Space exceeded every expectation. The result is both period-accurate and thoroughly modern.',
    client: 'Lady Catherine Winslow',
    project: 'Chelsea Townhouse, London',
  },
  {
    quote: 'They dont just design buildings — they create experiences. Our gallery space has been transformed. Visitors consistently remark on the flow of light and the intuitive layout. Absolutely world-class.',
    client: 'Helena Krüger',
    project: 'Gallery K, Berlin',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  }

  return (
    <Section>
      <ScrollReveal>
        <p className="text-brand-500 text-sm font-medium uppercase tracking-widest mb-4 text-center">
          Client Words
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          What Our Clients Say
        </h2>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-[280px] md:min-h-[240px] flex items-center justify-center">
          <div className="absolute top-0 left-0 text-brand-500/20">
            <Quote size={60} />
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center px-4"
            >
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-white font-medium">{testimonials[current].client}</p>
                <p className="text-white/40 text-sm">{testimonials[current].project}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === current
                  ? 'w-8 h-2 bg-brand-500'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
